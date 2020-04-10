$('#announce').click(function(){
    $('.tap-target').tapTarget('open');
    $('#announce').removeClass('pulse');
});

$('#track').click(function(){
    if($('#trackingID_field').val().replace(/ /gi, '') == ''){
        toaster('Please enter a Tracking ID.', 'red')
    }
    else{
        var id = $('#trackingID_field').val().replace(/ /gi, '');
        $("#trackModal #pid").text(id);
        load();
        var delay = Math.random()*3000+2000;
        unload(300, delay);
        $('#trackModal').delay(delay).modal('open');
    }
});

$("#facilityList li").click(function(){
    var name = $(this).children('.title').text();
    var address = $(this).children('p').html().replace('<br>', ',');
    $('#facilityModal h4').text(name);
    $('#facilityModal #facilityAddress').text(address);
    $('#facilityModal').modal('open');
});
$("#nearestButton").click(function(){
    toaster('Detecting your Location...', 'green');
    e_place = $("#facilityList li").eq(Math.round(Math.random()*$("#facilityList li").length));
    var name =  e_place.children('.title').text();
    var address =  e_place.children('p').html().replace('<br>', ',');
    $('#facilityModal h4').text(name);
    $('#facilityModal #facilityAddress').text(address);
    load();
    var delay = Math.random()*1000+2000;
    unload(300, delay);
    $('#facilityModal').delay(delay).modal('open');
});
$("#qForm_submit").click(function(){
    toaster('Information submitted.<br>We will call you shortly.', 'green');        load();
    var delay = Math.random()*1000+2000;
    unload(300, delay);
});