//Hide Area Cards on load
$('#rangpurInfoCard').hide();
$('#sylhetInfoCard').hide();

//Map Hotspot Areas
//click on hotspot within the map
$('#rangpurMap').click(function() {
    console.log('Rangpur Hotspot Clicked.');
    try {
        //Fade in the info card
        $('#rangpurInfoCard').fadeIn('500');
        console.log('Rangpur Info Card Loaded Successfully');
        //take user to info page of the area
        $('#rangpurInfoBut').click(function() {
            changeScreen('homepage');
        });
        //close info card
        $('.close').click(function(){
            $('#rangpurInfoCard').fadeOut('500');
        console.log('Rangpur Info Card Closed Successfully');
        });
    }catch(error) {
        //catch any errors
        console.error(error);
    }
});
$('#sylhetMap').click(function() {
    console.log('Sylhet Hotspot Clicked.');
    try {
        $('#sylhetInfoCard').fadeIn('500');
        console.log('Sylhet Info Card Loaded Successfully');
        $('#sylhetInfoBut').click(function() {
            changeScreen('homepage');
        });
        $('.close').click(function(){
            $('#sylhetInfoCard').fadeOut('500');
            console.log('Sylhet Info Card Closed Successfully');
        });
    }catch(error) {
        console.error(error);
    }
});
$('#dhakaMap').click(function() {
    console.log('Dhaka Hotspot Clicked.');
    try {
        //Load card with brief info on area
        console.log('Dhaka Info Card Loaded Successfully');
    }catch(error) {
        console.error(error);
    }
});
$('#rajshahiMap').click(function() {
    console.log('Rajshahi Hotspot Clicked.');
    try {
        //Load card with brief info on area
        console.log('Rajshahi Info Card Loaded Successfully');
    }catch(error) {
        console.error(error);
    }
});
$('#khulnaMap').click(function() {
    console.log('Khulna Hotspot Clicked.');
    try {
        //Load card with brief info on area
        console.log('Khulna Info Card Loaded Successfully');
    }catch(error) {
        console.error(error);
    }
});
$('#barisalMap').click(function() {
    console.log('Barisal Hotspot Clicked.');
    try {
        //Load card with brief info on area
        console.log('Barisal Info Card Loaded Successfully');
    }catch(error) {
        console.error(error);
    }
});
$('#chittagongMap').click(function() {
    console.log('Chittagong Hotspot Clicked.');
    try {
        //Load card with brief info on area
        console.log('Chittagong Info Card Loaded Successfully');
    }catch(error) {
        console.error(error);
    }
});
