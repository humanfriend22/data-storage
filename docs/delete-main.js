let deleteTitle;

function deleteData() {

  deleteTitle = document.getElementById('removeTitle').value;
  console.log(deleteTitle)

  if (titleArray[localStorage.getItem(deleteTitle)] === null) {
    window.alert('This title does not exist.')
    title = "";
  }
  else {
    document.getElementById('all').style.display = "none"
    document.getElementById('removeConfirm').style.display = "block"
  }

}

function yes() {

  for (i = 0; i <= titleArray.length; i++) {
    if (titleArray[i] === deleteTitle) {
      //splice method here
      titleArray.splice(i, 1)
      console.log(titleArray)
    }
  }

  for (i = 0; i <= dataArray.length; i++) {
    if (titleArray[i] === localStorage.getItem(deleteTitle)) {
      //splice method here
      dataArray.splice(i, 1)
      console.log(dataArray)
    }
  }

  localStorage.removeItem(deleteTitle)
  localStorage.setItem('titleArray', titleArray)
  localStorage.setItem('dataArray', dataArray)
  document.getElementById('all').style.display = "block"
  document.getElementById('removeConfirm').style.display = "none"
  window.alert('Deletion of ' + deleteTitle + " succesful.")
  deleteTitle = ""

}
function no() {
  deleteTitle = ""
  document.getElementById('all').style.display = "block"
  document.getElementById('removeConfirm').style.display = "none"
}