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
    config.timer_color = 'blue';
    config.timer_font_weight = 700;
    config.timer_font = 'Verdana';
    config.timer_font_size = 12;
    config.endtime_message = 'Timer expired!';

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
    console.log(loadingBars.length);

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

        var loadingBars_loader = $('#' + element).children('div')[0].id;
        var loadingBars_timer = $('#' + element).children('div')[1].id;      

        var countDownDate = dateNow.setDate(dateNow.getDate() + daysAdd);
        countDownDate = dateNow.setHours(hour + hoursAdd);
        countDownDate = dateNow.setMinutes(minute + minutesAdd);
        countDownDate = dateNow.setSeconds(second + secondsAdd + 1);
        
        var now = new Date().getTime();    
        var distance = countDownDate - now;
        
        
        var distance_loader = countDownDate - now_loader;
        var distance_loadingBar_part =  ((config.loadingBars_width / (distance_loader - 1000)) * 1000);
        var distance_loadingBar_part = Math.floor(distance_loadingBar_part * 10000) / 10000;
        
        var secondsPast = parseInt((distance_loader - distance) / 1000);
        
        var newDistance  = distance_loadingBar_part * secondsPast;
   
        if(newDistance > config.loadingBars_width) newDistance = config.loadingBars_width;
        
        document.getElementById(loadingBars_loader).style.backgroundColor = config.loadingBars_color;
        document.getElementById(loadingBars_loader).style.width = newDistance + 'px';

        // SET TIMER BEGIN- AND END-TEXTS
        var timerHtmlStart = '<span style="color: ' + config.timer_color + '; font-weight: ' + config.timer_font_weight + '; font-family: ' + config.timer_font + '; font-size: ' + config.timer_font_size + 'px;">';
        var timerHtmlEnd = '</span>';

        // SET LOADING-BAR
        if(distance <= 0) distance = 0;
        if(distance === 0) {

            document.getElementById(loadingBars_timer).innerHTML = (timerHtmlStart + config.endtime_message + timerHtmlEnd);
            clearInterval(interval);
            return;
        
        } else {

            var timeLeftFinal = setTimer(distance);
            document.getElementById(loadingBars_timer).innerHTML = timerHtmlStart + timeLeftFinal + timerHtmlEnd;
            
        }   
    }, 1000);
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

    if(hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

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

