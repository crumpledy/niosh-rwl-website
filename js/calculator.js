var currentLanguage = 'en';

var unitOfMeasurement = document.getElementById("unit-of-measurement-select");

var horizontalLocation = document.getElementById("horizontal-location-text");
var verticalLocation = document.getElementById("vertical-location-text");
var distance = document.getElementById("distance-text");
var angleOfAsymmetry = document.getElementById("angle-of-asymmetry-text");
var selectCoupling = document.getElementById("coupling-select");
var selectFrequency = document.getElementById("frequency-select");
var selectDuration = document.getElementById("duration-select");
var loadWeight = document.getElementById("load-weight-text");

var couplingOptions = ["", "Good", "Fair", "Poor"];
var frequencyOptions = ["", "<=0.2", "0.5", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", ">15"];
var durationOptions = ["", "≤ 1 Hour", ">1 but ≤ 2 Hours", ">2 but ≤ 8 Hours"];

// F:6 da <= 1 hourdaki 0.75 ler dökümanda 75 sorarız!
const liftTable = [
    { F: "<=0.2", "≤ 1 Hour": { "<75cm": 1.000, ">=75cm": 1.000 }, ">1 but ≤ 2 Hours": { "<75cm": 0.950, ">=75cm": 0.950 }, ">2 but ≤ 8 Hours": { "<75cm": 0.850, ">=75cm": 0.850 } },
    { F: "0.5", "≤ 1 Hour": { "<75cm": 0.970, ">=75cm": 0.970 }, ">1 but ≤ 2 Hours": { "<75cm": 0.920, ">=75cm": 0.920 }, ">2 but ≤ 8 Hours": { "<75cm": 0.810, ">=75cm": 0.810 } },
    { F: "1", "≤ 1 Hour": { "<75cm": 0.940, ">=75cm": 0.940 }, ">1 but ≤ 2 Hours": { "<75cm": 0.880, ">=75cm": 0.880 }, ">2 but ≤ 8 Hours": { "<75cm": 0.750, ">=75cm": 0.750 } },
    { F: "2", "≤ 1 Hour": { "<75cm": 0.910, ">=75cm": 0.910 }, ">1 but ≤ 2 Hours": { "<75cm": 0.840, ">=75cm": 0.840 }, ">2 but ≤ 8 Hours": { "<75cm": 0.650, ">=75cm": 0.650 } },
    { F: "3", "≤ 1 Hour": { "<75cm": 0.880, ">=75cm": 0.880 }, ">1 but ≤ 2 Hours": { "<75cm": 0.790, ">=75cm": 0.790 }, ">2 but ≤ 8 Hours": { "<75cm": 0.550, ">=75cm": 0.550 } },
    { F: "4", "≤ 1 Hour": { "<75cm": 0.840, ">=75cm": 0.840 }, ">1 but ≤ 2 Hours": { "<75cm": 0.720, ">=75cm": 0.720 }, ">2 but ≤ 8 Hours": { "<75cm": 0.450, ">=75cm": 0.450 } },
    { F: "5", "≤ 1 Hour": { "<75cm": 0.800, ">=75cm": 0.800 }, ">1 but ≤ 2 Hours": { "<75cm": 0.600, ">=75cm": 0.600 }, ">2 but ≤ 8 Hours": { "<75cm": 0.350, ">=75cm": 0.350 } },
    { F: "6", "≤ 1 Hour": { "<75cm": 0.750, ">=75cm": 0.750 }, ">1 but ≤ 2 Hours": { "<75cm": 0.500, ">=75cm": 0.500 }, ">2 but ≤ 8 Hours": { "<75cm": 0.270, ">=75cm": 0.270 } },
    { F: "7", "≤ 1 Hour": { "<75cm": 0.700, ">=75cm": 0.700 }, ">1 but ≤ 2 Hours": { "<75cm": 0.420, ">=75cm": 0.420 }, ">2 but ≤ 8 Hours": { "<75cm": 0.220, ">=75cm": 0.220 } },
    { F: "8", "≤ 1 Hour": { "<75cm": 0.600, ">=75cm": 0.600 }, ">1 but ≤ 2 Hours": { "<75cm": 0.350, ">=75cm": 0.350 }, ">2 but ≤ 8 Hours": { "<75cm": 0.180, ">=75cm": 0.180 } },
    { F: "9", "≤ 1 Hour": { "<75cm": 0.520, ">=75cm": 0.520 }, ">1 but ≤ 2 Hours": { "<75cm": 0.300, ">=75cm": 0.300 }, ">2 but ≤ 8 Hours": { "<75cm": 0.000, ">=75cm": 0.150 } },
    { F: "10", "≤ 1 Hour": { "<75cm": 0.450, ">=75cm": 0.450 }, ">1 but ≤ 2 Hours": { "<75cm": 0.260, ">=75cm": 0.260 }, ">2 but ≤ 8 Hours": { "<75cm": 0.000, ">=75cm": 0.130 } },
    { F: "11", "≤ 1 Hour": { "<75cm": 0.410, ">=75cm": 0.410 }, ">1 but ≤ 2 Hours": { "<75cm": 0.000, ">=75cm": 0.230 }, ">2 but ≤ 8 Hours": { "<75cm": 0.000, ">=75cm": 0.000 } },
    { F: "12", "≤ 1 Hour": { "<75cm": 0.370, ">=75cm": 0.370 }, ">1 but ≤ 2 Hours": { "<75cm": 0.000, ">=75cm": 0.210 }, ">2 but ≤ 8 Hours": { "<75cm": 0.000, ">=75cm": 0.000 } },
    { F: "13", "≤ 1 Hour": { "<75cm": 0.000, ">=75cm": 0.340 }, ">1 but ≤ 2 Hours": { "<75cm": 0.000, ">=75cm": 0.000 }, ">2 but ≤ 8 Hours": { "<75cm": 0.000, ">=75cm": 0.000 } },
    { F: "14", "≤ 1 Hour": { "<75cm": 0.000, ">=75cm": 0.310 }, ">1 but ≤ 2 Hours": { "<75cm": 0.000, ">=75cm": 0.000 }, ">2 but ≤ 8 Hours": { "<75cm": 0.000, ">=75cm": 0.000 } },
    { F: "15", "≤ 1 Hour": { "<75cm": 0.000, ">=75cm": 0.280 }, ">1 but ≤ 2 Hours": { "<75cm": 0.000, ">=75cm": 0.000 }, ">2 but ≤ 8 Hours": { "<75cm": 0.000, ">=75cm": 0.000 } },
    { F: ">15", "≤ 1 Hour": { "<75cm": 0.000, ">=75cm": 0.000 }, ">1 but ≤ 2 Hours": { "<75cm": 0.000, ">=75cm": 0.000 }, ">2 but ≤ 8 Hours": { "<75cm": 0.000, ">=75cm": 0.000 } }
];

const couplingTable = [
    { F: "Good", "<75cm": 1.000, ">=75cm": 1.000 },
    { F: "Fair", "<75cm": 0.950, ">=75cm": 1.000 },
    { F: "Poor", "<75cm": 0.900, ">=75cm": 0.900 }
];

// Output Table
var outputTable = document.getElementById("output-table");

//outputs
var rwlOutput = document.getElementById("rwl-output");
var liOutput = document.getElementById("li-output");
var hmOutput = document.getElementById("hm-output");
var vmOutput = document.getElementById("vm-output");
var dmOutput = document.getElementById("dm-output");
var amOutput = document.getElementById("am-output");
var fmOutput = document.getElementById("fm-output");
var cmOutput = document.getElementById("cm-output");

// Printing bindings
var title = document.getElementById("title");
var inputTable = document.getElementById("input-table");
var actionButtons = document.getElementById("button-container");
var navButtons = document.getElementById("nav-links");
var langButtons = document.getElementById("language-selector");
var footerContainer = document.getElementById("footer-container");
var onPrintHeader = document.getElementById("on-print-header");
var onPrintFooter = document.getElementById("on-print-footer");
var onPrintFooterBar = document.getElementById("footer-bar");

for (var i = 0; i < couplingOptions.length; i++) {
    var opt = couplingOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectCoupling.appendChild(el);
}

for (var i = 0; i < frequencyOptions.length; i++) {
    var opt = frequencyOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectFrequency.appendChild(el);
}

for (var i = 0; i < durationOptions.length; i++) {
    var opt = durationOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectDuration.appendChild(el);
}

function didTapClearButton() {
    clearInputs()
    hideOutputTable()
}

function clearInputs() {
    horizontalLocation.value = null;
    verticalLocation.value = null;
    distance.value = null;
    angleOfAsymmetry.value = null;
    selectCoupling.selectedIndex = 0;
    selectFrequency.selectedIndex = 0;
    selectDuration.selectedIndex = 0;
    loadWeight.value = null;

    horizontalLocation.style.border = "";
    verticalLocation.style.border = "";
    distance.style.border = "";
    angleOfAsymmetry.style.border = "";
    selectCoupling.style.border = "";
    selectFrequency.style.border = "";
    selectDuration.style.border = "";
    loadWeight.style.border = "";
}

function calculate() {
    checkValues()

    calculateHm()
    calculateVm()
    calculateDm()
    calculateAm()
    calculateFm()
    calculateCm()
    calculateRwl()
    calculateLi()

    showOutputTable()
}

function isUsMeasurement(value) {
    var isUsMeasurement = false

    if (unitOfMeasurement.value != "metric") {
        return value * 2.54
    }

    return value
}
var hmSuggestionCell = document.getElementById("hm-suggestion"); // hm-suggestion ID'sine sahip hücreyi seç
function calculateHm() {
    if (isUsMeasurement(horizontalLocation.value) <= 25) {
        hmOutput.innerText = 1;
        hmSuggestionCell.innerText = "";
    } else if (isUsMeasurement(horizontalLocation.value) >= 63) {
        hmOutput.innerText = 0;
        hmSuggestionCell.innerText = "Your horizontal distance is greater than acceptable level. You should reduce your horizontal distance and bring it closer to the ideal value of 25 cm.";
        hmSuggestionCell.style.color = "red";
    } else {
        hmOutput.innerText = (25/isUsMeasurement(horizontalLocation.value)).toFixed(3);
        hmSuggestionCell.innerText = "You should reduce your horizontal distance and bring it closer to the ideal value of 25 cm.";
        hmSuggestionCell.style.color = "black";
    }
}
var vmSuggestionCell = document.getElementById("vm-suggestion");
function calculateVm() {
    if (isUsMeasurement(verticalLocation.value) == 75) {
        vmOutput.innerText = 1;
        vmSuggestionCell.innerText = "";
    } else if (isUsMeasurement(verticalLocation.value) >= 175) {
        vmOutput.innerText = 0;
        vmSuggestionCell.style.color = "red";
        vmSuggestionCell.innerText = "Your vertical distance is greater than acceptable level, you should reduce the lifting height and bring it closer to the ideal value of 75."
    } else {
        vmOutput.innerText = (1-(0.003*Math.abs(isUsMeasurement(verticalLocation.value) - 75))).toFixed(3);
        vmSuggestionCell.style.color = "black";
        vmSuggestionCell.innerText = " You should reduce the lifting height and bring it closer to the ideal value of 75."
    }
}
var dmSuggestionCell = document.getElementById("dm-suggestion");
function calculateDm() {
    if (isUsMeasurement(distance.value) <= 25) {
        dmOutput.innerText = 1;
        dmSuggestionCell.innerText = ""
    } else if (isUsMeasurement(distance.value) >= 175) {
        dmOutput.innerText = 0;
        dmSuggestionCell.style.color = "red";
        dmSuggestionCell.innerText ="You should reduce the distance value and bring it closer to the ideal value of 25."
    } else {
        dmOutput.innerText = (0.82 + (4.5/isUsMeasurement(distance.value))).toFixed(3);
        dmSuggestionCell.style.color = "black";
        dmSuggestionCell.innerText = "You should reduce your distance value, bringing it closer to the ideal 25."
    }
}
var amSuggestionCell = document.getElementById("am-suggestion");
function calculateAm() {
    if (isUsMeasurement(angleOfAsymmetry.value) <= 0) {
        amOutput.innerText = 1;
        amSuggestionCell.innerText = ""
    } else if (isUsMeasurement(angleOfAsymmetry.value) >= 135) {
        amOutput.innerText = 0;
        amSuggestionCell.style.color = "red";
        amSuggestionCell.innerText = "Your asymmetry factor is greater than acceptable level. You should reduce your lift angle and bring it closer to the ideal 0.S"
    } else {
        amOutput.innerText = (1-(0.0032*isUsMeasurement(angleOfAsymmetry.value))).toFixed(3);
        amSuggestionCell.style.color = "black";
        amSuggestionCell.innerText = "You should reduce your lift angle and bring it closer to the ideal 0."
    }
}
var fmSuggestionCell = document.getElementById("fm-suggestion");
function calculateFm() {
    fmOutput.innerText = getTableValue(selectFrequency.value, selectDuration.value, isUsMeasurement(verticalLocation.value)).toFixed(3);
    if((isUsMeasurement(verticalLocation.value)>=75) && selectDuration.value === durationOptions[1]) {

        if(selectFrequency.value===frequencyOptions[1]){
            fmSuggestionCell.innerText = "You don't need to change anything."
            fmSuggestionCell.style.color = "black";
        }else if(selectFrequency.value===frequencyOptions[18]){
            fmSuggestionCell.innerText=  "You should reduce your lifting frequency."
            fmSuggestionCell.style.color = "red";
        }
        else{
            fmSuggestionCell.innerText=  "You should reduce your lifting frequency."
            fmSuggestionCell.style.color = "black";
        }


    }
    if((isUsMeasurement(verticalLocation.value)<75) && selectDuration.value === durationOptions[1]) {

        if(selectFrequency.value===frequencyOptions[1]){
            fmSuggestionCell.innerText = "You don't need to change anything."
            fmSuggestionCell.style.color = "black";
        }
        else if(selectFrequency.value===frequencyOptions[15]||selectFrequency.value===frequencyOptions[16]||selectFrequency.value===frequencyOptions[17]){
            fmSuggestionCell.innerText = "You should reduce the frequency of lifting to less than 13 lifts per minute OR you should make the vertical value ideally 75 cm."
            fmSuggestionCell.style.color = "red";
        }
        else if(selectFrequency.value===frequencyOptions[18]){
            fmSuggestionCell.style.color = "red";

            fmSuggestionCell.innerText ="You should reduce the frequency of lifting to less than 13 lifts per minute."
        }
        else{
            fmSuggestionCell.style.color = "black";
            fmSuggestionCell.innerText=  "You should reduce your lifting frequency."
        }


    }

    if((isUsMeasurement(verticalLocation.value)<75) && selectDuration.value === durationOptions[2]) {

        if(selectFrequency.value===frequencyOptions[1]){
            fmSuggestionCell.style.color = "black";
            fmSuggestionCell.innerText = "You should reduce your work durations."
        }
        else if(selectFrequency.value===frequencyOptions[13]||selectFrequency.value===frequencyOptions[14]){
            fmSuggestionCell.style.color = "red";
            fmSuggestionCell.innerText ="You should reduce the frequency of lifting to less than 11 lifts per minute OR you should make the vertical value equal to or greater than the ideal 75 cm."
        }
        else if(selectFrequency.value===frequencyOptions[15]||selectFrequency.value===frequencyOptions[16]||selectFrequency.value===frequencyOptions[17]){
            fmSuggestionCell.style.color = "red";
            fmSuggestionCell.innerText = "You should reduce the frequency of lifting to less than 11 lifts per minute OR you should make the vertical value ideally 75 cm."

        }
        else if(selectFrequency.value===frequencyOptions[18]){
            fmSuggestionCell.style.color = "red";
            fmSuggestionCell.innerText ="You should reduce the frequency of lifting to less than 11 lifts per minute."
        }
        else{
            fmSuggestionCell.style.color = "black";
            fmSuggestionCell.innerText=  "You should reduce your work durations and lifting frequency."
        }


    }
    if((isUsMeasurement(verticalLocation.value)>=75) && selectDuration.value === durationOptions[2]) {

        if(selectFrequency.value===frequencyOptions[1]){
            fmSuggestionCell.style.color = "black";
            fmSuggestionCell.innerText = "You should reduce your work durations."
        }
        else if(selectFrequency.value===frequencyOptions[15]||selectFrequency.value===frequencyOptions[16]||selectFrequency.value===frequencyOptions[17]){
            fmSuggestionCell.style.color = "red";
            fmSuggestionCell.innerText = "You should reduce your work duration OR you should reduce the frequency of lifting to less than 13 lifts per minute."

        }
        else if(selectFrequency.value===frequencyOptions[18]){
            fmSuggestionCell.style.color = "red";
            fmSuggestionCell.innerText ="You should reduce the frequency of lifting to less than 13 lifts per minute."
        }
        else{
            fmSuggestionCell.style.color = "black";
            fmSuggestionCell.innerText=  "You should reduce your work durations and lifting frequency."
        }


    }
    if((isUsMeasurement(verticalLocation.value)<75) && selectDuration.value === durationOptions[3]) {

        if(selectFrequency.value===frequencyOptions[1]){
            fmSuggestionCell.innerText = "You should reduce your work durations."
            fmSuggestionCell.style.color = "black";
        }
        else if(selectFrequency.value===frequencyOptions[11]||selectFrequency.value===frequencyOptions[12]){
            fmSuggestionCell.style.color = "red";
            fmSuggestionCell.innerText ="You should reduce the frequency of lifting to less than 9 lifts per minute OR you should reduce your work duration AND you should make the vertical value equal to or greater than the ideal 75 cm."
        }
        else if(selectFrequency.value===frequencyOptions[13]||selectFrequency.value===frequencyOptions[14]){
            fmSuggestionCell.style.color = "red";
            fmSuggestionCell.innerText ="You should reduce your work duration OR you should reduce the frequency of lifting to less than 9 lifts per minute AND you should make the vertical value equal to or greater than the ideal 75 cm."
        }
        else if(selectFrequency.value===frequencyOptions[15]||selectFrequency.value===frequencyOptions[16]||selectFrequency.value===frequencyOptions[17]){
            fmSuggestionCell.style.color = "red";
            fmSuggestionCell.innerText = "You should reduce the frequency of lifting to less than 9 lifts per minute OR you should bring the vertical value closer to the ideal 75 cm and you should make your study periods equal to or shorter than 1 hour."

        }
        else if(selectFrequency.value===frequencyOptions[18]){
            fmSuggestionCell.style.color = "red";
            fmSuggestionCell.innerText ="You should reduce the frequency of lifting to less than 9 lifts per minute."
        }
        else{
            fmSuggestionCell.style.color = "black";
            fmSuggestionCell.innerText=  "You should reduce your work durations and lifting frequency."
        }


    }
    if((isUsMeasurement(verticalLocation.value)>=75) && selectDuration.value === durationOptions[3]) {

        if(selectFrequency.value===frequencyOptions[1]){
            fmSuggestionCell.style.color = "black";
            fmSuggestionCell.innerText = "You should reduce your work durations."
        }
        else if(selectFrequency.value===frequencyOptions[13]||selectFrequency.value===frequencyOptions[14]){
            fmSuggestionCell.style.color = "red";
            fmSuggestionCell.innerText ="You should reduce the frequency of lifting to less than 11 lifts per minute, you should reduce your work duration."
        }
        else if(selectFrequency.value===frequencyOptions[15]||selectFrequency.value===frequencyOptions[16]||selectFrequency.value===frequencyOptions[17]){
            fmSuggestionCell.style.color = "red";
            fmSuggestionCell.innerText = "You should make your study periods equal to or shorter than 1 hour OR you should reduce the frequency of lifting to less than 11 lifts per minute."

        }
        else if(selectFrequency.value===frequencyOptions[18]){
            fmSuggestionCell.style.color = "red";
            fmSuggestionCell.innerText ="You should reduce the frequency of lifting to less than 9 lifts per minute."
        }
        else{
            fmSuggestionCell.style.color = "black";
            fmSuggestionCell.innerText=  "You should reduce the frequency of lifting to less than 11 lifts per minute."
        }


    }

}

function getTableValue(frequency, workDuration, verticalHeight) {
    var calculatedVerticalHeigt = null

    const row = liftTable.find(row => row.F == frequency);

    if (!row) {
        return null;
    }

    const durationData = row[workDuration];
    if (!durationData) {
        return null;
    }

    if (verticalHeight < 75) {
        calculatedVerticalHeigt = "<75cm";
    } else {
        calculatedVerticalHeigt = ">=75cm";
    }

    const heightValue = durationData[calculatedVerticalHeigt];
    if (heightValue === undefined) {
        return null;
    }

    return heightValue;
  }
  var cmSuggestionCell = document.getElementById("cm-suggestion");
  function calculateCm() {
    cmOutput.innerText = getCmValueTable(selectCoupling.value, verticalLocation.value).toFixed(3);

    if (cmOutput.innerText == 1) {
        cmSuggestionCell.innerText = " "
    } else if(cmOutput.innerText == 0.90) {
        cmSuggestionCell.innerText = "You should improve the coupling type"
    }
    else{
        cmSuggestionCell.innerText = "You should improve the coupling type OR you should make the vertical value equal to or greater than the ideal 75 cm."
    }
}

function getCmValueTable(coupling, verticalHeight) {
    var calculatedVerticalHeight = null
    const row = couplingTable.find(row => row.F == coupling);

    if (!row) {
        return null;
    }

    if (verticalHeight < 75) {
        calculatedVerticalHeight = "<75cm";
    } else {
        calculatedVerticalHeight = ">=75cm";
    }

    const result = row[calculatedVerticalHeight];

    return result;
}

function calculateRwl() {
    rwlOutput.innerText = (23 * parseFloat(hmOutput.innerText) * parseFloat(vmOutput.innerText) * parseFloat(dmOutput.innerText) * parseFloat(amOutput.innerText) * parseFloat(fmOutput.innerText) * parseFloat(cmOutput.innerText)).toFixed(3);
}

function calculateLi() {
    liOutput.innerText = (parseFloat(loadWeight.value) / parseFloat(rwlOutput.innerText)).toFixed(3);
}

function checkValues() {
    if (horizontalLocation.value == "" || (isNaN(horizontalLocation.value))) {
        horizontalLocation.style.border = "2px solid red";
    } else {
        horizontalLocation.style.border = "";
    }

    if (verticalLocation.value == "" || (isNaN(verticalLocation.value))) {
        verticalLocation.style.border = "2px solid red";
    } else {
        verticalLocation.style.border = "";
    }

    if (distance.value == "" || (isNaN(distance.value))) {
        distance.style.border = "2px solid red";
    } else {
        distance.style.border = "";
    }

    if (angleOfAsymmetry.value == "" || (isNaN(angleOfAsymmetry.value))) {
        angleOfAsymmetry.style.border = "2px solid red";
    } else {
        angleOfAsymmetry.style.border = "";
    }

    if (selectCoupling.selectedIndex == 0 || (isNaN(selectCoupling.selectedIndex))) {
        selectCoupling.style.border = "2px solid red";
    } else {
        selectCoupling.style.border = "";
    }

    if (selectFrequency.selectedIndex == 0 || (isNaN(selectFrequency.selectedIndex))) {
        selectFrequency.style.border = "2px solid red";
    } else {
        selectFrequency.style.border = "";
    }

    if (selectDuration.selectedIndex == 0|| (isNaN(selectDuration.selectedIndex))) {
        selectDuration.style.border = "2px solid red";
    } else {
        selectDuration.style.border = "";
    }

    if (loadWeight.value == "" || (isNaN(loadWeight.value))) {
        loadWeight.style.border = "2px solid red";
    } else {
        loadWeight.style.border = "";
    }
}

function showOutputTable() {
    outputTable.style.display = "block";
}

function hideOutputTable() {
    outputTable.style.display = "none";
}

(() => {
    hideOutputTable();
})();

function prepareForSave() {
    prepareForPrint()
}

function didTapPrintButton() {
    prepareForPrint()
    printPage()
    removePrintingEffect()
}

function prepareForPrint() {
    actionButtons.style.display = "none";
    inputTable.style.marginBottom = "20px";
}

function printPage() {
    window.print();
}

function removePrintingEffect() {
    actionButtons.style.display = "block";
    inputTable.style.marginBottom = "0px";
}
