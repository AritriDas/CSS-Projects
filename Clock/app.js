const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();

hours.innerHTML = `${hour}`;
minutes.innerHTML=`${minute}`;
seconds.innerHTML= `${sec}`;

}

showTime();
setInterval(showTime,1000);