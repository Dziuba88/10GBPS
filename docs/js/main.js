jQuery(document).ready(function($) {
	
    $("[href='#']").click(function (event) {event.preventDefault()});

    $("a, input, textarea, button").attr("hideFocus", "true").css("outline", "none");

    $("input").attr('autocomplete', 'off');

    $(".button-collapse").sideNav();

    $('ul.tabs').tabs();


    $(".server-item-param").each(function(index, el) {
    	
        var active, index, label = $(this).find('label'),
            $this = $(this),
            wrap_inner = $this.find(".server-item-param-list"),
            wrap_width = wrap_inner.outerWidth();

        var calcR = function(el) {
            return wrap_width - el.position().left - el.outerWidth() - $this.scrollLeft() ;
        };

        var calcL = function(el) {
            return el.position().left - $this.scrollLeft();
        };

        wrap_inner.append('<div class="indicator"></div>');

        var indicator = $(this).find(".indicator");

        active = $(label).filter('active');

        if (active.length === 0) {
            active = $(this).find('label.active').first();
        }
        if (active.length === 0) {
            active = label.first();
        }

        active.addClass('active');

        index = label.index(active);

        if (index < 0) {
            index = 0;
        }

        indicator.css({"right": calcR(active) });
        indicator.css({"left": calcL(active) });

        $(this).on('click', 'label', function(event) {
            event.preventDefault();

            active.removeClass('active');

            active = $(this);

            active.addClass("active");

            var prev_index = index;

            index = label.index($(this));

            if ((index - prev_index) >= 0) {
                indicator.velocity({"right": calcR(active) }, { duration: 300, queue: false, easing: 'easeOutQuad'});
                indicator.velocity({"left": calcL(active) }, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});

            } else {
                indicator.velocity({"left": calcL(active) }, { duration: 300, queue: false, easing: 'easeOutQuad'});
                indicator.velocity({"right": calcR(active) }, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
            }
      });
    });

    Materialize.updateTextFields();

    $('.brand-logo-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });

    $('select').not('.disabled').material_select();
});
