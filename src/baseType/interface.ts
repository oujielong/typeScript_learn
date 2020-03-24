interface person {
  name: string;
  age?: number;
  readonly address?: any; //只读属性
  // [propName: string]: any;//索引属性
}
function createPerson(one: person): void {
  console.log("abc");
}
// createPerson({ name: "1234", a: "234" } );//error
createPerson({ name: "1234", a: "234" } as person);
createPerson({ name: "1234", a: "234" } as person);
let squareOptions = { name: "red", width: 100 }; //绕过检查，
createPerson(squareOptions);

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a; // 直接声明的不可修改，但原来的可以修改，而且会同步过去
// ro[0] = 12; // error!
a.push(5); // yes!
console.log(a == ro); //true
const const_a = [123, 34, 346];

const const_b: ReadonlyArray<number> = [123, 34, 346];
// const_b.push(123);//error

// 函数类型
interface superPerson {
  (source: string, substring: string): any;
}
let mySearch: superPerson;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result + "";
};

interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

let myArray1: Array<string> = ["Bob", "Fred"];
myArray1.push("234");

// 索引
class Animal {
  name: string | undefined;
}
class Dog extends Animal {
  breed: string | undefined;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: number]: Dog;
  [x: string]: Animal;
}

// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date): any;
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//     this.currentTime = d;
//   }
//   constructor(h: number, m: number) {
//     this.currentTime = new Date();
//   }
// }

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): any;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  setTime(d: Date) {
    throw new Error("Method not implemented.");
  }
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square: Square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// // 错误：“Image”类型缺少“state”属性。
// class Image1 implements SelectableControl {
//   select() { }
// }
class Octopus {
  public readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的

let func = (a: string, b: string): number => {
  return 1;
};
// 函数定义的方式
let func1: (a: string, b: string) => number = (a: string, b: string): number => {
  return 1;
};
// 类型推断，可以省略不写某些类型
// 函数定义的方式
let func2: (a: string, b: string) => number = (a, v) => {
  return a.length + v.length;
};
// 函数默认值参数 ，默认参数 就是 可选参数
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
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
function abc<T>(a: T): T {
  return a;
}

// 泛型接口
// 泛型类
// 泛型约束

interface Lengthwise {
  length: number;
}
// 使用接口扩展的方法来约束泛型，
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

//
enum ShapeKind {
  Circle,
  Square
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c123: Circle = {
  kind: ShapeKind.Circle,
  //    ~~~~~~~~~~~~~~~~ Error!
  radius: 100
};
console.log(c123.kind);

const enum Enum {
  A = 1,
  B = A * 2
}
declare enum Enum2 {
  A = 1,
  B,
  C = 2
}

// 类型推断  最佳通用类型
// let zoo = [new Rhino(), new Elephant(), new Snake()];--》

window.onmousedown = function(mouseEvent:any) {
  console.log(mouseEvent.button);  //<- Now, no error is given
};

// 函数表达式

interface Named {
  name: string;
}

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
x = y;

function greet(n: Named) {
  console.log('Hello, ' + n.name);
}
greet(y); // OK

// 忽略参数

enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { xx: number; yy: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}

// 类型兼容问题
// // Unsound, but useful and common
// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));

// // Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).xx + ',' + (<MouseEvent>e).yy));
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));

// // Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: number) => console.log(e));