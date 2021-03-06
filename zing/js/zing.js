function show_tip(id) {
    document.getElementById(id).style.display = "block";
}

function hide_tip(id) {
    document.getElementById(id).style.display = "none";
}

function show_hide_sub_group(name_sub_group, name_items) {
    document.getElementById(name_sub_group).addEventListener("mouseover", function () {
        show_tip(name_items)
    });
    document.getElementById(name_sub_group).addEventListener("mouseout", function () {
        hide_tip(name_items)
    });
}

show_hide_sub_group("box-dangki-id", "tip-user-id");


$(function () {
    var i;
    var temp = $('.group>li').each(function () {
        var x = $(this);
        x.hover(function () {
            x.children(".sub-group").css("display", "block");
        }, function () {
            x.children(".sub-group").css("display", "none");
        });
    });

    var rel = $('.slide-thumb .dot').length;
    for (i = 0; i < rel; i++) {
        $($('.slide-thumb .dot[data-tao]')[i]).mouseover(function () {
            $(this).css('display', 'block');
            for (j = 0; j < rel; j++) {
                if (j != i) {
                    $($('#feature>a[data-slide-index]')[j]).css('display', 'none');
                }
            }
        });
    }
});