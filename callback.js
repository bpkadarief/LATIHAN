//callback = fungsi yang dijadikan parameter di fungsi lain
//callback = fungsi yang dipanggil di dalam fungsi lain

const numbers = [1, 2, 3, 4, 5]; // 1,3,5
//cek elemenent ganjil
const isOdd = (number) => number % 2 !== 0;
//simpan bilangan ganjil
const oddNumbers = numbers.filter(isOdd); // [1, 3, 5]
console.log("Bilangan ganjil:", oddNumbers); // Bilangan ganjil: [ 1, 3, 5 ]

const result = []
for (let i = 0; i < numbers.length; i++) {
   const bilangan = numbers[i];
   const isGanjil = bilangan % 2 !== 0;
}

