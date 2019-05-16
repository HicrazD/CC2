var getData= function(){
    var nombre = document.getElementById("nombre").value;
    var apellidop = document.getElementById("apellidop").value;
    var apellidom = document.getElementById("apellidom").value;
    var edad = document.getElementById("apellidom").value;
    var curp = document.getElementById("CURP").value;
    var fecha = document.getElementById("date").value;
    //var sexo = document.getElementById("sexo").value;
    var nomuser = document.getElementById("nameusuario").value;
    var contraseña = document.getElementById("contraseña").value;

    var sexocombo = document.getElementById("sexo");
    var selected = sexocombo.options[sexocombo.selectedIndex].text;
    var adcombo = document.getElementById("Tipousuario");
    var selecAdmi = adcombo.options[adcombo.selectedIndex].text; 
    
    if(nombre == ""){
        document.getElementById("nombre").focus();
    }else{
        if(apellidop == ""){
            document.getElementById("apellidop").focus();
        }else{
            console.log(nombre + " " + apellidop + " " + apellidom + " SEXO: " + selected + " " + edad + " " + curp + " " + fecha + 
             " " + selecAdmi + " " + nomuser + " " + contraseña); 
            /*var registro = new Registrar(nombre,apellidop,apellidom,selected,"PHP/insert.php");
            registro.AddRegistrar();
            var nombre = document.getElementById("nombre").value = "";
            var apellidop = document.getElementById("apellidop").value = "";
            var apellidom = document.getElementById("apellidom").value = "";
            document.getElementById("nombre").focus();  */ 
        }
    
    }
}