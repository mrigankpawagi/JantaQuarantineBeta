function load(time=150, delay=0){
    $('#loader').delay(delay).fadeIn(time);   
}
function unload(time=150, delay=0){
    $('#loader').delay(delay).fadeOut(time); 
}
function toaster(text, color='white'){
    M.toast({html: '<span class="' + color + '-text">' + text + '</span>'});
}
function randomString(length, chars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXY') {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
M.AutoInit();
M.Datepicker.init(document.querySelectorAll('.datepicker'), {'container': $('#lastElem').eq(0)});
$("#sampleRandomString").text(randomString(10));
$('#trackModal #dateSince').text(new Date(new Date() - 1000 * 60 * 60 * 24 * 6).toLocaleDateString());

unload();