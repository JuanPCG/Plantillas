let EnSafari=false
const tema = localStorage.getItem('tema') /* En teoria si esto falla no pasa nada */



function AbrirEnlace(enlace) {
	window.open(enlace, '_blank').focus();
}

function MoverAIDY(id_elemento) {
	const elemento = document.getElementById(id_elemento);
	if (elemento) {
		if (EnSafari) {
			PosicionE = elemento.getBoundingClientRect();
			window.scrollTo({
				"top": PosicionE.top,
				"behavior": "smooth"
			});
		}
		else {
			elemento.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	} else {
		console.warn("OOPS! No encontrado; " + id_elemento); /* Esto estaba roto. Pero como mi codigo es obviamente perfecto nunca me he topado con este elemento */
	}
}

function detectar_safari() {
	if (! navigator.safari) {
		/* console.log("No estamos en safari") */
		EnSafari = false
	} else {
		/* console.log("Estamos en safari") */
		/* document.getElementById("Cambiame").innerHTML="Hola, estas usando Safari" */
		EnSafari = true
	}
	if (tema == 'oscuro') {
		ModoOscuro();
	}
}

function ModoOscuro() {
	document.body.classList.toggle('modooscuro');
	document.body.classList.toggle('mod');
	document.getElementById("nav").classList.toggle("modooscuro_minicont")
	if (document.body.classList.contains("modooscuro")) {
		localStorage.setItem('tema', "oscuro");
	} else {
		localStorage.setItem('tema', "claro");
	}
}
