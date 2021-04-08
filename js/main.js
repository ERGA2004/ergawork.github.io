$(document).ready(function(){
    $('.container row div p a ').click(function() {
        $(this).siblings('a').removeClass('active');
        $(this).addClass('active');
    });
});


document.getElementById('target-id').style.display = 'none'; // hide it
document.getElementById('target-id').style.display = 'block'; // show it (for block element, eg: div)
document.getElementById('target-id').style.display = 'inline'; // show it (for inline element, eg: span)