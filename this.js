// this 는 호출의 주체에 따라 달라진다.
// 호출한 객체 === this !!!!!!!

var someone = {
    name : "Joseph Shu",
    whoAmI : function() {
        console.log("first", this);
    } 
};


someone.whoAmI();
// someone 객체가 호출   
// first { name: 'Joseph Shu', whoAmI: [Function: whoAmI] }


console.log("second");
var whoAreYou = someone.whoAmI;
console.log("what is whoareyou", whoAreYou);
whoAreYou();
// first window object


// 여기서 bind 의 역할 == someone 을 this 로 무조건 받겠다
var bindedWhoAmI = whoAreYou.bind(someone);


bindedWhoAmI();
// bindedWhoAmI 가 호출했지만 someone 을 this 로 받겠다고 bind 했으므로
// someone 이 호출한것과 같게됨
// first { name: 'Joseph Shu', whoAmI: [Function: whoAmI] } 



// var mybutton = document.getElementById("btn");
// mybutton.addEventListener("click", someone.whoAmI);
// at web browser click button
// mybutton 이 호출
// browser console 에 mybutton 찍힘