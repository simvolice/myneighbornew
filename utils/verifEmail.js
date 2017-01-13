/**
 * Created by Admin on 13.01.2017.
 */

var EmailTemplates = require('swig-email-templates');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport('smtp://support%40efflife.kz:1989aaaAAA@194.87.237.153');
var path = require('path');

var templates = new EmailTemplates({


    root: path.join(__dirname, '../templates'),
    text: false


});






module.exports = {

    sendActivateEmail: function (objParams, res) {



        console.log(objParams);




        templates.render('activateEmail.html', objParams, function(err, html) {



            if(err){
                return console.log(err);
            }



            var mailOptions = {
                from: '<info@efflife.kz>',
                to: objParams.email,
                subject: 'Активация email',

                html: html
            };



            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    return console.log(error);
                }



                console.log('Message sent: ' + info.response);
            });



        });











    }








};