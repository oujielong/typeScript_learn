"use strict";
/***
 *  基本类型声明 均处于严格类型
 *"strict": true,
"strictNullChecks": true,
 */
//  bool
let isDone = false;
let decliteral = 6;
let hexliteral = 0xf00d;
let binaryLiteral = 0b1010;
let octalLiteral = 0o643;
//string
let str = "hello string";
//array
let arr = [1, 2, 35, 5];
let arr1 = ["2", "234", "35dfgh", "5"];
//tuple
let tuple1 = [234, "234234", 0xf00d];
//enum
// console.log(tuple1[4]="q432") error
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["gleen"] = 3] = "gleen";
})(Color || (Color = {}));
let c = Color.gleen;
//any
let anynu = "234";
let anynu1 = { a: "23", b: "345" };
let anynu3 = [567, 678, 98];
let anynu4 = [567, "asfa", 98];
// void
let void1 = undefined;
// let void2: void = null; //，null 不能赋予void类型
// let x: never = null;  错误
//object
let obj1 = [1, 34];
let obj2 = { a: [1, 34] };
//# sourceMappingURL=baseType.js.map