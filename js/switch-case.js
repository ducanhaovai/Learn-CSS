function getErrorMessage(errorCode) {
  let mess = "";
  switch (errorCode) {
    case "E01": {
      mess = "invalid username and password";
      break;
    }

    case "E02": {
      mess = "Missing data";
      break;
    }

    case "E03": {
      mess = "Too many request";
      break;
    }

    default:
      break;
  }
  return mess;
}

console.log(getErrorMessage('E04'));
