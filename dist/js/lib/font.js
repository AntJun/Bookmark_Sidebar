/*! (c) Philipp König under GPL-3.0 */
"use strict";!function(a){window.FontHelper=function(b){var c=this,d={general:{name:"Roboto",href:"https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,100i,200i,300i,400i,500i"},ja:{name:"Noto Sans Japanese",href:"https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"}},e={__default:{Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},Roboto:{Thin:100,ExtraLight:100,Light:200,Normal:300,Medium:400,SemiBold:400,Bold:500,ExtraBold:500,Black:500},"Noto Sans Japanese":{Thin:100,ExtraLight:100,Light:100,Normal:200,Medium:300,SemiBold:400,Bold:500,ExtraBold:500,Black:500}},f={};this.init=function(){var a=b.helper.model.getData("a/styles");f=a.fontFamily&&"default"!==a.fontFamily?{name:a.fontFamily}:c.getDefaultFontInfo(),f.fontWeights=c.getFontWeights(f.name)},this.isLoaded=function(){return!!f.name},this.getFontInfo=function(){return f},this.getFontWeights=function(a){var b={};return Object.keys(e.__default).forEach(function(c){var d=e.__default[c];e[a]&&e[a][c]&&(d=e[a][c]),b["fontWeight"+c]=d}),b},this.addStylesheet=function(b){f.href&&a("<link />").attr({rel:"stylesheet",type:"text/css",href:f.href}).appendTo(b.find("head"))},this.getDefaultFontInfo=function(){var a=b.helper.i18n.getLanguage();return d[a]?d[a]:d.general}}}(jsu);