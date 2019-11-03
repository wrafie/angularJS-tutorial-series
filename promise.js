let a = 1 + 3;
let p = new Promise((resolve, reject) => {
    if (a == 2) {
        resolve("success");
    } else {
        reject("failed");
    }
});

p.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
});