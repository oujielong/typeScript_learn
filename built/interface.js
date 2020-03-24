"use strict";
function createPerson(one) {
    console.log("abc");
}
// createPerson({ name: "1234", a: "234" } );//error
createPerson({ name: "1234", a: "234" });
createPerson({ name: "1234", a: "234" });
let squareOptions = { name: "red", width: 100 }; //绕过检查，
createPerson(squareOptions);
let a = [1, 2, 3, 4];
let ro = a; // 直接声明的不可修改，但原来的可以修改，而且会同步过去
// ro[0] = 12; // error!
a.push(5); // yes!
console.log(a == ro); //true
const const_a = [123, 34, 346];
const const_b = [123, 34, 346];
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result + "";
};
let myArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[0];
let myArray1 = ["Bob", "Fred"];
myArray1.push("234");
// 索引
class Animal {
}
class Dog extends Animal {
}
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    setTime(d) {
        throw new Error("Method not implemented.");
    }
    constructor(h, m) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock {
    constructor(h, m) { }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
let square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
class Control {
}
class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() { }
}
// // 错误：“Image”类型缺少“state”属性。
// class Image1 implements SelectableControl {
//   select() { }
// }
class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的
let func = (a, b) => {
    return 1;
};
// 函数定义的方式
let func1 = (a, b) => {
    return 1;
};
// 类型推断，可以省略不写某些类型
// 函数定义的方式
let func2 = (a, v) => {
    return a.length + v.length;
};
// 函数默认值参数 ，默认参数 就是 可选参数
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
// 泛型参数类
function abc(a) {
    return a;
}
// 使用接口扩展的方法来约束泛型，
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
//
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
let c123 = {
    kind: ShapeKind.Circle,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100
};
console.log(c123.kind);
// 类型推断  最佳通用类型
// let zoo = [new Rhino(), new Elephant(), new Snake()];--》
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- Now, no error is given
};
let x;
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
x = y;
function greet(n) {
    console.log('Hello, ' + n.name);
}
greet(y); // OK
// 忽略参数
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
function listenEvent(eventType, handler) {
    /* ... */
}
// 类型兼容问题
// // Unsound, but useful and common
// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));
// // Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e) => console.log(e.xx + ',' + e.yy));
listenEvent(EventType.Mouse, ((e) => console.log(e.x + ',' + e.y)));
// // Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e) => console.log(e));
//# sourceMappingURL=interface.js.map