// document.getElementById("button").addEventListener("click", goToYahoo);
// document.getElementById("button").addEventListener("auxclick", goToYahoo_Blank);
// function goToYahoo() {
// 	this.href = "https://www.yahoo.com/"	
// }
// function goToYahoo_Blank(){
// 		this.href = "https://www.yahoo.com/";
// 		this.target = "_Blank";
// 	}
document.getElementById("num1").addEventListener("keyup", myFunction);
document.getElementById("num2").addEventListener("keyup", myFunction);
function myFunction() {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var rez = +a + +b;
  document.getElementById("rez").value = rez;
}