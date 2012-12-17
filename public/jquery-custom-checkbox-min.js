/*

 jquery-custom-checkbox

 Created at: 2012-12-17 15:53:56 +0100
 Updated at: 2012-12-17 16:17:57 +0100

 Author: Yves Van Broekhoven
 Version: 1.0.0

*/
(function(b){function d(a){var c=b(a);this.element=a;this.$label=c.siblings("label[for="+c.prop("name")+"]");this.$fake=b('<span class="fake-checkbox"></span>');this.init()}d.prototype.init=function(){var a=this,c=b(a.element);c.hide();a.$label.addClass("custom-checkbox").append(a.$fake);a.setState();c.on("change",function(){a.setState()})};d.prototype.setState=function(){!0===b(this.element).prop("checked")?this.$fake.addClass("checked"):this.$fake.removeClass("checked")};b.fn.customcheckbox=function(){return this.each(function(){b(this).data("jqueryCustomCheckbox",
new d(this))})}})(jQuery);
