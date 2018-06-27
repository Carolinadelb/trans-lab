/* login */
let go = () => { //solo funciona con este nombre y contrasela
  if (document.form.password.value ==='12345678' && document.form.login.value ==='usuario@mail.com'){ 
          window.open('home.html') //abre página index si se pone correcto

      } 
      else{ 
           alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
      } 
  } 
