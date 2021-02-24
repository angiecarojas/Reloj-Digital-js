function tiempo() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    var curWeekDay = dias[today.getDay()];
    var curDay = today.getDate();
    var curMonth = meses[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ tiempo() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function CambioDeColor() {

    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    if(hr <= 9) hr = '0'+hr;
    if(min <= 9) min = '0'+min;
    if(sec <= 9) sec = '0'+sec;

    var color = "#"+hr+min+sec;

    var propiedades = document.getElementById("clock");

    propiedades.style.color = color;

   //document.body.style.color = green;

    document.getElementById("clock").innerHTML = color;

    setTimeout(CambioDeColor, 1000);

}

CambioDeColor();