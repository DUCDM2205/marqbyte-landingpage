import React,{useEffect,useRef,useState} from 'react';
import './website-demo.css';
export const websiteHref=(path='')=>'#/websites'+(path?'/'+path:'');
function Picture({t,n=0,className='',...props}){return <img src={t.images[n%t.images.length]} alt={`Minh họa ${t.niche.toLowerCase()}`} className={className} width="1200" height="800" loading="lazy" decoding="async" {...props}/>}
function Mark({t}){return <span className="wd-mark" aria-hidden="true">{t.name.slice(0,1)}<sup>↗</sup></span>}
function Copy({t,compact=false,preview=false}){const Heading=preview?'div':'h1';return <div className="wd-copy"><span className="wd-kicker">{t.industry} / {t.focus}</span><Heading className={preview?'wd-mini-heading':undefined}>{t.title}</Heading>{!compact&&<p>{t.description}</p>}<a className="wd-button" href="#wd-offers">{t.cta} <span>↗</span></a></div>}
function Caption({t}){return <div className="wd-caption"><span>{t.niche}</span><span>Khám phá theo nhịp của bạn ↗</span></div>}
function Stamp({t}){return <div className="wd-stamp" aria-hidden="true">{t.id}<br/><span>COLLECTION<br/>MARQBYTE</span></div>}
function Mosaic({t}){return <div className="wd-mosaic"><Picture t={t}/><Picture t={t} n={1}/><span>{t.tagline}</span><Picture t={t} n={2}/></div>}
function Stats({t}){return <div className="wd-values">{t.offers.map((s,i)=><span key={s}><b>0{i+1}</b>{s}</span>)}</div>}
export function WebsiteHero({t,preview=false}){
 const h=t.recipe.hero;
 const photo=<Picture t={t}/>;const copy=<Copy t={t} preview={preview}/>;
 const secondary=<Picture t={t} n={1}/>;
 const small=<div className="wd-hero-aside"><span>ĐIỀU GÌ QUAN TRỌNG VỚI BẠN?</span><p>{t.tagline}</p><a href="#wd-story">Câu chuyện của chúng tôi ↗</a></div>;
 const variations=[
 <>{copy}<div className="wd-hero-media">{photo}<Stamp t={t}/></div><Caption t={t}/></>,
 <><div className="wd-full-image">{photo}</div><div className="wd-overlay-copy">{copy}</div><span className="wd-hero-index">01 / KHÁM PHÁ</span></>,
 <><div className="wd-topline">{t.niche}<span>{t.id}</span></div>{copy}<div className="wd-duo">{photo}{secondary}</div></>,
 <><div className="wd-vertical-label">THE NEXT CHAPTER / {t.id}</div><div className="wd-portrait">{photo}</div>{copy}<div className="wd-bottom-note">{t.tagline}</div></>,
 <>{copy}<Mosaic t={t}/><Stats t={t}/></>,
 <><div className="wd-display-title">{t.name.split(' ')[0]}<span>↗</span></div><div className="wd-wide-photo">{photo}</div>{copy}</>,
 <><div className="wd-arch-photo">{photo}</div>{copy}<Stamp t={t}/><div className="wd-floating-small">{secondary}</div></>,
 <><div className="wd-ticker">{t.focus} ✳ {t.industry} ✳ {t.name} ✳</div>{copy}<div className="wd-circle-photo">{photo}</div><Caption t={t}/></>,
 <><div className="wd-filmstrip">{photo}{secondary}<Picture t={t} n={2}/></div>{copy}<span className="wd-film-label">MỘT CÂU CHUYỆN ĐƯỢC MỞ RA</span></>,
 <>{small}{copy}<div className="wd-square-photo">{photo}</div><Stats t={t}/></>,
 <><div className="wd-newspaper-heading">{t.name}<small>CHUYÊN ĐỀ / {t.industry}</small></div>{copy}<div className="wd-paper-photo">{photo}<Caption t={t}/></div>{small}</>,
 <><div className="wd-poster-photo">{photo}</div><span className="wd-poster-symbol">✳</span>{copy}<div className="wd-poster-caption">{t.tagline}</div></>,
 <>{copy}<div className="wd-angle-photo">{photo}</div><div className="wd-outline-word">{t.id.slice(-3)}</div><Caption t={t}/></>,
 <><div className="wd-triptych">{secondary}<Picture t={t}/><Picture t={t} n={2}/></div>{copy}<div className="wd-side-sign">{t.focus}</div></>,
 <><div className="wd-window">{photo}<div className="wd-window-top"><i/><i/><i/><span>{t.niche}</span></div></div>{copy}<Stats t={t}/></>,
 <>{copy}<div className="wd-steps-photos"><figure>{photo}<figcaption>01 / Khám phá</figcaption></figure><figure>{secondary}<figcaption>02 / Cảm nhận</figcaption></figure></div><Stamp t={t}/></>,
 <><span className="wd-huge-number">{t.id.slice(-3)}</span>{copy}<div className="wd-right-strip">{photo}</div><Caption t={t}/></>,
 <><div className="wd-oval-photo">{photo}</div>{copy}<div className="wd-tiny-photo">{secondary}<span>{t.focus}</span></div></>,
 <><div className="wd-frame-photo">{photo}<span>GÓC NHÌN MỚI</span></div><div className="wd-editor-letter">{copy}<p className="wd-signed">Từ {t.name} — dành cho bạn.</p></div></>,
 <><div className="wd-stack-photos">{secondary}{photo}<Picture t={t} n={2}/></div>{copy}<div className="wd-bottom-rule">CHỌN CẢM HỨNG / CHỌN KHỞI ĐẦU</div></>,
 <><div className="wd-grid-board"><span>EXPLORE</span>{photo}<p>{t.tagline}</p>{secondary}</div>{copy}</>,
 <>{copy}<div className="wd-cutout-photo">{photo}<span className="wd-cutout-badge">↗</span></div><div className="wd-inline-label">{t.niche} · {t.focus}</div></>,
 <><div className="wd-landscape-photo">{photo}<span>{t.industry}</span></div><div className="wd-lower-copy">{copy}{small}</div></>,
 <><div className="wd-center-mark"><Mark t={t}/></div>{copy}<div className="wd-left-fragment">{secondary}</div><div className="wd-right-fragment">{photo}</div></>,
 <><div className="wd-border-frame"><div>{copy}</div><div>{photo}<Caption t={t}/></div></div><Stats t={t}/></>,
 <><div className="wd-circle-word">✳</div><div className="wd-front-photo">{photo}</div>{copy}<div className="wd-end-label">{t.tagline}</div></>,
 <><div className="wd-collage-board"><Picture t={t}/><Picture t={t} n={1}/><span>{t.name}</span></div>{copy}<Stamp t={t}/></>,
 <><div className="wd-thin-image">{photo}</div>{copy}<div className="wd-thin-image wd-last">{secondary}</div><span className="wd-bottom-note">{t.tagline}</span></>,
 <>{copy}<div className="wd-grid-photo">{photo}<div className="wd-image-label">{t.niche}<br/>TỪ MỘT GÓC NHÌN MỚI ↗</div></div>{small}</>,
 <><div className="wd-diagonal-board">{photo}<span>{t.focus}</span></div>{copy}<Stats t={t}/></>
 ];
 return <section id={preview?undefined:"wd-top"} className={`wd-hero wh-${h} wg-${t.recipe.geometry}`} style={{'--geometry':t.recipe.geometry,'--split':`${40+(t.recipe.geometry%7)*3}%`,'--offset':`${(t.recipe.geometry%5)*14}px`}}>{variations[h]}</section>;
}
const questions=[['Đây có phải website doanh nghiệp thật không?','Đây là giao diện mẫu trong thư viện MarqByte. Tên thương hiệu, nội dung và hình ảnh dùng để minh họa hướng thiết kế; không phải hồ sơ năng lực hoặc cam kết dịch vụ của một doanh nghiệp thực tế.'],['Có thể thay nội dung và tính năng không?','Có thể trao đổi để tùy chỉnh theo thương hiệu. Nội dung, tính năng, dữ liệu và phạm vi bàn giao sẽ được thống nhất trước khi triển khai.'],['Tôi muốn chọn thiết kế này thì làm thế nào?','Bấm “Chọn mẫu này” trên thanh công cụ hoặc cuối trang, tạo bản yêu cầu có mã mẫu rồi sao chép và gửi qua Zalo cho MarqByte.']];
export default function WebsiteDemo({t,mini=false}){
 const[menu,setMenu]=useState(false),[tab,setTab]=useState(0),[slide,setSlide]=useState(0),[summary,setSummary]=useState('');
 const r=t.recipe;
 const story=<section id="wd-story" className={`wd-section wd-story ws-${r.story}`}><div className="wd-section-no">01 / CÂU CHUYỆN</div><h2>{t.tagline}</h2><Picture t={t} n={1} loading="lazy"/><div className="wd-story-copy"><p>{t.story}</p><p>{t.description} Chúng tôi dành không gian để lắng nghe, làm rõ những điều bạn quan tâm và cùng chọn bước tiếp theo.</p><a className="wd-text-link" href="#wd-contact">Cùng bắt đầu câu chuyện ↗</a></div><span className="wd-story-symbol" aria-hidden="true">✳</span></section>;
 const offers=<section id="wd-offers" className={`wd-section wd-offers wo-${r.offers}`}><div className="wd-section-no">02 / LỰA CHỌN DÀNH CHO BẠN</div><h2>{t.cta}.</h2><div className="wd-offer-list">{t.offers.map((s,i)=><article key={s}><span className="wd-offer-num">0{i+1}</span><Picture t={t} n={i} loading="lazy"/><div><h3>{s}</h3><p>{[t.description,`Dành thời gian tìm hiểu ${s.toLowerCase()}, đặt câu hỏi và khám phá lựa chọn sát với mong muốn của bạn.`,`Trao đổi về ${t.niche.toLowerCase()} để làm rõ thông tin, các bước phối hợp và điều cần chuẩn bị.`][i]}</p><a className="wd-text-link" href="#wd-contact">Tìm hiểu thêm ↗</a></div></article>)}</div></section>;
 const feature=<section id="wd-feature" className={`wd-section wd-feature wf-${r.feature}`}><div className="wd-section-no">03 / GÓC NHÌN CHUYÊN ĐỀ</div><div className="wd-feature-copy"><span className="wd-kicker">{t.focus}</span><h2>{['Tìm điều khiến bạn muốn dừng lại.','Một trải nghiệm đáng để tìm hiểu.','Có những chi tiết làm nên khác biệt.','Khám phá theo cách của bạn.','Từ một ý tưởng đến lựa chọn rõ ràng.'][r.feature%5]}</h2><p>{t.story}</p><div className="wd-demo-tabs" role="tablist" aria-label="Khám phá thông tin">{['Cảm hứng','Chi tiết','Bước tiếp theo'].map((s,i)=><button key={s} role="tab" aria-selected={tab===i} aria-controls="wd-feature-panel" onClick={()=>setTab(i)}>{s}</button>)}</div><p id="wd-feature-panel" role="tabpanel">{[t.description,`Xem các nội dung về ${t.offers.join(', ').toLowerCase()}. Phạm vi thực tế sẽ được xác nhận khi trao đổi.`,`Chọn mục tiêu ưu tiên và chia sẻ nhu cầu của bạn. ${t.name} sẽ là điểm khởi đầu để hình dung trải nghiệm mong muốn.`][tab]}</p></div><Picture t={t} n={2} loading="lazy"/><span className="wd-feature-letter" aria-hidden="true">{t.name.slice(0,1)}</span></section>;
 const process=<section id="wd-process" className={`wd-section wd-process wp-${r.process}`}><div className="wd-section-no">04 / CÁCH BẮT ĐẦU</div><h2>Một bước nhỏ.<br/>Một hành trình mới.</h2><ol>{[['Khám phá',t.cta+'. Tìm hiểu nội dung và những điều bạn muốn biết thêm.'],['Chia sẻ',`Trao đổi nhu cầu về ${t.niche.toLowerCase()}, thời gian và những mong muốn của bạn.`],['Lựa chọn','Thống nhất bước tiếp theo sau khi đã làm rõ các thông tin cần thiết.']].map(([a,b],i)=><li key={a}><span>0{i+1}</span><h3>{a}</h3><p>{b}</p></li>)}</ol></section>;
 const gallery=<section id="wd-gallery" className={`wd-section wd-gallery wgal-${r.gallery}`}><div className="wd-section-no">05 / KHÔNG GIAN CẢM HỨNG</div><div className="wd-gallery-heading"><h2>Nhìn gần hơn.<br/>Cảm nhận rõ hơn.</h2><div className="wd-gallery-controls"><button aria-label="Ảnh trước" onClick={()=>setSlide((slide+2)%3)}>←</button><span>0{slide+1} / 03</span><button aria-label="Ảnh tiếp theo" onClick={()=>setSlide((slide+1)%3)}>→</button></div></div><div className="wd-gallery-images">{[0,1,2].map((n)=><figure key={n}><Picture t={t} n={(n+slide)%3} loading="lazy"/><figcaption>{String(n+1).padStart(2,'0')} / {t.offers[(n+slide)%3]}</figcaption></figure>)}</div><p className="wd-image-disclaimer">Hình ảnh minh họa ý tưởng thiết kế, không phải dự án hoặc cơ sở thực tế của thương hiệu mẫu.</p></section>;
 const faq=<section id="wd-faq" className="wd-section wd-faq"><div><span className="wd-section-no">06 / THÔNG TIN HỮU ÍCH</span><h2>Trước khi<br/>bạn bắt đầu.</h2></div><div>{questions.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>;
 const contact=<section id="wd-contact" className="wd-section wd-contact"><div><span className="wd-section-no">07 / KẾT NỐI</span><h2>{t.contact}.</h2><p>{t.description}</p><a className="wd-button" href={websiteHref('request/'+t.id)}>Chọn mẫu này <span>↗</span></a><p className="wd-demo-note">Đang xem mẫu {t.id}. Form bên cạnh chỉ minh họa thao tác, không gửi hay lưu thông tin.</p></div><form onSubmit={e=>{e.preventDefault();const f=new FormData(e.currentTarget);setSummary(`Chào ${String(f.get('name')).trim()}, bạn vừa thử form của mẫu ${t.id}. Thông tin chưa được gửi. Để trao đổi cùng MarqByte, hãy bấm “Chọn mẫu này”.`);}}><label>Tên của bạn<input name="name" required maxLength={100} placeholder="Họ và tên"/></label><label>Email<input name="email" type="email" required placeholder="ban@example.com"/></label><label>Điều bạn quan tâm<textarea name="needs" rows={3} maxLength={1200} placeholder="Chia sẻ nhu cầu của bạn…"/></label><button className="wd-button" type="submit">Thử gửi yêu cầu ↗</button><p role="status">{summary||'Bản demo — thông tin chưa được gửi.'}</p></form></section>;
 const blocks={story,offers,feature,process,gallery,faq,contact};
 return <div onClick={event=>{const link=event.target.closest('a[href^="#wd-"]');if(link){event.preventDefault();const target=document.getElementById(link.getAttribute('href').slice(1));target?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}}} className={`wd-site wt-${t.style.toLowerCase().replaceAll(' ','-')} wtheme-${t.theme} wnav-${r.nav} wd-density-${r.density}`} style={{'--wa':t.accent,'--wr':r.radius+'px','--body-font':r.type%3===0?'Lora, Georgia, serif':r.type%3===1?'Be Vietnam Pro, Arial, sans-serif':'Arial, sans-serif','--heading-font':r.type%2===0?'Lora, Georgia, serif':'Be Vietnam Pro, Arial, sans-serif'}}>
 <header className="wd-nav"><a className="wd-brand" href="#wd-top"><Mark t={t}/><span>{t.name}</span></a><button className="wd-menu" aria-expanded={menu} aria-label={menu?'Đóng menu mẫu':'Mở menu mẫu'} onClick={()=>setMenu(!menu)}>☰</button><nav aria-label="Điều hướng website mẫu" className={menu?'open':''}>{[['Câu chuyện','story'],['Khám phá','offers'],['Cảm hứng','gallery'],['Liên hệ','contact']].map(([label,id])=><a key={id} href={'#wd-'+id} onClick={()=>setMenu(false)}>{label}</a>)}</nav><a href="#wd-contact" className="wd-nav-cta">{t.contact} ↗</a></header>
 <main><WebsiteHero t={t} preview={mini}/>{!mini&&r.order.map(key=><React.Fragment key={key}>{blocks[key]}</React.Fragment>)}</main>
 {!mini&&<footer className="wd-footer"><strong>{t.name}</strong><span>Giao diện mẫu {t.id} · Thiết kế bởi MarqByte</span><a href={websiteHref('detail/'+t.id)}>Về chi tiết mẫu ↗</a></footer>}
 </div>;
}
export function WebsiteMini({t}){
 const ref=useRef(null);const[width,setWidth]=useState(360);
 useEffect(()=>{if(!ref.current)return;const ro=new ResizeObserver(([entry])=>setWidth(entry.contentRect.width));ro.observe(ref.current);return()=>ro.disconnect()},[]);
 return <div ref={ref} className="wl-mini" aria-hidden="true" style={{height:width*.66}}><div className="wl-mini-inner" inert={true} style={{width:1200,transform:`scale(${width/1200})`}}><WebsiteDemo t={t} mini/></div></div>;
}
