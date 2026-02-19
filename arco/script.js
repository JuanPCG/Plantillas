function cargar() {
	resetear_todos() /* Primero borramos todo lo que hay en la página */
	try { /* Como en Python */
		let pg = new URLSearchParams(document.location.search).get("pg").toLowerCase(); /* Intentamos usar el parametro pg si esta en el url para cambiar la página al cargar*/
		if (["primero","segundo","tercero"].includes(pg)) { /* Si esta en la lista de página (ACTULIZA ESTO SI CAMBIAS ALGO!!) seguimos */
			console.log("Modo depuracion, cargando la parte solicitada"); /* Mostrar un mensajito por consola y cambiamos a la página pedida */
			cambiar(pg,"Inicio");
		} else { /* Si no, nos quedamos en la página de inicio */
			cambiar("primero","Inicio");
		}
	} catch (error) { /* Si no tenemos el argumento PG en la barra de navegaciones */
		console.log("Llamado sin argumentos"); /* TAMBIEN mandamos un mensajito, y cargamos la página de inicio */
		cambiar("primero","Inicio");
	}
}

function resetear_todos() {
	const pagsbloqs = ["primero","segundo","tercero"] /* Hacemos todo esto con un for, queda mas elegante */
	pagsbloqs.forEach((pag) => { /* Para cada elemento del array de bloques de páginas */
		document.getElementById(pag).classList.remove("activo"); /* Le quitamos la clase activo y no activo */
		document.getElementById(pag).classList.remove("no_activo");
		document.getElementById(pag).classList.remove("animacion-fade"); /* Le quitamos la transicion, si aun se esta ejecutando */
		document.getElementById(pag+"_bloque").style.display = "none"; /* Los ocultamos */
	});
}

function cambiar(cual, nombrepag) {
	resetear_todos() /* Primero, borramos */
	void document.getElementById(cual+"_bloque").offsetWidth; /* Para que recargue el tamaño del elemento, que no deberia hacer falta, pero por si acaso */
	document.getElementById(cual+"_bloque").classList.add("animacion-fundido") /* Añadimos la transicion primero, que es lo que mas tarda */
	document.getElementById(cual).classList.add("activo") /* Ponemos el enlace activo, lo que lo pone en azul en la barrita */
	document.getElementById(cual+"_bloque").style.display = "block"; /* Lo ponemos en la pantalla, quitando la invisibilidad/oculto */
	document.title = "Arcomática | " + nombrepag /* Actualizamos la página para que tenga un nombre mas descriptivo */
	setTimeout(() => { /* 400 milisegundos para que haga la transicion completa, aunque el navegador nos roba unos milisegundos, pero no importa. */
		document.getElementById(cual+"_bloque").classList.remove("animacion-fundido")
	}, 400);
}
