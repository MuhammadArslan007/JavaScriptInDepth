// Three way to to make js variable
// var or without keyword , let, const

var name = "ahmed";
// create the block stroage only two scope by default global and local(function)
let age = 28; 
//we can not change the value mean we not change the refrence that is store in the variable
const work = "free";


// Data type of js (primitve not primitve)

// Primitive 
// undefined
// null
// number 
// bigInt
// symbole
// string 
// boolean


// Non-Primitive
// Object 



// null is special type its not take memory; its point to noting but due to js erro its typeof undefined 
let nullType = null;

// js have not int and float its have Number combo of both

let maxint = Number.MAX_SAFE_INTEGER
console.log(maxint);
// bigint

let bigint = BigInt(Number.MAX_SAFE_INTEGER * Number.MAX_SAFE_INTEGER)
let bigint2 = 1n
console.log(bigint);

// string 
 const str1 = "string"
 const str2 = 'string in single quote'
 const str3 = `string in back tick`
 // Symbol
 let sym = Symbol()
 let sym2 = Symbol('symb')
 

 // undefined any un declear variable is undefined and also defined by undefined and other not support operation result aslo undefined

 let var1;

 // Object Key: value its refrence based data type array also refrence type 

 const obj = {}
 obj.myName = "asad"

let keyName = "key"
obj[keyName] = "keyval"

console.log(obj);

// obj as key its convert into string and write object object

const keyObj = {"obj":"valuobj"}

obj[keyObj] = "val"

console.log(obj);

// array as key
const arr = [1,2,3,4]
obj[arr] = "arrval";
console.log(obj);


// Shellow and deepcopy of obj
const obj1 = {key:'val'}
console.log(obj1);
//Shellow copy
const obj2 = obj1
obj2.addKey = "added"
console.log(obj1);
console.log(obj2);
// Deep copy

const obj3 = JSON.parse(JSON.stringify(obj1))

obj3.deepcopy = "deepcopyval"
console.log(obj3);
console.log(obj1);


