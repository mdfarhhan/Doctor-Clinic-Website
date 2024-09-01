
var phoneNumber = "7318039644";
function sendAppointment() {

    console.log("appointment called");

    var name = document.querySelector('.cname').value;
    var email = document.querySelector('.email').value;
    var ContactNumber = document.querySelector('.contactNumber').value;
    var Patient_Name = document.querySelector('.patientName').value;
    var Patient_Age = document.querySelector('.patientAge').value;
    var Patient_Gender = document.querySelector('.gender').value;
    var Address = document.querySelector('.address').value;
    var Symptoms = document.querySelector('.symp').value;
    var doctor_name = document.querySelector('.doctorname').value;


    var url = "https://wa.me/" + phoneNumber + "?text="
        + "*Name :* " + name + "%0a"
        + "*Email :* " + email + "%0a"
        + "*Contact Number :* " + ContactNumber + "%0a"
        + "*Patient Name :* " + Patient_Name + "%0a"
        + "*Patient Age :* " + Patient_Age + "%0a"
        + "*Patient Gender :* " + Patient_Gender + "%0a"
        + "*Address :* " + Address + "%0a"
        + "*Symptoms :* " + Symptoms + "%0a"
        + "*Doctor Name :* " + doctor_name + "%0a"
        + "custumer token generated successfullyyyy";

    window.open(url, '_blank').focus();

}


function sendFeedback() {
    var name = document.querySelector('.namef').value;
    var phoneNum = document.querySelector('.contactnum').value;
    var Feedback = document.querySelector('.feed').value;
    var Token = document.querySelector('.token').value;


    console.log(phoneNum);
    var url1 = "https://wa.me/" + phoneNumber + "?text="
        + "*Name :* " + name + "%0a"
        + "*Contact Number :* " + phoneNum + "%0a"
        + "*TokenNumber :* " + Token + "%0a"
        + "*Custumer Feedback :* " + Feedback + "%0a" +
        "FeedBack is Generated"

    window.open(url1, '_blank').focus();



}
