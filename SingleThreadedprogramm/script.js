//Synchronous code
console.log("1 Kg onions");
console.log("1 liter milk");
for (let i = 0; i < 300000; i++) {
  if (i == 29999) {
    console.log("1 onion Dosa");
  }
}

console.log("Drop Brother at College");


//Asynchronous code
console.log("1 Kg onions");
console.log("1 liter milk");
setTimeout(function () {
  for (let i = 0; i < 300000; i++) {
    if (i == 29999) {
      console.log("1 onion Dosa");
    }
  }
}, 0);

console.log("Drop Brother at College");
