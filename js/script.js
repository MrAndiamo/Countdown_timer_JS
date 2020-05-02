/**
 * Config Settings
 * 
 * @returns {array}
 */
function config() {
    
    var config = [];
    config.loadingBars_class = '.countdown-bar';
   
    // Countdown Loading Bar
    config.loadingBars_width = 200;
    config.loadingBars_height = 20;
    config.loadingBars_border_color = 'blue';
    config.loadingBars_color =  'darkblue';
    config.loadingBars_background_color =  'lightblue';
    
    // Countdown Timer
    config.timer_color = 'red';
    config.loadingBars_timer_width = 105;
    config.timer_font_weight = 700;
    config.timer_font = 'Verdana';
    config.timer_font_size = 12;
    config.endtime_message = 'Timer expired!';
    config.timer_location = 'middle'; // middle = default / bottom / top / left / right

    return config;
}


/**
 * Set countdown element
 * 
 * Element should be build as 
 * <div class="countdownbar" id="elementID">
 * <div></div>
 * <div></div>
 * </div>
 * 
 * Then call the function countdown('elementID', 0, 0, 0, 10)
 * 
 * @param {string} element 
 * @param {number} daysAdd 
 * @param {number} hoursAdd 
 * @param {number} minutesAdd 
 * @param {number} secondsAdd 
 */
function countdown(element, daysAdd, hoursAdd, minutesAdd, secondsAdd) {

    var config = this.config();


    // Set all loaders in javascript to the configuration length

    let loadingBars = document.querySelectorAll(config.loadingBars_class);
   
    // Implement settingg of loader as set in the config
    for (let i = 0; i < loadingBars.length; i++) {
        loadingBars[i].style.width = config.loadingBars_width + 'px';
        loadingBars[i].style.height = config.loadingBars_height + 'px';
        loadingBars[i].style.backgroundColor = config.loadingBars_background_color;
        loadingBars[i].style.borderColor = config.loadingBars_border_color;
    }

    //cGat the date/hour/mimute/second right now
    var dateNow = new Date();
    var hour = dateNow.getHours();
    var minute = dateNow.getMinutes();
    var second = dateNow.getSeconds();
    
    // This needs to be outside the interval to be able to calculate the px per second a loading-bar should be filled
    var now_loader = new Date().getTime();
        
    var interval = setInterval(function() {

        var loadingBars_main = document.getElementById(element);
        var loadingBars_loader = document.getElementById(element).childNodes[1];
        var loadingBars_timer = document.getElementById(element).childNodes[3];

        var countDownDate = dateNow.setDate(dateNow.getDate() + daysAdd);
        countDownDate = dateNow.setHours(hour + hoursAdd);
        countDownDate = dateNow.setMinutes(minute + minutesAdd);
        countDownDate = dateNow.setSeconds(second + secondsAdd + 1);
        
        var now = new Date().getTime();    
        var distance = countDownDate - now;
        
        
        if(typeof loadingBars_timer.dataset.location !== 'undefined') {
            config.timer_location = loadingBars_timer.dataset.location;
        }
        
        var distance_loader = countDownDate - now_loader;
        var distance_loadingBar_part =  ((config.loadingBars_width / (distance_loader - 1000)) * 1000);
        var secondsPast = parseInt((distance_loader - distance) / 1000);

        // Set new distance (seconds)
        var newDistance  = distance_loadingBar_part * secondsPast;
        if(newDistance > config.loadingBars_width) newDistance = config.loadingBars_width;

        loadingBars_loader.style.backgroundColor = config.loadingBars_color;
        loadingBars_loader.style.width = newDistance + 'px';

        // SET TIMER BEGIN- AND END-TEXTS
        var timerHtmlStart = '<span style="color: ' + config.timer_color + '; font-weight: ' + config.timer_font_weight + '; font-family: ' + config.timer_font + '; font-size: ' + config.timer_font_size + 'px;">';
        var timerHtmlEnd = '</span>';


        this.setTimerLocation(config, loadingBars_main, loadingBars_timer);

        
        // SET LOADING-BAR
        if(newDistance == config.loadingBars_width) {

            loadingBars_timer.innerHTML = timerHtmlStart + config.endtime_message + timerHtmlEnd;
            clearInterval(interval);
            return;
        
        } else {
            var timeLeftFinal = setTimer(distance);
            loadingBars_timer.innerHTML = timerHtmlStart + timeLeftFinal + timerHtmlEnd;
        }   
    }, 1000);
}


/**
 * Set Timer location at middle/top/bottom/left/right of the loading-bar
 * @param {*} timer_location 
 */
function setTimerLocation(config, loadingBars_main, loadingBars_timer) {

    switch(config.timer_location) {
        case 'top':
            // code block
            loadingBars_main.style.marginTop =  '20px';
            loadingBars_timer.style.position = 'absolute';
            loadingBars_timer.style.top = '-20px';
            loadingBars_timer.style.left = '2px';    
            break;
        case 'bottom':
            // code block
            loadingBars_main.style.marginBottom =  '20px';
            loadingBars_timer.style.position = 'absolute';
            loadingBars_timer.style.top = '20px';
            loadingBars_timer.style.left = '2px';
            
            break;
        case 'left':
            // code block
            loadingBars_main.style.marginLeft =  (config.loadingBars_timer_width) + 'px';
            loadingBars_timer.style.position = 'absolute';
            loadingBars_timer.style.top = 0;
            loadingBars_timer.style.left = '-' + (config.loadingBars_timer_width) + 'px';
            loadingBars_timer.style.textAlign = 'left';
            break;
        case 'right':
            // code block
            loadingBars_timer.style.position = 'absolute';
            loadingBars_timer.style.top = 0;
            loadingBars_timer.style.left = config.loadingBars_width + 10 + 'px';
            break;

        case 'middle':
        default:
            loadingBars_timer.style.position = 'absolute';
            loadingBars_timer.style.top = 0;
            loadingBars_timer.style.left = '5px';
    } 

}




/**
 * Set the timer compared to what date it is and what time is set for it.
 * 
 * @param {timstamp} distance 
 */
function setTimer(distance) {
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;
    var timeLeft = hours + ":" + minutes + ":" + seconds;
    
    if(days !== 0) {

        if(days === 1) {
            var timeLeftFinal = days + " day + " + timeLeft;
        } else {
            var timeLeftFinal = days + " days + " + timeLeft;
        }
    
    } else {
        var timeLeftFinal = timeLeft;
    }

    return timeLeftFinal;
}