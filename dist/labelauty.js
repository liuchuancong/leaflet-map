(function ($) {
    $.fn.labelauty = function (tag, tag2) {
        rdochecked(tag);
        if (tag2 == "rdo") {
            $(document).on('click', '.chkbox',function () {
                $(this).prev().prop("checked", "checked");
                rdochecked(tag);
            })
        } else {
            $(document).on('click', '.chkbox', function () {
                if ($(this).prev().prop("checked") == true) {
                    $(this).prev().removeAttr("checked");
                } else {
                    $(this).prev().prop("checked", "checked");
                }
                rdochecked(tag);
            })
        }

        function rdochecked(tag) {
            $('.' + tag).each(function (i) {
                var rdobox = $('.' + tag).eq(i).next();
                if ($('.' + tag).eq(i).prop("checked") == false) {
                    rdobox.removeClass("checked");
                    rdobox.addClass("unchecked");
                    rdobox.find(".check-image").css("background", "url(dist/images/input-unchecked.png)");
                } else {
                    rdobox.removeClass("unchecked");
                    rdobox.addClass("checked");
                    rdobox.find(".check-image").css("background", "url(dist/images/input-checked.png)");
                }
            });
        }
    }
}(jQuery));