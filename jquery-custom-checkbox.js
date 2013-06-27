/** @preserve
 * jquery-custom-checkbox
 *
 * Created at: 2012-12-17 15:53:56 +0100
 * Updated at: 2013-06-27 12:45:28 +0200
 *
 * Author: Yves Van Broekhoven
 * Version: 1.0.1
 *
 */

/*global jQuery:false*/

(function($) {
  "use strict";


  var plugin_name = 'jqueryCustomCheckbox';


  function CustomCheckbox( element ) {
    var $this = $(element);

    this.element      = element;
    this.name         = $this.attr('name');
    this.escaped_name = this.name.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
    this.$label       = $this.siblings('label[for='+ $this.attr('id') +']');
    this.$fake        = $('<span class="fake-checkbox"></span>');
    this.$groupling_labels = this.findGrouplingLabels();
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

    // If radio button, uncheck group members
    if ( $this.attr('type') == 'radio' ) {
      this.$groupling_labels.find('.fake-checkbox').removeClass('checked');
    }
  };


  CustomCheckbox.prototype.findGrouplingLabels = function() {
    var $this    = $(this.element),
        $options = $('input[name=' + this.escaped_name + ']').not($this),
        $groupling_labels = $();

    $options.each(function() {
      var $option = $(this),
          $label  = $option.siblings('label[for='+ $option.attr('id') +']');

      $groupling_labels = $groupling_labels.add($label);
    });

    return $groupling_labels;
  };


  $.fn.customcheckbox = function() {
    return this.each( function() {
      $(this).data( plugin_name, new CustomCheckbox(this) );
    });
  };

}(jQuery));
