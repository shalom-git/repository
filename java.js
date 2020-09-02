function menuBtn(x) {
    const item = document.getElementById(x);
    item.classList.toggle('active');
}

function scroller(x, y) {
    let obj = document.getElementById('android-items ' + y);
    if (x == 'right') {
        obj.scrollLeft += 200;
    }
    else {
        obj.scrollLeft -= 200;
    }
}


window.onscroll = function() {
    document.getElementById('top-header').classList.toggle('active', window.pageYOffset > 5);
    document.getElementById('pointup').classList.toggle('active', window.pageYOffset > 1000);
} 

$(document).ready(function(){
    
    $('.android-pointer').click(function() {
        const value = $(this).attr('data-filter');
        if(value == 'all') {
            $('.android-item').show('100');
        }
        else {
            $('.android-item').filter('.' + value).show('1000');
            $('.android-item').not('.' + value).hide()
        }
    })
    
    $('.apple-pointer').click(function() {
        const value = $(this).attr('data-filter');
        if(value == 'all') {
            $('.apple-item').show('100');
        }
        else {
            $('.apple-item').filter('.' + value).show('1000');
            $('.apple-item').not('.' + value).hide()
        }
    })
    
    $('.windows-pointer').click(function() {
        const value = $(this).attr('data-filter');
        if(value == 'all') {
            $('.windows-item').show('100');
        }
        else {
            $('.windows-item').filter('.' + value).show('1000');
            $('.windows-item').not('.' + value).hide()
        }
    })
    
    $('.blackberry-pointer').click(function() {
        const value = $(this).attr('data-filter');
        if(value == 'all') {
            $('.blackberry-item').show('100');
        }
        else {
            $('.blackberry-item').filter('.' + value).show('1000');
            $('.blackberry-item').not('.' + value).hide()
        }
    })
    
   
})