/**
 * Created by Admin on 05.01.2017.
 */




(function () {

    function sendDataFromEnter() {

        var valueEmail = document.getElementById("email").value;

        var valuePass = document.getElementById("pass").value;


        var ObjForForm = {

            email: valueEmail,
            pass: valuePass


        };

        var xhr = new XMLHttpRequest();



        var json_upload = "globObject=" + JSON.stringify(ObjForForm);




        xhr.open("POST", '/register', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(json_upload);


        xhr.onreadystatechange = function () {

               console.log(xhr.responseText)



        }


    }


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