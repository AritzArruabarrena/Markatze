function validarDocumento(identificacion) {
  // Eliminar espacios en blanco al principio y al final
  identificacion = identificacion.trim();

  // Validar DNI
  var dniExpReg = /^\d{8}[a-zA-Z]$/;
  if (identificacion.match(dniExpReg)) {
    var dniNum = identificacion.substr(0, 8);
    var dniLetra = identificacion.substr(8, 1).toUpperCase();
    var letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (dniLetra == letrasDNI.charAt(dniNum % 23)) {
      return true; // DNI válido
    } else {
      alert("La letra del DNI no es correcta.");
      return false; // DNI inválido
    }
  }

  // Validar NIE
  var nieExpReg = /^[XYZ]\d{7}[a-zA-Z]$/;
  if (identificacion.match(nieExpReg)) {
    var nieNum = identificacion.substr(1, 7);
    var nieLetra = identificacion.substr(8, 1).toUpperCase();
    var nieLetraInicio = identificacion.substr(0, 1);
    switch (nieLetraInicio) {
      case "X":
        nieNum = "0" + nieNum;
        break;
      case "Y":
        nieNum = "1" + nieNum;
        break;
      case "Z":
        nieNum = "2" + nieNum;
        break;
    }
    var letrasNIE = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (nieLetra == letrasNIE.charAt(nieNum % 23)) {
      return true; // NIE válido
    } else {
      alert("La letra del NIE no es correcta.");
      return false; // NIE inválido
    }
  }

  // Validar pasaporte
  var pasaporteExpReg = /^[a-zA-Z]{3}\d{6}$/;
  if (identificacion.match(pasaporteExpReg)) {
    return true; // Pasaporte válido
  }

  // Si no es un DNI, NIE o pasaporte válido, muestra una alerta y devuelve falso
  alert("El documento introducido no es un DNI, NIE o pasaporte válido.");
  return false;
}