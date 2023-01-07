import AirDatepicker from 'air-datepicker';


var bttn = document.getElementById("submitButton");

function ShowCal()
{
    new AirDatepicker('#input', {
        range: true,
        multipleDatesSeparator: ' - '
    });
}

bttn.onclick = ShowCal();