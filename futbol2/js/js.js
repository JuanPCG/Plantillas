let EnSafari=false
let ElementosTemaOscuroCAJAS = ["co1","co2","co3", "jco1", "jco2", "jco3", "jco4", "jco5", "jco6", "jco7", "jco8", "jco9", "jco10", "jco11", "jco12", "Noticia1", "Noticia2", "Noticia3", "ENLACES_SUB", "fondo"] /* Los ultimos son los de prueba */
const tema = localStorage.getItem('tema') /* En teoria si esto falla no pasa nada */
let Botones_Transicion = ["b0","b1","b2","b3","b4","b5"]


/* 			COSAS INTERESANTES!!

	document.querySelectorAll('(.CLASE)').forEach(elemento => { 
		console.log(elemento) // Lo que quiera hacer con el elemento aqui
	});


     * Esto me sirve por si quisiera poner una clase 'fantasma', por ejemplo, para elemento que tengo que poner en modo oscuro
     * Le añado una clase vacia 'OSCURECER' o 'OSCURECER_CAJA', y cuando lo vaya a poner en oscuro me ahorro los arrays de elementos
     * querySelectorAll nos devuelve un proto-array con todos los elementos que tengan esa clase


	(const/let) QuiereNegro = window.matchMedia('(prefers-color-scheme: dark)').matches;

	* Esto devuelve true si el usuario tiene el dispositivo en modo oscuro, a lo mejor puede servir para cambiar a modo oscuro ignorando
	* El boton y el LocalStorage
	* La comprobacion seria tal que:
	* Prefiere modo oscuro (Y!!!) tiene modo oscuro en el local storage ? Pone modo oscuro
	* Solo tiene modo oscuro en el local storage ? Pone modo oscuro
	* Local Storage esta vacio PERO prefiere modo oscuro ? Pone modo oscuro
	* Local Storage tiene tema claro PERO prefiere modo oscuro ? **NO** pone el modo oscuro.



    (let/const) temaCSS = document.getElementById('<LINK CSS>');
    
    * Con esto puedo ver el atributo href (temaCSS.getAttribute('href')) y si es algo como "CSS-CLARO.css"
    * Pues lo cambiamos a "CSS-OSCURO.css", duplicando los archivos, pero haciendolo mas facil de mantener.
    * Aunque no se recomienda usar esto, por lo de doblar los archivos y tal.
*/

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

function detectar_safari() { /* En realidad esto lo hace todo al principio */
	if (tema == 'oscuro') {
		ModoOscuro();
	}

	window.setTimeout(() => { /* La espara es para que no salga la transicion esa tan fea de arranque */
		Botones_Transicion.forEach((boton) =>
			document.getElementById(boton).classList.toggle("transicion-colortexto-azul")
		);

	}, 1);

	if (! navigator.safari) {
		EnSafari = false
	} else {
		EnSafari = true
	}
}

function ModoOscuro() {	
	document.body.classList.toggle('modooscuro');
	document.body.classList.toggle('mod');
	document.getElementById("nav").classList.toggle("modooscuro_minicont")
	ElementosTemaOscuroCAJAS.forEach((Caja) =>
		document.getElementById(Caja).classList.toggle("f_oscuro_n1")
	);
	if (document.body.classList.contains("modooscuro")) {
		localStorage.setItem('tema', "oscuro");
	} else {
		localStorage.setItem('tema', "claro");
	}
	return true
}
