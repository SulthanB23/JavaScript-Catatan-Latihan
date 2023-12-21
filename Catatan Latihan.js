console.log("hello world")

/* ini komentar juga */

// console.log("Haloo");

// Nama: "Adit"
// Alamat : "Tangerang"

// var namaLengkap = "Adit";
// var alamat = `Tangerang`;

// console.log('Nama saya '+ namaLengkap + ' alamat saya di' + alamat);
// console.log(`Nama saya ${namaLengkap} alamat saya di ${alamat}`);




//Masuk ke Materi "MENGUBAH TIPER DATA"
let sui = 1
let ronaldo = "1" 
// console.log(sui); //output sui
parseInt(sui)
console.log(sui);

// // DEKLARASI VARIABEL
// VAR, LET, CONST

// // "var" bisa di deklarasi ulang
var nama = "Abi";
var nama = "Fadhilah";
console.log(nama); // Output: Fadhilah

// // "let" tidak bisa di deklarasi ulang
// let pekerjaan = "Programmer";
// let pekerjaan = "Designer";
// console.log(pekerjaan); //Output: ERROR. Kalo mau diubah "let"-nya hapus
let pekerjaan = "Programmer";
pekerjaan = "Designer";
console.log(pekerjaan); //output: Designer

// // value tetap, tidak bisa dirubah
// const alamat = "Tangerang"
// alamat = "Depok"
// console.log(alamat); //output: error, karena const sudah fix ga bisa diubah

// // "Reassigned" mengubah value dari variabel. Let dan Var bisa, Const ga bisa
// contoh: 
// var/let data = apel
// data = jeruk 
// console.log(data); = output jeruk

// // "Redeclared" mendeklarasi value dari variabel. Hanya Var yang bisa, Const dan Let ga bisa
// contoh:
// var buah = pisang
// var buah = jeruk
// console.log(buah); //output = jeruk

// // "Hoisting" Variabel sudah dideklarasi tapi belum dikasih nilai. akan output undifined
// contoh:
// var jenisKelamin;
// let jenisKelamin2;
// const jenisKelamin3;
// console.log(jenisKelamin);
// console.log(jenisKelamin2);
// console.log(jenisKelamin3);
// Output=undifined

// "Let" juga bisa kaya gini
// let nama = "Farhan", alamat = "Bandung"
// Output : Nama = farah
// Alamat = Bandung



// // Masuk ke materi "SCOPE"



// let diskon = 800;
// let gratis = "nilai awal";
// // Jika saya lapar
// // saya makan
// if(diskon > 600){
//     gratis = "Minuman"
//     // console.log(gratis);
// } else {
//     gratis = "angin";
//     // console.log(gratis);
// }
// // console.log(gratis);






// //  String
// let string1 = "Hallo guys";
// let string2 = 'gimana kabarnya';
// let string3 = `baik ${string1}`;





// // number
// let umur = 25;
// // console.log(umur, typeof(umur) );

// let siswaBinar = true;

// // let hobi;
// console.log(hobi);



// Object
let dataDiriBudi = {
    nama: "Budi",
    alamat: "Jakarta",
    hobi: "Berenang"
}
let dataDiriAsep = {
    nama: "Asep",
    alamat: ["Tangerang", "Bandung"],
    hobi: "Berenang"
}

console.log(dataDiriBudi);
console.log(dataDiriBudi.nama);
console.log(dataDiriAsep);


// Array
// menyimpan data jenisnya sama
// kita mau nyimpan data merk mobil
let merkMobi1 = "Toyota"
let merkMobi2 = "Honda"
let merkMobi3 = "Nissan"
let merkMobil = ["Toyota", "Honda", "Nissan"]
// array di simpan di dalam index untuk value 
// dimulai dari 0
merkMobil[0] = "Ford"
merkMobil.push("Satu");
merkMobil.push(... ["Volvo", "Tesla"]);
console.log(merkMobil);
console.log(merkMobil[0]);
console.log(merkMobil[2]);





// Manipulai string
let data = "Nama saya Surya"
let hasil = data.replace("Surya", "Amel")
console.log(hasil);

let data2 = "Produk Rinso"
let hasil2 = data2.substring(7, 10)
console.log(hasil2);

let data3 = "Saya suka coding"
let hasil3 = data3.toLocaleLowerCase();
console.log(hasil3);










// // Masuk ke Mater "PERBANDINGAN"
let apakahBenar = 1 > 2
console.log(apakahBenar); //Output= false

let yo = 1
let oy = 1
let benerGa = yo == oy
console.log(benerGa); //Output true

// mengapa tidak "=", karena "=" akan mengubah value data
// "==" tidak mengecek tipe data
// sedangkan "===" akan mengecek tiped data
// jadi jika saja "oy" menjadi string, "==" tetap akan menjadi true
// namun jika "===", dan oy menjadi string, hasil akan false