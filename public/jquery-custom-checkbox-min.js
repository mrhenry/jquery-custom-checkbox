/*

 jquery-custom-checkbox

 Created at: 2012-12-17 15:53:56 +0100
 Updated at: 2013-06-27 12:45:28 +0200

 Author: Yves Van Broekhoven
 Version: 1.0.1

*/
(function(b){function d(a){var c=b(a);this.element=a;this.name=c.attr("name");this.escaped_name=this.name.replace(/\[/g,"\\[").replace(/\]/g,"\\]");this.$label=c.siblings("label[for="+c.attr("id")+"]");this.$fake=b('<span class="fake-checkbox"></span>');this.$groupling_labels=this.findGrouplingLabels();this.init()}d.prototype.init=function(){var a=this,c=b(a.element);c.hide();a.$label.addClass("custom-checkbox").append(a.$fake);a.setState();c.on("change",function(){a.setState()})};d.prototype.setState=
function(){var a=b(this.element);!0===a.prop("checked")?this.$fake.addClass("checked"):this.$fake.removeClass("checked");"radio"==a.attr("type")&&this.$groupling_labels.find(".fake-checkbox").removeClass("checked")};d.prototype.findGrouplingLabels=function(){var a=b(this.element),a=b("input[name="+this.escaped_name+"]").not(a),c=b();a.each(function(){var a=b(this),a=a.siblings("label[for="+a.attr("id")+"]");c=c.add(a)});return c};b.fn.customcheckbox=function(){return this.each(function(){b(this).data("jqueryCustomCheckbox",
new d(this))})}})(jQuery);
