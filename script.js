
const nombre = document.getElementById("nombre");
const materias = document.getElementById("materias"); 
const email = document.getElementById("email")
const error = document.getElementById("error");

validarInfo = () =>{
 if(nombre.value == "" || nombre.value != "" && !(nombre.value.length >= 5)){
     error.textContent = " Ingrese su nombre";
     error.classList.add("fas","fa-times");
}else if(materias.value == "" || materias.value != "" && !(materias.value.length >= 5)){
    error.textContent = " Complete el campo materias";
    error.classList.add("fas","fa-times");

 }else if(email.value == "" || email.value != "" && !(email.value.length >= 5)){
    error.textContent = " Ingrese su correo electronico";
    error.classList.add("fas","fa-times");

 }else if( email.value != "" && !email.value.includes("@") && nombre.value.length > 6){
    error.textContent = " Ingrese su correo electronico correctamente";
    error.classList.add("fas","fa-times");
 }else if(!email.value.substring(email.value.indexOf("@"), email.value.Length).includes(".")){
    error.textContent = " Ingrese su correo electronico correctamente";
    error.classList.add("fas","fa-times");
 }else if(email.value.substring(email.value.indexOf("@"), email.value.Length).includes(".") && !(email.value.substring(email.value.indexOf("."), email.value.Length).length > 1)){
    error.textContent = " Ingrese su correo electronico correctamente";
    error.classList.add("fas","fa-times");
 }
 else{
     error.textContent = "";
     error.classList.remove("fas","fa-times");
     alert("Su solicitud a sido enviado");
    nombre.value = "";
    materias.value = "";
    email.value = "";
 }

}


enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    validarInfo();
})
