$(function () {
    var app = {

        initialize: function () {
            this.setUpListeners();
        },

        setUpListeners: function () {
            this.triggerMenu();
            this.dropDownMenu();
            this.goToAnchor();
            this.uploader();
        },

        triggerMenu: function () {
            /*************** Menu mobile ************/
            if ($(window).width() < 991) {
                $('.toggle-menu').on('click', function (e) {
                    e.preventDefault();
                    $('.main-menu').slideToggle(500);
                });
            }
        },

        dropDownMenu: function () {
            /*************** DropDown menu ************/
            $('.main-menu .yes__drop').on('click', function (e) {
                e.preventDefault();
                var dropMenu = $(this).siblings('.drop__menu'),
                    $this = $(this);

                if (dropMenu.is(':visible')) {
                    $('.drop__menu').slideUp(400);
                } else {
                    $('.drop__menu').slideUp(400);
                    dropMenu.slideDown(400);
                }
            });
        },

        goToAnchor: function () {
            /*************** Go to anchor ************/
            if (anhcor != "") {
                var got = $("a[name='" + anhcor + "']").offset();
                if (got != null) {
                    var tttop = got.top - 80;
                    $('html,body').animate({
                        scrollTop: tttop
                    }, 'slow');
                }
            }
        },

        uploader: function () {
            /******************* File uploader *******************/
            $('#fileupload').fileupload({
                dataType: 'json',
                done: function (e, data) {
                    $.each(data.result.files, function (index, file) {
                        $('<p/>').text(file.name).appendTo(document.body);
                    });
                },
                progressall: function (e, data) {
                    var progress = parseInt(data.loaded / data.total * 100, 10);
                    $('#progress .progress-bar').css(
                        'width',
                        progress + '%'
                    );
                    $('#progress .progress-bar').text(progress + '%');
                },
                success: function (response) {
                    jsonData = response;
                    if (jsonData.status == 0) {
                        alert('oopps');
                    }
                    if (jsonData.status == 1) {
                        $("#hiddenNameDocFeedBack").val(jsonData.fname);
                    }
                }
            }).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled');
        },
    }

    app.initialize();
});


$(window).resize(function () {
    if ($(window).width() > 991) {
        $('.main-menu').removeAttr('style');
    }
});