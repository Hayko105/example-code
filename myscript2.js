$(function () {
    var app = {

        initialize: function () {
            this.setUpListeners();
        },

        setUpListeners: function () {
            this.triggerMenu();
            this.dropDownMenu();
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
    }
    app.initialize();
});


$(window).resize(function () {
    if ($(window).width() > 991) {
        $('.main-menu').removeAttr('style');
    }
});