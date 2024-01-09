var MidiJSONToDesmos = (function () {
    var keyf = "f\\left(x\\right)=440\\cdot2^{\\frac{x-49}{12}}";
    var GenerateTrack = function (track) {
        var lines = [];
        track.forEach(key => {
            lines.push(
                `\\left\\{b\\ge${key.time+0.25}:\\left\\{b\\le${key.time+0.25+key.duration}:1\\right\}\\right\\}`
            );
        });
        return lines.join("\n");
    };
    var MidiToDesmos = function (midi) {
        var lines = [
            "f\\left(x\\right)=440\\cdot2^{\\frac{x-49}{12}}",
            "b = 0",
            "t = "+midi.header.tempos[0].bpm
        ];
        midi.tracks;
    };
})();