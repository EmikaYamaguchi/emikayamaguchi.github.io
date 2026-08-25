const PHOTOS=[["assets/gallery-01.jpg","stage","舞台作品 01"],["assets/gallery-02.jpg","stage","舞台作品 02"],["assets/gallery-03.jpg","stage","舞台作品 03"],["assets/gallery-04.jpg","stage","舞台作品 04"],["assets/gallery-05.jpg","stage","舞台作品 05"],["assets/gallery-06.jpg","music","ライブ作品 01"],["assets/gallery-07.jpg","music","ライブ作品 02"],["assets/gallery-08.jpg","music","ライブ作品 03"],["assets/gallery-09.jpg","music","ライブ作品 04"],["assets/gallery-10.jpg","music","ライブ作品 05"],["assets/gallery-11.jpg","music","ライブ作品 06"],["assets/gallery-12.jpg","music","ライブ作品 07"],["assets/gallery-13.jpg","music","ライブ作品 08"],["assets/gallery-14.jpg","town","風景作品 01"],["assets/gallery-15.jpg","town","祭り作品 01"],["assets/gallery-16.jpg","town","祭り作品 02"],["assets/gallery-17.jpg","town","祭り作品 03"],["assets/gallery-18.jpg","town","祭り作品 04"],["assets/gallery-19.jpg","town","祭り作品 05"],["assets/gallery-20.jpg","animals","動物作品 01"],["assets/gallery-21.jpg","animals","動物作品 02"]];
const gallery=document.querySelector("#photo-gallery"),tabs=[...document.querySelectorAll(".gallery-tab")],count=document.querySelector("#gallery-count"),lightbox=document.querySelector("#lightbox"),lightboxImage=document.querySelector("#lightbox-image"),lightboxCount=document.querySelector("#lightbox-count");let visiblePhotos=[...PHOTOS],currentPhoto=0;
function showPhoto(index){currentPhoto=(index+visiblePhotos.length)%visiblePhotos.length;const [src,,alt]=visiblePhotos[currentPhoto];lightboxImage.src=src;lightboxImage.alt=alt;lightboxCount.textContent=`${String(currentPhoto+1).padStart(2,"0")} / ${String(visiblePhotos.length).padStart(2,"0")}`;lightbox.classList.add("is-open")}
function closeLightbox(){lightbox.classList.remove("is-open")}
function renderGallery(filter="all"){visiblePhotos=filter==="all"?[...PHOTOS]:PHOTOS.filter(photo=>photo[1]===filter);gallery.replaceChildren();visiblePhotos.forEach((photo,index)=>{const figure=document.createElement("figure"),image=document.createElement("img");figure.className="gallery-item reveal";image.src=photo[0];image.alt=photo[2];image.loading="lazy";image.draggable=false;image.addEventListener("click",()=>showPhoto(index));figure.append(image);gallery.append(figure);requestAnimationFrame(()=>figure.classList.add("is-visible"))});count.textContent=`01 — ${String(visiblePhotos.length).padStart(2,"0")}`}
tabs.forEach(tab=>tab.addEventListener("click",()=>{tabs.forEach(item=>{item.classList.toggle("is-active",item===tab);item.setAttribute("aria-selected",String(item===tab))});renderGallery(tab.dataset.filter)}));
document.querySelector(".lightbox-close")?.addEventListener("click",closeLightbox);document.querySelector(".lightbox-prev")?.addEventListener("click",()=>showPhoto(currentPhoto-1));document.querySelector(".lightbox-next")?.addEventListener("click",()=>showPhoto(currentPhoto+1));lightbox?.addEventListener("click",event=>{if(event.target===lightbox)closeLightbox()});document.addEventListener("keydown",event=>{if(event.key==="Escape")closeLightbox();if(lightbox?.classList.contains("is-open")&&event.key==="ArrowLeft")showPhoto(currentPhoto-1);if(lightbox?.classList.contains("is-open")&&event.key==="ArrowRight")showPhoto(currentPhoto+1)});
document.addEventListener("contextmenu",event=>{if(event.target.closest("img"))event.preventDefault()});document.querySelectorAll("img").forEach(image=>image.addEventListener("dragstart",event=>event.preventDefault()));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(element=>observer.observe(element));if(gallery)renderGallery();

// Full-width services block between PROFILE and GALLERY.
document.querySelector('.profile-services')?.remove();
const galleryPanel=document.querySelector('#gallery');
if(galleryPanel&&!document.querySelector('.profile-services-wide')){
  const services=document.createElement('section');
  services.className='profile-services-wide';
  services.innerHTML=`
    <div class="profile-services-wide-head">
      <div><span>WHAT I CAN DO</span><h2>できること</h2></div>
      <p>写真だけでなく、WebやAI、PC・スマホまわりまで。<br>できることをまとめています。</p>
    </div>
    <div class="profile-services-wide-grid">
      <article><b>WEBサイト制作</b><p>GitHub Pages・Wixなどを使ったWebサイトの制作・更新。</p></article>
      <article><b>AIコンテンツ制作</b><p>ChatGPT・Claudeなどを活用した企画、文章、画像などの制作。</p></article>
      <article><b>動画企画・台本</b><p>YouTube・ショート動画の企画や台本、発信用コンテンツの制作。</p></article>
      <article><b>Canvaデザイン</b><p>メニュー、告知画像、SNS用画像などのデザイン制作。</p></article>
      <article><b>LINEスタンプ制作</b><p>AIを活用したスタンプ・絵文字の企画、画像制作。</p></article>
      <article><b>写真撮影</b><p>舞台、ライブ、イベント、祭りなどの撮影。</p></article>
      <article><b>パソコン基本操作・サポート</b><p>Windowsの基本操作や各種設定など、初心者向けの使い方をサポート。</p></article>
      <article><b>スマホ・ガジェット</b><p>スマホの基本操作・設定や、用途に合わせたガジェット選びをサポート。</p></article>
    </div>`;
  galleryPanel.before(services);

  const style=document.createElement('style');
  style.textContent=`
    .profile-services-wide{display:none;order:2;background:#0c0d0d;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:54px 5vw 58px}
    body:has(.profile-panel.is-active) .profile-services-wide,body:has(.gallery-panel.is-active) .profile-services-wide{display:block}
    body:has(.profile-panel.is-active) .gallery-panel,body:has(.gallery-panel.is-active) .gallery-panel{order:3!important}
    .profile-services-wide-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:28px}
    .profile-services-wide-head span{display:block;color:var(--lime);font-size:10px;letter-spacing:.14em;margin-bottom:10px}
    .profile-services-wide-head h2{margin:0;font:500 clamp(36px,4vw,58px)/1.05 "Zen Old Mincho",serif;letter-spacing:.03em}
    .profile-services-wide-head p{margin:0;color:var(--muted);font:14px/1.8 "Zen Old Mincho",serif;text-align:right}
    .profile-services-wide-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid var(--line);border-left:1px solid var(--line)}
    .profile-services-wide-grid article{min-height:145px;padding:22px 20px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#101111}
    .profile-services-wide-grid b{display:block;color:var(--paper);font:500 13px/1.5 "DM Mono",monospace;margin-bottom:10px}
    .profile-services-wide-grid p{margin:0;color:var(--muted);font:14px/1.75 "Zen Old Mincho",serif}
    .profile-services-wide-grid article:nth-child(4n+1),.profile-services-wide-grid article:nth-child(4n+4){background:#11150e}
    .profile-services-wide-grid article:hover{outline:1px solid var(--lime);outline-offset:-1px}
    @media(max-width:1000px){.profile-services-wide-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:850px){.profile-services-wide{padding:42px 7vw 46px}.profile-services-wide-head{display:block}.profile-services-wide-head p{margin-top:16px;text-align:left}.profile-services-wide-head p br{display:none}.profile-services-wide-grid{grid-template-columns:1fr}.profile-services-wide-grid article{min-height:0;padding:18px}.profile-services-wide-grid b{font-size:12px}.profile-services-wide-grid p{font-size:13px}}
  `;
  document.head.appendChild(style);
}

// GALLERY in the top navigation is an anchor within the same page.
document.addEventListener("click",event=>{const link=event.target.closest('a[data-panel-link="gallery"]');if(!link)return;event.preventDefault();event.stopImmediatePropagation();document.querySelector("#gallery")?.scrollIntoView({behavior:"smooth",block:"start"});history.replaceState(null,"","#gallery");},true);
