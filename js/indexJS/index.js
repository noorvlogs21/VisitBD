// change header text
var text = ["বাংলাদেশ", "Bangladesch", "孟加拉国", "بنغلاديش", "Bengladêş", "बांग्लादेश", "バングラデシュ", "בנגלדש", "بنگلہ دیش", "방글라데시", "Bangladesh"]; // creating text to fill in the div
var counter = 0; // setting the start value of the array to 0
var elem = document.getElementById("changeText"); // targeting the div to change the text in
setInterval(change, 2500); // (meathod, how long till each change) 

function change() { // method to change the text within the array
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
//side nav mobile
$(document).ready(function () {
    $('.sidenav').sidenav();
});

// dropdown menu
$('.dropdown-trigger').dropdown();

//homepage - BDMap / button
$(document).on('click', '#exploreMap', {}, function (e) {
    console.log('Re-Directing to BDMap');
    changeScreen('BDMap');
});
//nav - BDMap / nav link
$(document).on('click', '#districtMap', {}, function (e) {
    console.log('Re-Directing to BDMap');
    changeScreen('BDMap');
});
