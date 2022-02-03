function checkForReserveredKeyWords() {
const notAllowed = "This title or data is not allowed as these titles are used in the program of this site."
  switch (title) {

    case 'titleArray': {
      window.alert(notAllowed)
      break;
    }
    case 'dataArray': {
      window.alert(notAllowed)
      break;
    }
    case 'jsTitle': {
      window.alert(notAllowed)
      break;
    }
  }

  switch (data) {

    case 'titleArray': {
      window.alert(notAllowed)
      break;
    }
    case 'dataArray': {
      window.alert(notAllowed)
      break;
    }
    case 'jsTitle': {
      window.alert(notAllowed)
      break;
    }
  }
}