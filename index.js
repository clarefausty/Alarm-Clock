const currentTimeDisplay = document.getElementById("current-time-display")
const alarmTimeDisplay = document.getElementById("alarm-time-display")
const alarmMessageDisplay = document.getElementById("alarm-message-display")
const setAlarmBtn = document.getElementById("set-alarm-btn")
const pauseAlarm = document.getElementById("pause-alarm")
setAlarmBtn.addEventListener("click", setAlarm)
let currentTime= null
let alarmTime = null
const audio = new Audio('alarm.mp3')

function renderCurrentTime(){
    setInterval(() =>{
        currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false});
        currentTimeDisplay.textContent = currentTime;
        alarmChecker()
    }, 1000)
} 
renderCurrentTime()

function setAlarm(){
    event.preventDefault()
    let wakeyHours = document.getElementById("hours-input").value
    let wakeyMinutes = document.getElementById("minutes-input").value
    
    if (wakeyHours / 10 < 1){
        wakeyHours = "0" + wakeyHours
    }
    if (wakeyMinutes / 10 < 1){
        wakeyMinutes = "0" + wakeyMinutes
    }
     alarmTime = `${wakeyHours}:${wakeyMinutes}:00`
    alarmTimeDisplay.textContent = alarmTime
}
function alarmChecker(){
        if (alarmTime == currentTime){
           ringAlarm()
        }
}
function ringAlarm(){
    audio.play()
    alarmMessageDisplay.textContent = "It's Time!!!"
}
pauseAlarm.addEventListener("click", function(){
    alarmMessageDisplay.textContent = "Action"
    audio.pause()
})
    
