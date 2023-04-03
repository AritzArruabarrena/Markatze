function validatu(){
    var DNI = document.getElementById("DNI");
    var psw = document.getElementById("psw");
    var NIE = document.getElementById("DNI");

    var nieExpReg = /^[XYZ]\d{7}[a-zA-Z]$/;
    var DNIRegex = /^\d{8}[a-zA-Z]$/;
    var pswRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;

    if(DNIRegex.test(DNI)){
        alert("Please enter your DNI");
        return false;
    }

    if(pswRegex.test(psw)){
        alert("Please enter your password");
        return false;
    }


    if(!nieExpReg.test(NIE)){
        alert("Please enter your NIE");
        return false;
    }

    if(!DNI == psw){
        alert("El dni y la contraseña no pueden ser los mismos!");
        return false;
    }
    return true;
}