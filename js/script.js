$(function(){
    $('.counter').counterUp({
        delay: 30,
        time: 1000
    })
    // prggress bar  js start
    $('.proggressBar').rProgressbar({
        percentage: 80,
        duration: 2000,
        fillBackgroundColor: '#15c8a0',
        backgroundColor: '#eff5f4',
        borderRadius: '0px',
        height: '16px',
        width: '100%'
    });
    $('.proggressBarnd').rProgressbar({
        percentage: 40,
        duration: 2000,
        fillBackgroundColor: '#15c8a0',
        backgroundColor: '#eff5f4',
        borderRadius: '0px',
        height: '16px',
        width: '100%'
    })
    // prggress bar  js end
    // causesproggres section 
    $('.causes_prggres').rProgressbar({
        percentage: 80,
        duration: 2000,
        fillBackgroundColor: '#15c8a0',
        backgroundColor: '#fff',
        borderRadius: '0px',
        height: '12px',
        width: '100%'
    })
})