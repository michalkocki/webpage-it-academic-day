var countDownDate = new Date("Apr 10, 2018 08:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


    document.getElementById("timer").innerHTML = days + " dni i " + hours + " godzin";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Wydarzenie właśnie trwa!";
    }
}, 1000);