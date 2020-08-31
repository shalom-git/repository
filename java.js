function menuBtn(x) {
    const item = document.getElementById(x);
    item.classList.toggle('active');
}

$(document).ready(function(){
    $('.main').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'android') {
            $('.mainsub').not('.'+value).hide();
            $('.mainsub').filter('.'+value).show('1000');
            $('.main').hide();
        }
        if (value == 'apple') {
            $('.mainsub').not('.'+value).hide();
            $('.mainsub').filter('.'+value).show('1000');
            $('.main').hide();
        }
        if (value == 'windows') {
            $('.mainsub').not('.'+value).hide();
            $('.mainsub').filter('.'+value).show('1000');
            $('.main').hide();
        }
        if (value == 'blackberry') {
            $('.mainsub').not('.'+value).hide();
            $('.mainsub').filter('.'+value).show('1000');
            $('.main').hide();
        }
    })
    
    $('.back').click(function(){
        $('.main').show('1000');
        $('.mainsub').hide();
    })
    
    $('.list').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'all android') {
            $('.item').filter('.android').show('1000');
            $('.item').not('.android').hide();
        }
        else {
            $('.item').not('.' + value).hide();
            $('.item').filter('.' + value).show('1000')
        }
        
    })
})