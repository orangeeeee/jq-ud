< !DOCTYPE html > < html xmlns: og = "http://ogp.me/ns#" > < head > < meta charset = "UTF-8" / > < title > New Item - Qiita < /title><meta content="width=device-width,initial-scale=1" name="viewport" / > < meta content = "Qiita is a technical knowledge sharing and collaboration platform for programmers. You can record and post programming tips, know-how and notes here."
name = "description" / > < meta content = "summary"
name = "twitter:card" / > < meta content = "@Qiita"
name = "twitter:site" / > < meta content = "New Item - Qiita"
property = "og:title" / > < meta content = "article"
property = "og:type" / > < meta content = "http://qiita.com/"
property = "og:url" / > < meta content = "http://cdn.qiita.com/assets/qiita-fb-a1b4a208593dbf5743d68ed2a86e63b5.png"
property = "og:image" / > < meta content = "Qiita is a technical knowledge sharing and collaboration platform for programmers. You can record and post programming tips, know-how and notes here."
property = "og:description" / > < meta content = "Qiita"
property = "og:site_name" / > < meta content = "564524038"
property = "fb:admins" / > < link href = "/icons/favicons/public/production.ico?v=4"
rel = "shortcut icon"
type = "image/x-icon" / > < link href = "/opensearch.xml"
rel = "search"
title = "Qiita"
type = "application/opensearchdescription+xml" / > < link href = "/icons/favicons/public/apple-touch-icon.png"
rel = "apple-touch-icon" / > < link href = "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
rel = "stylesheet" / > < link rel = "stylesheet"
media = "all"
href = "http://cdn.qiita.com/assets/public_vender-5494abb01d4ea7c9dcfb03b4890d2a1a.css" / > < link rel = "stylesheet"
media = "all"
href = "http://cdn.qiita.com/assets/application-7da547f10d25e2da998cf795d0524d78.css" / > < meta name = "csrf-param"
content = "authenticity_token" / >
	< meta name = "csrf-token"
content = "CiZyLu5NTLgC+Khkia4iflPpTCYDE0sVqQJkMDTKtJsYhI/MPonmfAR37eV+kdl919t4HuvJlAMHsYk85+BD2Q==" / > < /head><body class="without-js fixedContent" id=""><noscript><iframe height="0" src="/ / www.googletagmanager.com / ns.html ? id = GTM - TBQWPN " style="
display: none;
visibility: hidden " width="
0 "></iframe></noscript><script>
document.body.className = document.body.className.replace('without-js', '') + ' with-js';

// Application Namespace
var Qiita = {
	startTime: Date.now(),
	controllerPath: 'public/draft_items',
	controllerAction: 'public/draft_items#new',
	controller: 'draft_items',
	action: 'new',
	env: 'production',
	flash: {},
	config: {
		mixpanel: {
			"career": "dd35af27e959781713d63fd7ca898a8d",
			"per_team": "c0a2116368b33b44b5029ebd2cc9b094",
			"public": "be87616606b0e26a87689099aab2c4e5",
			"team": "b7c0342acba2dbc8742484d98788efb3"
		}
	},

	// Fake jQuery
	// Emulate $.ready(fn) in views before load jQuery.
	_q: [],
	// The ready function that collect calls and put it in the queue
	ready: function (func) {
		if (typeof func === 'function') Qiita._q.push(func);
		// return jQl in order to support jQuery(document).ready()
		return Qiita
	},
	// Run all queues inline $.ready() calls in the right order and purge the
	// queue
	unqueue: function () {
		for (var i = 0, l = Qiita._q.length; i < l; i++) Qiita._q[i]();
		Qiita._q = [];
	}
};



Qiita.user = {
	"id": 58199,
	"url_name": "orangeeeee",
	"profile_image_url": "https://avatars.githubusercontent.com/u/3161753?v=3",
	"email": "orangeeeee.ore.ore@gmail.com"
};
Qiita.user.unreadNotificationsCount = 0;
var $ = Qiita.ready,
	jQuery = $; < /script> < div class = "headerContainer headerContainer-public headerContainer-absolutePosition"
role = "navigation" > < div data - react - class = "T.Header"
data - react - props = "{&quot;user&quot;:{&quot;profile_image_url&quot;:&quot;https://avatars.githubusercontent.com/u/3161753?v=3&quot;,&quot;team_only&quot;:false,&quot;teams&quot;:[],&quot;url_name&quot;:&quot;orangeeeee&quot;},&quot;team&quot;:null,&quot;news&quot;:{&quot;type&quot;:&quot;Hot&quot;,&quot;content&quot;:&quot;Markdownによる情報共有サービス、Qiita:Team&quot;,&quot;url&quot;:&quot;https://teams.qiita.com?utm_source=qiita\u0026utm_medium=header_news&quot;},&quot;siteid_image&quot;:&quot;http://cdn.qiita.com/assets/siteid-reverse-9b38e297bbd020380feed99b444c6202.png&quot;,&quot;is_team&quot;:false,&quot;on_team_setting&quot;:false,&quot;show_post_menu&quot;:false,&quot;show_search_menu&quot;:true,&quot;is_fluid&quot;:true}" > < /div></div > < div class = "publicEditor" > < form class = "editor form js-editor"
data - type - int = "1"
data - belong - to - team = "false"
data - tutorial = "false"
id = "new_draft_item"
action = "/drafts"
accept - charset = "UTF-8"
method = "post" > < input name = "utf8"
type = "hidden"
value = "&#x2713;" / > < input type = "hidden"
name = "authenticity_token"
value = "5BjdITgXvsTgaDVQrOH2LIr0tGWqMIr8ealgMTt7rIL2uiDD6NMUAObncNFb3g0vDsaAXULqVerXGo096FFbwA==" / > < div class = "editor_content" > < div class = "hidden" > < input type = "hidden"
name = "draft_item[secret]"
id = "draft_item_secret"
value = "0" / > < input type = "hidden"
name = "publish"
id = "draft_item_publish"
value = "0" / > < /div><div class="editorTitle js-titleForm  js-validationError js-titleValidationError" data-placement="bottom"><input placeholder="Title" class="form-control" tabindex="1" autofocus="autofocus" type="text" name="draft_item[title]" id="draft_item_title" / > < div class = "editorLabel" > < div class = "editorLabel_status-unposted" > Unposted < /div></div > < /div><div class="editorTag js-tagFormView  js-validationError js-tag_dataValidationError" data-placement="bottom"><input type="text" name="draft_item[tag_notation]" id="draft_item_tag_notation" value="" class="form-control" tabindex="2" placeholder="Input up to 5 tags seprated by whitespaces (e.g. Ruby Rails:4.2.0)" / > < div class = "js-tagData" > < /div></div > < div class = "js-bodyFormView uninitialized editorBody" > < div class = "editorMarkdown js-draftBody" > < div class = "editorMarkdown_header" > < span class = "editorMarkdown_tabBar js-tabs" > < a tabindex = "-1"
class = "editorMarkdown_tab active js-tab"
href = "#markdown" > Body < /a><a target="_blank" class="editorMarkdown_guideline hidden-xs" href="http:/ / help.qiita.com / ja / articles / qiita - article - guideline "><i class="
fa fa - book "></i> How to write good entry</a></span><div class="
editorMarkdown_toolBar "><div class="
editorMarkdown_imagePicker "><input type="
file " id="
" tabindex=" - 1 " data-remaining-size="
104793615 " data-monthly-size-limit="
104857600 " data-ever-posted="
true " /><i class="
fa fa - picture - o js - filePicker "></i></div><div class="
emojiPickerLauncher js - emojiPickerLauncher "><i class="
fa fa - smile - o " data-container=".js - bodyFormView " data-placement="
bottom " data-toggle="
tooltip " data-viewport=".js - bodyFormView " title="
Emoji Picker "></i></div><div class="
editorMarkdown_help js - helpModal hidden - xs visible - js " data-target="
help " data-toggle="
modal "><i class="
fa fa - question - circle " data-container=".js - bodyFormView " data-placement="
bottom " data-toggle="
tooltip " data-viewport=".js - bodyFormView " title="
Markdown Help "></i></div><div class="
editorMarkdown_toggleButtons "><i class="
fa editorMarkdown_toggleIcon - fullPreview js - fullPreview "></i><i class="
fa editorMarkdown_toggleIcon - halfPreview js - halfPreview "></i><i class="
fa editorMarkdown_toggleIcon - noPreview js - noPreview "></i></div></div></div><div class="
editorMarkdown_panel active js - droptarget " id="
markdown "><div class="
editorMarkdown_textareaWrapper "><textarea placeholder="
Write with Markdown " class="
editorMarkdown_textarea js - validationError js - raw_bodyValidationError js - expanded_link_urlsValidationError " tabindex="
3 " data-placement="
top " name="
draft_item[raw_body]
" id="
draft_item_raw_body "> < /textarea></div > < div class = "editorImageDropTarget" > < div class = "editorImageDropTarget_content" > < i class = "fa fa-file-image-o" > < /i><p>Drop to upload</p > < /div></div > < /div><div class="editorMarkdown_panel" id="diff"></div > < /div><div class="editorPreview visible-js"><div class="editorPreview_header"><div class="editorPreview_toggleButtons"><i class="fa editorPreview_toggleIcon-fullPreview js-fullPreview"></i > < i class = "fa editorPreview_toggleIcon-halfPreview js-halfPreview" > < /i><i class="fa editorPreview_toggleIcon-noPreview js-noPreview"><div class="editorPreview_toggleIconText">Back to Edit</div > < /i></div > < div class = "editorPreview_title" > Preview < /div></div > < div class = "editorPreview_article markdownContent js-preview"
id = "item-" > < /div><div class="editorPreview_cheatsheet hidden-xs js-editorPreview_cheatsheet"><h4 class="markdownCheatsheet_title"><i class="fa fa-question-circle"></i > Markdown cheatsheet < /h4><div class="markdownCheatsheet_block"><div class="markdownCheatsheet_item"><div class="markdownCheatsheet_header">Heading</div > < div class = "markdownCheatsheet_content" > #Heading1 < br / > ##Heading2 < br / > ###Heading3 < /div></div > < div class = "markdownCheatsheet_item" > < div class = "markdownCheatsheet_header" > strong < /div><div class="markdownCheatsheet_content">**strong**</div > < /div><div class="markdownCheatsheet_item"><div class="markdownCheatsheet_header">Link</div > < div class = "markdownCheatsheet_content" > [Link](http: //...)</div></div><div class="markdownCheatsheet_item"><div class="markdownCheatsheet_header">Code</div><div class="markdownCheatsheet_content">```ruby:filename.rb<br />Code<br />```</div></div></div><div class="markdownCheatsheet_block"><div class="markdownCheatsheet_item"><div class="markdownCheatsheet_header">List</div><div class="markdownCheatsheet_content">- List1<br />- List2<br />&nbsp;&nbsp;&nbsp;&nbsp;- List2-1</div><div class="markdownCheatsheet_content">1. Ordered list1<br />2. Ordered list2<br />3. Ordered list3</div><div class="markdownCheatsheet_content">- [ ] Task list1<br />- [ ] Task list2<br />- [x] Task list3</div></div><div class="markdownCheatsheet_item markdownCheatsheet_more"><i class="fa fa-ellipsis-v"></i></div></div></div></div><div aria-hidden="true" class="modal fade markdownHelp js-markdownHelpModal" id="help" role="dialog" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button aria-hidden="true" class="close" data-dismiss="modal" type="button"><i class="fa fa-times"></i></button><h4 class="markdownHelp_title modal-title">Markdown Help</h4><span class="markdownHelp_link">(<a target="_blank" href="http://qiita.com/items/c686397e4a0f4f11683d">for more details</a>)</span></div><div class="markdownHelp_body modal-body"><table class="markdownContent"><thead><tr><th>Result</th><th>Markdown</th></tr></thead><tbody><tr><td><h4>Heading (h1~h6)</h4></td><td># text, ## text, ### text...</td></tr><tr><td><b>Strong</b></td><td>**text**</td></tr><tr><td><i>Emphasis</i></td><td>*text*</td></tr><tr><td><li>List</li></td><td>- item</td></tr><tr><td><li style="list-style-type: decimal;">Decimal List</li></td><td>1. item</td></tr><tr><td><li class="task-list-item" style="margin-left: 1em"><input class="task-list-item-checkbox" disabled="" type="checkbox">Checkbox</input></li><li class="task-list-item" style="margin-left: 1em"><input checked="" class="task-list-item-checkbox" disabled="" type="checkbox">Checkbox</input></li></td><td>- [ ] item<br />- [x] checked item </td></tr><tr><td><blockquote style="margin: 0;">Blockquotes</blockquote></td><td>> text</td></tr><tr><td><a href="#">Link</a></td><td>[title](http://~)</td></tr><tr><td>Image</td><td>![alt](http://~)</td></tr><tr class="highlight"><td><code>Inline Code</code></td><td>`code`</td></tr><tr class="highlight"><td style="padding: 0 8px;"><div class="markdown-content"><div class="code-frame" data-lang="ruby" style="width: 220px; border: 1px solid #eaeaea;"><div class="code-lang"><span class="bold">qiita.rb</span></div><pre><span class="nb">puts</span> <span class="s1">'code with syntax'</span></pre></div></div></td><td>```lang:filename<br />code<br />```</td></tr><tr><td>Horizontal Rules</td><td>* * *</td></tr><tr><td>Escape markdown</td><td>\</td></tr></tbody></table></div></div></div></div></div></div><div class="editorFooter"><div class="editorFooter_save editorSave"><div class="editorSave_autoSaveNotification js-autoSaveNotification"><i class="fa fa-check-circle"></i> <span class="hidden-xs"> Auto-saved</span></div><div class="editorSave_submit"><div class="editorSubmit"><noscript><label class="checkbox inline"><input name="draft_item[secret]" type="hidden" value="0" /><input type="checkbox" value="1" name="draft_item[secret]" id="draft_item_secret" /><i class="fa fa-lock"></i></label><label class="checkbox inline"><input type="checkbox" name="options[tweet]" id="options_tweet" value="1" /><i class="fa fa-twitter"></i></label><label class="checkbox inline"><input type="checkbox" name="options[gist]" id="options_gist" value="1" /><i class="fa fa-github"></i></label><button class="btn btn-primary" name="publish" value="1"><i class="fa fa-upload"></i>Post to Qiita</button></noscript><div class="btn-group editorSubmit_submitBtnGroup js-submitButtonWrapper"><button class="btn btn-primary js-submitButton editorSubmit_submitBtn" tabindex="12"><span class="active editorSubmit_submitBtnLabel" id="save"><i class="fa fa-save"></i>Save as draft</span><span class="editorSubmit_submitBtnLabel" id="secret-post"><i class="fa fa-lock"></i>Limited shared post</span><span class="editorSubmit_submitBtnLabel" id="post"><i class="fa fa-upload"></i>Post to Qiita</span><span class="editorSubmit_submitBtnLabel" id="coediting-post"><i class="fa fa-users"></i>Post with co-editing mode</span></button><a class="btn btn-primary dropdown-toggle js-dropdownButton visible-js editorSubmit_dropdownToggle"><i class="fa fa-caret-up"></i></a><ul class="list-unstyled editorSubmit_dropdownMenu js-dropdownMenu visible-js"><li><a class="editorSubmit_dropdownItem" href="#save"><i class="fa fa-check"></i><i class="fa fa-save"></i>Save as draft</a></li><li><a class="editorSubmit_dropdownItem" href="#secret-post"><i class="fa fa-check"></i><i class="fa fa-lock"></i>Limited shared post</a></li><li><a class="editorSubmit_dropdownItem" href="#post"><i class="fa fa-check"></i><i class="fa fa-upload"></i>Post to Qiita</a></li></ul></div></div></div></div></div><div aria-hidden="true" class="modal fade js-creatingModal creatingModal" role="dialog" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="option creatingModal_twitter"><a target="_blank" href="https://qiita.com/auth/twitter"><i class="fa fa-twitter"></i>Connect with Twitter and share</a></div><div class="option creatingModal_github"><div class="checkbox"><label><input id="options_tweet" name="options[gist]" type="checkbox" /><i class="fa fa-github"></i>Post to gist</label></div></div><div class="creatingModal_postAlert alert alert-warning js-modalConfirmation" style="display: none;">You are posting to public Qiita.<br /> Anyone on the Internet can find and view.<div class="checkbox"><label><input class="js-confirmationCheckbox" type="checkbox">Post to Public Qiita</input></label></div></div></div><div class="modal-footer"><div class="text-center"><button class="btn btn-primary">Submit</button><a class="btn btn-link" data-dismiss="modal" href="#">Cancel</a></div></div></div></div></div></form><script class="js-userJson" type="application/json">{"twitter":null,"github":"orangeeeee","first":false,"ever_posted_any_article":true}</script></div><script>if (window.mixpanel instanceof Element) {
		window.mixpanel = [];
	}
	(function (f, b) {
		if (!b.__SV) {
			var a, e, i, g;
			window.mixpanel = b;
			b._i = [];
			b.init = function (a, e, d) {
				function f(b, h) {
					var a = h.split(".");
					2 == a.length && (b = b[a[0]], h = a[1]);
					b[h] = function () {
						b.push([h].concat(Array.prototype.slice.call(arguments, 0)))
					}
				}
				var c = b;
				"undefined" !== typeof d ? c = b[d] = [] : d = "mixpanel";
				c.people = c.people || [];
				c.toString = function (b) {
					var a = "mixpanel";
					"mixpanel" !== d && (a += "." + d);
					b || (a += " (stub)");
					return a
				};
				c.people.toString = function () {
					return c.toString(1) + ".people (stub)"
				};
				i = "disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
				for (g = 0; g < i.length; g++) f(c, i[g]);
				b._i.push([a, e, d])
			};
			b.__SV = 1.2;
			a = f.createElement("script");
			a.type = "text/javascript";
			a.async = !0;
			a.src = "//cdn.mxpnl.com/libs/mixpanel-2.2.min.js";
			e = f.getElementsByTagName("script")[0];
			e.parentNode.insertBefore(a, e)
		}
	})(document, window.mixpanel || []); < /script><script src="http:/ / cdn.qiita.com / assets / application - 22 fb0207c2d40292c028cb5b5a0d8ccd.js "></script><script>(function (I18n) {
var match, orig;
I18n.defaultLocale = "ja";
I18n.fallbacks = true;
if (match = location.search.match(/(?:\?|&)locale=([^&]+)/)) {
	I18n.locale = match[1];
	orig = $.ajax;
	$.ajax = function (params) {
		params.data || (params.data = {});
		params.data.locale = match[1];
		return orig.call($, params);
	};
} else {
	I18n.locale = "en";
}
})(I18n); < /script><script> (function () {
	var script = document.getElementsByTagName('script')[0];
	var load = function (src, id) {
		var el = document.createElement('script');
		el.async = true;
		el.src = src;
		el.id = id;
		script.parentNode.insertBefore(el, script);
	};
	// Optimizely
	load('//cdn.optimizely.com/js/52738645.js', 'optimizely-jssdk');
	// Google Analytics
	window._gaq = window._gaq || [];
	var isCareer = location.hostname.split('.')[0] == 'career';
	if (isCareer) {
		window._gaq.push(['_setAccount', 'UA-24675221-11']);
		window._gaq.push(['_setDomainName', 'qiita.com']);
	} else {
		window._gaq.push(['_setAccount', 'UA-24675221-1']);
	}
	window._gaq.push(['_setCustomVar', 1, 'logged_in', 'true', 2]);
	window._gaq.push(['_trackPageview']);
	var src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	load(src, 'google-analytics-jssdk');
	// Google Analytics - Universal Analytics
	(function (i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] || function () {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date();
		a = s.createElement(o),
			m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
	ga('create', 'UA-24675221-12', {
		clientId: '58199'
	});
	ga('set', {
		'dimension1': 'true',
		'dimension2': 'false',
		'metric1': 4,
		'metric2': 0,
		'metric3': 0
	});
	ga('require', 'displayfeatures');
	ga('set', 'forceSSL', true);
	ga('send', 'pageview');
	// Google Tag Manager
	(function (w, d, s, l, i) {
		w[l] = w[l] || [];
		w[l].push({
			'gtm.start': new Date().getTime(),
			event: 'gtm.js'
		});
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s),
			dl = l != 'dataLayer' ? '&l=' + l : '';
		j.async = true;
		j.src =
			'//www.googletagmanager.com/gtm.js?id=' + i + dl;
		f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'dataLayer', 'GTM-TBQWPN');
})(); < /script> < /body></html >
