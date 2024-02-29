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
var inputTable = document.getElementById("input-table");
var actionButtons = document.getElementById("button-container");
var navButtons = document.getElementById("nav-links");
var langButtons = document.getElementById("language-selector");
var footerContainer = document.getElementById("footer-container");
var onPrintHeader = document.getElementById("on-print-header");
var onPrintFooter = document.getElementById("on-print-footer");
var onPrintFooterBar = document.getElementById("footer-bar");

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

    generateSuggestions()
    showOutputTable()
}

function isUsMeasurement(value) {
    var isUsMeasurement = false

    if(unitOfMeasurement.value != "metric") {
        return value * 2.54
    }

    return value
}

function calculateHm() {
    if (isUsMeasurement(horizontalLocation.value) <= 25) {
        hmOutput.innerText = 1;
    } else if (isUsMeasurement(horizontalLocation.value) >= 63) {
        hmOutput.innerText = 0;
    } else {
        hmOutput.innerText = 25/isUsMeasurement(horizontalLocation.value);
    }
}

function calculateVm() {
    if (isUsMeasurement(verticalLocation.value) <= 75) {
        vmOutput.innerText = 1;
    } else if (isUsMeasurement(verticalLocation.value) >= 175) {
        vmOutput.innerText = 0;
    } else {
        vmOutput.innerText = 1-(0.003*Math.abs(isUsMeasurement(verticalLocation.value) - 75));
    }
}

function calculateDm() {
    if (isUsMeasurement(distance.value) <= 25) {
        dmOutput.innerText = 1;
    } else if (isUsMeasurement(distance.value) >= 175) {
        dmOutput.innerText = 0;
    } else {
        dmOutput.innerText = 0.85 * (4.5/isUsMeasurement(distance.value));
    }
}

function calculateAm() {
    if (isUsMeasurement(angleOfAsymmetry.value) <= 0) {
        amOutput.innerText = 1;
    } else if (isUsMeasurement(angleOfAsymmetry.value) >= 135) {
        amOutput.innerText = 0;
    } else {
        amOutput.innerText = 1-(0.0032*isUsMeasurement(angleOfAsymmetry.value));
    }
}

function calculateFm() {
    fmOutput.innerText = getTableValue(selectFrequency.value, selectDuration.value, isUsMeasurement(verticalLocation.value));
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

function prepareForSave() {
    prepareForPrint()
    updateLanguage(currentLanguage)
}

function didTapPrintButton() {
    prepareForPrint()
    updateLanguage(currentLanguage)
    printPage()
    removePrintingEffect()
}

function prepareForPrint() {
    CalculatorTitle.innerText = "NIOSH LIFTING Report";
    actionButtons.style.display = "none";
    navButtons.style.display = "none";
    langButtons.style.display = "none";
    footerContainer.style.display = "none";

    onPrintHeader.style.display = "block";
    onPrintFooter.style.display = "flex";

    onPrintFooter.style.justifyContent; "space-between";
    onPrintFooterBar.style.justifyContent = "space-between";

    inputTable.style.marginBottom = "20px";
}

function printPage() {
    window.print();
}

function removePrintingEffect() {
    CalculatorTitle.innerText = "NIOSH Lifting Calculator";
    actionButtons.style.display = "block";
    navButtons.style.display = "block";
    langButtons.style.display = "block";
    footerContainer.style.display = "flex";

    onPrintHeader.style.display = "none";
    onPrintFooter.style.display = "none";

    onPrintFooter.style.justifyContent; "flex-start";
    onPrintFooterBar.style.justifyContent = "flex-start";

    inputTable.style.marginBottom = "0px";
}

const languages = {
    en: {
        Home: "Home",
        Aboutus: "About Us",
        Blog: "Blog",
        WhatIsNiosh: "What is NIOSH",
        ContactUs: "Contact Us",
        onPrintHeader: "\"Safer Workplaces a Healtier Future\"",
        CalculatorTitle: "NIOSH LIFTING CALCULATOR",
        Inputs: "INPUTS",
        unitOfMeasurement: "Unit of Measurement",
        HorizontalLocation: "Horizontal Location",
        HorizontalDescription: "distance from hands to mid-point between medial malleoli measured at origin and destination",
        VerticalLocation: "Vertical Location",
        VerticalDescription: "distance from hands above floor measured at origin and destination",
        Distance: "Distance",
        DistanceDescription: "vertical travel = high - low",
        AngleOfAsymmetry: "Angle of Asymmetry",
        AngleDescription: "the angle between asymmetry line and sagittal line",
        Coupling: "Coupling",
        CouplingDescription: "How well the worker can grasp the object",
        Frequency: "Frequency",
        FrequencyDescription: "the number of lifts per minute",
        Duration: "Duration",
        DurationDescription: "the total time spent lifting over a work shift",
        LoadWeight: "Load Weight",
        WeightDescription: "weight of the object lifted",
        calculate: "Calculate",
        clear: "Clear",
        print: "Print",
        save: "Save",
        Results: "RESULTS",
        RiskLevelSuggestions: "RISK LEVEL AND SUGGESTIONS",
        RecommendedWeightLimit: "Recommended Weight Limit (RWL)",
        LiftingIndex: "Lifting Index (LI)",
        HorizontalMultiplier: "Horizontal Multiplier (HM)",
        VerticalMultiplier: "Vertical Multiplier (VM)",
        DistanceMultiplier: "Distance Multiplier (DM)",
        AsymmetryMultiplier: "Asymmetry Multiplier (AM)",
        FrequencyMultiplier: "Frequency Multiplier (FM)",
        CouplingMultiplier: "Coupling Multiplier (CM)",
        PrivacyPolicy: "Privacy Policy",
        GiveFeedback: "Give Feedback",
        AboutusUppercase: "ABOUT US",
        WhoAreWe: "Who are we",
        ContactUsFooter: "Contact Us",
        Help: "HELP",
        WhatIsNioshFooter: "What is NIOSH",
        FAQ: "FAQ",
        CalculatorTitleFooter: "NIOSH LIFTING CALCULATOR"
    },
    tr: {
        Home: "Ana Sayfa",
        Aboutus: "Hakkımızda",
        Blog: "Blog",
        WhatIsNiosh: "NIOSH Nedir",
        ContactUs: "İletişim",
        onPrintHeader: "\"Güvenli Çalışma Alanı, Sağlıklı bir gelecek\"",
        CalculatorTitle: "NIOSH KALDIRMA HESAPLAYICI",
        Inputs: "GİRDİLER",
        unitOfMeasurement: "Ölçü Birimi",
        HorizontalLocation: "Yatay Konum",
        HorizontalDescription: "ellerin medial malleoller arasındaki orta noktaya olan mesafesi, başlangıç ve varış noktasında ölçülür.",
        VerticalLocation: "Dikey Konum",
        VerticalDescription: "ellerin yerden yüksekliği, başlangıç ve varış noktasında ölçülür",
        Distance: "Mesafe",
        DistanceDescription: "dikey seyahat = yüksek - düşük",
        AngleOfAsymmetry: "Asimetri Açısı",
        AngleDescription: "asimetri çizgisi ile sagittal çizgi arasındaki açı",
        Coupling: "Bağlantı",
        CouplingDescription: "işçinin nesneyi ne kadar iyi kavrayabildiği",
        Frequency: "Frekans",
        FrequencyDescription: "dakika başına yapılan kaldırma sayısı",
        Duration: "Süre",
        DurationDescription: "bir iş vardiyası boyunca kaldırma üzerinde harcanan toplam süre",
        LoadWeight: "Yük Ağırlığı",
        WeightDescription: "kaldırılan nesnenin ağırlığı",
        calculate: "Hesapla",
        clear: "Temizle",
        print: "Yazdır",
        save: "Kaydet",
        Results: "SONUÇLAR",
        RiskLevelSuggestions: "RISK SEVİYESİ VE ÖNERİLER",
        RecommendedWeightLimit: "Önerilen Ağırlık Limiti (RWL)",
        LiftingIndex: "Kaldırma İndeksi (LI)",
        HorizontalMultiplier: "Yatay Çarpan (HM)",
        VerticalMultiplier: "Dikey Çarpan (VM)",
        DistanceMultiplier: "Mesafe Çarpanı (DM)",
        AsymmetryMultiplier: "Asimetri Çarpanı (AM)",
        FrequencyMultiplier: "Frekans Çarpanı (FM)",
        CouplingMultiplier: "Bağlantı Çarpanı (CM)",
        PrivacyPolicy: "Gizlilik Politikası",
        GiveFeedback: "Geri Dönüş Bildir",
        AboutusUppercase: "HAKKIMIZDA",
        WhoAreWe: "Biz Kimiz",
        ContactUsFooter: "Bize Ulaşın",
        Help: "YARDIM",
        WhatIsNioshFooter: "NIOSH Nedir",
        FAQ: "FAQ",
        CalculatorTitleFooter: "NIOSH KALDIRMA HESAPLAYICI"
    }
};

function updateLanguage(language) {
    currentLanguage = language;

    document.getElementById('Home').textContent = languages[language].Home;
    document.getElementById('Aboutus').textContent = languages[language].Aboutus;
    document.getElementById('Blog').textContent = languages[language].Blog;
    document.getElementById('WhatIsNiosh').textContent = languages[language].WhatIsNiosh;
    document.getElementById('ContactUs').textContent = languages[language].ContactUs;
    document.getElementById("on-print-header").textContent = languages[language].onPrintHeader;

    document.getElementById('CalculatorTitle').textContent = languages[language].CalculatorTitle;
    document.getElementById("Inputs").textContent = languages[language].Inputs;
    document.getElementById('unitOfMeasurement').textContent = languages[language].unitOfMeasurement;
    document.getElementById('HorizontalLocation').textContent = languages[language].HorizontalLocation;
    document.getElementById('HorizontalDescription').textContent = languages[language].HorizontalDescription;
    document.getElementById('VerticalLocation').textContent = languages[language].VerticalLocation;
    document.getElementById('VerticalDescription').textContent = languages[language].VerticalDescription;
    document.getElementById('Distance').textContent = languages[language].Distance;
    document.getElementById('DistanceDescription').textContent = languages[language].DistanceDescription;
    document.getElementById('AngleOfAsymmetry').textContent = languages[language].AngleOfAsymmetry;
    document.getElementById('AngleDescription').textContent = languages[language].AngleDescription;
    document.getElementById('Coupling').textContent = languages[language].Coupling;
    document.getElementById('CouplingDescription').textContent = languages[language].CouplingDescription;
    document.getElementById('Frequency').textContent = languages[language].Frequency;
    document.getElementById('FrequencyDescription').textContent = languages[language].FrequencyDescription;
    document.getElementById('Duration').textContent = languages[language].Duration;
    document.getElementById('DurationDescription').textContent = languages[language].DurationDescription;
    document.getElementById('LoadWeight').textContent = languages[language].LoadWeight;
    document.getElementById('WeightDescription').textContent = languages[language].WeightDescription;
    document.getElementById('calculate').textContent = languages[language].calculate;
    document.getElementById('clear').textContent = languages[language].clear;
    document.getElementById('print').textContent = languages[language].print;
    document.getElementById('save').textContent = languages[language].save;
    document.getElementById('Results').textContent = languages[language].Results;
    document.getElementById('RiskLevelSuggestions').textContent = languages[language].RiskLevelSuggestions;
    document.getElementById('RecommendedWeightLimit').textContent = languages[language].RecommendedWeightLimit;
    document.getElementById('LiftingIndex').textContent = languages[language].LiftingIndex;
    document.getElementById('HorizontalMultiplier').textContent = languages[language].HorizontalMultiplier;
    document.getElementById('VerticalMultiplier').textContent = languages[language].VerticalMultiplier;
    document.getElementById('DistanceMultiplier').textContent = languages[language].DistanceMultiplier;
    document.getElementById('AsymmetryMultiplier').textContent = languages[language].AsymmetryMultiplier;
    document.getElementById('FrequencyMultiplier').textContent = languages[language].FrequencyMultiplier;
    document.getElementById('CouplingMultiplier').textContent = languages[language].CouplingMultiplier;
    
    document.getElementById('PrivacyPolicy').textContent = languages[language].PrivacyPolicy;
    document.getElementById('GiveFeedback').textContent = languages[language].GiveFeedback;
    document.getElementById('AboutusUppercase').textContent = languages[language].AboutusUppercase;
    document.getElementById('WhoAreWe').textContent = languages[language].WhoAreWe;
    document.getElementById('ContactUsFooter').textContent = languages[language].ContactUsFooter;
    document.getElementById('Help').textContent = languages[language].Help;
    document.getElementById('WhatIsNioshFooter').textContent = languages[language].WhatIsNioshFooter;
    document.getElementById('FAQ').textContent = languages[language].FAQ;
    document.getElementById('CalculatorTitleFooter').textContent = languages[language].CalculatorTitleFooter;
    

    //2 CONDITION TEXT
    /*
    var titleText = document.getElementById('Home').textContent;
    
    if (titleText === languages.en.welcome || titleText === languages.en.goodbye) {
        document.getElementById('title').textContent = languages[language].title;
    } else {
        document.getElementById('title').textContent = languages[language].goodbye;
    } */
    //END

    generateSuggestions()
}

document.getElementById('btn-en').addEventListener('click', function() {
    updateLanguage('en');
});

document.getElementById('btn-tr').addEventListener('click', function() {
    updateLanguage('tr');
});

function generateSuggestions() {

}