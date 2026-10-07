console.log("Praktikum Dimulai!")

const teksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi");


const btnUbahTeks = document.getElementById("btn-ubah-teks");
const btnToggleWarna = document.getElementById("btn-toggle-warna");
const btnReset =  document.getElementById("btn-reset");


const inputDipelajari = document.getElementById("input-dipelajari");
const btnTambah = document.getElementById("btn-tambah");
const daftarDipelajari = document.getElementById("daftar-dipelajari");
const jumlahDipelajari = document.getElementById("jumlah-dipelajari");
const pesanKosong = document.getElementById("pesan-kosong");
const btnResetList = document.getElementById("btn-reset-list");



btnUbahTeks.addEventListener("click", function(){

    teksPreview.innerText = "Hallo, Perkenalkan Namaku Risma Rahma Setiadi!!";

    teksPreview.style.color = "#4466d5"

    console.log("Merubah teks di lewat DOM");
})


btnToggleWarna.addEventListener("click", function(){

    boxPreview.classList.toggle("active-mode");
    cardManipulasi.classList.toggle("highlight");
    
    console.log("DOM box preview telah diperbaharui");
});

btnReset.addEventListener("click", function(){
    teksPreview.innerText = "Yuk Kenalan Dengan Pemilik Website!";
    teksPreview.style.color = "";
    boxPreview.classList.remove("active-mode");
    cardManipulasi.classList.remove("highlight");

    console.log("DOM box preview telah kembali ke default")
})

let totalDipelajari = 0;
function perbaruiJumlah(){
    jumlahDipelajari.innerText = totalDipelajari;
    if (totalDipelajari === 0 ){
        pesanKosong.classList.remove("hidden");
    } else {
        pesanKosong.classList.add("hidden");
    }
}



function tambahDipelajari(){

const isiTeks = inputDipelajari.value.trim();

if (isiTeks === ""){
    alert ("Jangan sampai kosong, yuk belajar lebih semangat!!!");
return; 
}

const liBaru = document.createElement("li");
liBaru.className = "note-item";
liBaru.innerHTML = `<span>${isiTeks}</span> <button class="btn-hapus">Hapus</button>`;

const btnHapus = liBaru.querySelector(".btn-hapus");
btnHapus.addEventListener("click", function(){
liBaru.remove(); 
totalDipelajari--; 
perbaruiJumlah(); 
console.log(`DOM Catatan "${isiTeks}" telah dihapus`);
});

daftarDipelajari.appendChild(liBaru);

inputDipelajari.value = "";

totalDipelajari++;
perbaruiJumlah();

console.log(`DOM list yang dipelajari baru telah ditambahkan : "${isiTeks}"`);
}

btnTambah.addEventListener("click", function(){
    tambahDipelajari();
});

inputDipelajari.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        tambahDipelajari();
    }
});

btnResetList.addEventListener("click", function(){
    daftarDipelajari.innerHTML = "";
    totalDipelajari = 0;
    perbaruiJumlah();

    console.log("Semua daftar yang dipelajari telah direset");
});

const btnMode = document.getElementById("btn-mode");

btnMode.addEventListener("click", function () {

    document.body.classList.toggle("mode-malam");

    if (document.body.classList.contains("mode-malam")) {
        btnMode.innerText = "☀️ Mode Siang";
    } else {
        btnMode.innerText = "🌙 Mode Malam";
    }

});