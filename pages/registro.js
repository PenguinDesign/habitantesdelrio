//FIREBASE CONFIG
var firebaseConfig = {
    apiKey: "AIzaSyC9hf_PCjpCMkUheKRcsYOUFmADDz8esV4",
    authDomain: "habitantes-1579804454963.firebaseapp.com",
    databaseURL: "https://habitantes-1579804454963.firebaseio.com",
    projectId: "habitantes-1579804454963",
    storageBucket: "habitantes-1579804454963.appspot.com",
    messagingSenderId: "775563465427",
    appId: "1:775563465427:web:9cd967d6ace9975f7cba26",
    measurementId: "G-QKZCPV40TH"
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