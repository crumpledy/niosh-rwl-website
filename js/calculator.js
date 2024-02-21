var unitOfMeasurement = document.getElementById("unit-of-measurement-select");

var horizontalLocation = document.getElementById("horizontal-location-text");
var verticalLocation = document.getElementById("vertical-location-text");
var distance = document.getElementById("distance-text");
var angleOfAsymmetry = document.getElementById("angle-of-asymmetry-text");
var selectCoupling = document.getElementById("coupling-select");
var selecFrequency = document.getElementById("frequency-select");
var selectDuration = document.getElementById("duration-select");
var loadWeight = document.getElementById("load-weight-text");

var couplingOptions = ["", "Good", "Fair", "Poor"];
var frequencyOptions = ["", "<=0.2", "0.5", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", ">15"];
var durationOptions = ["", "≤ 1 Hour", ">1 but ≤ 2 Hours", ">2 but ≤ 8 Hours"];

for(var i = 0; i < couplingOptions.length; i++) {
    var opt = couplingOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectCoupling.appendChild(el);
}

for(var i = 0; i < frequencyOptions.length; i++) {
    var opt = frequencyOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selecFrequency.appendChild(el);
}

for(var i = 0; i < durationOptions.length; i++) {
    var opt = durationOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectDuration.appendChild(el);
}

function clearInputs() {
    unitOfMeasurement.selectedIndex = null;

    horizontalLocation.value = null;
    verticalLocation.value = null;
    distance.value = null;
    angleOfAsymmetry.value = null;
    selectCoupling.selectedIndex = 0;
    selecFrequency.selectedIndex = 0;
    selectDuration.selectedIndex = 0;
    loadWeight.value = null;
}
