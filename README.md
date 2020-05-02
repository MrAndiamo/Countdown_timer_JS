# Countdown_timer
Countdown timer.

Now fully javascript (no jQuery) multiple counters possible


<br><br><br><br>

Try the script here on jsfiddle:<br>
https://jsfiddle.net/MrVamos/L817vg2o/39/
<br><br><br>

<h4>In the header</h4>
<sub>Load the scripts and basic styles for the loaders</sub>
```html
    <link href="css/stylesheet.css" rel="stylesheet">
    <script src="js/script.js" type="text/javascript"></script>
```

<h4>In the body</h4>
<sub>Add as many if you want, as long as it contains the countdown-bar class and an ID</sub>
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
```html
    <script>
        // Javascrip equivelant of jquery document.load...
        var loader = setInterval(function () {
            if(document.readyState !== "complete") return;
            clearInterval(loader);

            // call function for element countdown A ( 1 hour and 15 seconds)
            countdown('countdownA', 0, 0, 1, 5);

            // call function for element countdown B (10 seconds)
            countdown('countdownB', 0, 0, 0, 20);

        }, 100);
    </script>
```

<>
