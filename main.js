function appendImage () {
    $.getJSON("http://178.128.61.189:5000/times/10", function (data) {
        $.each(data, function (key, val) {
            $('#gallery').append('<a>' +
                '<img src="' + val + '" />' +
                '</a>');
        });
        $('#gallery').justifiedGallery('norewind');
    });
}

$(function () {
    $('#gallery').justifiedGallery({ rowHeight: 320,
                                        margins: 10 });
    appendImage();
});

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        appendImage();
    }
});
