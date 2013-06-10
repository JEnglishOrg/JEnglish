/*
JEnglish from JEnglish.Org (Github Username: JEnglishOrg)

JEnglish is an English-like language to design and build web pages in.


This version of JEnglish includes the base and the following add-ons:
    - drop-down box
    - menu / navigation bar
    - drop-down menu
    - slideshow
    - powerpoint-like presentation for slides
    - vertical bar
    - horizontal bar
    - ajax calls
    - on click handlers
    - blur ( fullscreen div for use as a semi-transparent background )
    - embedding youtube video
*/

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();// JavaScript Document

function _$(x) { return document.getElementById(x) }
// css simple names and their actual CSS property names. ie: weight in JEnglish is actually the font-weight css property
var att = new Array("azimuth","background","background-attachment","background-color","background-image","background-position","background-repeat","border","border-collapse","border-color","border-spacing","border-style","border-top","border-right","border-bottom","border-left","border-top-color","border-right-color","border-bottom-color","border-left-color","border-top-style","border-right-style","border-bottom-style","border-left-style","border-top-width","border-right-width","border-bottom-width","border-left-width","border-width","bottom","caption-side","clear","clip","text-color","content","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","elevation","empty-cells","float","fonts","font","font-size","font-size-adjust","font-stretch","font-style","font-variant","weight","height","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-top","margin-right","margin-bottom","margin-left","marker-offset","marks","max-height","max-width","min-height","min-width","opacity","orphans","outline","outline-color","outline-style","outline-width","overflow","padding","padding-top","padding-right","padding-bottom","padding-left","page","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","pitch","pitch-range","play-during","position","quotes","richness","right","size","speak","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","table-layout","text-align","text-decoration","text-indent","text-shadow","text-transform","top","unicode-bidi","vertical-align","visibility","voice-family","volume","white-space","widows","width","word-spacing","level");
var att_x = new Array("azimuth","background","background-attachment","background-color","background-image","background-position","background-repeat","border","border-collapse","border-color","border-spacing","border-style","border-top","border-right","border-bottom","border-left","border-top-color","border-right-color","border-bottom-color","border-left-color","border-top-style","border-right-style","border-bottom-style","border-left-style","border-top-width","border-right-width","border-bottom-width","border-left-width","border-width","bottom","caption-side","clear","clip","color","content","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","elevation","empty-cells","float","font","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","height","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-top","margin-right","margin-bottom","margin-left","marker-offset","marks","max-height","max-width","min-height","min-width","opacity","orphans","outline","outline-color","outline-style","outline-width","overflow","padding","padding-top","padding-right","padding-bottom","padding-left","page","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","pitch","pitch-range","play-during","position","quotes","richness","right","size","speak","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","table-layout","text-align","text-decoration","text-indent","text-shadow","text-transform","top","unicode-bidi","vertical-align","visibility","voice-family","volume","white-space","widows","width","word-spacing","z-index");

// used for dump_vars(), keeps track of all DIVs, IMGs, and DB Tables Created during the executing of the commands
var divArray = new Array();
var imgArray = new Array();
var tableArray = new Array();

// synomyns list for the various JEnglish commands. Here anything in the array are equivalent to each other. IE: 'create' or 'generate' will act the same way when used
var CREATE_CMDS = new Array("create","generate");
var CREATE_PRESENTATION_CMDS = new Array("presentation","powerpoint");
var CREATE_BLUR_CMDS = new Array("blur");
var CREATE_UL_CMDS = new Array("ul","bullet","bulletlist","unorderedlist");
var CREATE_OL_CMDS = new Array("ol","numberlist","orderedList");
var CREATE_SLIDESHOW_CMDS = new Array("slideshow");
var CREATE_MENU_CMDS = new Array("menu","menubar","menuBar","navbar","navBar","navigationbar","navigationBar");
var CREATE_MENU_DROP_DOWN_CMDS = new Array("drop-down","dropdown","submenu","hovermenu","hover-menu");
var CREATE_VERT_BAR_CMDS = new Array("verticalBar","vertBar","vBar","vbar");
var CREATE_HORZ_BAR_CMDS = new Array("horizontalBar","horzBar","hBar","hbar","bar");
var AJAX_CMDS   = new Array("async","ajax","asynchronously");
var APPEND_ELEM_CMDS = new Array("append-elem");
var ATTR_CMDS   = new Array("make","set");
var DELETE_CMDS = new Array("remove","delete","rm");
var EMBED_CMDS  = new Array("embed");
var EMBED_SUB_CMDS = new Array("youtube","video");
var INSERT_CMDS = new Array("put","insert");
var APPEND_INSERT_CMDS = new Array("append");
var MOVE_CMDS   = new Array("move","shift"); 
var PREPEND_CMDS = new Array("prepend");
var RENAME_CMDS = new Array("rename");
var USE_CMDS = new Array("use","using");
var WHEN_CMDS = new Array("when");
// needed for extension add-on: create drop down box
var CREATE_DROP_DOWN_CMDS = new Array("dropdownbox", "dropDownBox");  

// main workhorse function of the command function. searches cmdArray for aArrElem, and if found called func
function searchCommandsFor( aArrElem, cmdArray, func )
{
    for( var index = 0; index < cmdArray.length; ++index )
    {
        if( cmdArray[index] == aArrElem)
        {
            return func();
        }
    }
    return false;
}


// interpreter command for parsing and executing JEnglish Commands
function command(x) {
    var arr
    var i=0
    arr = x.split(" ")
    
    var arrElem = arr[i];

    // Check for Create. create <subCmd> ? theId
    var retVal = searchCommandsFor( arrElem, CREATE_CMDS, function()
    { 
        j=i+1;
        arrElem = arr[j];


	var retVal2 = searchCommandsFor( arrElem, CREATE_SLIDESHOW_CMDS, function() 
	{
		// create slideshow in/for imgId using images img1 img2 [and] img3
		// create slideshow using slideshowHolder using indicator indicatorHolder using description1 description2 description3 description4 using images http://jenglish.org/images/addc_logo_new.png http://jenglish.org/images/biodigital.png http://jenglish.org/images/comp1950s.png http://jenglish.org/images/comp2012.png

		var divId = arr[i+3];
		var indId = arr[i+6];

		var numImages =( arr.length - 8 - 2);
		if( numImages % 2 != 0 )
		{
			record("<span style='color:red'>ERROR PARSING slideshow COMMAND</span>");
			return false;
		}
		numImages /= 2;
		// divs: 8 - 11, skip 2, imgs: 14-end
		for( var y = 8; y < 8+numImages; ++y )
		{
			slideshowDivArr.push( arr[y] );
		}
		for( y = 8+numImages+2; y < arr.length; ++y )
		{
			slideshowImgArr.push( arr[y] );
		}
		createSlideshow(divId, indId);
		record('creating slideshow for <span style="color:red">'+divId+'</span>');
		return true;
	});
	if( retVal2 == true ){return true;}

	retVal2 = searchCommandsFor( arrElem, CREATE_BLUR_CMDS, function()
	{
		var blurName = arr[i+3];
		createBlur( blurName );
		
		record('blur created named <span style="color:red">' + blurName + '</span>' );
		return true;
	});
	if( retVal2 == true ) { return true; }


	// create powerpoint for images img1, img2, img3 into divId
	retVal2 = searchCommandsFor( arrElem, CREATE_PRESENTATION_CMDS, function()
	{

		var divName = arr[arr.length-1];


		var imagesIndex = x.indexOf("images");
		if( imagesIndex == -1 )
		{
			record('<span style="color:red">ERROR CANNOT FIND IMAGES</span>');
			return false;
		}
		var intoIndex = x.lastIndexOf("into");
		if( intoIndex == -1 )
		{
			record('<span style="color:red">ERROR CANNOT FIND BOX NAME FOR HOLDER</span>');
			return false;
		}
		var fields = x.substring( imagesIndex+6, intoIndex);
		var imgArr = new Array();
		var fieldArr = fields.split(',');
		for( var ii = 0; ii < fieldArr.length; ++ii )
		{
			var andIndex = fieldArr[ii].indexOf("and");
			var imgTitle = fieldArr[ii].trim();
			if( andIndex != -1 )
			{
				imgTitle = imgTitle.substring( andIndex+3 ).trim();
			}
			imgArr.push(imgTitle);

		}
		createPowerpoint( divName, imgArr );

		record('<span style="color:red">found powerpoint command</span>');
		return true;
	});
	if( retVal2 == true ) { return true; }



	retVal2 = searchCommandsFor( arrElem, CREATE_UL_CMDS, function()
	{
		// create bulletlist in divId with titles title1, title2, and title3

		var divName = arr[i+3]
		var titleArr = new Array();

		var rawQuerySplit = x.split(';');
		if( rawQuerySplit.length >= 1 ) {
			var titlesIndex = rawQuerySplit[0].indexOf( 'titles' );
			if( titlesIndex == -1 ) {
				record('<span style="color:red">UNABLE TO PARSE bulletlist COMMAND!</span>');
				return false;
			}
			var firstTitle = rawQuerySplit[0].substring( titlesIndex+6 ).trim();
			titleArr.push( firstTitle );
		}

		for( var ii = 1; ii < rawQuerySplit.length; ++ii ) {
			titleArr.push( rawQuerySplit[ii].trim() );
		}
		createUnorderedList( divName, titleArr );
		return true;

	});
	if( retVal2 == true ){ return true; }

	retVal2 = searchCommandsFor( arrElem, CREATE_OL_CMDS, function()
	{
		// create numberlist in divId with titles title1, title2, and title3

		var divName = arr[i+3]
		var titleArr = new Array();

		var rawQuerySplit = x.split(';');
		if( rawQuerySplit.length >= 1 ) {
			var titlesIndex = rawQuerySplit[0].indexOf( 'titles' );
			if( titlesIndex == -1 ) {
				record('<span style="color:red">UNABLE TO PARSE bulletlist COMMAND!</span>');
				return false;
			}
			var firstTitle = rawQuerySplit[0].substring( titlesIndex+6 ).trim();
			titleArr.push( firstTitle );
		}

		for( var ii = 1; ii < rawQuerySplit.length; ++ii ) {
			var content = rawQuerySplit[ii].trim();
			if( content == '' ) { continue; }
			titleArr.push( content );
		}		createOrderedList( divName, titleArr );
		return true;

	});
	if( retVal2 == true ){ return true; }

        // Check for Create Menu/NavBar; eg: create menu X <menuName> X titles <MenuTitles>
        retVal2 = searchCommandsFor(arrElem, CREATE_MENU_CMDS, function()
        {
            barName = arr[j+2];
            var titles = new Array();

		var titleIndex = x.indexOf('titles');
		if( titleIndex == -1 )
		{
			record('ah no titles specified');
			return false;
		}
		var rawQuerySplit = x.substring(titleIndex+6);
		var fieldsArr =  rawQuerySplit.split(',');


		for( var ii = 0; ii < fieldsArr.length; ++ii )
		{
			var andIndex = fieldsArr[ii].indexOf("and");
		       var myTitle = fieldsArr[ii]
			if( andIndex != -1 )
			{
				myTitle  = fieldsArr[ii].substring( andIndex+3 );
			}
                
                               titles.push( myTitle );
                record("Adding Title <span style='color:red'>"+myTitle+"</span> into <span style='color:red'>"+barName+"</span>");
            }
            createmenubar(barName,titles);
            record("menu/navigation bar <span style='color:red'>"+barName+"</span> created with <span style='color:red'>"+titles.length+"</span> elements");
            return true;
        });
        if(retVal2){return true;}

        // create dropdown ? menuTitle ? menuName ? ? X1 X2 XN
        retVal2 = searchCommandsFor(arrElem, CREATE_MENU_DROP_DOWN_CMDS, function()
        {
            titleName = arr[j+2];
            menuName = arr[j+4];
            var titlesArr = new Array();

	    var titlesIndex = x.indexOf('titles');
	    if( titlesIndex == -1 )
	    {
		record('<span style="color:red">UNABLE TO PARSE dropDownMenu COMMAND</span>');
		return false;
	    }
	    var titles = x.substring( titlesIndex+6 );
	    var titleFields = titles.split(',');
	    for( var ii = 0; ii < titleFields.length; ++ii )
	    {	
		var title = titleFields[ii].trim();
		var andIndex = title.indexOf('and');
		if( andIndex != -1 ) {
			title = title.substring( andIndex + 3 );
		}
		titlesArr.push(title);
	    }

            // get menutitles and then a count of them later
            createmenudropdown(menuName, titleName, titlesArr.length, titlesArr);
            return true;
        });
        if(retVal2==true){return true;}

        // create verticalBar ? vBarName
        retVal2 = searchCommandsFor(arrElem, CREATE_VERT_BAR_CMDS, function()
        {
            barName = arr[j+2];
            creatediv(barName);
            var bar = _$(barName);
            bar.style.height = "1000px";
            bar.style.borderWidth = "1px";
            bar.style.borderStyle = "solid";
            bar.style.borderColor = "#000000";
            record("Vertical Bar called <span style='color:red'>"+barName+"</span> created");    
            return true;
        });
        if(retVal2==true){return true;}

        // create horizontalBar ? hBarName
        retVal2 = searchCommandsFor(arrElem, CREATE_HORZ_BAR_CMDS, function()
        {
            barName = arr[j+2];
            creatediv(barName);
            var bar = _$(barName);
            bar.style.width = "997px";
            bar.style.borderWidth = "1px";
            bar.style.borderColor = "black";
            bar.style.borderStyle = "solid";
            record("Horizontal Bar called <span style='color:red'>"+barName+"</span> created");
            return true;
        });
        if(retVal2==true){return true;}
  
	// create dropdownbox ? <dropDownId> ? titles Title1; Title2; and Title3
        retVal2 = searchCommandsFor(arrElem, CREATE_DROP_DOWN_CMDS, function()
        {
            var dropDownName = arr[3];

            var titlesIndex = x.indexOf("titles");
            if( titlesIndex == -1 )
            {
                record("ERROR PARSING DROP DOWN BOX CMD");
                return false;
            }
            // parse titles of drop down elements
            var titles = x.substring( titlesIndex+6 ).trim();
            var titleNames = titles.split(";");
            var titlesArr = new Array();
            for( var ii = 0; ii < titleNames.length; ++ii )
            {
                if( titleNames[ii].indexOf("and") != -1 )
                {
                    titleNames[ii] = titleNames[ii].substring( titleNames[ii].indexOf("and") + 3 ).trim();
                }
                titlesArr.push( titleNames[ii] );
            }
            createDropDownBox( dropDownName, titlesArr );
            record("Drop Down Box called <span style='color:red'>"+dropDownName+"</span> created");
            return true;
        });
        if(retVal2==true){return true;}


	if( arr[i+2] == "image" || arr[i+2] == "img" )
	{
		createimg( arr[i+4], '');
		record( "<br /><span style='color:red'>"+arr[i+4]+"</span> image created");
		return true;
	}


	var andIndex = x.indexOf("and");
	if( andIndex != -1 ) {
		// found secondary make command
		var restOfCmd = x.substring(andIndex+3).trim();
		var createCmd = x.substring(0, andIndex).trim();
		// create the div first, so we can add attributes to it on the fly
		var cmdSplit = createCmd.split(" ");
		var boxName = cmdSplit[cmdSplit.length-1];
        	creatediv( boxName );
        	record( "<br /><span style='color:red'>"+ boxName +"</span> created");

		andIndex = restOfCmd.indexOf("and");
		while( andIndex != -1 )
		{
			var cmdToRun = restOfCmd.substring( 0, andIndex ).trim();
			restOfCmd = restOfCmd.substring(andIndex+3).trim();

			var cmd = cmdToRun.split(" ");
			if( cmd.length != 3 )
			{
				record("<span style='color:red'>error parsing <i>and make</i> command</span>");
				return false;
			}
        		com_idx = get_index(att,cmd[1]);
			com_res = att_x[com_idx]+":"+cmd[2];
       			_$(boxName).style.cssText = _$(boxName).style.cssText+";"+com_res
			record("make <span style='color:red'>"+boxName+"</span> "+com_res);

			andIndex = restOfCmd.indexOf("and");
			if( andIndex == -1 &&  restOfCmd.length != 0 )
			{
				cmd = restOfCmd.split(" ");
				if( cmd.length != 3 )
				{
					record("<span style='color:red'>error parsing <i>and make</i> command</span>");
					return false;
				}
			
        			com_idx = get_index(att,cmd[1]);
				com_res = att_x[com_idx]+":"+cmd[2];
       				_$(boxName).style.cssText = _$(boxName).style.cssText+";"+com_res

				record("make <span style='color:red'>"+boxName+"</span> "+com_res);
			}
		}
		return true;
	}
	else 
	{
		creatediv( arr[arr.length-1] );
		return true;
	}
        

    }); // end of command: CREATE
    if(retVal){return true;}   

    // Check for Move. move elemName ? ? ? leftPx ? ? downPx
    retVal = searchCommandsFor( arrElem, MOVE_CMDS, function()
    {
        node = _$(arr[1])
        leftIndex=i+5
        topIndex=i+8
        node.style.left = arr[leftIndex]+"px"
        node.style.top = arr[topIndex]+"px"
        record("<span style='color:red'>"+node.id+"</span> was moved to ["+arr[leftIndex]+","+arr[topIndex]+"]" )
 
        return true;	
    });
    if(retVal){return true;}

   
    // Check for Make/Set. set divName <CSS-PROPERTY> <CSS-PROPERTY-VALUE>
    retVal = searchCommandsFor( arrElem, ATTR_CMDS, function()
    {
		var andIndex = x.indexOf("and");
		if( andIndex != -1 )
		{
			var cmdToRun = x.substring( 0, andIndex ).trim();
			var cmd = cmdToRun.split(" ");
			if( cmd.length != 4 )
			{
				return false;
			}
			var boxName = cmd[1];

			com_idx = get_index(att,cmd[2]);
			com_res = att_x[com_idx]+":"+cmd[3];

     	  	_$(boxName).style.cssText = _$(boxName).style.cssText+";"+com_res
     	  	record("make <span style='color:red'>"+boxName+"</span> "+com_res);

			var restOfCmd = x.substring( andIndex+3 );
			andIndex = restOfCmd.indexOf("and");
			while( andIndex != -1 )
			{
				var cmdToRun = restOfCmd.substring( 0, andIndex ).trim();
				restOfCmd = restOfCmd.substring(andIndex+3).trim();

				var cmd = cmdToRun.split(" ");
				if( cmd.length != 2 )
				{
					record("<span style='color:red'>error parsing <i>and make</i> command</span>");
					return false;
				}
				com_idx = get_index(att,cmd[0]);
				com_res = att_x[com_idx]+":"+cmd[1];
				_$(boxName).style.cssText = _$(boxName).style.cssText+";"+com_res
				record("make <span style='color:red'>"+boxName+"</span> "+com_res);

				andIndex = restOfCmd.indexOf("and");
				if( andIndex == -1 &&  restOfCmd.length != 0 )
				{
					cmd = restOfCmd.split(" ");
					if( cmd.length != 2 )
					{
						record("<span style='color:red'>error parsing <i>and make</i> command</span>");
						return false;
					}
					com_idx = get_index(att,cmd[0]);
					com_res = att_x[com_idx]+":"+cmd[1];
					_$(boxName).style.cssText = _$(boxName).style.cssText+";"+com_res

					record("make <span style='color:red'>"+boxName+"</span> "+com_res);
				}
			}
			return true;
		} 
		else 
		{
			j = i+1;
			named = arr[j];
			name2 = named.split("'");
			boxName = name2[0];
			com_idx = get_index(att,arr[i+2]);
			com_res = att_x[com_idx]+":"+x.substring( x.indexOf(arr[i+2]) + arr[i+2].length );

			_$(boxName).style.cssText = _$(boxName).style.cssText+";"+com_res
			record("make <span style='color:red'>"+boxName+"</span> "+com_res);
		}
        return true;
    });
    if( retVal == true ){return true;}

    // Check for Rename. rename oldDivName newDivName
    retVal = searchCommandsFor( arrElem, RENAME_CMDS, function()
    {
        _$(arr[i+1]).setAttribute('id', arr[i+2]);
        record("<span style='color:red'>"+arr[i+1]+"</span> renamed into <span style='color:red'>"+arr[i+2]+"</span>");
        return true;
    });
    if(retVal==true){return true;}

	retVal = searchCommandsFor( arrElem, APPEND_INSERT_CMDS, function()
	{
		boxName = x.substring(x.lastIndexOf("into")+4).trim();

		if( arr[0] == "append" )
		{
			var textToAdd = x.substring( 6, x.lastIndexOf("into") );
		}
		if( arr[1] == "hyperlink" )
		{
			var boxName = arr[arr.length-1];
			var textToAdd = x.substring( x.indexOf("hyperlink")+9, x.lastIndexOf("named") ).trim();
			var innerText = x.substring( x.indexOf("named")+5, x.lastIndexOf("into") ).trim();

			var link = document.createElement("a");
			link.setAttribute("href", textToAdd);
			link.innerHTML = innerText;
			_$(boxName).appendChild(link);

			record("append hyperlink <span style='color:red'>"+textToAdd+"</span> into <span style='color:red'>"+boxName+"</span>")
			return true;
		} 
		else if( arr[1] == "link" )
		{
			var boxName = arr[arr.length-1];
			var textToAdd = x.substring( x.indexOf("link")+4, x.lastIndexOf("named") ).trim();
			var innerText = x.substring( x.indexOf("named")+5, x.lastIndexOf("into") ).trim();

			record("append hyperlink <span style='color:red'>"+textToAdd+"</span> as <span style='color:red'>" + innerText + "</span> into <span style='color:red'>"+boxName+"</span>")

			var link = document.createElement("a");
			link.setAttribute("href", textToAdd);
			link.setAttribute("target", "_blank");
			link.innerHTML = innerText;
			_$(boxName).appendChild(link);
	
			return true;
		}
		else if( arr[1] == "openlink" ) 
		{
			var boxName = arr[arr.length-1];
			var textToAdd = x.substring( x.indexOf("link")+4, x.lastIndexOf("named") ).trim();
			var innerText = x.substring( x.indexOf("named")+5, x.lastIndexOf("into") ).trim();

			record("append hyperlink <span style='color:red'>"+textToAdd+"</span> as <span style='color:red'>" + innerText + "</span> into <span style='color:red'>"+boxName+"</span>")

			var link = document.createElement("a");
			link.setAttribute("href", textToAdd);
			link.innerHTML = innerText;
			_$(boxName).appendChild(link);

			return true;
		}
		_$(boxName).innerHTML += textToAdd;
        record("append <span style='color:red'>"+textToAdd+"</span> into <span style='color:red'>"+boxName+"</span>")
		return true;
	});
	if( retVal == true){return true;}

    // Check for Insert/Put. insert <value> ? divName; insert ? image into divName; insert ? link ? divName
    retVal = searchCommandsFor( arrElem, INSERT_CMDS, function()
    {
        boxName = arr[arr.length-1];
        if (arr[i+2]=="image") 
        {
            // check if it exists already
            if( _$(boxName)==null)
            {
                createimg(boxName,arr[i+3]);
                record("image <span style='color:red'>" + boxName + "</span> created");
                return true;
            }
            else
            {			
                _$(boxName).innerHTML = '<img src="'+arr[i+3]+'" />';
                var printInfo = "put <span style='color:red'>"+arr[i+3]+"</span> into <span style='color:red'>"+boxName+"</span>";
                record(printInfo);
            }             
            return true;
        }
        else if(arr[i+2]=="hyperlink" || arr[i+2]=="link") 
        {
            var aTag = document.createElement('a');
            var ref = arr[i+3];
            if(ref.substring(0, "http".length)==="http")
            {
                aTag.setAttribute('href',arr[i+3]);
            }
            else
            {
                ref = "http://"+arr[i+3]; 
                aTag.setAttribute('href',ref);
            }
            aTag.innerHTML = ref
            _$(boxName).appendChild(aTag)
            record("put <span style='color:red'>"+ref+"</span> into <span style='color:red'>"+boxName+"</span>");
            return true;
        }
        //_$(boxName).innerHTML = ''
        var k = ''
        _$(boxName).innerHTML = '';
		if( arr[0] == "put" )
		{
			var textToAdd = x.substring( 4 );
		}
		else if( arr[0] == "insert" )
		{
			var textToAdd = x.substring( 6 );
		}

		var intoIndex = textToAdd.lastIndexOf("into");
		textToAdd = textToAdd.substring( 0, intoIndex );
		_$(boxName).innerHTML = textToAdd;
        record("put <span style='color:red'>"+textToAdd+"</span> into <span style='color:red'>"+boxName+"</span>")
        return true;
    });
    if(retVal==true){return true;}



    // Check for Embed. i.e.: embed ? ? http://www.youtube.com/watch?v=x6RdYxo99VU ? vidBox
    retVal = searchCommandsFor( arrElem, EMBED_CMDS, function()
    {        
		if( arr[i+1] == "video" )
		{
        	urlLoc = i+3;
	        nameLoc = i+5;
        	createembeddedvideo(arr[nameLoc], arr[urlLoc]);
	        record("Created Embedded Video at <span style='color:red'>"+arr[urlLoc]+"</span> inserted into <span style='color:red'>"+arr[nameLoc]+"</span>");
        	return true;
		}
		else if( arr[i+1] == "largevideo" )
		{
			urlLoc = i+3;
	        nameLoc = i+5;
			createembeddedlargeplayer(arr[nameLoc], arr[urlLoc]);
			return true;
		}
		record(" <span style='color:red'>ERROR EMBEDDING VIDEO</span>");
		return false;
    });
    if(retVal==true){return true;}
	
	
	retVal = searchCommandsFor( arrElem, USE_CMDS, function()
	{
		divName = arr[arr.length-1];
		var passed = true;
		try { var test = _$(divName); }catch(e){ passed=false; }
		if( test == null ) { passed=false; }
		if( passed ) {
			use_div_id = divName;
		}

		return true;
	});
	if( retVal == true){return true;}
	
	
    // Check for Ajax Post or Ajax Get Image; ie: ajax get image ? fullUrl ? nameImage; ajax post 
    retVal = searchCommandsFor( arrElem, AJAX_CMDS, function()
    {
        // parse php page, postvars and place to put results in
        if( arr[i+1]=="post")
        {
            page=arr[i+3]
            post = arr[i+5]
            myId=arr[i+7]
            ajaxpostrequest(page,post,myId)  
            info = "page = " + page + " posted with = " + post + " id = " + myId
            record("<span style='color:red'>"+info+"</span> posted into " + myId)					    
            return true;
        } 
        else if( arr[i+1]=="get")
        {
            if( arr[i+2]=="image")
            {
                page=arr[i+4]
                myId=arr[i+6]
                ajaxgetimgrequest(page,myId)
                record("<span style='color:red'>"+myId+"</span> had <span style='celor:red'>"+page+"</span> insert into it")
                return true;
            }
        }							    
    });
    if(retVal==true){return true;}

    //append-elem newChild to oldParent    
    retVal = searchCommandsFor( arrElem, APPEND_ELEM_CMDS, function()
    {
        oldParent=arr[i+3];
        newChild=arr[i+1];
        if( reparentElem(oldParent,newChild) )
        {
            record("Element <span style='color:red'>"+newChild+"</span> was added to <span style='color:red'>"+oldParent+"</span>");
            return true;
        }
        record("<span style='color:red'>ERROR: You must \'CREATE\' the Element first</span>");
        return false;
    });
    if(retVal==true){return true;}

    // Check for Delete; eg: delete idName
    retVal = searchCommandsFor( arrElem, DELETE_CMDS, function()
    {
        alert('delete element named ' + arr[i+1]);		
        if( deleteElem(arr[i+1]) ) 
        {
            record("element <span style='color:red'>"+arr[i+1]+"</span> deleted");
        }
        else
        {
            record("element <span style='color:red'>"+arr[i+1]+"</span> not found");
        }
        return true;
    });
    if(retVal==true){return true;}

    // when 'id' is clicked show/hide id [and show/hide id2]...
    retVal = searchCommandsFor( arrElem, WHEN_CMDS, function()
    {
		var divId = arr[i+1];
		var doWhat = arr[i+4];
		var toWhom = arr[i+5];
		var responseId = arr[arr.length-1];
		var doWhatArr = new Array();
		var toWhomArr = new Array();
		var loadPage;
		if( doWhat == "hide")
		{
			doWhatArr.push(hideDiv);
			toWhomArr.push(toWhom);
		}
		else if( doWhat == "show" )
		{
			doWhatArr.push(showDiv);
			toWhomArr.push(toWhom);
		}
		else if( doWhat == "stop" )
		{
			stopVideo();
			return true;
		}
		else if( doWhat == "goto" )
		{
			createOnClickLoadPageHandler( divId, toWhom )
			record('created Open-Page to <span style="color:red">'+toWhom+'</span> onClick handler for <span style="color:red">'+divId+'</span>');
			return true;
		}
		else if( doWhat == "open" )
		{
			createOnClickOpenPageHandler( divId, toWhom );
			record('created Open-Window to <span style="color:red">'+toWhom+'</span> onClick handler for <span style="color:red">'+divId+'</span>');
			return true;
		}
		else if( doWhat == "mail" )
		{
			createOnClickSendForm( divId, toWhom, responseId );
			record('created Send-Form to <span style="color:red">'+toWhom+'</span> onClick handler for <span style="color:red">'+divId+'</span>');
			return true;
		}
		else 
		{
			record('<span style="color:red">UNABLE TO PARSE when COMMAND!</span>');
			return false;
		}

		if( arr.length >= 6 )
		{
			for( y = 6; y < arr.length; y += 3 )
			{
				doWhat = arr[y+1];
				toWhom = arr[y+2];
				if( doWhat == "hide" )
				{
					doWhatArr.push(hideDiv);
					toWhomArr.push(toWhom);
				}
				else if( doWhat == "show" )
				{
					doWhatArr.push(showDiv);
					toWhomArr.push(toWhom);
				}
				else if( doWhat == "stop" )
				{
					doWhatArr.push(showDiv);
					toWhomArr.push(toWhom);
					return true;
				}
				else 
				{
					record('<span style="color:red">UNABLE TO PARSE when COMMAND!</span>');
					return false;
				}
			}
		}
		record('creating on click handler for <span style="color:red">' + arr[i+1] +'</span>');
		return createOnClickHandler( divId, doWhatArr, toWhomArr );

    });
    if( retVal == true){ return true;}


    // Check for other Commands.
    // -----------------------------------------------------------------------
    if (arr[i]=="after")
    {
        wait_time = arr[i+2]
    }
		
    if (arr[i]=="append") 
    {
        boxName = arr[arr.length-1]
		if( arr[i+1] == "link" || arr[i+1] == "hyperlink" )
		{
			var linkUrl = arr[i+2];
			var linkName = arr[i+4];

			var aLink = document.createElement('a');
			aLink.setAttribute('href', linkUrl);
			aLink.innerHTML = linkName;
		
			_$(boxName).appendChild(aLink);

			record("Appended hyperlink named <span style='color:red'>"+linkName+"</span>, pointing to <span style='color:red'>"+linkUrl+"</span> into "+boxName);
		}
		else
		{
			for (j=1;j<arr.length-2;j++) 
				{
					_$(boxName).innerHTML = _$(boxName).innerHTML+arr[j]+" "
					k = k+arr[j]+" "
				}
				record("<span style='color:red'>"+k+"</span> inserted into "+boxName)
		}
    }

    if (arr[i]=="fade")
    {
        boxName = arr[i+2]
        record("fade:"+boxName+"|"+arr[i+1])
        if (arr[i+4]=="") 
        {
            arr[i+4]=0
        }
        if (arr[i+1]=="in")
        {
            fade(boxName,0,100,arr[i+4])
            record(boxName+":"+arr[i+4])
        }
        else if (arr[i+1]=="out")
        {
            fade(boxName,100,0,arr[i+4])
        }
    }

    if (arr[i]=="send")
    {
        boxName = arr[i+1]
        dest_x = parseInt(arr[i+3])
        dest_y = parseInt(arr[i+4])
        t = arr[i+6]
        steps = parseInt(arr[i+8])
        move()
    }
}// end of: command("<javabitch command>")


function dump_vars(){
    var answer = "<span style='color:green'><br /><br />VARIABLE DUMP<hr />Elements:<br />";
    var index = 0;
    for( index = 0; index < divArray.length; ++index )
    {
        answer += divArray[index] + ", ";
    }
    answer += "<br /><br />Images:<br />";
    for( index = 0; index < imgArray.length; ++index )
    {
        answer += imgArray[index] + ", ";
    }
    answer += "<br /><br />Tables:<br />";
    for( index = 0; index < tableArray.length; ++index )
    {
        answer += tableArray[index] + ", ";
    }
    answer += "<br /><hr /><br /></span>";
    _$('record').innerHTML += answer;
}

// get ajax object
function get_XmlHttp() {
    // create the variable that will contain the instance of the XMLHttpRequest object (initially with null value)
    var xmlHttp = null;
    if(window.XMLHttpRequest) {// for Forefox, IE7+, Opera, Safari, ...
        xmlHttp = new XMLHttpRequest();
    }
    else if(window.ActiveXObject) {// for Internet Explorer 5 or 6
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttp;
}

// sends data to a php file, via POST, and displays the received answer
function ajaxpostrequest(php_file, postData, tagID) {
var request =  get_XmlHttp();// call the function for the XMLHttpRequest instance
    request.open("POST", php_file, true);// set the request
    // adds  a header to tell the PHP script to recognize the data as is sent via POST
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // send post data
    request.send(postData);
    // Check request status
    // If the response is received completely, will be transferred to the HTML tag with tagID
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            _$(tagID).innerHTML = request.responseText;
        }
    }
}
// sends data to a php file, via POST, and calls the specified function with the response as a parameter
function ajaxpostrequest2(php_file, postData, func) {
    var request =  get_XmlHttp();// call the function for the XMLHttpRequest instance                                                                                                              
    request.open("POST", php_file, true);// set the request                                                                                                                                        
    // adds  a header to tell the PHP script to recognize the data as is sent via POST                                                                                                             
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // send post data                                                                                                                                                                              
    request.send(postData);
    // Check request status                                                                                                                                                                        
    // If the response is received completely, will be transferred to the HTML tag with tagID                                                                                                      
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            func(request.responseText);
        }
    }
}

// get ajax request
function ajaxgetrequest(urlLoc, tagID){
    var request = get_XmlHttp();
    request.open("GET", urlLoc, true);
    request.send(NULL);
    request.onreadystatechange = function()
    {
        if( request.readyState == 4 )
        {
            _$(tagID).innerHTML = request.responseText;
        }
    }
}


function wait(msecs,com){
    var start = new Date().getTime();
    var cur = start
    while(cur - start < msecs){
        cur = new Date().getTime();
    }	
    command(com)
}

// won't work on percents
function getPos(obj) {
    y =  _$(obj).style.top.substr(0, _$(obj).style.top.length-2);
    x =  _$(obj).style.left.substr(0, _$(obj).style.left.length-2);
    return [x,y]
}

var boxName, dest_x, dest_y, t, steps
var use_div_id = "center";   // id of the div to add boxes/images/etc. into

// move the HTML tag element to the right and down a specified amount (in pixels)
function move() {
	x = parseInt(getPos(boxName)[0])
	y = parseInt(getPos(boxName)[1])
	if (dest_x==x) {if (dest_y==y) {return;}}
		
	dest_y = parseInt(dest_y)
	dest_x = parseInt(dest_x)
	x = parseInt(x)
	y = parseInt(y)
	if (dest_x==x) {} else {if (dest_x>x) {x=x+steps}else{x = x-steps}}
	if (dest_y==y){} else {if (dest_y>y) {y=y+steps}else{y = y-steps}}

	_$(boxName).style.left = x+"px"
	_$(boxName).style.top = y+"px"
	
  	setTimeout(move,t);	
}


function get_index(a, regex) {
    for( var i =0; i < a.length; ++i ) {
	if( a[i]==regex )
	{
	    return i;
	}
    }
    return -1;
}

// sets the css property
function set_style(objId, propertyObject) {
    var elem = _$(objId);
    for (var property in propertyObject){
        elem.style[property] = propertyObject[property];
    }
}

// fades the opacity of eID element within the duration length
function fade(eID, startOpacity, stopOpacity, duration) {
    var speed = Math.round(duration*10);
    var timer = 0;
    if (startOpacity < stopOpacity){ // fade in
        for (var i=startOpacity; i<=stopOpacity; i++) {
	     //record("setOpacity('"+eID+"',"+i+")")
            setTimeout("setOpacity('"+eID+"',"+i+")", timer * speed);
            timer++;
        } return;
    }
    for (var i=startOpacity; i>=stopOpacity; i--) { // fade out
	 //record("setOpacity('"+eID+"',"+i+")")
        setTimeout("setOpacity('"+eID+"',"+i+")", timer * speed);
        timer++;
    }
}
// set opacity of eID to the level opacityLevel
function setOpacity(eID, opacityLevel) {
    var eStyle = document.getElementById(eID).style;
    eStyle.opacity = opacityLevel / 100;
    eStyle.filter = 'alpha(opacity='+opacityLevel+')';
}

// create an absolutely position div as a child of the use_div_id element
function creatediv(id) {
    var newdiv = document.createElement('div'); 
    newdiv.setAttribute('id', id); 
    newdiv.style.position = "absolute";
    _$(use_div_id).appendChild(newdiv);
    divArray.push(id);
}

// create an absolutely position img as a child of the use_div_id element
function createimg(id, source){
    var newimg = document.createElement('img');
    newimg.setAttribute('id',id);
    newimg.setAttribute('src', source);
    newimg.style.position="absolute";
    _$(use_div_id).appendChild(newimg);
    imgArray.push(id);
}

// Creates a powerpoint-like presentation for display 
function createPowerpoint( divName, imgArr )
{
	try { var holder = _$(divName); }catch(e){ var holder = document.createElement("div"); }
	if( holder == null ) {
		holder = document.createElement("div");
		holder.id = divName;
		holder.style.position = "absolute";
	}

	var holderWidth = holder.style.width;
	if( holderWidth == '' )
	{
		holderWidth = 1000;
	} else {
		holderWidth = holderWidth.substring( 0, holderWidth.indexOf("px") );
	}

	// create big pic box
	var bigPic = document.createElement("img");
	bigPic.id = "big_pic";
	bigPic.style.position = "absolute";
	bigPic.style.width = "600px";

	var bigPicLeft = (parseInt(holderWidth) - parseInt(600)) / parseInt(2);

	bigPic.style.left = bigPicLeft + "px";
	try{ bigPic.src = imgArr[0]; }catch(e){ return false; }
	holder.appendChild( bigPic );

	// create previous and next buttons
	var prev = document.createElement("div");
	prev.id = "prev";
	prev.style.position = "absolute";
	prev.style.top = "210px";

	prev.style.left = parseInt(bigPicLeft-100) + "px";

	prev.style.width = "100px"
	prev.style.cursor = "pointer";
	prev.innerHTML = "<";
	prev.style.color = "white";
	prev.style.fontWeight = "bold";
	prev.style.fontSize = "50px";
	prev.style.fontFamily = "Tahoma";
	prev.style.textAlign = "center";
	
	holder.appendChild( prev );

	var next = document.createElement("div");
	next.id = "next";
	next.style.position = "absolute";
	next.style.top = "210px";

	next.style.left = parseInt(bigPicLeft+600) +"px";

	next.style.width = "100px"
	next.style.cursor = "pointer";
	next.innerHTML = ">";
	next.style.color = "white";
	next.style.fontSize = "50px";
	next.style.fontWeight = "bold";
	next.style.fontFamily = "Tahoma";
	next.style.textAlign = "center";
	holder.appendChild( next );
	
	var topPos = 500;
	var leftPos = 0;
	for( var ii = 0; ii < imgArr.length; ++ii )
	{
		var slideName = 'slide_'+ii;
		var imgHolder = document.createElement('div');
		imgHolder.id = slideName;
		
		imgName = 'img_'+ii;
		
		var img = document.createElement('img');
		img.id = imgName;
		img.style.position = "absolute";
		if( ii != 0 )
		{	
			leftPos += 153;
			if( leftPos >= parseInt(holderWidth-133) )
			{
				topPos += 110;
				leftPos = 0;
			}
			img.style.left = leftPos+"px";
		}
		else
		{
			img.style.left = "0px";
		}
		img.style.top = topPos + "px";
		img.style.width = "133px";
		img.style.height = "100px";
		img.src = imgArr[ii];

		imgHolder.appendChild(img);

		imgHolder.style.cursor = "pointer";
		holder.appendChild(imgHolder);

		img.setAttribute("onClick", "change_slide('"+imgName+"', '"+divName+"')" );
	}
	_$('center').appendChild(holder);
	prev.setAttribute("onClick", "change_slide('img_"+imgArr.length-1+"', '"+divName+"')" );
	next.setAttribute("onClick", "change_slide('img_1', '"+divName+"')" );
}

// switches the slide to the next
function change_slide(myId, holderId)
{
	var bigPic = _$('big_pic');
	var img = _$(myId);
	bigPic.src = img.src;

	var slideNum = myId.split('_')[1];
	var num = parseInt(slideNum);
	if( num < 0 ) {
		num = 0;
	}
	var prevNum = parseInt(num-1);
	if( prevNum < 0 )
	{
		var children = _$(holderId).childNodes;
		var lastId = children[children.length-1];
		prevNum = lastId.childNodes[0].id.split('_')[1];
	}
	var nextNum = parseInt(num+1);
	
	var children = _$(holderId).childNodes;
	var lastId = children[children.length-1];
	if( nextNum > lastId.childNodes[0].id.split('_')[1] )
	{
		var children = _$(holderId).childNodes;
		var firstPicId = children[3].childNodes[0].id.split('_')[1];
		nextNum = firstPicId;
	}

	var prevSlideName = "img_"+prevNum;
	var nextSlideName = "img_"+nextNum;
	_$('prev').setAttribute("onClick", "change_slide('"+prevSlideName+"', '"+holderId+"')" );
	_$('next').setAttribute("onClick", "change_slide('"+nextSlideName+"', '"+holderId+"')" );
}

// going to use their domain.tld as the database name, and their table name as the table name for that database
function createtable(tableName, tableFields, domain){
    if(tableFields==null) {
        record("<br /><span style='color:red'>ERROR: YOU MUST SPECIFY AT LEAST ONE FIELDS IN YOUR TABLE</span><br />");
	 return false;
    } else if( tableFields.match("id") ) {
        record("<br /><span style='color:red'>ERROR: ID IS RESERVED, PLEASE CHOOSE ANOTHER NAME</span><br />");
	 return false;
    }
    ajaxpostrequest2('http://jenglish.org/testdemo/create_table.php', 'table='+tableName+"&fields="+tableFields+"&domain="+domain, parseCreateTableResponse);
    return true;
}

function parseCreateTableResponse(x) {
    if( x.indexOf('F') === 0 ){
        _$('save_output').value = "ERROR: CREATING TABLE";
    }else{
        tableArray.push(x);
    }
}
// move the div to the specified top and left coordinates
function locate(id,left,top) {
    _$(x).style.left = left
    _$(x).sytle.top = top
}

// dumps an array for testing
function dump(arr,level) {
    var dumped_text = "";
    if(!level) level = 0;
	
    //The padding given at the beginning of the line.
    var level_padding = "";
    for(var j=0;j<level+1;j++){ 
        level_padding += "    "; 
    }
    if(typeof(arr) == 'object') { //Array/Hashes/Objects 
		for(var item in arr) {
			var value = arr[item];
			if(typeof(value) == 'object') { //If it is an array,
				dumped_text += level_padding + "'" + item + "' ...\n";
				dumped_text += dump(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} 
	else 
	{ 
		//Stings/Chars/Numbers etc.
        dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
}

function record(x) {
    if( _$('record')!=null)
    {
        _$('record').innerHTML = _$('record').innerHTML+"<br>"+x
    //    _$('record').scrollTop = _$('record').style.height
        _$('record').scrollTop = _$('record').scrollHeight;
    }
}



// appends text into an element
function insertText(x)
{
    var k = '';
    _$(boxName).innerHTML = '';
    for (j=1;j<arr.length-2;j++) 
    {
        _$(boxName).innerHTML = _$(boxName).innerHTML+arr[j]+" ";
        k = k+arr[j]+" ";
    }
    record("<span style='color:red'>"+k+"</span> put into <span style='color:red'>"+boxName+"</span>");
}


// removes the id from the array that contains it.  Used for testing
function removeSavedVar(v){
    var varType = _$(v).tagName.toLowerCase();
    if( varType =="div")
    {
        removeItem(divArray, _$(v).id);
    }
    else if( varType == "img" )
    {
        removeItem(imgArray, _$(v).id);
    }
    else
    {
        alert("I don't know how to remove the type " + varType + ". SORRY! Maybe I need an update!" );
    }
}
function removeItem(array, item){
    for(var i in array)
    {
        if(array[i]==item)
        {
            array.splice(i,1);
            break;
        }
    }
}

// deletes an element from it's parent
function deleteElem(x) {
    var yy = _$(x);
    if( yy!=null)
    {
        if( yy.parentNode != null )
        {
            removeSavedVar(x);        
            yy.parentNode.removeChild(_$(x));
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}


// reparents element
function reparentElem(p,c){
    existing = _$(c)
    if(existing!=undefined)
    {
        existing.parentNode.removeChild(existing);
        _$(p).appendChild(existing);
        return true;
    }
    else
    {
        return false;
    }
}

// finds the parent node of an element
function findParentNode(e){
    while( e ) {
        t = e.parentNode;
        if( t == document.body ){
            return e;
        }else{
            findParentNode(t);
        }
    }
}



var appendToDiv = 'center';

// create an embedded video given a youtube url
function createembeddedvideo(vidId, fullUrl){
    var vid = document.createElement('iframe');
    vid.setAttribute("id",vidId);
    vid.src = fullUrl;
    vid.style.position = "absolute";
    vid.setAttribute("frameBorder","0");
    _$(use_div_id).appendChild(vid);
}

// create a basic menu/navigation bar
function createmenubar(menuName, titles){
    var menu = document.createElement('div');
    menu.setAttribute('id', menuName);
    menu.style.position = "absolute";
    menu.style.padding = "0px";
    divArray.push(menuName);
    for( var ii = 1; ii <= titles.length; ++ii)
    {
        var child = document.createElement('div');
        var childName = menuName+"Item"+ii;
        child.setAttribute('id', childName);
        child.style.display = "inline-block";
        child.style.textAlign = "center";
        child.innerHTML = titles[ii-1];
	if( ii != 1 )
	{
        child.style.marginLeft = "10px";
	}
        child.style.marginRight = "10px";
	child.style.padding = "3px";
        child.className += "menuItem ";
        menu.appendChild(child);
        divArray.push( childName );
    }
    _$(use_div_id).appendChild(menu);
}


// creates a drop down menu given a menu title id (menu items are named using this formula: menu_id+Item+menu_number). IE: menu named myMenu, the first item would be called myMenuItem1
function createmenudropdown(menuName, menuTitle, numElems, subMenuTitles){
	var menu = _$(menuName);
	if( menu == null){return false;}
	var menuTitles = menu.children;
	var menuItem = null;
	var parent = -1;
	for( var ii = 0; ii < menuTitles.length; ++ii )
	{
		if( menuTitles[ii].innerHTML.indexOf(menuTitle) != -1 )
		{
			menuItem = menuTitles[ii];
			parent = parseInt(ii)+1;
			break;
       	 }
	}
	if(menuItem==null)
	{
		record("<span style='color:red'>ERROR: CANNOT FIND THAT MENU TITLE IN YOUR MENU!</span>");
		return false;
	}

	var dropDownMenu = document.createElement('div');
	dropDownMenu.setAttribute('id', menuItem.id+'DropDown');

	dropDownMenu.style.position = "absolute";
	dropDownMenu.style.top = parseInt(menuItem.offsetTop) + parseInt(menuItem.style.height);
	dropDownMenu.style.left = parseInt(menuItem.offsetLeft) + "px";
	dropDownMenu.style.display = "none";
	dropDownMenu.style.backgroundColor = "white";
	dropDownMenu.style.zIndex = 8;
	dropDownMenu.style.padding = "5px";
	for( var ii = 0; ii < numElems; ++ii )
	{
		var dropDownItem = document.createElement('div');
		dropDownItem.id = menuName+'Item'+parent+'DropDown'+ii;
		dropDownItem.innerHTML = subMenuTitles[ii];
		dropDownItem.style.textAlign = "left";
		dropDownItem.style.width = menuItem.style.width;
		dropDownItem.className += "dropDown ";
		dropDownMenu.appendChild( dropDownItem );
	}
	menu.appendChild(dropDownMenu);
    
	// create the hover trickery here for drop down menu too
	dropDownMenu.onmouseover=function(){
		var item = this;
		var drop = _$(menuItem.id+'DropDown');
		drop.style.display = "block";
	}
	dropDownMenu.onmouseout=function(){
	var item = this;
	var drop = _$(menuItem.id +'DropDown');
	drop.style.display = "none";
	}

	// create the hover trickery here
	menuItem.onmouseover=function(){
		var item = this;
		var drop = _$(item.id+'DropDown');
		drop.style.display = "block";
	}
	menuItem.onmouseout=function(){
		var item = this;
		var drop = _$(item.id+'DropDown');
		drop.style.display = "none";
	}
}

// create a 100% x 100% div, to be used as a semi-transparent background 
function createBlur( blurId )
{
	var blur = document.createElement('div');
	blur.id = blurId;
	blur.style.position = "absolute";
	blur.style.leftOffset = "0px";
	blur.style.topOffset = "0px";
	blur.style.width = "100%";
	blur.style.height = "100%";
	document.body.appendChild(blur);
}



// Creates a Drop Down Box.  items are named using the following convention: <dropDownId>+Item+<Item Number>.  
//     IE: drop-down list named dropDown, the first item would be dropDownItem1
function createDropDownBox( dropDownId, titleArr )
{
	var dropDown = document.createElement("select");
	dropDown.id = dropDownId;
	for( var ii = 0; ii < titleArr.length; ++ii )
	{
		var option = document.createElement("option");
		option.id = dropDownId + "Item" + (ii+1);
		option.setAttribute("value", titleArr[ii] );
		option.innerHTML = titleArr[ii];
		dropDown.appendChild( option );
	}
	_$(use_div_id).appendChild( dropDown );
}

// create a bullet list
function createUnorderedList( divId, titleArr )
{
	var divHolder = _$(divId);
	var uList = document.createElement('ul');

	for( var ii = 0; ii < titleArr.length; ++ii )
	{
		var item = document.createElement('li');
		item.id = divId+"_item_"+(ii+1);
		item.innerHTML = titleArr[ii];

		uList.appendChild(item);
	}
	divHolder.appendChild(uList);
}

// create a numbered list
function createOrderedList( divId, titleArr )
{
	var divHolder = _$(divId);
	var uList = document.createElement('ol');
	var divName = divId;
	for( var ii = 0; ii < titleArr.length; ++ii )
	{
		var item = document.createElement('li');
		item.innerHTML = titleArr[ii];
		item.id = divName+'_'+ii;

		uList.appendChild(item);
	}
	divHolder.appendChild(uList);

}
// create an on click handler that opens the url in the current window
function createOnClickLoadPageHandler( divId, toWhere )
{
	_$(divId).style.cursor = "pointer";
	_$(divId).onclick = function()
	{
		window.location.assign( toWhere );
	}
}
// create an on click handler that opens a new tab window for the url
function createOnClickOpenPageHandler( divId, toWhere )
{
	_$(divId).style.cursor = "pointer";
	_$(divId).onclick = function()
	{
		window.open( toWhere );
	}
}

// creates an on click handler for an HTML element
function createOnClickHandler( divId, doWhatArr, toWhomArr )
{
	if( doWhatArr.length != toWhomArr.length )
	{
		return false;
	}
	_$(divId).style.cursor = "pointer";
	_$(divId).onclick = function() 
	{
		for( var ii = 0; ii < doWhatArr.length; ++ii )
		{
			if( doWhatArr == "stop")
			{
				close_blur(toWhomArr[ii]);
			}
			doWhatArr[ii]( toWhomArr[ii] );
		}
	}
}


var slideshowImgArr = new Array();
var current_image = -1;
var slideshowTimer = null;

function createSlideshow(divId, indId)
{
	var divToAdd = _$(divId);
	var indHolder = _$(indId);
	var numCircles = slideshowImgArr.length;
	for( ii = 0; ii < numCircles; ++ii )
	{
		var imgHolder = document.createElement('img');
		imgHolder.src = slideshowImgArr[ii];
		imgHolder.id = 'img' + parseInt(ii+1);
		imgHolder.style.width = "100%";
		if( ii != 0 ) {
			imgHolder.style.opacity = 0.0;
		} else {
			imgHolder.style.opacity = 1.0;
		}
		imgHolder.style.position = "absolute";
		imgHolder.style.top = "0px";
		imgHolder.style.left = "0px";
		divToAdd.appendChild( imgHolder );
	}
	current_image = -1;
	for( index = 0; index  < numCircles; ++index  )
	{
		var divHolder = document.createElement('div');
		var activeImg = document.createElement('img');
		activeImg.src = "http://jenglish.org/images/green_circle.png";
		activeImg.style.opacity = 0.0;
		activeImg.style.position = "absolute";
		activeImg.style.left = "0px";
		activeImg.style.top = "0px";
		activeImg.style.paddingLeft = "10px";
		activeImg.style.paddingRight = "10px";
		var inactiveImg = document.createElement('img');
		inactiveImg.src = "http://jenglish.org/images/grey_circle.png";
		inactiveImg.style.opacity = 1.0;
		inactiveImg.style.position = "absolute";
		inactiveImg.style.left = "0px";
		inactiveImg.style.top = "0px";
		inactiveImg.style.paddingLeft = "10px";
		inactiveImg.style.paddingRight = "10px";
		divHolder.appendChild( activeImg );
		divHolder.appendChild( inactiveImg );

		divHolder.style.display = "inline-block";
		divHolder.style.pointer = "cursor";
		divHolder.style.position = "absolute";
		divHolder.style.top = "0px";
		if( index != 0 )
		{
			divHolder.style.left = (parseInt(17*index)+parseInt(index*10))+"px";
		}
		else
		{
			divHolder.style.left = "0px";
		}
		divHolder.style.paddingLeft = "10px";
		divHolder.style.paddingRight = "10px";
		divHolder.setAttribute('onClick', 'onClickIndicator('+divId+', '+ indId +', '+index+')');
		
		indHolder.appendChild(divHolder);
	}
	switchSource( divToAdd, indHolder );
}

// on click handler for the slideshow indicators
function onClickIndicator( divId, indId, num )
{
	pauseSlideshow();
	if( current_image != num ) {
		switchSourceTo( divId, indId, num );
	}
	if( slideshowTimer != null )
	{
		clearTimeout(slideshowTimer);
		slideshowTimer = null;
	}
	slideshowTimer = setTimeout( function() { switchSource(divId, indId); }, 1000 * 60 * 2);
}

function pauseSlideshow()
{
	clearTimeout(slideshowTimer);
	slideshowTimer = null;
}
function switchSource( holderId, indId)
{
	updateCurrentImage();
	for( var ii = 0; ii < slideshowImgArr.length; ++ii )
	{
		holderId.childNodes[ii].style.opacity = 0.0;
	}
	holderId.childNodes[current_image].style.opacity = 1.0;
	// make all indicators inactive
	for( var y = 0; y < slideshowImgArr.length; ++y )
	{
		fadeFromTo( indId.childNodes[y].childNodes[0], indId.childNodes[y].childNodes[1] );
		//_$(slideshowDivArr[y]).style.display = "none"; // hide divs
	}
	// make it active
	fadeFromTo( indId.childNodes[current_image].childNodes[1], indId.childNodes[current_image].childNodes[0] );
	//_$(slideshowDivArr[current_image]).style.display = "block";
	slideshowTimer = setTimeout( function() { switchSource(holderId, indId); }, 7000 );
}

function switchSourceTo( holderId, indId, toNum )
{
	//_$(slideshowDivArr[current_image]).style.display = "none";
	current_image = toNum;
	//_$(slideshowDivArr[current_image]).style.display = "block";
	for( var y = 0; y < slideshowImgArr.length; ++y )
	{
		// make all inactive
		fadeFromTo( indId.childNodes[y].childNodes[0], indId.childNodes[y].childNodes[1] );
	}
	// make this one active
	fadeFromTo( indId.childNodes[current_image].childNodes[1], indId.childNodes[current_image].childNodes[0] );
	for( var ii = 0; ii < slideshowImgArr.length; ++ii )
	{
		holderId.childNodes[ii].style.opacity = 0.0;
	}
	holderId.childNodes[current_image].style.opacity = 1.0;
}


// updates the current images so we can track where we are, and loop back to the beginning when needed
function updateCurrentImage()
{
	current_image++;
	if( current_image >= slideshowImgArr.length )
	{
		current_image = 0;
	}
}



// hides a div
function hideDiv(id) {
	//fade(id, 100, 0, 0 );
	_$(id).style.display = "none";
}
// shows a div
function showDiv(id) {
	//fade(id, 0, 100, 0 );
	_$(id).style.display = "block";
}


