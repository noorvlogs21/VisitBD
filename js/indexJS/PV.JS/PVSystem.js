/*CORE FUNCTIONS*/

// ---- Change html viws ---- //
function changeScreen(mainScreen) {

    //the screen to goto
    var mainScreen;

    switch (mainScreen) {

        case 'homepage': // name of PV
            $(".contentRoot").empty(); // empty current content in PV
            getPartialView(mainScreen); // add new PV
            break; // end
        case 'BDMap': // BDMap.html
            $(".contentRoot").empty();
            getPartialView(mainScreen);
            break;

    } //close switch
    console.log(mainScreen + " Loaded Successfully");
} //close changeAppPage function


function getPartialView(screen) {

    var contentLoaded;

    console.log("PV Being Injected: " + screen);

    //Get HTML via a promise
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    var myRequest = new Request('partialViews/' + screen + '.html', myInit);
    fetch(myRequest).then(function (response) {
        return response.text();
    }).then(function (data) {
        $(".contentRoot").append(data);
        contentLoaded = true;
    });
} //close getPartialView function
