/**
 * Created by Admin on 05.01.2017.
 */




(function () {





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