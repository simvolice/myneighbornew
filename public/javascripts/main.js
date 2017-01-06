/**
 * Created by Admin on 05.01.2017.
 */




(function () {



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