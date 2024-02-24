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
    { F: "<=0.2", "≤ 1 Hour": { "<75cm": 1.00, ">=75cm": 1.00 }, ">1 but ≤ 2 Hours": { "<75cm": 0.95, ">=75cm": 0.95 }, ">2 but ≤ 8 Hours": { "<75cm": 0.85, ">=75cm": 0.85 } },
    { F: "0.5", "≤ 1 Hour": { "<75cm": 0.97, ">=75cm": 0.97 }, ">1 but ≤ 2 Hours": { "<75cm": 0.92, ">=75cm": 0.92 }, ">2 but ≤ 8 Hours": { "<75cm": 0.81, ">=75cm": 0.81 } },
    { F: "1", "≤ 1 Hour": { "<75cm": 0.94, ">=75cm": 0.94 }, ">1 but ≤ 2 Hours": { "<75cm": 0.88, ">=75cm": 0.88 }, ">2 but ≤ 8 Hours": { "<75cm": 0.75, ">=75cm": 0.75 } },
    { F: "2", "≤ 1 Hour": { "<75cm": 0.91, ">=75cm": 0.91 }, ">1 but ≤ 2 Hours": { "<75cm": 0.84, ">=75cm": 0.84 }, ">2 but ≤ 8 Hours": { "<75cm": 0.65, ">=75cm": 0.65 } },
    { F: "3", "≤ 1 Hour": { "<75cm": 0.88, ">=75cm": 0.88 }, ">1 but ≤ 2 Hours": { "<75cm": 0.79, ">=75cm": 0.79 }, ">2 but ≤ 8 Hours": { "<75cm": 0.55, ">=75cm": 0.55 } },
    { F: "4", "≤ 1 Hour": { "<75cm": 0.84, ">=75cm": 0.84 }, ">1 but ≤ 2 Hours": { "<75cm": 0.72, ">=75cm": 0.72 }, ">2 but ≤ 8 Hours": { "<75cm": 0.45, ">=75cm": 0.45 } },
    { F: "5", "≤ 1 Hour": { "<75cm": 0.80, ">=75cm": 0.80 }, ">1 but ≤ 2 Hours": { "<75cm": 0.60, ">=75cm": 0.60 }, ">2 but ≤ 8 Hours": { "<75cm": 0.35, ">=75cm": 0.35 } },
    { F: "6", "≤ 1 Hour": { "<75cm": 0.75, ">=75cm": 0.75 }, ">1 but ≤ 2 Hours": { "<75cm": 0.50, ">=75cm": 0.50 }, ">2 but ≤ 8 Hours": { "<75cm": 0.27, ">=75cm": 0.27 } },
    { F: "7", "≤ 1 Hour": { "<75cm": 0.70, ">=75cm": 0.70 }, ">1 but ≤ 2 Hours": { "<75cm": 0.42, ">=75cm": 0.42 }, ">2 but ≤ 8 Hours": { "<75cm": 0.22, ">=75cm": 0.22 } },
    { F: "8", "≤ 1 Hour": { "<75cm": 0.60, ">=75cm": 0.60 }, ">1 but ≤ 2 Hours": { "<75cm": 0.35, ">=75cm": 0.35 }, ">2 but ≤ 8 Hours": { "<75cm": 0.18, ">=75cm": 0.18 } },
    { F: "9", "≤ 1 Hour": { "<75cm": 0.52, ">=75cm": 0.52 }, ">1 but ≤ 2 Hours": { "<75cm": 0.30, ">=75cm": 0.30 }, ">2 but ≤ 8 Hours": { "<75cm": 0.00, ">=75cm": 0.15 } },
    { F: "10", "≤ 1 Hour": { "<75cm": 0.45, ">=75cm": 0.45 }, ">1 but ≤ 2 Hours": { "<75cm": 0.26, ">=75cm": 0.26 }, ">2 but ≤ 8 Hours": { "<75cm": 0.00, ">=75cm": 0.13 } },
    { F: "11", "≤ 1 Hour": { "<75cm": 0.41, ">=75cm": 0.41 }, ">1 but ≤ 2 Hours": { "<75cm": 0.00, ">=75cm": 0.23 }, ">2 but ≤ 8 Hours": { "<75cm": 0.00, ">=75cm": 0.00 } },
    { F: "12", "≤ 1 Hour": { "<75cm": 0.37, ">=75cm": 0.37 }, ">1 but ≤ 2 Hours": { "<75cm": 0.00, ">=75cm": 0.21 }, ">2 but ≤ 8 Hours": { "<75cm": 0.00, ">=75cm": 0.00 } },
    { F: "13", "≤ 1 Hour": { "<75cm": 0.00, ">=75cm": 0.34 }, ">1 but ≤ 2 Hours": { "<75cm": 0.00, ">=75cm": 0.00 }, ">2 but ≤ 8 Hours": { "<75cm": 0.00, ">=75cm": 0.00 } },
    { F: "14", "≤ 1 Hour": { "<75cm": 0.00, ">=75cm": 0.31 }, ">1 but ≤ 2 Hours": { "<75cm": 0.00, ">=75cm": 0.00 }, ">2 but ≤ 8 Hours": { "<75cm": 0.00, ">=75cm": 0.00 } },
    { F: "15", "≤ 1 Hour": { "<75cm": 0.00, ">=75cm": 0.28 }, ">1 but ≤ 2 Hours": { "<75cm": 0.00, ">=75cm": 0.00 }, ">2 but ≤ 8 Hours": { "<75cm": 0.00, ">=75cm": 0.00 } },
    { F: ">15", "≤ 1 Hour": { "<75cm": 0.00, ">=75cm": 0.00 }, ">1 but ≤ 2 Hours": { "<75cm": 0.00, ">=75cm": 0.00 }, ">2 but ≤ 8 Hours": { "<75cm": 0.00, ">=75cm": 0.00 } }
];
  
const couplingTable = [
    { F: "Good", "<75cm": 1.00, ">=75cm": 1.00 },
    { F: "Fair", "<75cm": 0.95, ">=75cm": 1.00 },
    { F: "Poor", "<75cm": 0.90, ">=75cm": 0.90 }
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
var actionButtons = document.getElementById("button-container");

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
    selectFrequency.appendChild(el);
}

for(var i = 0; i < durationOptions.length; i++) {
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

function calculateHm() {
    if (horizontalLocation.value <= 25) {
        hmOutput.innerText = 1;
    } else if (horizontalLocation.value >= 63) {
        hmOutput.innerText = 0;
    } else {
        hmOutput.innerText = 25/horizontalLocation.value;
    }
}

function calculateVm() {
    if (verticalLocation.value <= 75) {
        vmOutput.innerText = 1;
    } else if (verticalLocation.value >= 175) {
        vmOutput.innerText = 0;
    } else {
        vmOutput.innerText = 1-(0.003*Math.abs(verticalLocation.value - 75));
    }
}

function calculateDm() {
    if (distance.value <= 25) {
        dmOutput.innerText = 1;
    } else if (distance.value >= 175) {
        dmOutput.innerText = 0;
    } else {
        dmOutput.innerText = 0.85 * (4.5/distance.value);
    }
}

function calculateAm() {
    if (angleOfAsymmetry.value <= 0) {
        amOutput.innerText = 1;
    } else if (angleOfAsymmetry.value >= 135) {
        amOutput.innerText = 0;
    } else {
        amOutput.innerText = 1-(0.0032*angleOfAsymmetry.value);
    }
}

function calculateFm() {
    fmOutput.innerText = getTableValue(selectFrequency.value, selectDuration.value, verticalLocation.value);
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

  function calculateCm() {
    cmOutput.innerText = getCmValueTable(selectCoupling.value, verticalLocation.value);
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
    rwlOutput.innerText = 23*parseFloat(hmOutput.innerText)*parseFloat(vmOutput.innerText)*parseFloat(dmOutput.innerText)*parseFloat(amOutput.innerText)*parseFloat(fmOutput.innerText)*parseFloat(cmOutput.innerText);
  }

  function calculateLi() {
    liOutput.innerText = parseFloat(loadWeight.value)/parseFloat(rwlOutput.innerText);
  }

function checkValues() {
    if (horizontalLocation == null) {

    }
    if (verticalLocation == null) {

    }
    if (distance == null) {

    }
    if (angleOfAsymmetry == null) {

    }
    if (selectCoupling == null) {

    }
    if (selectFrequency == null) {

    }
    if (selectDuration == null) {

    }
    if (loadWeight == null) {

    }
    if (couplingOptions == null) {

    }
    if (frequencyOptions == null) {

    }
    if (durationOptions == null) {

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

function didTapPrintButton() {
    prepareForPrint()
    printPage()
    removePrintingEffect()
}

function prepareForPrint() {
    title.innerText = "NIOSH LIFTING Report";
    actionButtons.style.display = "none";
}

function printPage() {
    window.print();
}

function removePrintingEffect() {
    title.innerText = "NIOSH Lifting Calculator";
    actionButtons.style.display = "block";

}