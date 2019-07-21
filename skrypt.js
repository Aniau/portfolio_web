window.onscroll = function() {myFunction()};

function myFunction() {
var cala=(getDocHeight());
console.log("1. cala:"+cala);
  var winScroll =document.documentElement.scrollTop;
  console.log("1. scrollTop:"+winScroll);
  var height = document.documentElement.clientHeight;
  console.log("2. client height:"+height);
  var scrolled = (winScroll / (cala-height)) * 100;
  console.log("3. scrolled:"+scrolled+ "%");
  document.getElementById("myBar").style.width = scrolled + "%";
}

function getDocHeight() 
{
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
 );
}