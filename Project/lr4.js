
function alerted() {
    const dateMyBirthday = new Date('2002-07-28T21:23');
    const ad = document.getElementById('text').value
    const now = new Date();
    const asd = new Date(ad)
    differenceInWeeks(now, asd)

}


function differenceInWeeks(d1, d2) {
    const t2 = d2.getTime();
    const t1 = d1.getTime();

    alert('Number of weeks since birthday: ' + parseInt((t1-t2)/(24*3600*1000*7)));
}

function passedFromNY() {
    const date = new Date('2021-01-01T00:00');
    let currentDate = Date.parse(new Date());
    let days = (currentDate - Date.parse(date)) / 86400000;
    alert(Math.round(days));
}

function passedTime() {
    const t = new Date();
    document.write(t.getHours() + ":" + t.getMinutes());

}





