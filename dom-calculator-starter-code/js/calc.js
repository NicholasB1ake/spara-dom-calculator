// Number buttons defined as variables
var buttons = (document.getElementsByClassName('buttonNum'))

var b7 = (document.getElementsByClassName('buttonNum'))[0];
var b8 = (document.getElementsByClassName('buttonNum'))[1];
var b9 = (document.getElementsByClassName('buttonNum'))[2];
var b4 = (document.getElementsByClassName('buttonNum'))[3];
var b5 = (document.getElementsByClassName('buttonNum'))[4];
var b6 = (document.getElementsByClassName('buttonNum'))[5];
var b1 = (document.getElementsByClassName('buttonNum'))[6];
var b2 = (document.getElementsByClassName('buttonNum'))[7];
var b3 = (document.getElementsByClassName('buttonNum'))[8];
// operators defined as variables
var operator = (document.getElementsByClassName('operator'))

var bmult = (document.getElementsByClassName('operator'))[0];
var bdiv = (document.getElementsByClassName('operator'))[1];
var bmin = (document.getElementsByClassName('operator'))[2];
var badd = (document.getElementsByClassName('operator'))[3];
// other buttons
var equals = (document.getElementsByClassName('equals'))
var clear = (document.getElementsByClassName('buttonClear'))

var screen = document.getElementById('screen')

b7.addEventListener("click", function(){
  console.log(7)
  screen.innerHTML = '7'

});
b8.addEventListener("click", function(){
  console.log(8)
  screen.innerHTML = '8'

});

b9.addEventListener("click", function(){
  console.log(9)
    screen.innerHTML = '9'
});

b4.addEventListener("click", function(){
  console.log(4)
    screen.innerHTML = '4'
});

b5.addEventListener("click", function(){
  console.log(5)
    screen.innerHTML = '5'
});

b6.addEventListener("click", function(){
  console.log(6)
    screen.innerHTML = '6'
});

b1.addEventListener("click", function(){
  console.log(1)
    screen.innerHTML = '1'
});

b2.addEventListener("click", function(){
  console.log(2)
    screen.innerHTML = '2'
});

b3.addEventListener("click", function(){
    console.log(3)
      screen.innerHTML = '3'

});

bmult.addEventListener("click", function(){
    console.log('*')
      screen.innerHTML = '*'

});

bdiv.addEventListener("click", function(){
    console.log('/')
      screen.innerHTML = '/'


});

bmin.addEventListener("click", function(){
    console.log('-')
      screen.innerHTML = '-'

});

badd.addEventListener("click", function(){
    console.log('+')
      screen.innerHTML = '+'

});




// function add(first, second){
//   return first + second
// }
//
// var adds = add()
// console.log(adds)
