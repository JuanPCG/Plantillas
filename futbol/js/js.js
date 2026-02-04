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
		});
	} else {
		console.warn("OOPS! No encontrado; " + idElemento);
	}
} 
