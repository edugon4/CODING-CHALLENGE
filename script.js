function registrar (){
   

    var email = document.getElementById('email').value; 
    var contrasena = document.getElementById('contrasena').value; 

    firebase.auth().createUserWithEmailAndPassword(email, contrasena) 
    .then(function(){
        verificar()
    })
    
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    }); 

} 

function ingreso (){ 

    var email2 = document.getElementById('email2').value; 
    var contrasena2 = document.getElementById('contrasena2').value; 

    firebase.auth().signInWithEmailAndPassword(email2, contrasena2).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

} 

function observador (){ 

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) { 
            console.log('existe usuario activo');
          // User is signed in. 
          aparece (user);
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });

} 

observador(); 

function aparece (user){
    
    var user = user;
    var contenido = document.getElementById('contenido');  

    if(user.emailVerified){
    contenido.innerHTML =  `
    <p>Bienvenido!</p>
    <button onclick="cerrar()">Cerrar Sesion</button>  
     `; 
    window.open('home.html');
    } 

}   

// function archivos (){ 

//     document.getElementById('area').innerHTML = ` 

//     <h4>Bienvenido!</h4> 
    
//     `;

 

// }

function cerrar (){ 

    firebase.auth().signOut()
    .then(function(){
        console.log('saliendo...')
    })


} 

function verificar () { 

    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
    // Email sent.
    }).catch(function(error) {
    // An error happened.
    });

} 

firebase.initializeApp({
    apiKey: "AIzaSyCl-HeUleftmFg4-0L5k2QkdqOfyyPfiak",
    authDomain: "intento-coin.firebaseapp.com",
    projectId: "intento-coin",
  
}); 

var db = firebase.firestone(); 

//leer 
db.collection("archivos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});