# Countdown Timer

Now fully javascript (no jQuery) and multiple counters possible<br>

Try the script here on jsfiddle:<br>
https://jsfiddle.net/MrVamos/L817vg2o/39/


<h4>Place in the header</h4>
<sup>add countdown-bar stylesheet and script to page header</sup>

```html
    <link href="css/stylesheet.css" rel="stylesheet">
    <script src="js/script.js" type="text/javascript"></script>
```

<h4>Place the Countdown-timers in the body</h4>
<sup>add as many counters as you want, just add a class called countdown-bar and add an id</sup>

```html
    <div class="countdown-bar" id="countdownA">
        <div></div>
        <div></div>
    </div>
    <div class="countdown-bar" id="countdownB">
        <div></div>
        <div></div>
    </div>
```

<h4>Want to use different timer locations?</h4>
<sup>You can give every countdown-timer a custom location (left/right/top/down/middle) by adding a data-location in the second div</sup>

```html
    <div class="countdown-bar" id="countdownA">
        <div></div>
        <div data-location="top"></div>
    </div>
    <div class="countdown-bar" id="countdownB">
        <div></div>
        <div data-location="right"></div>
    </div>
```

<h4>Add before the end of the body</h4>
<sup>after the page is loaded the countdown-function can be called: countdown(element, days, hours, minutes, seconds)</sup>

```html
    <script>
        var loader = setInterval(function () {
            if(document.readyState !== "complete") return;
            clearInterval(loader);        
            countdown('countdownA', 0, 0, 1, 5);
            countdown('countdownB', 0, 0, 0, 20);
        }, 100);
    </script>
```


<h4>Change general configuration</h4>
<sup>You can change the configuration at the very top of the script.js-file</sup>

```javascript
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
```
