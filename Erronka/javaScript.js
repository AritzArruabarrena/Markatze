function eguna() {
    var day = "Bazkaria: -Patatak errioxar erara , -Zizazerbak betxamelarekin eta arraultz potxatuarekin  Afaria: -Patatak errioxar erara -Zizazerbak betxamelarekin eta arraultz potxatuarekin";
    switch (new Date().getDay()) {
      case 0:
        day = "Bazkaria: -Patatak errioxar erara , -Zizazerbak betxamelarekin eta arraultz potxatuarekin  Afaria: -Patatak errioxar erara -Zizazerbak betxamelarekin eta arraultz potxatuarekin";
        break;
      case 1:
          day = "Bazkaria: -Patatak errioxar erara , -Zizazerbak betxamelarekin eta arraultz potxatuarekin Afaria: -Patatak errioxar erara -Zizazerbak betxamelarekin eta arraultz potxatuarekin";
        break;
      case 2:
          day = "Bazkaria: -Patatak errioxar erara , -Zizazerbak betxamelarekin eta arraultz potxatuarekin  Afaria: -Patatak errioxar erara -Zizazerbak betxamelarekin eta arraultz potxatuarekin";
        break;
      case 3:
          day = "Bazkaria: -Patatak errioxar erara , -Zizazerbak betxamelarekin eta arraultz potxatuarekin  Afaria: -Patatak errioxar erara -Zizazerbak betxamelarekin eta arraultz potxatuarekin";
        break;
      case 4:
          day = "Bazkaria: -Patatak errioxar erara , -Zizazerbak betxamelarekin eta arraultz potxatuarekin  Afaria: -Patatak errioxar erara -Zizazerbak betxamelarekin eta arraultz potxatuarekin";
        break;
      case 5:
          day = "Bazkaria: -Patatak errioxar erara , -Zizazerbak betxamelarekin eta arraultz potxatuarekin  Afaria: -Patatak errioxar erara -Zizazerbak betxamelarekin eta arraultz potxatuarekin";
        break;
      case 6:
          day = "Bazkaria: -Patatak errioxar erara , -Zizazerbak betxamelarekin eta arraultz potxatuarekin  Afaria: -Patatak errioxar erara -Zizazerbak betxamelarekin eta arraultz potxatuarekin";
    }
    document.getElementById("demo").innerHTML = "Gaurko menua: " + day;
  }
  