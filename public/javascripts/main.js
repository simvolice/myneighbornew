/**
 * Created by Admin on 05.01.2017.
 */


function sendDataFromEnter() {

    var valueEmail = document.getElementById("email").value;

    var valuePass = document.getElementById("pass").value;







    var json = JSON.stringify({
        email: valueEmail,
        pass: valuePass
    });


    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json; charset=utf-8');

    var myInit = {

        method: 'POST',
        headers: myHeaders,
        body: json,
        cache: 'default'

    };

    var myRequest = new Request('/login', myInit);

    fetch(myRequest)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {

            console.log(result);

        });



}

(function () {




    var pressEnter = document.getElementById("pressenter");

    pressEnter.addEventListener('click', function (e) {


        sendDataFromEnter();

    });








    var textErrorElement = document.getElementById("text_error");

    var dialogError = document.getElementById("dialogerror");





    if (!navigator.geolocation){
        dialogError.showModal();
        textErrorElement.innerHTML = "<p>Ваш браузер не поддерживает геолокацию. Пожалуйста, обновите свою версию браузера!<a href='http://browsehappy.com/'>Обновить</a> </p>";
        dialogError.querySelector('.close').addEventListener('click', function() {
            dialogError.close();
        });
    }


    function success(position) {



        var coordination = {

        latitude:  position.coords.latitude,
        longitude: position.coords.longitude

        };




        localStorage.setItem("coordination", JSON.stringify(coordination));





    };

    function error() {


        dialogError.showModal();
        textErrorElement.innerHTML = "<p>Не удалось получить Ваши координаты.</p>";
        dialogError.querySelector('.close').addEventListener('click', function() {
            dialogError.close();
        });



    };



    navigator.geolocation.getCurrentPosition(success, error);




    L.mapbox.accessToken = 'pk.eyJ1IjoibXVsbGFudXIiLCJhIjoiY2lpNXN6cWswMDA1NXZzbHgyb3gyajUwMSJ9.uWKRpybzUN08rPVG0jp79A';
    var map = L.mapbox.map('map', 'mapbox.streets')
        .setView([51.133333, 71.433333], 10);



    var dialogEnter = document.getElementById("dialogenter");

    var btnEnter = document.getElementById("btnenter");


    if (! dialogEnter.showModal) {
        dialogPolyfill.registerDialog(dialogEnter);
    }



    btnEnter.addEventListener('click', function (e) {



        dialogEnter.showModal();


    });





    var showModalButton = document.getElementById('btnshow');





    var dialog = document.getElementById('dialoghelp');




    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }




    showModalButton.addEventListener('click', function() {
        dialog.showModal();
    });





    dialog.querySelector('.close').addEventListener('click', function() {
        dialog.close();
    });





})();