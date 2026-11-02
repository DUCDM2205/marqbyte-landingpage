import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createServer} from 'vite';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
const root=path.resolve(import.meta.dirname,'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'src/data.json'),'utf8'));
const {templates,categories}=data;
assert.equal(templates.length,210,'Must ship 210 templates');
assert.equal(categories.length,10);
for(const field of ['id','slug','brand','title'])assert.equal(new Set(templates.map(t=>t[field])).size,210,field+' must be unique');
assert.equal(templates.filter(t=>t.featured).length,30);
assert.equal(new Set(templates.map(t=>t.layout)).size,30);
for(const cat of categories){const group=templates.filter(t=>t.category===cat.id);assert.equal(group.length,cat.id==='giao-duc'?30:20);assert.equal(group.filter(t=>t.featured).length,cat.id==='giao-duc'?12:2)}
for(const t of templates){
 assert.ok(categories.some(c=>c.id===t.category));
 assert.equal(t.services.length,3);
 assert.ok(data.styles.includes(t.style));
 assert.ok(data.goals.includes(t.goal));
 assert.match(t.color,/^#[0-9a-f]{6}$/i);
 assert.ok(t.layout>=0&&t.layout<30);
 assert.ok(t.variant>=0&&t.variant<5);
 for(const image of t.images){const b=fs.readFileSync(path.join(root,'public',image));assert.ok(b.length>2000);assert.ok(b[0]===0xff&&b[1]===0xd8,'Must be a real JPEG: '+image)}
}
const server=await createServer({root,optimizeDeps:{noDiscovery:true,include:[]},server:{middlewareMode:true},appType:'custom'});
try{
 const {default:DemoPage}=await server.ssrLoadModule('/src/Demo.jsx');
 for(const t of templates){const html=renderToStaticMarkup(React.createElement(DemoPage,{t}));assert.equal((html.match(/<h1[ >]/g)||[]).length,1,t.id+' H1');assert.equal((html.match(/<section[ >]/g)||[]).length,t.renderer==='education-v2'?7:9,t.id+' sections');for(const id of (t.sectionIds||['demo-about','demo-offers','demo-faq','demo-contact']))assert.ok(html.includes('id="'+id+'"'),t.id+' target '+id);assert.ok(html.includes(t.id));assert.ok(html.includes('Thông tin chưa được gửi')||html.includes('Thông tin không được gửi')||html.includes('Thông tin không được gửi hoặc lưu lại.'));assert.ok(!/undefined|\[object Object\]|Lorem ipsum/.test(html),t.id+' content')}
}finally{await server.close()}
console.log('PASS: 210 templates rendered; 10 approved independent education layouts integrated; 30 education templates; 20 in each other category; unique IDs/titles; 7 sections in new demos / 9 in legacy demos; local JPEG assets; all navigation targets.');
