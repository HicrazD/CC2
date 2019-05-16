function Registrar(nombre,apellidop,apellidom,sexo,action){
this.action = action;
this.nombre = nombre;
this.apellidop = apellidop;
this.apellidom = apellidom;
this.sexo = sexo;

}
Registrar.prototype.AddRegistrar = function(){
    //console.log(this.nombre + " " + this.apellidop + " " + this.apellidom + " " + this.sexo);

  $.ajax({
      type: "POST",
      url: this.action,
      data: {nombre: this.nombre, apellidop: this.apellidop, apellidom: this.apellidom, sexo: this.sexo},
      success: function(responde){
        alert(responde);
        if(responde == 1)
        alert("Datos inserados");
    } 

  });

}