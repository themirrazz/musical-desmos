# MidiJSONToDesmos

## What is this API?
This API lets you use MIDI files converted to [Tonejs-compatible JSON format](https://tonejs.github.io/Midi/) to play music in desmos using the `tone` function. It allows you to play music beyond the limitations of the "hear graph" feature. This API currently supports the following features:
* **Tempo** Will play the song back at the BPM set in the MIDI file, allows for timing flexability.
* **Multi-track Support** Has the ability to play multiple notes at the same time, though sometimes sounds off
* **Beats** Only supports up to 0.125 (1/8) beats, anything shorter may be held out too long or not played at all.
* **Help** Provides data required to play automatically