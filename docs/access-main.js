
function accessData() {
  document.getElementById('titleList').innerText = localStorage.getItem('titleArray');

  title = document.getElementById('accessTitle').value;

  let fTitleArray = localStorage.getItem(title)

  console.log(fTitleArray)

  if (fTitleArray === null) {
    window.alert("This title does not exist")
    fTitleArray = "";
  }
  else {
    document.getElementById('dataOutputText').innerText = "The data assigned to " + title + " is: ";

   document.getElementById('dataOutput').innerText =  fTitleArray;
  }
}

function showTitles() {
  document.getElementById('titleList').innerText = localStorage.getItem('titleArray');
}