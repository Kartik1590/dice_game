// var player1= prompt('Name of player1');
// var player2= prompt('Name of player2');
// document.getElementById('play1').innerHTML=player1;
// document.getElementById('play2').innerHTML=player2;
//
// events.addEventListener('click',function (event){
//   var events = document.getElementsByClassName('but1')
//   var select = Math.random()*6;
//   var num=Math.floor(select)+1;
//   switch (num) {
//     case 1:
//       document.getElementsByClassName('img1').src="images/dice1.png"
//       break;
//     case 2:
//       document.getElementsByClassName('img1').src="images/dice2.png"
//       break;
//     case 3:
//       document.getElementsByClassName('img1').src="images/dice3.png";
//       break;
//     case 4:
//       document.getElementsByClassName('img1').src="images/dice4.png";
//       break;
//     case 5:
//       document.getElementsByClassName('img1').src="images/dice5.png";
//       break;
//     case 6:
//       document.getElementsByClassName('img1').src="images/dice6.png"
//
//       break;
//     default:
//       document.getElementsByClassName('img1').src="images/dice1.png"
//       break;
//   }
//   switch (num) {
//     case 1:
//       document.getElementsByClassName('img2').src="images/dice1.png"
//       break;
//     case 2:
//       document.getElementsByClassName('img2').src="images/dice2.png"
//       break;
//     case 3:
//       document.getElementsByClassName('img2').src="images/dice3.png";
//       break;
//     case 4:
//       document.getElementsByClassName('img2').src="images/dice4.png";
//       break;
//     case 5:
//       document.getElementsByClassName('img2').src="images/dice5.png";
//       break;
//     case 6:
//       document.getElementsByClassName('img2').src="images/dice6.png"
//
//       break;
//     default:
//       document.getElementsByClassName('img2').src="images/dice1.png"
//       break;
// }});
var randomNum=Math.floor(Math.random()*6)+1;
var imageSource= "dice" + randomNum + ".png";
var source="images/" + imageSource;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",source);

var randomNum1=Math.floor(Math.random()*6)+1;
var imageSource1= "dice" + randomNum1 + ".png";
var source1="images/" + imageSource1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",source1);

if(randomNum>randomNum1){
  document.getElementById('play').textContent='Player1 Wins'
}
else if(randomNum1>randomNum){
  document.getElementById('play').textContent='Player2 Wins'
}
else{
  document.getElementById('play').textContent='Draw'
}
