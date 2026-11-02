import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createServer} from 'vite';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
const root=path.resolve(import.meta.dirname,'..');
const templates=JSON.parse(fs.readFileSync(path.join(root,'src/website-library/templates.json')));
const categories=JSON.parse(fs.readFileSync(path.join(root,'src/website-library/categories.json')));
assert.equal(templates.length,300);assert.equal(categories.length,20);
for(const field of ['id','name','title'])assert.equal(new Set(templates.map(t=>t[field])).size,300,field+' must be unique');
assert.equal(new Set(templates.map(t=>JSON.stringify(t.recipe))).size,300,'Every composition must have a distinct recipe');
assert.equal(new Set(templates.map(t=>t.recipe.hero)).size,30);
for(const c of categories)assert.equal(templates.filter(t=>t.category===c.id).length,15,c.id);
const server=await createServer({root,optimizeDeps:{noDiscovery:true,include:[]},server:{middlewareMode:true},appType:'custom'});
try{
 const {default:Demo}=await server.ssrLoadModule('/src/website-library/WebsiteDemo.jsx');
 const outputs=new Set();
 for(const t of templates){
  for(const image of t.images)assert.ok(fs.statSync(path.join(root,'public',image)).size>2000,image);
  const html=renderToStaticMarkup(React.createElement(Demo,{t}));
  assert.equal((html.match(/<h1\b/g)||[]).length,1,t.id+' H1');
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,t.id+' duplicate IDs');
  for(const id of ['wd-top','wd-story','wd-offers','wd-feature','wd-process','wd-gallery','wd-faq','wd-contact'])assert.ok(ids.includes(id),t.id+' missing section '+id);
  assert.ok(html.includes('#/websites/request/'+t.id),t.id+' selection link');
  assert.ok(!/undefined|\[object Object\]|Lorem ipsum/.test(html),t.id+' placeholders');
  outputs.add(html);
 }
 assert.equal(outputs.size,300);
 const mini=renderToStaticMarkup(React.createElement(Demo,{t:templates[0],mini:true}));assert.ok(!mini.includes('<h1'));assert.ok(!mini.includes('id="wd-top"'));
}finally{await server.close()}
console.log('PASS: 300 website demos; 20 industries × 15; 300 unique composition recipes; 30 hero structures; 8 sections each; image assets and select links valid.');
