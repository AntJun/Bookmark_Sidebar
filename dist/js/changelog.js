/*! (c) Philipp König under GPL-3.0 */
"use strict";!function(a){window.changelog=function(){var b=this;this.opts={elm:{title:a("head > title"),infobox:a("section.infobox"),close:a("a.close"),showChangelog:a("a.showChangelog")},classes:{visible:"visible",flipped:"flipped"},manifest:chrome.runtime.getManifest()},this.run=function(){c(),b.helper.model.init(function(){b.helper.i18n.init(function(){b.helper.i18n.parseHtml(document),b.opts.elm.title.text(b.opts.elm.title.text()+" - "+b.helper.i18n.get("extension_name")),d(),b.opts.elm.infobox.addClass(b.opts.classes.visible)})})};var c=function(){b.helper={i18n:new window.I18nHelper(b),model:new window.ModelHelper(b)}},d=function(){b.opts.elm.close.on("click",function(a){a.preventDefault(),window.close()}),b.opts.elm.showChangelog.on("click",function(a){a.preventDefault(),b.opts.elm.infobox.addClass(b.opts.classes.flipped)})}},(new window.changelog).run()}(jsu);