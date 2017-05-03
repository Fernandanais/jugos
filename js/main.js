function validar(){
	function nombre(){
		var nombre = document.getElementById("name").value;
		/* validar que el nombre no esté vacio*/
		if(nombre == "" || nombre == undefined || nombre.length == 0){
			alert("Error, debe ingresar nombre");
		

		/*validar que 1° caracter sea mayúscula*/
		}else if(nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
			alert("Recuerda que el nombre debe comenzar con mayúscula");

		}else if(/[0-9]/.test(nombre)){
			alert("No debe ingresar numeros");

		}else{
			alert("nombre ingresado correctamente");
		}

		/*validar que sean sólo letras*/
//Expresion regular validar sólo letras /[0-9]/.test(nombre)
	}
	nombre();

	function password(){
		var clave =  document.getElementById("input-password").value;
		// no vacio
		// que no sea 1234 ni password
		// que tenga al menos 6 caracteres
		if(clave == "" || clave == undefined || clave.length == 0){
		alert("Error, debe ingresar nombre");
		
		}else if(clave == "1234" || clave == "4321" || clave == "password"){
			alert("Error en la contraseña");
		}else if(clave.length < 6){
			alert("Debe contener al menos 6 caracteres");
		}
	}	
	  password();

	 function opciones(){
	  	var seleccion = document.getElementsByTagName("select");
	  	for (var i = 0; i < seleccion.length; i++) {
	  		if(seleccion[i].value =="0"){
	  			alert("Debe elegir una  opción");
	  		}

	  		/*var sel = document.getElementsByClassName("form-control")[2];
	  		for (var i = 0; i < sel.length; i++) {
	  			if(sel[i].value =="0"){
	  			alert("Debe elegir una  opción");
	  		}*/

	  	}
	  }
	  opciones();
}