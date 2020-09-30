
var listas=[]
var contenedorPelis= document.getElementById('contenedor-lista-themovies')
var botonBuscar=document.getElementById('btnLookingFor')
function getData(url){
	contenedorPelis.innerHTML="<img src='loader.gif' class='imagen'/>"
	fetch(url)
	 .then(function(datos){
	 	return datos.json()
	 })
	 .then(function(datos)
	 	{
	 		listas=datos.data.movies
	 		construirDomMovies(listas)
	 	})
}
 function obtenerDescription(datos){
 	var cadena = datos.slice(0, 100);
 	return cadena
 }
 function obtenerGenero(e){
 	var generoTemplate=""
 	e.forEach(function(element){
 		generoTemplate=generoTemplate+`-<b>${element}</b>- `
 	})
 	return generoTemplate
 }
 function construirDomMovies(datos){
	 	var templateConstruido=""
	 	datos.forEach(function(elemento,index){
	 	    var templateInicial=`<div class="col-md-4">
	          <div class="card mb-4 shadow-sm">
	          	<h3 onclick="verDetalles(listas[${index}])">${elemento.title}</h3>
	            <div class="card-body">
	            	<img src="${elemento.medium_cover_image}" onclick="verDetalles(listas[${index}])" />
	              <p class="card-text">${obtenerDescription(elemento.description_full)}...<span onclick="verDetalles(listas[${index}])">leer mas </span> </p>
	              <p>generos: ${obtenerGenero(elemento.genres)}</p>
	            </div>
	          </div>
	        </div>`
	        templateConstruido=templateConstruido+templateInicial
	        contenedorPelis.innerHTML=templateConstruido
	 	})
	 }
 function BuscarDesdeInput(){
	var datoIngresado= search.searchInput.value
	getData('https://yts.mx/api/v2/list_movies.json?query_term='+datoIngresado)
	console.log('https://yts.mx/api/v2/list_movies.json?query_term='+datoIngresado)
 }	 
getData('https://yts.mx/api/v2/list_movies.json')	
document.addEventListener('keyup',BuscarDesdeInput) 
botonBuscar.addEventListener('click',BuscarDesdeInput)