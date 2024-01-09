# MidiJSONToDesmos

## What is this API?
This API lets you use MIDI files converted to [Tonejs-compatible JSON format](https://tonejs.github.io/Midi/) to play music in desmos using the `tone` function. It allows you to play music beyond the limitations of the "hear graph" feature. This API currently supports the following features:
* **Tempo** Will play the song back at the BPM set in the MIDI file, allows for timing flexability.
* **Multi-track Support** Has the ability to play multiple notes at the same time, though sometimes sounds off
* **Beats** Only supports up to 0.125 (1/8) beats, anything shorter may be held out too long or not played at all.
* **Help** Provides data required to play automatically
* **ToneJS Compatible** Compatible with any existing ToneJS MIDI data you might already have!

## How to use this API?
### Step 1: Open a new JavaScript instance, that supports ECMAScript 6 (ES6) features.
This can be in a browser, Deno, Node.JS, Electron, or something completely different.<br/>
As long as it supports ES6, it'll work.

### Step 2. Paste or import the API.
This will allow you to use the API. Modifying the API file may be required in some contexts (eg Node.JS) to allow importing.

### Step 3. Convert a MIDI file.
A good open-source MIDI editor that I use a lot is [Signal](https://signal.vercel.app), but you can use any MIDI editor you'd like. Once you have downloaded or created a MIDI file, head over to [this site](https://tonejs.github.io/Midi/) to convert your MIDI file to be compatible with ToneJS.

*Please note, that this is NOT endorsed by ToneJS, and this API does NOT use ToneJS or any similar libraries. This API is only compatible with the ToneJS-compatible JSON-ified MIDI format, not any other ToneJS format.*

### Step 4. Run the API with the JSON data.
The API is one function, so you're in luck! You can simply run it like this:
```javascript
var MidiJSONToDesmos = (function () {
    ...
})();

var data = MidiJSONToDesmos({
    ...
});

console.log(data.lines);
console.log(data.interval);
console.log(data.timer);
console.log(data.b);
```

### Step 5. Copy all the `lines` data.
Copy the text from the `lines` property of the output.<br/>
Paste this directly into [Desmos' Graphing Calculator](https://desmos.com/graphing).

### Step 6. Update the slider for easy rewinding.
Select the variable "b". Copy data from `data.b` and paste it into the `b<=__` (maximum value) value on the variable.<br/>
Set the minimum value to 0, and the step to `0.25` or `0.125`. (We recommend `0.125`!)

### Step 7. Create a timer.
Press the `+` button, and select "ticker". Copy the text from `data.timer` and paste it into the `Run` input.<br/>
Copy the text from `data.interval` and paste it into the `Every ___ ms` input. This allows it to have the correct tempo.

### Step 8. Enjoy the music!
Press the button on the ticker to start the music. Listen to it go!