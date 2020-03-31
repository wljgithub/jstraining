"use strict";

var name = "jack";

if (name) {
    console.log("My name is:", name);
}

var f = function f() {
    console.log("This is a arrow function");
};
f();

var a = 1;
var b = 2;
var _ref = [b, a];
a = _ref[0];
b = _ref[1];

console.log(a);
console.log(b);

new Promise(function (resolve, reject) {
    resolve("succeed");
    reject("failed");
});
var s = new Set();
s.add("key");