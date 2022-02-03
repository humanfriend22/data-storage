let titleArray = [];
let dataArray = [];
let moveOn1;

let title;
let data;
let dataArrayLength;

function proceed() {
  document.getElementById('container').style.display = "none";
  document.getElementById('store').style.display = "block";
  document.getElementById('navBar').style.display = "block";
}

window.addEventListener('load', (event) => {

  
  
  
});
if (localStorage.getItem('firstTime') != false || null) {
    console.log(localStorage.getItem('firstTime'))
    mode('consent');
    localStorage.setItem('firstTime', false)
  }
  else if (localStorage.getItem('firstTime') === false) {
    console.log(localStorage.getItem('firstTime'))
    mode('store');
  }