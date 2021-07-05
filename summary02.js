//Rest Parameter 입력받을 파라미터의 개수를 알 수 없을때 사용

// function add(x1, x2) {
//     return x1 + x2;
// }

function add(...nums) {
    var sum = 0;
    for (var n of nums) {
        sum += n;
    }

    return sum;
}

console.log(add(2, 5, 3, 7, 8, 33, 22));

// var nums = [2,5,3,6,8,33,22];


//Arrow Function - 화살표함수

//함수 선언식
function add() {

}

//함수 표현식
var add = function(x1, x2) {
    return x1 + x2;
};

//Arrow Function - 화살표함수

var add = (x1, x2) => {return x1 + x2};     //같음
var add = (x1, x2) => x1 + x2;              //같음

var add2 = function(x1, x2) {
    var sum = x1 + x2;
    return sum;
};

var add2 = (x1, x2) => {
    var sum = x1 + x2;
    return sum;
};

function say(message) {

}

var say = message => {};

function myFunction() {

}

var myFunction = () => {};

//Template Literals
//Hello Joseph. Welcome!

function hello(name) {
    console.log("Hello" + name + ". Welcome!");
}

function hello2(name, name2="joseph") {
    console.log(`Hello ${name}. Welcome ${name2}!`);
}

hello2("Joseph");


//Objsect Literal Syntax Extension

var firstName = "Joseph";
var lastName = "Shu";

var person = {
    firstName: firstName,
    lastName: lastName
}

// person[firstName]

var type = "student";
var score = {
    [type]: "Joseph Shu",
    //student: "Joseph Shu"
    score: 95
};


// score.student
// score["student"]
// scroe[type]


//Spread Operator
//배열, 문자열같은 형태의 데이터를 요소 하나 하나 모두 분리해서 사용할 수있게 해주는 문법

var arr1 = [4,5,6];
var arr2 = [1,2,3];
var arr3 = [...arr2, ...arr1];  //1,2,3,4,5,6


var cd = "CDEFGH";
var alphabet = ["A","B", ...cd];    //A B C D E F G H


//Object Destructuring

function getPerson() {
    return {
        firstName:"Joseph",
        lastName:"Seo",
        age: 30,
        email: "jseo@naver.com",
        city: "Sejong-si",
        country: "korea"
    }
}

var person = getPerson();
console.log(person.firstName);
console.log(person.lastName);

var {firstName, lastName} = getPerson();
console.log(firstName);
console.log(lastName);

//Array Destructuring

function getScores() {
    return [70, 21, 100, 32, 49, 89];
}

// var scores = getScores();
// scores[0];
// scores[1];
// scores[2];

var [x, y, ...args] = getScores();
console.log(x);
console.log(y);
console.log(args);

function getPerson() {
    return [
        "Joseph",
        "Seo",
        ["Red", "Green", "Blue"]
    ];
}

var [firstName, lastName, [color1, color2, color3]]




//[경도longitude, 위도latitude];
function getCoordinates() {
    return [12.222, 34.222];
}


var coodinates = getCoordinates(); //[경도, 위도]
coodinates[0]; //경도
coodinates[1]; //위도

var [longitude, latitude] = getCoordinates(); //[경도, 위도]

//정규식
//regular expression

var txt = "Hello World! world!";

var regexp = /World/gi;

console.log(txt.replace(regexp, "Jeremy"));

var str = "1243252abcdsf222kk";
var regexp1 = /[0-9]/g;
var result = str.match(regexp1);
console.log(result);

var str2 = "re, green, red, apple, blue, sun, good";
var regexp2 = /(red|green)/g;
var result2 = str2.match(regexp2);
console.log(result2);



var tel = "010-1234-9875";
//3자리 010 숫자 - 4자리 숫자 - 4자리
var regexp3 = /^(010)-\d{4}-\d{4}/;
console.log(regexp3.test(tel));


//seo1234567@naver.com
//aaa1271271@gmail.com
//abcabc123@anan.co.kr
var regexp4 = /^\w+@\w+(\.\w{2, 3})+$/;

console.log(regexp4.test("sss333555@maila.com"));