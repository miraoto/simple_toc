(function($) {
  $.simpleToc =function(element, options) {
    var defaults = {
      section: 'body',
      listType: '<ul/>',
      selectors: 'h2,h3',
      prefix: 'toc',
      anchorName: function(i, prefix) {
        return prefix + '-' + i;
      },
      headerText: function($heading) {
        return $heading.replaceWith( $heading.html().replace(/<\/?[^>]+>/gi, ' '))
      },
      listClass: function(i, heading, $heading, prefix) {
        return prefix + '-' + $heading[0].tagName.toLowerCase();
      }
    }

    var plugin = this;
        plugin.settings = {}

    var $element = $(element),
        element = element;

    plugin.init = function() {
      plugin.settings = $.extend({}, defaults, options);

      var section = $(plugin.settings.section);
      var headers = $(plugin.settings.selectors, section);

      return $element.each(function() {
        var ul = $(plugin.settings.listType);

        headers.each(function(i, header) {
          var $h = $(header);
          var anchorName = plugin.settings.anchorName(i, plugin.settings.prefix);
          var headerText = plugin.settings.headerText($h).replace(/\s/g, "");
          if (headerText.length <= 0) {
            return true;
          }
          if(header.id !== anchorName) {
            $('<span/>').attr('id', anchorName).insertBefore($h);
          }

          var a = $('<a/>').text(headerText)
                           .attr('href', '#' + anchorName)
                           .on('click', function(){
                             $('html,body').animate({scrollTop: $h.offset().top}, 500, 'linear');
                           });
          var li = $('<li/>').addClass(plugin.settings.listClass(i, header, $h, plugin.settings.prefix))
                             .append(a);
          ul.append(li);
        });
        $element.html(ul);
      });
    }
    plugin.init();
  }

  $.fn.simpleToc = function(options) {
    return this.each(function() {
      if (undefined == $(this).data('simpleToc')) {
        var plugin = new $.simpleToc(this, options);
        $(this).data('simpleToc', plugin);
      }
    });
  }
})(jQuery);
