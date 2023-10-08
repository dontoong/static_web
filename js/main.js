// 마우스 오버 이벤트 처리
$(document).on('mouseover', '.topMenu', function() {
    // 요소의 배경색을 변경합니다.
    $(this).css('backgroundColor', '#858585');
    $('.submenu').stop().slideDown(300);
});

// 마우스 아웃 이벤트 처리
$(document).on('mouseout', '.topMenu', function() {
    // 요소의 배경색을 원래 색상으로 변경합니다.
    $(this).css('backgroundColor', '#000000');
    $('.submenu').stop().slideUp(300);
});