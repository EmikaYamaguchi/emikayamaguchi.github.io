const PHOTOS=[["assets/gallery-01.jpg","stage","舞台作品 01"],["assets/gallery-02.jpg","stage","舞台作品 02"],["assets/gallery-03.jpg","stage","舞台作品 03"],["assets/gallery-04.jpg","stage","舞台作品 04"],["assets/gallery-05.jpg","stage","舞台作品 05"],["assets/gallery-06.jpg","music","ライブ作品 01"],["assets/gallery-07.jpg","music","ライブ作品 02"],["assets/gallery-08.jpg","music","ライブ作品 03"],["assets/gallery-09.jpg","music","ライブ作品 04"],["assets/gallery-10.jpg","music","ライブ作品 05"],["assets/gallery-11.jpg","music","ライブ作品 06"],["assets/gallery-12.jpg","music","ライブ作品 07"],["assets/gallery-13.jpg","music","ライブ作品 08"],["assets/gallery-14.jpg","town","風景作品 01"],["assets/gallery-15.jpg","town","祭り作品 01"],["assets/gallery-16.jpg","town","祭り作品 02"],["assets/gallery-17.jpg","town","祭り作品 03"],["assets/gallery-18.jpg","town","祭り作品 04"],["assets/gallery-19.jpg","town","祭り作品 05"],["assets/gallery-20.jpg","animals","動物作品 01"],["assets/gallery-21.jpg","animals","動物作品 02"]];
const gallery=document.querySelector("#photo-gallery"),tabs=[...document.querySelectorAll(".gallery-tab")],count=document.querySelector("#gallery-count"),lightbox=document.querySelector("#lightbox"),lightboxImage=document.querySelector("#lightbox-image"),lightboxCount=document.querySelector("#lightbox-count");let visiblePhotos=[...PHOTOS],currentPhoto=0;
function showPhoto(index){currentPhoto=(index+visiblePhotos.length)%visiblePhotos.length;const [src,,alt]=visiblePhotos[currentPhoto];if(lightboxImage){lightboxImage.src=src;lightboxImage.alt=alt}if(lightboxCount)lightboxCount.textContent=`${String(currentPhoto+1).padStart(2,"0")} / ${String(visiblePhotos.length).padStart(2,"0")}`;lightbox?.classList.add("is-open")}
function closeLightbox(){lightbox?.classList.remove("is-open")}
function renderGallery(filter="all"){if(!gallery)return;visiblePhotos=filter==="all"?[...PHOTOS]:PHOTOS.filter(photo=>photo[1]===filter);gallery.replaceChildren();visiblePhotos.forEach((photo,index)=>{const figure=document.createElement("figure"),image=document.createElement("img");figure.className="gallery-item reveal";image.src=photo[0];image.alt=photo[2];image.loading="lazy";image.draggable=false;image.addEventListener("click",()=>showPhoto(index));figure.append(image);gallery.append(figure);requestAnimationFrame(()=>figure.classList.add("is-visible"))});if(count)count.textContent=`01 — ${String(visiblePhotos.length).padStart(2,"0")}`}
tabs.forEach(tab=>tab.addEventListener("click",()=>{tabs.forEach(item=>{item.classList.toggle("is-active",item===tab);item.setAttribute("aria-selected",String(item===tab))});renderGallery(tab.dataset.filter)}));
document.querySelector(".lightbox-close")?.addEventListener("click",closeLightbox);document.querySelector(".lightbox-prev")?.addEventListener("click",()=>showPhoto(currentPhoto-1));document.querySelector(".lightbox-next")?.addEventListener("click",()=>showPhoto(currentPhoto+1));lightbox?.addEventListener("click",event=>{if(event.target===lightbox)closeLightbox()});document.addEventListener("keydown",event=>{if(event.key==="Escape")closeLightbox();if(lightbox?.classList.contains("is-open")&&event.key==="ArrowLeft")showPhoto(currentPhoto-1);if(lightbox?.classList.contains("is-open")&&event.key==="ArrowRight")showPhoto(currentPhoto+1)});
document.addEventListener("contextmenu",event=>{if(event.target.closest("img"))event.preventDefault()});document.querySelectorAll("img").forEach(image=>image.addEventListener("dragstart",event=>event.preventDefault()));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(element=>observer.observe(element));if(gallery)renderGallery();

// Remove the old narrow profile services if a cached/older version created it.
document.querySelector('.profile-services')?.remove();

// Full-width services block above the Gallery heading.
const galleryPanel=document.querySelector('.gallery-panel');
const galleryHead=galleryPanel?.querySelector('.panel-head');
if(galleryPanel&&galleryHead&&!galleryPanel.querySelector('.gallery-services')){
  const services=document.createElement('section');
  services.className='gallery-services';
  services.innerHTML=`<div class="gallery-services-title"><span>WHAT I CAN DO</span><h2>できること</h2></div><div class="gallery-services-grid">
    <article><b>WEBサイト制作</b><p>GitHub Pages・Wixなどを使ったWebサイトの制作・更新。</p></article>
    <article><b>AIコンテンツ制作</b><p>ChatGPT・Claudeなどを活用した企画、文章、画像などの制作。</p></article>
    <article><b>動画企画・台本</b><p>YouTube・ショート動画の企画や台本、発信用コンテンツの制作。</p></article>
    <article><b>Canvaデザイン</b><p>メニュー、告知画像、SNS用画像などのデザイン制作。</p></article>
    <article><b>LINEスタンプ制作</b><p>AIを活用したスタンプ・絵文字の企画、画像制作。</p></article>
    <article><b>写真撮影</b><p>舞台、ライブ、イベント、祭りなどの撮影。</p></article>
    <article><b>パソコン基本操作・サポート</b><p>Windowsの基本操作や各種設定など、初心者向けの使い方をサポート。</p></article>
    <article><b>スマホ・ガジェット</b><p>スマホの基本操作・設定や、用途に合わせたガジェット選びをサポート。</p></article>
  </div>`;
  galleryHead.before(services);
}

document.addEventListener("click",event=>{const link=event.target.closest('a[data-panel-link="gallery"]');if(!link)return;event.preventDefault();event.stopImmediatePropagation();document.querySelector("#gallery")?.scrollIntoView({behavior:"smooth",block:"start"});history.replaceState(null,"","#gallery");},true);

// Add Waraka production portfolio QR/link above the profile inquiry text.
(function(){
  const businessContact=document.querySelector('.business-contact');
  if(!businessContact||businessContact.querySelector('.waraka-portfolio-contact'))return;

  if(!document.getElementById('waraka-portfolio-contact-style')){
    const style=document.createElement('style');
    style.id='waraka-portfolio-contact-style';
    style.textContent=`
      .business-contact a.waraka-portfolio-contact{display:flex!important;align-items:center;gap:14px;max-width:440px;margin:0 0 16px;padding:14px;border:1px solid var(--line);background:rgba(217,244,81,.055);color:var(--paper);font:inherit;text-decoration:none;box-shadow:8px 8px 0 rgba(0,0,0,.22)}
      .business-contact a.waraka-portfolio-contact:hover{border-color:var(--lime);background:rgba(217,244,81,.11);color:var(--paper)}
      .waraka-portfolio-qr{width:76px;height:76px;flex:0 0 76px;background:#fff;padding:6px;display:block}
      .waraka-portfolio-qr img{width:100%;height:100%;object-fit:contain;display:block}
      .waraka-portfolio-copy{display:flex;min-width:0;flex-direction:column;gap:4px}
      .waraka-portfolio-label{color:var(--lime);font:500 13px/1.4 "Zen Old Mincho",serif;letter-spacing:.06em}
      .waraka-portfolio-copy strong{width:max-content;max-width:100%;font:12px/1.4 "DM Mono",monospace;border-bottom:1px solid currentColor;padding-bottom:2px;overflow-wrap:anywhere}
      .waraka-portfolio-copy small{color:#d8dad3;font:12px/1.65 "Zen Old Mincho",serif}
      @media(max-width:850px){.profile-contact{margin-top:190px}.business-contact a.waraka-portfolio-contact{gap:12px;padding:12px}.waraka-portfolio-qr{width:64px;height:64px;flex-basis:64px}.waraka-portfolio-label{font-size:12px}.waraka-portfolio-copy strong{font-size:10px}.waraka-portfolio-copy small{font-size:11px}}
    `;
    document.head.append(style);
  }

  const block=document.createElement('a');
  block.className='waraka-portfolio-contact';
  block.href='https://waraka2026.github.io/';
  block.target='_blank';
  block.rel='noopener noreferrer';
  block.innerHTML=`<span class="waraka-portfolio-qr"><img src="assets/waraka-portfolio-qr.svg" alt="制作メインのポートフォリオ QRコード"></span><span class="waraka-portfolio-copy"><span class="waraka-portfolio-label">制作メインのポートフォリオ</span><strong>waraka2026.github.io</strong><small>Web制作・AIコンテンツ・LINEスタンプなどはこちら</small></span>`;
  businessContact.prepend(block);
})();
