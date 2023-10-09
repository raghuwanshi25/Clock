setInterval(()=>{
    let hourNeedle = document.getElementById('hour')
    let minuteNeedle = document.getElementById('minute')
    let secondNeedle = document.getElementById('second')
    let date = new Date()
    let currentHour = date.getHours()
    let currentMinute = date.getMinutes()
    let currentSecond = date.getSeconds()
    hourNeedle.style.transform = `rotate(${currentHour*30+currentMinute/2}deg)`
    minuteNeedle.style.transform = `rotate(${6*currentMinute}deg)`
    secondNeedle.style.transform = `rotate(${6*currentSecond}deg)`
},1000)