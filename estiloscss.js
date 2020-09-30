    var fondo = document.getElementById('fondonegro')
 	var modal = document.getElementById('modalito')
function verDetalles(objeto){
 	estilosEntradaFondoYModal()
 	modal.innerHTML=`<h2>${objeto.title}</h2>
	<img src="${objeto.medium_cover_image}">
	<p>${objeto.description_full}</p>
	`
 }
  function estilosEntradaFondoYModal(){
 	fondo.style.display='block'
 	modal.style.display='flex'
 	modal.classList.add('modalito')
 	modal.classList.add('verModal')
 }
  function estilosSalidaFondoYModal(){
 	fondo.style.display='none'
 	modal.style.display='none'
 	modal.classList.remove('verModal')
 }