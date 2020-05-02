# Countdown_timer
Countdown timer.

Now fully javascript (no jQuery) multiple counters possible


<br><br><br><br>

Try the script here on jsfiddle:<br>
https://jsfiddle.net/MrVamos/L817vg2o/39/
<br><br><br>

<h4>In the header</h4>

```html
    <link href="css/stylesheet.css" rel="stylesheet">
    <script src="js/script.js" type="text/javascript"></script>
```

<h4>In the body</h4>

```html
    <div class="countdown-bar" id="countdownA">
        <div></div>
        <div></div>
    </div>
```
<h4>Add before the end of the body</h4>

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
