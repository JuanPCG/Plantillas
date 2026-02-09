function AbrirEnlace(enlace) {
	window.open(enlace, '_blank').focus();
}

function MoverAIDY(id_elemento) { /* Nos mueve al elemento (Posicion Y) cuando lo llamamos */
		/* Mover a ID Y */
	const elemento = document.getElementById(id_elemento);
	
	if (elemento) {
		elemento.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
			/* Al parecer en WebKit esto funciona diferente, tiene como un pequeño retraso antes de iniciar */
			/* Segun internet, esto se debe a que el motor de renderizado de WebKit almacena los efectos de */
			/* Scrolling en un buffer, y hace un 'flush' al 'x' tiempo (No se sabe, aunque estimo que es    */
			/* Unos 800-900 Milisegundos. La solucion mas elegante que he visto es meter toda la funcion en */
			/* Un setTimeout(), pero esto queda feo. En fin, cosas de Apple               ¯\_(ツ)_/¯        */
		});
	} else {
		console.warn("OOPS! No encontrado; " + id_elemento); /* Esto estaba roto. Pero como mi codigo es obviamente perfecto nunca me he topado con este elemento */
	}
} 
