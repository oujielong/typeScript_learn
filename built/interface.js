"use strict";
function createPerson(one) {
    console.log("abc");
}
createPerson({ name: "1234" });
let a = [1, 2, 3, 4];
let ro = a; // 直接声明的不可修改，但原来的可以修改，而且会同步过去
// ro[0] = 12; // error!
a.push(5); // yes!
console.log(a == ro); //true
const const_a = [123, 34, 346];
const const_b = [123, 34, 346];
// const_b.push(123);//error
//# sourceMappingURL=interface.js.map