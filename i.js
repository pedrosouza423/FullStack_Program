let a = 5
let b = 3

let $http = require("http");
const callback = (data) => {
console.log(data);
};

console.log("Hello, world!");

const exibir_pagina = (url) => {
$http.get(url, callback);
}
exibir_pagina("http://www.google.com");

// console.log(callback);