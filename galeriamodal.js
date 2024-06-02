console.log("listen")

function mostrarModal (event) {
   var myModal = new boostrap.Modal(document.getElementById('myModal'));
   myModal.show();
}

function cerrarModal (event) {
   var myModal = new boostrap.Modal(document.getElementById('myModal'));
   myModal.hide();
}

function asignarComportamiento (event) {
   var bottonVer = document.querySelectorAll(".bottonAbrir");
   bottonVer.forEach(bottonAbrir => {
      bottonAbrir.addEventListener("click", mostrarModal);
   });
}

document.addEventListener('DOMContentLoaded',asignarComportamiento);