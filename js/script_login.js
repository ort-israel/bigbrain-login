$(document).ready(function () {

    // the form action only has the course id. It needs also the course_section ID, but that's determined by the hash of the url:
    var course_section = document.location.hash.replace("#", "");
    var form_action = $('form#login').attr('action') + "?" + course_section;
    $('form#login').attr('action', form_action);

    // "login as guest" button works with regular guest, not supreguest, so just fill the input fields with guest value, and invoke the submit
    $('#guestButton').click(function () {
        $('.loginform input').val('guest');
        $('#loginbtn').click();
    });
});

