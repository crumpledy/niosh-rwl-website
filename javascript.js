document.addEventListener('DOMContentLoaded', function () {
    // Butonları seç
    var buttons = document.querySelectorAll('.button');

    // Farklı metinleri içeren bir dizi oluştur
    var buttonTexts = ['Home Page', 'About Us', 'Blog', 'What is NİOSH', 'Contact Us'];

    // Butonlara tıklama olayını ekle ve içine farklı metinleri ekle
    buttons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            
        });

        // Butonların içine farklı metinleri ekle
        button.innerText = buttonTexts[index];
    });
});
// Add event listeners to the language buttons
const languageButtons = document.querySelectorAll('.language-button');
languageButtons.forEach(button => {
    button.addEventListener('click', () => {
    });
});document.addEventListener('DOMContentLoaded', function() {
    var languageButtons = document.querySelectorAll('.language-button');
   
    languageButtons.forEach(function(button) {
       button.addEventListener('click', function() {
         var language = this.getAttribute('data-language');
         alert('Translating to ' + language);
         // Add your translation logic here
       });
    });
   });
