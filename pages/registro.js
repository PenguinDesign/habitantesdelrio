//FIREBASE CONFIG
var firebaseConfig = {
    apiKey: "AIzaSyDJ_pIUkCip1Hee4oBGjGpdhye1R573ICk",
    authDomain: "habitantes-del-rio.firebaseapp.com",
    databaseURL: "https://habitantes-del-rio.firebaseio.com",
    projectId: "habitantes-del-rio",
    storageBucket: "habitantes-del-rio.appspot.com",
    messagingSenderId: "868438321890",
    appId: "1:868438321890:web:e8bc98cfaf85ad6b304cbb",
    measurementId: "G-9YB5M0TKXZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

//list form submit
var form = document.getElementById('registro');
form.addEventListener('submit', submitForm);

//submit form
function submitForm(event) {
    event.preventDefault();

    //get values
    var nombre = getInputVal('nombre');
    var apellido = getInputVal('apellido');
    var empresa = getInputVal('empresa');
    var correo = getInputVal('correo');
    var telefono = getInputVal('telefono');

    if (nombre !== '' && apellido !== '' && empresa !== '' && correo !== '' && telefono !== '') {
        //guardar contacto
        guardarContacto(nombre, apellido, empresa, correo, telefono);

        form.nombre.value = '';
        form.apellido.value = '';
        form.empresa.value = '';
        form.correo.value = '';
        form.telefono.value = '';

    } else {
        alert('Debes de llenar todos los datos');
    }
}

//function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// guardar contacto
function guardarContacto(nombre, apellido, empresa, correo, telefono) {
    db.collection("contactos").doc(`${nombre} ${apellido}`).set({
        nombre: nombre,
        apellido: apellido,
        empresa: empresa,
        correo: correo,
        telefono: telefono,
    })
        .then(function () {
            alert('Has sido registrado, te contactaremos en los siguientes días');
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            alert('Ha ocurrido un error, intente de nuevo')
        });
}