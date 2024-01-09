var MusicalDesmos = (function () {
    var keyf = "f\\left(x\\right)=440\\cdot2^{\\frac{x-49}{12}}";
    var GenerateTrack = function (track) {
        var lines = [];
        track.forEach(key => {
            lines.push(
                `\\left\\{b\\ge${key.time+0.25}:\\left\\{b\\le${key.time+0.25+key.duration}:1\\right\}\\right\\}`
            );
        });
    };
})();