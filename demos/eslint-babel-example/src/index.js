import 'babel-polyfill';
let name = "jack";

if(name){
    console.log("My name is:",name)
}

let f = ()=>{
    console.log("This is a arrow function")
}
f()

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

new Promise((resolve,reject)=>{
    resolve("succeed")
    reject("failed")
})
let s = new Set()
s.add("key")