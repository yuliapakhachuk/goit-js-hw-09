import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const refs = {
    startBtn: document.querySelector("[data-start]"),
    dataPicker: document.querySelector("#datetime-picker"),
    daysLeft : document.querySelector("[data-days]"),
    hoursLeft : document.querySelector("[data-hours]"),
    minutesLeft : document.querySelector("[data-minutes]"),
    secondsLeft : document.querySelector("[data-seconds]"),
}

let CURRENT_DATE = new Date();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] < CURRENT_DATE) {
            refs.startBtn.disabled = true;
            Notiflix.Notify.failure('Please choose a date in the future');
        } else { 
            refs.startBtn.disabled = false;
            refs.startBtn.addEventListener("click", startTimer);
        }
    },
};

const myPicker = flatpickr(refs.dataPicker, options);
console.log(startTimer);

function startTimer() { 
    setInterval(
        () => { 
            const pickedDate = myPicker.selectedDates[0].getTime();
            const timeDelta = pickedDate - new Date();
            setTimerRender(timeDelta);
        }, 1000
    )
}

function addLeadingZero(value) { 
    return String(value).padStart(2, '0');
}

function setTimerRender(string) { 
    let { days, hours, minutes, seconds } = convertMs(string);
    refs.daysLeft.textContent = addLeadingZero(days);
    refs.hoursLeft.textContent = addLeadingZero(hours);
    refs.minutesLeft.textContent = addLeadingZero(minutes);
    refs.secondsLeft.textContent = addLeadingZero(seconds);
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


