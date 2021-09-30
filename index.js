setInterval(() => {
    clock=new Date();
    clockhr=clock.getHours();
    clockmin=clock.getMinutes();
    clocksec=clock.getSeconds();
    hrrotate=30*clockhr + clockmin/2;
    minrotate=6*clockmin;
    secrotate=6*clocksec;

    hours.style.transform =`rotate(${hrrotate}deg)`;
    min.style.transform =`rotate(${minrotate}deg)`;
    sec.style.transform =`rotate(${secrotate}deg)`;
}, 1000);
setInterval(() => {
    // let aclock=new Date();
    // document.getElementById('analog').innerHTML=aclock;
    // document.getElementById('analog').innerHTML=new Date();
    analog.innerHTML=new Date();
}, 1000);
