function add(a, b, callback){
    let result;
    
    setTimeout(() => {
        result = a + b;
        callback(result); 
    },3000);

}

function addpromise(a, b) {
    return new Promise{{resolve, reject) => {
        resolve(a + b);
    }};
}

const x = addpromise(5, 10);
console.log

//callback function to handle the result
function handleResult(result) {
    console.log("Hasil penjumlahan:", result);
}

add(5, 10, handleResult);





