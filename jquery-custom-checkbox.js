/** @preserve
 * jquery-custom-checkbox
 *
 * Created at: 2012-12-17 15:53:56 +0100
 * Updated at: 2012-12-17 16:17:57 +0100
 *
 * Author: Yves Van Broekhoven
 * Version: 1.0.0
 *
 */

/*global jQuery:false*/

(function($) {
  "use strict";

  var plugin_name = 'jqueryCustomCheckbox';

  function CustomCheckbox( element ) {
    var $this = $(element);

    this.element  = element;
    this.$label   = $this.siblings('label[for='+ $this.prop('name') +']');
    this.$fake    = $('<span class="fake-checkbox"></span>');

    this.init();
  }

  CustomCheckbox.prototype.init = function() {
    var _this = this,
        $this = $(_this.element);

    $this.hide();

    _this.$label
      .addClass('custom-checkbox')
      .append( _this.$fake );

    _this.setState();

    $this.on('change', function() {
      _this.setState();
    });
  };

  CustomCheckbox.prototype.setState = function() {
    var $this = $(this.element);

    if ( $this.prop('checked') === true ) {
      this.$fake.addClass('checked');

    } else {
      this.$fake.removeClass('checked');

    }
  };

  $.fn.customcheckbox = function() {
    return this.each( function() {
      $(this).data( plugin_name, new CustomCheckbox(this) );
    });
  };

}(jQuery));
