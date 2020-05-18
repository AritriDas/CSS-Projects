const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();

    hour = addZero(hour);
    minute = addZero(minute);
    sec = addZero(sec);

hours.innerHTML = `${hour}`;
minutes.innerHTML=`${minute}`;
seconds.innerHTML= `${sec}`;

}

function addZero(time) {
    if (time < 10)
        time = '0' + time ;

    return time;
}

showTime();
setInterval(showTime,1000);