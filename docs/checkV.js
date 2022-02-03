
function checkV() {
  moveOn1 = true
for ( i = 0; i <= dataArrayLength; i++) {
  
    if (data === dataArray[i]) {
      window.alert('Sorry this data or title already exists. You can access this in access mode.')
      data = ''
      moveOn1 = false
    }
    if (title === titleArray[i]) {
      window.alert('Sorry this data or title already exists. You can access this in access mode.')
      title = ''
      moveOn1 = false
    }
  }
}