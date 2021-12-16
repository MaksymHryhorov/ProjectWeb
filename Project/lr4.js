function alerted() {
    new Date('2002-07-28T21:23');
    const ad = document.getElementById('text').value
    const now = new Date();
    const asd = new Date(ad)
    differenceInWeeks(now, asd)

}


function differenceInWeeks(d1, d2) {
    const t2 = d2.getTime();
    const t1 = d1.getTime();

    alert('Number of weeks since birthday: ' + parseInt((t1 - t2) / (24 * 3600 * 1000 * 7)));
}

function passedFromNY() {
    const date = new Date('2021-01-01T00:00');
    let currentDate = Date.parse(new Date());
    let days = (currentDate - Date.parse(date)) / 86400000;
    alert(Math.round(days));
}



function startTime() {
    let tm = new Date();
    let h = tm.getHours();
    let m = tm.getMinutes();
    let s = tm.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timer').innerHTML = h + ":" + m + ":" + s;
    setTimeout('startTime()', 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function today() {
    const d = new Date();

    const day = ["Воскресенье", "Понедельник", "Вторник",
        "Среда", "Четверг", "Пятница", "Суббота"];

    const month = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];


    document.getElementById('today').innerHTML = day[d.getDay()] + " " + d.getDate() + " " + month[d.getMonth()]
        + " " + d.getFullYear() + " г.";

}

function basicPopup(url) {
    window.open(url, 'popUpWindow',
        'height=600,width=800');
}

function startTime2() {
    const tm = new Date();
    const h = tm.getHours();
    let m = tm.getMinutes();
    let s = tm.getSeconds();
    m = checkTime2(m);
    s = checkTime2(s);
    document.getElementById('timer2').innerHTML = h + ":" + m + ":" + s;
    setTimeout('startTime2()', 500);
}

function checkTime2(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function start() {
    let elm = document.getElementsByClassName('a arrow disabled')[0];
    const txt = document.getElementsByClassName('text elementText')[0];

    const defaultTxt = txt.innerText;

    elm.onmouseover = function () {
        today();
    }
    elm.onmouseout = function () {
        txt.innerText = defaultTxt;
    }
}

function changeIMG() {
    const elm = document.getElementsByClassName('old')[0];
    elm.onmouseover = function(){
        this.src = "images/2.jpg";
        this.alt = this.title = "nightMSM";
    }
    elm.onmouseout = function(){
        this.src= "images/Msc.jpg";
        this.alt = this.title = "img";
    }
}