document.addEventListener('DOMContentLoaded', function () {
    // Butonları seç
    var buttons = document.querySelectorAll('.button');

    // Farklı metinleri içeren bir dizi oluştur
    var buttonTexts = ['Home Page', 'About Us', 'Blog', 'What is NİOSH', 'Contact Us'];

    // Butonlara tıklama olayını ekle ve içine farklı metinleri ekle
    buttons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            alert('Button ' + (index + 1) + ' tıklandı!');
        });

        // Butonların içine farklı metinleri ekle
        button.innerText = buttonTexts[index];
    });
});
