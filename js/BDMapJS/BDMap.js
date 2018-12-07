//Hide Area Cards on load
$('#rangpurInfoCard').hide();
$('#sylhetInfoCard').hide();
$('#dhakaInfoCard').hide();
$('#rajshahiInfoCard').hide();
$('#khulnaInfoCard').hide();
$('#barisalInfoCard').hide();
$('#chittagongInfoCard').hide();

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
        $('#dhakaInfoCard').fadeIn('500');
        console.log('Dhaka Info Card Loaded Successfully');
        $('#dhakaInfoBut').click(function() {
            changeScreen('homepage');
        });
        $('.close').click(function(){
            $('#dhakaInfoCard').fadeOut('500');
            console.log('Dhaka Info Card Closed Successfully');
        });
    }catch(error) {
        console.error(error);
    }
});
$('#rajshahiMap').click(function() {
    console.log('Rajshahi Hotspot Clicked.');
    try {
        $('#rajshahiInfoCard').fadeIn('500');
        console.log('Rajshahi Info Card Loaded Successfully');
        $('#rajshahiInfoBut').click(function() {
            changeScreen('homepage');
        });
        $('.close').click(function(){
            $('#rajshahiInfoCard').fadeOut('500');
            console.log('Rajshahi Info Card Closed Successfully');
        });
    }catch(error) {
        console.error(error);
    }
});
$('#khulnaMap').click(function() {
    console.log('Khulna Hotspot Clicked.');
    try {
        $('#khulnaInfoCard').fadeIn('500');
        console.log('Sylhet Info Card Loaded Successfully');
        $('#khulnaInfoBut').click(function() {
            changeScreen('homepage');
        });
        $('.close').click(function(){
            $('#khulnaInfoCard').fadeOut('500');
            console.log('Sylhet Info Card Closed Successfully');
        });
    }catch(error) {
        console.error(error);
    }
});
$('#barisalMap').click(function() {
    console.log('Barisal Hotspot Clicked.');
    try {
        $('#barisalInfoCard').fadeIn('500');
        console.log('Barisal Info Card Loaded Successfully');
        $('#barisalInfoBut').click(function() {
            changeScreen('homepage');
        });
        $('.close').click(function(){
            $('#barisalInfoCard').fadeOut('500');
            console.log('Barisal Info Card Closed Successfully');
        });
    }catch(error) {
        console.error(error);
    }
});
$('#chittagongMap').click(function() {
    console.log('Chittagong Hotspot Clicked.');
    try {
        $('#chittagongInfoCard').fadeIn('500');
        console.log('Chittagong Info Card Loaded Successfully');
        $('#chittagongInfoBut').click(function() {
            changeScreen('homepage');
        });
        $('.close').click(function(){
            $('#chittagongInfoCard').fadeOut('500');
            console.log('Chittagong Info Card Closed Successfully');
        });
    }catch(error) {
        console.error(error);
    }
});
