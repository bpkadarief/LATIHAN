function draw(rows, columns){

    for (let i = 0; i < rows; i++) {
        let line = "";
        for (let j = 0; j < columns; j++) {
            line += "* ";
        }
        console.log(line);
    }
}

function susunKursi(pengunjung, cols){
    const rows = Math.ceil(pengunjung.length / cols);
    const kursi = [];
    let indexPengunjung = 0;

    for (let i = 0; i < rows; i++) {
        const baris = [];
        for (let j = 0; j < cols; j++) {
            let tamu = pengunjung[indexPengunjung];

            if (tamu === undefined) {
                tamu = "Kursi Kosong";
            }
            baris.push(tamu);
        }
        kursi.push(baris);
    }
    return kursi;
}
const pengunjung = ["Arief", "Budi", "Cici", "Dodi", "Eka", "Fani"];
console.log(pengunjung.length);
console.log(susunKursi(pengunjung, 3));

