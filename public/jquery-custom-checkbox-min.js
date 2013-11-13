/*

 jquery-custom-checkbox

 Created at: 2012-12-17 15:53:56 +0100
 Updated at: 2013-11-13 16:04:54 +0100

 Author: Yves Van Broekhoven
 Version: 1.0.4

 https://github.com/mrhenry/jquery-custom-checkbox

*/
(function(b){function d(a,c){var e=b(a);this.element=a;this.name=e.attr("name");this.type=e.attr("type");this.escaped_name=this.name.replace(/\[/g,"\\[").replace(/\]/g,"\\]");this.$label=b("label[for="+e.attr("id")+"]");this.$fake=b('<span class="fake-'+this.type+'"></span>');this.$groupling_labels=this.findGrouplingLabels();this.options=b.extend({},f,c);this.init()}var f={position:"after"};d.prototype.init=function(){var a=this,c=b(a.element);c.hide();a.$label.addClass("custom-checkbox");a.$label.prepend(a.$fake);
a.setState();c.on("change",function(){a.setState()})};d.prototype.setState=function(){var a=b(this.element);!0===a.prop("checked")?(this.$fake.addClass("checked"),this.$label.addClass("checked"),"radio"==a.attr("type")&&b&&(this.$groupling_labels.removeClass("checked"),this.$groupling_labels.find(".fake-"+this.type).removeClass("checked"))):(this.$fake.removeClass("checked"),this.$label.removeClass("checked"))};d.prototype.findGrouplingLabels=function(){var a=b(this.element),a=b("input[name="+this.escaped_name+
"]").not(a),c=b();a.each(function(){var a=b(this),a=b("label[for="+a.attr("id")+"]");c=c.add(a)});return c};b.fn.customcheckbox=function(a){return this.each(function(){b(this).data("jqueryCustomCheckbox",new d(this,a))})}})(jQuery);
