/*!
 * Gulp Invited
 * https://getinvited.to/
 * @author Get Invited Ltd
 * @version 0.0.2.1415623688639
 * Copyright © 2014
 */
!function(n){function t(t,e,i,r){var a=t.text(),c=a.split(e),s="";c.length&&(n(c).each(function(n,t){s+='<span class="'+i+(n+1)+'" aria-hidden="true">'+t+"</span>"+r}),t.attr("aria-label",a).empty().append(s))}var e={init:function(){return this.each(function(){t(n(this),"","char","")})},words:function(){return this.each(function(){t(n(this)," ","word"," ")})},lines:function(){return this.each(function(){var e="eefec303079ad17405c889e092e105b0";t(n(this).children("br").replaceWith(e).end(),e,"line","")})}};n.fn.lettering=function(t){return t&&e[t]?e[t].apply(this,[].slice.call(arguments,1)):"letters"!==t&&t?(n.error("Method "+t+" does not exist on jQuery.lettering"),this):e.init.apply(this,[].slice.call(arguments,0))}}(jQuery),function(n){"use strict";n(function(){n(".main-wrapper").append("<p>Complete with basic JS inclusion</p>")})}(jQuery,window,document);