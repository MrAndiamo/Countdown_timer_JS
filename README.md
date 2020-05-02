# Countdown_timer
Countdown timer.

Now fully javascript (no jQuery) multiple counters possible
<br><br>

Try the script here on jsfiddle:<br>
https://jsfiddle.net/MrVamos/L817vg2o/39/


<h4>In the header</h4>
<sup>add countdown-bar stylesheet and script to page header</sup>

```html
    <link href="css/stylesheet.css" rel="stylesheet">
    <script src="js/script.js" type="text/javascript"></script>
```

<h4>In the body</h4>
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
