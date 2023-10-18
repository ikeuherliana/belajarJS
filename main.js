// console.log("Hello World!")
// alert("Notifikasi")
// prompt("Main, yuk!")

//Penggunaan var, const, dan let
// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding isn't Easy"
// console.log(Promnet)

// let Promnet = "Coding is Easy"
// console.log(Promnet)
// Promnet = "Coding isn't Easy"
// console.log(Promnet)

// const Promnet = "Coding is Easy"
// console.log(Promnet)
// Promnet = "Coding isn't Easy"
// console.log(Promnet)

// let totalPoint = prompt("Masukkan Poin Anda")
//     if(totalPoint > 100){
//         document.write("<h1>Congratulation!</h1>");
//     }
//     else{
//         document.write("<h1>Keep spirit!</h1>");
//     }


// const kalo nilai varialbelnya tetap/ga akan berubah
// let dan var nilainya bisa berubah, tapi let hanya berlaku
// dalam box yg dideklarasikan

// let x = 6;
// let y = 3;

// console.log(x < 10 && y > 1)
// console.log(x < 10 && y < 1)
// console.log(x == 5 || y == 5)
// console.log(x == 6 || y == 5)
// console.log(!(x == y))

// let x = 6;
// let y = 3;

// if (x < 10 && y > 1) {
//   console.log("a: true");
// } else {
//   console.log("a: false");
// }

// if (x < 10 && y < 1) {
//   console.log("b: true");
// } else {
//   console.log("b: false");
// }

// if (x == 5 || y == 5) {
//   console.log("c: true");
// } else {
//   console.log("c: false");
// }

// if (x == 6 || y == 5) {
//   console.log("d: true");
// } else {
//   console.log("d: false");
// }

// if (!(x == y)) {
//   console.log("e: true");
// } else {
//   console.log("e: false");
// }

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// Di dalam file JavaScript, kita akan menangani semua logika yang dibutuhkan.

// Menggunakan array untuk menyimpan teks yang diinput

const button = document.getElementById('tombol_form');
const input = document.getElementById('input');
const hasilContainer = document.getElementById('hasil');

button.addEventListener('click', function(){
    const isi = input.value;
    if (isi.trim() !== '') {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const teks = document.createElement('span');
        teks.textContent = isi;

        const hapus = document.createElement('span');
        hapus.textContent = ' X';
        hapus.className = 'hapus-item'; 
        hapus.style.cursor = 'pointer';
        hapus.style.color = 'black';
        
        const item = document.createElement('div');
        item.appendChild(checkbox);
        item.appendChild(teks);
        item.appendChild(hapus);

        hasilContainer.appendChild(item);

        input.value = '';

        hapus.addEventListener('click', function() {
            hasilContainer.removeChild(item);
        });

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                teks.style.textDecoration = 'line-through';
            } else {
                teks.style.textDecoration = 'none';
            }
        });
    }
});