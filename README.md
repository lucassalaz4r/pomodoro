# Pomodoro
![Devices](devices.png)

Pomodoro is a timer that implements the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) with 25 minutes intervals. The timer rings when the remaining time is zero. Check the documentation below to understand how the app works.

## HTML and CSS

The HTML is really simple. It is written in a single file called ```index.html```. Inside the tag ```<main></main>``` tag there are two ```<span></span>``` tags, one for minutes and the other for seconds, below these there are the START and STOP buttons to start and stop the timer respectively.

```
<main>
  <h1>
    <span id="minutes"></span>
    :
    <span id="seconds"></span>
  </h1>
  <button id="start-btn">START</button>
  <button id="stop-btn" style="display: none;">STOP</button>
</main>
```

The CSS is written in the file ```style.css``` inside the ```styles``` directory, and it just centralizes the timer, changes some colors and changes some text sizes.

## JavaScript
The JavaScript code responsible for the app functioning is implemented inside the ```main.js``` file inside the ```javascript``` directory. Six functions were implemented. 

The functions ```start()``` and ```stop()``` were added as click events for their respective buttons. When a user click the start button, the function ```start()``` is triggered, setting a 1 second interval for the function ```decrease()``` which will then decrease the ```remainingTime``` variable by one second and update the HTML timer every second until zero, or if the stop button is activated.

When ```remainingTime``` is lesser than zero, the bell rings and the timer resets to 25 minutes.

---
### ```start()```
Starts the timer by setting 1 second interval for the function ```decrease()``` and toggling the start button to show the stop button.
#### Parameters
- No parameters
#### Return type
- null
#### Returns
- null
---
### ```stop()```
Stops the timer, resetting the ```remainingTime``` to the default 1500 seconds, clearing the interval, setting the HTML timer to 25 minutes and toggling the stop button to the start button.
#### Parameters
- No parameters
#### Return type
- null
#### Returns
- null
---
### ```decrease()```
Decreases the remaining time by 1 second, sets the timer to the new remaining time. If ```remainingTime``` is lesser than 0 it calls the function ```stop()``` and rings the bell.
#### Parameters
- No parameters
#### Return type
- null
#### Returns
- null
---
### ```setTimer(timeInSeconds)```
Updates the HTML timer based on the provided parameter ```timeInSeconds```.
#### Parameters
- ```timeInSeconds``` - Time interval in seconds.
#### Return type
- null
#### Returns
- null
---
### ```toggleTimerButton()```
Toggles between the Start and Stop buttons.
#### Parameters
- No parameters
#### Return type
- null
#### Returns
- null
---
### ```calcTime(timeInSeconds)```
Convert time interval in seconds to the minute format ```00:00```.
#### Parameters
- ```timeInSeconds``` - Time interval in seconds.
#### Return type
- Object
#### Returns
```
{
  minutes: integer,
  seconds integer,
}
```
---