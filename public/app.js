var socket = io();
const form = document.getElementById('form')

function m(){
	return 
}

form.onsubmit= function(e){
	e.preventDefault()
	let name = document.getElementById('name').value
	if (name==='') {
		alert('Debes ingresar un nombre amiguito')
	}else{
		let message = document.getElementById('m').value 
		socket.emit('chat message', {name:name, message:message})
		document.getElementById('m').value = ''	
	}
	return false;
}
socket.on('chat message', function(msg){
	document.getElementById('messages').innerHTML += `<li><strong>${msg.name}:</strong> ${msg.message}</li>`
});