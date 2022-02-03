


function mode(mode) {
  
  if (mode === 'store') {
    document.getElementById('store').style.display = "block"
    document.getElementById('storeButton').style.backgroundColor = "green"

    document.getElementById('access').style.display = "none"
    document.getElementById('accessButton').style.backgroundColor = "#EFEFEF"
    document.getElementById('remove').style.display = "none"
    document.getElementById('removeButton').style.backgroundColor = "#EFEFEF"
  }
  else if (mode === 'access') {
    document.getElementById('titleList').innerText = localStorage.getItem('titleArray');

    document.getElementById('access').style.display = "block"
    document.getElementById('accessButton').style.backgroundColor = "green"

    document.getElementById('store').style.display = "none"
    document.getElementById('storeButton').style.backgroundColor = "#EFEFEF"
    document.getElementById('remove').style.display = "none"
    document.getElementById('removeButton').style.backgroundColor = "#EFEFEF"
  }
  else if (mode === 'remove') {
    document.getElementById('remove').style.display = "block"
    document.getElementById('removeButton').style.backgroundColor = "green"

    document.getElementById('access').style.display = "none"
    document.getElementById('accessButton').style.backgroundColor = "#EFEFEF"
    document.getElementById('store').style.display = "none"
    document.getElementById('storeButton').style.backgroundColor = "#EFEFEF"
  }
  else if (mode === 'consent') {
    document.getElementById('')
  }
}