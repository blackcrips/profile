function update(){
    let focusPosition = document.getElementById('skills');
    let rect = focusPosition.getBoundingClientRect();

    return rect.y;
}

$(document).ready(function(){
    checkOnload();
});

$(document).scroll(function(){
    
    checkOnload();
});

function checkOnload(){
    if(update() <= 700 && update() > 601){
        $('.first').fadeIn(2000);
        $('.first').css('display','flex');
    } else if (update() <= 600 && update() > 401) {
        $('.second').fadeIn(2000);
        $('.second').css('display','flex');
        $('.first').fadeIn(2000);
        $('.first').css('display','flex');
    } else if (update() <= 400 && update() > 101) {
        $('.third').fadeIn(2000);
        $('.third').css('display','flex');
        $('.second').fadeIn(2000);
        $('.second').css('display','flex');
        $('.first').fadeIn(2000);
        $('.first').css('display','flex');
    } else if (update() <= 100 && update() > 51) {
        $('.fourth').fadeIn(2000);
        $('.fourth').css('display','flex');
        $('.third').fadeIn(2000);
        $('.third').css('display','flex');
        $('.second').fadeIn(2000);
        $('.second').css('display','flex');
        $('.first').fadeIn(2000);
        $('.first').css('display','flex');
    } else if (update() <= 50) {
        $('.fourth').fadeIn(2000);
        $('.fourth').css('display','flex');
        $('.third').fadeIn(2000);
        $('.third').css('display','flex');
        $('.second').fadeIn(2000);
        $('.second').css('display','flex');
        $('.first').fadeIn(2000);
        $('.first').css('display','flex');
        $('.image1').fadeIn(2000);
        $('.image1').css('display','flex');
    }
}