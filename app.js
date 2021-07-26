const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const deadline = document.querySelector('.container');
const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.time-sec h3');



let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

let futureDate = new Date(tempYear, tempMonth, tempDay + 50, 10, 5, 1);

let year = futureDate.getFullYear();
let hours = futureDate.getHours();
let mins = futureDate.getMinutes();
let mo = futureDate.getMonth()
let month = months[mo];
let wkday= futureDate.getDay();
let day = weekdays[wkday];
let dates = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${day}, ${dates} ${month} ${year} ${hours}:${mins}pm`;


const futureTime = futureDate.getTime();

const getTime = () =>{
    const today = new Date().getTime();
    const time = futureTime - today;

    //get values in milliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60* 1000;

    // calculate values 
    let days = time / oneDay;
    //round down days
    days = Math.floor(days);

    let hours = (time % oneDay) / oneHour;
    hours = Math.floor(hours);
    let minutes = Math.floor((time%oneHour) / oneMinute);
    let seconds = Math.floor((time % oneMinute) / 1000);


    // create an array of time values
    const values = [days, hours, minutes, seconds];
    //console.log(values);
    const format = (item) =>{
        if(item < 10){
        item = `0${item}`;
        }
        return item;
    }

    items.forEach((item, index)=>{
        item.innerHTML = format(values[index]);
    });
    
    if(time < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h3 class='expired'>Expired</h3>`;
    }

};

let countdown = setInterval(getTime,1000);
getTime();

