const GALLERY_IMAGES = [
  "assets/gallery-01.jpg",
  "assets/gallery-02.jpg",
  "assets/gallery-03.jpg",
  "assets/gallery-04.jpg",
  "assets/gallery-05.jpg",
  "assets/gallery-06.jpg",
  "assets/gallery-07.jpg",
  "assets/gallery-08.jpg",
  "assets/gallery-09.jpg",
  "assets/gallery-10.jpg",
  "assets/gallery-11.jpg",
  "assets/gallery-12.jpg",
  "assets/gallery-13.jpg",
  "assets/gallery-14.jpg",
  "assets/gallery-15.jpg",
  "assets/gallery-16.jpg",
  "assets/gallery-17.jpg",
  "assets/gallery-18.jpg",
  "assets/gallery-19.jpg",
  "assets/gallery-20.jpg",
  "assets/gallery-21.jpg"
];
const galleryEl = document.getElementById('photo-gallery');
GALLERY_IMAGES.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.addEventListener('click', () => openOverlay(src));
  galleryEl.appendChild(img);
});

function openOverlay(src){
  document.getElementById('overlay-img').src = src;
  document.getElementById('overlay').style.display = 'flex';
}
const buttons = document.querySelectorAll('nav.tabs button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.frame').forEach(f => f.classList.remove('active'));
    document.getElementById('frame-' + btn.dataset.target).classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

const qrSize = 90;
new QRCode(document.getElementById("qr-shiori"), { text:"https://shiori-official.digitalhack-note.com/", width:qrSize, height:qrSize, colorDark:"#1c1a17", colorLight:"#ffffff", correctLevel:QRCode.CorrectLevel.M });
new QRCode(document.getElementById("qr-blog"), { text:"https://digitalhack-note.com/", width:qrSize, height:qrSize, colorDark:"#1c1a17", colorLight:"#ffffff", correctLevel:QRCode.CorrectLevel.M });
new QRCode(document.getElementById("qr-yt-waraka"), { text:"https://www.youtube.com/@waraka_channel", width:qrSize, height:qrSize, colorDark:"#1c1a17", colorLight:"#ffffff", correctLevel:QRCode.CorrectLevel.M });
new QRCode(document.getElementById("qr-yt-okajo"), { text:"https://www.youtube.com/@okajo_conspiracy", width:qrSize, height:qrSize, colorDark:"#1c1a17", colorLight:"#ffffff", correctLevel:QRCode.CorrectLevel.M });
new QRCode(document.getElementById("qr-note-waraka"), { text:"https://note.com/waraka_minimal", width:qrSize, height:qrSize, colorDark:"#1c1a17", colorLight:"#ffffff", correctLevel:QRCode.CorrectLevel.M });
new QRCode(document.getElementById("qr-note-okajo"), { text:"https://note.com/waraka_okajo6666", width:qrSize, height:qrSize, colorDark:"#1c1a17", colorLight:"#ffffff", correctLevel:QRCode.CorrectLevel.M });
new QRCode(document.getElementById("qr-midnight"), { text:"https://midnightbilliard.wixsite.com/midnight", width:qrSize, height:qrSize, colorDark:"#1c1a17", colorLight:"#ffffff", correctLevel:QRCode.CorrectLevel.M });
new QRCode(document.getElementById("qr-line-stickers"), { text:"https://store.line.me/stickershop/author/5413770/ja", width:qrSize, height:qrSize, colorDark:"#1c1a17", colorLight:"#ffffff", correctLevel:QRCode.CorrectLevel.M });
new QRCode(document.getElementById("qr-coconala-chat"), { text:"https://coconala.com/services/4356222", width:qrSize, height:qrSize, colorDark:"#1c1a17", colorLight:"#ffffff", correctLevel:QRCode.CorrectLevel.M });
