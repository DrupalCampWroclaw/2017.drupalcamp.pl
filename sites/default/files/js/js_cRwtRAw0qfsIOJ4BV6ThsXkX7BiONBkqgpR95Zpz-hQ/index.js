/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

// To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.mobile_menu = {
    attach: function (context, settings) {
      // Place your code here.
      $('#mobile-menu-links li.expanded').prepend('<div class="menu-item-expand-link"><span>+</span></div>');

      $("#mobile-menu-links li.expanded .menu-item-expand-link").live("click", function () {
        $(this).parent('li').toggleClass('open');
      });
      $(".mobile-menu-button").live("click", function () {
        $('#mobile-menu-links').toggleClass('open');
      });
    }
  };

  Drupal.behaviors.fb_resizer = {
    attach: function (context, settings) {
      fb_iframe_resize();
      $(window).on('resize', fb_iframe_resize);

      /**
       * Resize facebook iframe.
       */
      function fb_iframe_resize() {
        let fb_iframe = $('#social-media-fb iframe');
        if (fb_iframe.length == 1) {
          let $iframe_widht = fb_iframe['0'].clientWidth;
          let $url = fb_iframe['0'].src;
          let decodedUrl = decodeURIComponent($url);
          decodedUrl += '&width=' + $iframe_widht;
          fb_iframe['0'].src = decodedUrl;
        }
      }
    }
  };

})(jQuery, Drupal, this, this.document);
;
