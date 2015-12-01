$(document).on('click', '.tabs-bottom a', function() {
    $(this).addClass('tab-item-active').siblings().removeClass('tab-item-active');
});
$(document).on('click', '.tab-href-list', function() {
//    $(this).addClass('tab-item-active').siblings().removeClass('tab-item-active');
//    console.log(1);
    location.href=$(this).attr('href');
});

