var selectCoupling = document.getElementById("coupling-select");
var selecFrequency = document.getElementById("frequency-select");
var selectDuration = document.getElementById("duration-select");

var couplingOptions = ["Good", "Fair", "Poor"];
var frequencyOptions = ["<=0.2", "0.5", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", ">15"];
var durationOptions = ["≤ 1 Hour", ">1 but ≤ 2 Hours", ">2 but ≤ 8 Hours"];

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