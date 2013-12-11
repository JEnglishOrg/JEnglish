
try{

function _$(x) { return document.getElementById(x) }

var att = new Array("azimuth","background","background-attachment","background-color","background-image","background-position","background-repeat","border","border-collapse","border-color","border-radius","border-spacing","border-style","border-top","border-right","border-bottom","border-left","border-top-color","border-right-color","border-bottom-color","border-left-color","border-top-style","border-right-style","border-bottom-style","border-left-style","border-top-width","border-right-width","border-bottom-width","border-left-width","border-width","bottom","box-shadow","caption-side","className","clear","clip","text-color","content","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","elevation","empty-cells","float","fonts","font","font-size","font-size-adjust","font-stretch","font-style","font-variant","weight","height","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-top","margin-right","margin-bottom","margin-left","marker-offset","marks","max-height","max-width","min-height","min-width","opacity","orphans","outline","outline-color","outline-style","outline-width","overflow","overflow-x","overflow-y","padding","padding-top","padding-right","padding-bottom","padding-left","page","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","pitch","pitch-range","play-during","position","quotes","richness","right","size","speak","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","table-layout","text-align","text-decoration","text-indent","text-shadow","text-transform","top","unicode-bidi","vertical-align","visibility","voice-family","volume","white-space","widows","width","word-spacing","level","-moz-border-radius");
var att_x = new Array("azimuth","background","background-attachment","background-color","background-image","background-position","background-repeat","border","border-collapse","border-color","border-radius","border-spacing","border-style","border-top","border-right","border-bottom","border-left","border-top-color","border-right-color","border-bottom-color","border-left-color","border-top-style","border-right-style","border-bottom-style","border-left-style","border-top-width","border-right-width","border-bottom-width","border-left-width","border-width","bottom","box-shadow","caption-side","className","clear","clip","color","content","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","elevation","empty-cells","float","font","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","height","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-top","margin-right","margin-bottom","margin-left","marker-offset","marks","max-height","max-width","min-height","min-width","opacity","orphans","outline","outline-color","outline-style","outline-width","overflow","overflow-x","overflow-y","padding","padding-top","padding-right","padding-bottom","padding-left","page","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","pitch","pitch-range","play-during","position","quotes","richness","right","size","speak","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","table-layout","text-align","text-decoration","text-indent","text-shadow","text-transform","top","unicode-bidi","vertical-align","visibility","voice-family","volume","white-space","widows","width","word-spacing","z-index","-moz-border-radius");

// used for dump_vars(), keeps track of all DIVs, IMGs, and DB Tables Created during the executing of the commands
var divArray = new Array();
var imgArray = new Array();
var tableArray = new Array();
var zero_time = 0;
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

// firefox doesn't like event.which
function displayResult(){
    var x;
    if(window.event) // IE8 and earlier
    {
        x=event.keyCode;
    }
    else if(event.which) // IE9/Firefox/Chrome/Opera/Safari
    {
        x=event.which;
    }
    if( x == 13 ) {
        do_it();  
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
var use_div_id = "center";
function formula(x) {
}

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

/*
function get_index(a, regex){
    for(var i = 0; i < a.length; i++) {
        if(a[i].search(regex) > -1){
            return i;
        }
    }
    return -1;
}
*/
function set_style(objId, propertyObject) {
    var elem = _$(objId);
    for (var property in propertyObject){
        elem.style[property] = propertyObject[property];
    }
}



function creatediv(id) {
    var newdiv = document.createElement('div'); 
    newdiv.setAttribute('id', id); 
    newdiv.style.position = "absolute";
	appendBox(newdiv);
    divArray.push(id);
}

function createimg(id, source){
    var newimg = document.createElement('img');
    newimg.setAttribute('id',id);
    newimg.setAttribute('src', source);
    newimg.style.position="absolute";
	appendBox(newimg);
    imgArray.push(id);
}

function createPowerpoint( divName, imgArr )
{
	try { var holder = _$(divName); }catch(e){ var holder = document.createElement("div"); }
	if( holder == null ) {
		holder = document.createElement("div");
		holder.id = divName;
		holder.style.position = "absolute";
	}

	var holderWidth = holder.style.width;
	if( holderWidth == '' || holderWidth === "undefined" )
	{
		holderWidth = 1000;
	} else {
		if( holderWidth.indexOf("px") != -1 )
		{
			holderWidth = holderWidth.substring( 0, holderWidth.indexOf("px") );
		}
		else if( holderWidth.indexOf("%") != -1 )
		{
			holderWidth = holderWidth.substring( 0, holderWidth.indexOf("%") );
		}
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
		//img.onclick = function() { 
		//console.log("img clicked");
		//	change_slide('"'+this.id+'"', '"'+divName+'"' );
		//	return true;
		//}
		img.setAttribute("onClick", "change_slide('"+imgName+"', '"+divName+"')" );
	}
	appendBox(holder);
	prev.setAttribute("onClick", "change_slide('img_"+imgArr.length-1+"', '"+divName+"')" );
	next.setAttribute("onClick", "change_slide('img_1', '"+divName+"')" );
}


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
function parseCreateTableResponse(x) {
    if( x.indexOf('F') === 0 ){
        _$('save_output').value = "ERROR: CREATING TABLE";
    }else{
        tableArray.push(x);
    }
}

function locate(id,left,top) {
    _$(x).style.left = left
    _$(x).sytle.top = top
}

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
    } else { //Stings/Chars/Numbers etc.
        dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
}

function do_it() {
    command(_$('command_text').value)
    _$('command_text').value = ""
}

function record(x) {
    if( _$('record')!=null)
    {
        _$('record').innerHTML = _$('record').innerHTML+"<br>"+x
    //    _$('record').scrollTop = _$('record').style.height
        _$('record').scrollTop = _$('record').scrollHeight;
    }
}
function appendBox(x)
{
	try {
		_$(use_div_id).appendChild(x);
	}
	catch(e)
	{
		document.body.appendChild(x);
	}
}

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
var AJAX_CMDS   = new Array("async",'ajax','asynchronously');
var APPEND_ELEM_CMDS = new Array("append-elem");
var ATTR_CMDS   = new Array("make","set");
var DELETE_CMDS = new Array("remove","delete","rm");
var EMBED_CMDS  = new Array("embed");
var EMBED_SUB_CMDS = new Array("youtube","video");
var INSERT_CMDS = new Array("put","insert");
var APPEND_INSERT_CMDS = new Array("append");
var MOVE_CMDS   = new Array("move","shift","mymove"); 
var PREPEND_CMDS = new Array("prepend");
var RENAME_CMDS = new Array("rename");
var USE_CMDS = new Array("use", "using");
var WHEN_CMDS = new Array("when");



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



function reparentElem(p,c){
    existing = _$(c)
    if(existing!=undefined)
    {
//	var parent = findParentNode(existing); // think it is this one
//     var parent = findParentNode(c);
        existing.parentNode.removeChild(existing);
        _$(p).appendChild(existing);
        return true;
    }
    else
    {
        return false;
    }
}

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

function createembeddedvideo(vidId, fullUrl){
    var vid = document.createElement('iframe');
    vid.setAttribute("id",vidId);
    vid.src = fullUrl;
    vid.style.position = "absolute";
    vid.setAttribute("frameBorder","0");
	appendBox(vid);
}

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
	appendBox(menu);
}


function createembeddedlargeplayer(vidId, fullUrl)
{
	video_location = fullUrl.substring( fullUrl.lastIndexOf('/')+1 );
	video_holder = vidId;
}

function createmenudropdown(menuName, menuTitle, numElems, subMenuTitles){
	var menu = _$(menuName);
	if( menu == null){ console.log("cannot find that a menu named "+menuName+" = " + x); return false;}
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
	console.log("cannot find the menu item = " + menuItem);
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


function createTextInput( formName, withName )
{
	if( withName == "comment" )
	{
		var input = document.createElement("textarea");
		input.setAttribute('name', formName + '_' + withName );
		input.setAttribute('id', formName + '_' + withName );
		input.setAttribute('rows',"6");
		input.setAttribute('cols',"30");
	}
	else
	{
		var input = document.createElement("input");
		input.setAttribute('type',"text");
		input.setAttribute('name', formName + '_' +  withName );
		input.setAttribute('id', formName + '_' +  withName );
	}

	return input;
}

function createBlur( blurId )
{
	var blur = document.createElement('div');
	blur.id = blurId;
	blur.style.backgroundColor = "black";
	blur.style.opacity = 0.95;
	blur.style.position = "absolute";
	blur.style.leftOffset = "0px";
	blur.style.topOffset = "0px";
	blur.style.width = "100%";
	blur.style.height = "100%";
	
	var closeBlur = document.createElement('div');
	closeBlur.id = blurId + "_close";
	closeBlur.style.backgroundImage = "url('/images/close_button.png')";
	closeBlur.style.position = "absolute";
	closeBlur.style.width = "50px";
	closeBlur.style.height = "50px";
	closeBlur.style.left = "100%";
	closeBlur.style.marginLeft = "-50px";
	closeBlur.style.cursor = "pointer";
	closeBlur.onclick = function() {
		fade(this.id.split('_')[0], _$(this.id.split('_')[0]).style.opacity*100, 0, 2 );
	}
	blur.appendChild(closeBlur);
	document.body.appendChild(blur);
}

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


function c(x) {
    var arr
    var i=0
    arr = x.split(" ")
    
    var arrElem = arr[i];

    // Check for Create. create <subCmd> ? theId
    var retVal = searchCommandsFor( arrElem, CREATE_CMDS, function()
    { 
        j=i+1;
        arrElem = arr[j];


	var retVal2 = searchCommandsFor( arr[i+2], CREATE_SLIDESHOW_CMDS, function() 
	{
		// create a slideshow in/for imgId using images img1 img2 [and] img3
		var divId = arr[i+4];
		var indId = arr[i+7];
		var numImages =( arr.length - 9 - 2);
		if( numImages % 2 != 0 )
		{
			record("<span style='color:red'>ERROR PARSING slideshow COMMAND</span>");
			return false;
		}
		numImages /= 2;
		// divs: 8 - 11, skip 2, imgs: 14-end
		for( var y = 9; y < 9+numImages; ++y )
		{
			slideshowDivArr.push( arr[y] );
			if( _$(arr[y]).style.display != "none" )
			{
				_$(arr[y]).style.display = "none";
			}
		}
		for( y = 9+numImages+2; y < arr.length; ++y )
		{
			slideshowImgArr.push( arr[y] );
		}
		createSlideshow(divId, indId);
		record('creating slideshow for <span style="color:red">'+divId+'</span>');
		return true;
	});
	if( retVal2 == true ){return true;}

	retVal2 = searchCommandsFor( arr[i+2], CREATE_BLUR_CMDS, function()
	{
		var blurName = arr[i+4];
		createBlur( blurName );
		
		record('blur created named <span style="color:red">' + blurName + '</span>' );
		return true;
	});
	if( retVal2 == true ) { return true; }


	// create a powerpoint for images img1, img2, img3 into divId
	retVal2 = searchCommandsFor( arr[i+2], CREATE_PRESENTATION_CMDS, function()
	{

		var divName = arr[arr.length-1];


		var imagesIndex = x.indexOf(" images ");
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
		var fields = x.substring( imagesIndex+8, intoIndex);		
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

	retVal2 = searchCommandsFor( arr[i+2], CREATE_UL_CMDS, function()
	{
		// create a bulletlist in divId with titles title1, title2, and title3

		var divName = arr[i+4]
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

	retVal2 = searchCommandsFor( arr[i+2], CREATE_OL_CMDS, function()
	{
		// create a numberlist in divId with titles title1, title2, and title3

		var divName = arr[i+4]
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

        // Check for Create Menu/NavBar; eg: create a menu X <menuName> X titles <MenuTitles>
        retVal2 = searchCommandsFor(arr[i+2], CREATE_MENU_CMDS, function()
        {
            barName = arr[i+4];
            var titles = new Array();

		var titleIndex = x.indexOf(' titles ');
		if( titleIndex == -1 )
		{
			record('ah no titles specified');
			return false;
		}
		var rawQuerySplit = x.substring(titleIndex+8);
		var fieldsArr =  rawQuerySplit.split(',');


		for( var ii = 0; ii < fieldsArr.length; ++ii )
		{
			var andIndex = fieldsArr[ii].indexOf("and");
		    var myTitle = fieldsArr[ii]
			if( andIndex != -1 )
			{
				myTitle = fieldsArr[ii].substring( andIndex+3 );
			}
			
			titles.push( myTitle );
			record("Adding Title <span style='color:red'>"+myTitle+"</span> into <span style='color:red'>"+barName+"</span>");
        }
            createmenubar(barName,titles);
            record("menu/navigation bar <span style='color:red'>"+barName+"</span> created with <span style='color:red'>"+titles.length+"</span> elements");
            return true;
        });
        if(retVal2){return true;}

        // create a dropdown ? menuTitle ? menuName ? ? X1 X2 XN
        retVal2 = searchCommandsFor(arr[i+2], CREATE_MENU_DROP_DOWN_CMDS, function()
        {
		titleName = arr[i+4];
		menuName = arr[i+6];
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

        // create a verticalBar ? vBarName
        retVal2 = searchCommandsFor(arr[2], CREATE_VERT_BAR_CMDS, function()
        {
            barName = arr[i+4];
            var bar = document.createElement("div");
			bar.id = barName;
			bar.style.position = "absolute";
            bar.style.height = "1000px";
			bar.style.width = "0px";
            bar.style.borderWidth = "1px";
            bar.style.borderStyle = "solid";
            bar.style.borderColor = "black";
			appendBox(bar);
            record("Vertical Bar called <span style='color:red'>"+barName+"</span> created");    
            return true;
        });
        if(retVal2==true){return true;}

        // create a horizontalBar ? hBarName
        retVal2 = searchCommandsFor(arr[2], CREATE_HORZ_BAR_CMDS, function()
        {
            barName = arr[i+4];
            var bar = document.createElement("div");
			bar.id = barName;
			bar.style.position = "absolute";
            bar.style.width = "997px";
			bar.style.height = "0px";
            bar.style.borderWidth = "1px";
            bar.style.borderColor = "black";
            bar.style.borderStyle = "solid";
			appendBox(bar);
            record("Horizontal Bar called <span style='color:red'>"+barName+"</span> created");
            return true;
        });
        if(retVal2==true){return true;}
  
	if( arr[i+2] == "image" || arr[i+2] == "img" )
	{
		createimg( arr[i+4], '');
		record( "<br /><span style='color:red'>"+arr[i+4]+"</span> image created");
		return true;
	}


	var andIndex = x.indexOf(" and ");
	if( andIndex != -1 ) {
		// found secondary make command
		var restOfCmd = x.substring(andIndex+3).trim();
		var createCmd = x.substring(0, andIndex).trim();
		// create the div first, so we can add attributes to it on the fly
		var cmdSplit = createCmd.split(" ");
		var boxName = cmdSplit[cmdSplit.length-1];
		
        creatediv( boxName );
        record( "<br /><span style='color:red'>"+ boxName +"</span> created");

		andIndex = restOfCmd.indexOf(" and ");
		while( andIndex != -1 )
		{
			var cmdToRun = restOfCmd.substring( 0, andIndex ).trim();
			restOfCmd = restOfCmd.substring(andIndex+5).trim();

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
        

    });
    if(retVal){return true;}

    // Check for Move. move elemName ? ? ? leftPx ? ? downPx
    retVal = searchCommandsFor( arrElem, MOVE_CMDS, function()
    {
        node = _$(arr[1])
 //       parentNode = node.parentNode;
        leftIndex=i+5
        topIndex=i+8
  //      if( parentNode == document.body )
   //     {
            node.style.left = arr[leftIndex]+"px"
            node.style.top = arr[topIndex]+"px"
            record("<span style='color:red'>"+node.id+"</span> was moved to ["+arr[leftIndex]+","+arr[topIndex]+"]" )
   //     }
   //     else
   //     {
            //alert("find parent")
  //          var topParent = findParentNode(parentNode);
	    //var topParent = _$('center');
    //        topParent.style.left = arr[leftIndex]+"px"
     //       topParent.style.top = arr[topIndex]+"px"
     //       record("<span style='color:red'>"+node.id+"</span>&#39;s parent [<span style='color:red'>"+topParent.id+"</span>] was moved to ["+arr[leftIndex]+","+arr[topIndex]+"]" )
     //   }   	   
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

			var restOfCmd = x.substring( andIndex+3 ).trim();
			andIndex = restOfCmd.indexOf("and");
			if( andIndex == -1 )
			{
				var cmd = restOfCmd.split(" ");
				com_idx = get_index(att,cmd[0]);
				com_res = att_x[com_idx]+":"+cmd[1];
				_$(boxName).style.cssText = _$(boxName).style.cssText+";"+com_res
				return true;
			}
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
				if( att_x[com_idx] == "className" )
				{
					_$(boxName).className = cmd[1];
				}
				else
				{
					com_res = att_x[com_idx]+":"+cmd[1];
					_$(boxName).style.cssText = _$(boxName).style.cssText+";"+com_res
				}
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
					_$(boxName).style.cssText = _$(boxName).style.cssText+";"+com_res;
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
				if( att_x[com_idx].trim() === "className" )
				{
					_$(boxName).className = arr[i+3];
				}
				else
				{
				
					var fields = x.split(" ");
					var css_rule = '';
					for( var yy = 3; yy < fields.length; ++yy )
					{
						css_rule = css_rule + fields[yy];
					}
					com_res = att_x[com_idx]+":"+css_rule;
					_$(boxName).style.cssText = _$(boxName).style.cssText+";"+com_res
				}
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
		link.setAttribute("target", "_blank");
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
	else if( arr[1] == "openlink" ) {
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
	retVal = searchCommandsFor( arrElem, USE_CMDS, function(){
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
	
	if(doWhat.toLowerCase() == "fadein")
	{
		doWhatArr.push(fadeIn);
		toWhomArr.push(toWhom);
	}
	else if(doWhat.toLowerCase() == "fadeout")
	{
		doWhatArr.push(fadeOut);
		toWhomArr.push(toWhom);
	}
	else if( doWhat == "hide")
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
		stopVideo(toWhom);
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
			if(doWhat.toLowerCase() == "fadein")
			{
				doWhatArr.push(fadeIn);
				toWhomArr.push(toWhom);
			}
			else if(doWhat.toLowerCase() == "fadeout")
			{
				doWhatArr.push(fadeOut);
				toWhomArr.push(toWhom);
			}
			else if( doWhat == "hide" )
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
		if( arr.length == 9 || arr.length == 10 )
		{
			if( arr[6] == "repeat" )
			{
				// repeat every
				var repeatTime = parseInt(arr[8]);
				if( arr[1+1] == "in" )
				{
					createFadeInRepeat(boxName, arr[i+4], repeatTime );
				}
				else if( arr[i+1] == "out" )
				{
					createFadeOutRepeat( boxName, arr[i+4], repeatTime );
				}
				else
				{
					console.log("JEnglish: UNKNOWN fade COMMAND = " + x);
				}
			}
			else if( arr[6] == "starting" || arr[6] == "start" )
			{
				// starting after
				var startTime = parseInt(arr[8]);
				if( arr[i+1] == "in" )
				{
					createFadeInTimer(boxName, arr[i+4], startTime );
				}
				else if( arr[i+1] == "out" )
				{
					createFadeOutTimer(boxName, arr[i+4], startTime );
				}
				else
				{
					console.log("JEnglish: UNKNOWN fade COMMAND = " + x);
				}
			}
			return;
		}
		else if( arr.length == 14 )
		{
			// repeat every
			var repeatTime = parseInt(arr[8]);
			// starting after
			var startTime = parseInt(arr[12]);
			if( arr[i+1] == "in" )
			{
				createFadeInRepeatAfter(boxName, arr[i+4], repeatTime, startTime );
			}
			else if( arr[i+1] == "out" )
			{
				createFadeOutRepeatAfter(boxName, arr[i+4], repeatTime, startTime );
			}
			else
			{
				console.log("JEnglish: UNKNOWN fade COMMAND = " + x);
			}
			return;
		}
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
		else
		{
			console.log("JEnglish: UNKNOWN fade COMMAND = " + x);
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

function createFadeInRepeatAfter(boxName, time, repeatTime, startTime)
{
	setTimeout(function(){
		fade(boxName,0,100,time);
		setInterval( function() {
			fade(boxName,0,100,time)
		}, repeatTime*1000 );
	}, startTime*1000);
}			
function createFadeOutRepeatAfter(boxName, time, repeatTime, startTime)
{
	setTimeout(function(){
		fade(boxName,100,0,time);
		setInterval( function() {
			fade(boxName,100,0,time)
		}, repeatTime*1000 );
	}, startTime*1000);
}
function createFadeOutRepeat( boxName, time, repeatTime )
{
	fade(boxName,100,0,time);
	setInterval( function() { 
		fade(boxName,100,0,time); 
	}, repeatTime * 1000 );
}

function createFadeInRepeat( boxName, time, repeatTime )
{
	fade(boxName,0, 100,time);
	setInterval( function() { 
		fade(boxName,0,100,time); 
	}, repeatTime * 1000 );
}					

function createFadeOutTimer(boxName, time, startTime )
{
	setTimeout( function() { 
		fade(boxName,100, 0,time); 
	}, startTime*1000 );
}
function createFadeInTimer(boxName, time, startTime )
{
	setTimeout( function() { 
		fade(boxName,0,100,time); 
	}, startTime*1000 );
}

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

function stopVideo( toWhom )
{
	try { _$(toWhom).stopVideo() } catch (err) {console.log("error stopping video = " + err);}
	stopVideo(toWhom);
}

function createOnClickLoadPageHandler( divId, toWhere )
{
	_$(divId).style.cursor = "pointer";
	_$(divId).onclick = function()
	{
		window.location.assign( toWhere );
	}
}

function createOnClickOpenPageHandler( divId, toWhere )
{
	_$(divId).style.cursor = "pointer";
	_$(divId).onclick = function()
	{
		window.open( toWhere );
	}
}


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


var slideshowDivArr = new Array();
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
		activeImg.id = "active"+(index+1);
		activeImg.src = "/images/green_circle.png";
		activeImg.style.opacity = 0.0;
		activeImg.style.position = "absolute";
		activeImg.style.left = "0px";
		activeImg.style.top = "0px";
		activeImg.style.paddingLeft = "10px";
		activeImg.style.paddingRight = "10px";
		var inactiveImg = document.createElement('img');
		inactiveImg.id = "inactive"+(index+1);
		inactiveImg.src = "/images/grey_circle.png";
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

/**/



var isSwitching = false;

function onClickIndicator( divId, indId, num )
{
	if( isSwitching === true )
	{
		return;
	}
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
	isSwitching = true;
	var oldNum = current_image;
	updateCurrentImage();
	// Switch the images
	if( oldNum != -1 )
	{
//		holderId.childNodes[oldNum].canSwitch = true;
//		holderId.childNodes[current_image].canSwitch = true;
		fadeFromTo( holderId.childNodes[oldNum].id, holderId.childNodes[current_image].id );
	}
	// make the last indicator inactive
	if( oldNum != -1 )
	{
//		indId.childNodes[oldNum].childNodes[0].canSwitch = true;
//		indId.childNodes[oldNum].childNodes[1].canSwitch = true;
		fadeFromTo( indId.childNodes[oldNum].childNodes[0].id, indId.childNodes[oldNum].childNodes[1].id );
		// make the last description hidden
		_$(slideshowDivArr[oldNum]).style.display = "none";
	}
//	indId.childNodes[current_image].childNodes[1].canSwitch = true;
//	indId.childNodes[current_image].childNodes[0].canSwitch = true;
	// make the next one active
	fadeFromTo( indId.childNodes[current_image].childNodes[1].id, indId.childNodes[current_image].childNodes[0].id );
	// Switch to the new description
	_$(slideshowDivArr[current_image]).style.display = "block";
	slideshowTimer = setTimeout( function() { switchSource(holderId, indId); }, 7000 );
	setTimeout( function() { isSwitching = false; }, 1050 );
}

// fades from 'img1'(this goes away) to 'img2'(this should show if it isn't already)
function fadeFromTo(img1, img2)
{
	fade( img1, 100, 0, 1 );
	fade( img2, 0, 100, 1 );
}



function switchSourceTo( holderId, indId, toNum )
{
	isSwitching = true;
	var oldNum = current_image;
	current_image = toNum;
		if( oldNum != -1 )
		{
			// Switch the description blocks
			_$(slideshowDivArr[oldNum]).style.display = "none";
			// make the last one inactive
			fadeFromTo( indId.childNodes[oldNum].childNodes[0].id, indId.childNodes[oldNum].childNodes[1].id );
		}
		// display the next description block
		_$(slideshowDivArr[current_image]).style.display = "block";
		// make the new one active
		fadeFromTo( indId.childNodes[current_image].childNodes[1].id, indId.childNodes[current_image].childNodes[0].id );
		// Switch the images	
		if( oldNum != -1 )
		{
			fadeFromTo( holderId.childNodes[oldNum].id, holderId.childNodes[current_image].id );
		}
	setTimeout( function() { isSwitching = false; }, 1050 );
}

function fadeIn(eID) {
	fade(eID, 0, 100, 2);
}
function fadeOut(eID) {
	fade(eID, 100, 0, 2);
}

function fade(eID, startOpacity, stopOpacity, duration) {
    var speed = Math.round(duration*10);
    var timer = 0;
    if (startOpacity < stopOpacity){ // fade in
        for (var i=startOpacity; i<=stopOpacity; i++) {
	     //record("setOpacity('"+eID+"',"+i+")")
            _$(eID).switchTimer = setTimeout("setOpacity('"+eID+"',"+i+")", timer * speed);
            timer++;
        } 
		return;
    }
    for (var i=startOpacity; i>=stopOpacity; i--) { // fade out
	 //record("setOpacity('"+eID+"',"+i+")")
        _$(eID).switchTimer = setTimeout("setOpacity('"+eID+"',"+i+")", timer * speed);
        timer++;
    }
}

function setOpacity(eID, opacityLevel) {
    var eStyle = document.getElementById(eID).style;
    eStyle.opacity = opacityLevel / 100;
    eStyle.filter = 'alpha(opacity='+opacityLevel+')';
}

function updateCurrentImage()
{
	current_image++;
	if( current_image >= slideshowImgArr.length )
	{
		current_image = 0;
	}
}
function hideDiv(id) {
	//fade(id, 100, 0, 0 );
	_$(id).style.display = "none";
}
function showDiv(id) {
	//fade(id, 0, 100, 0 );
	_$(id).style.display = "block";
}

    var video_location;
    var video_holder;
    var done = false;
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('video_holder', {
          height: '390',
          width: '640',
          videoId: video_location,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
    }

    function onPlayerReady(evt) {
        evt.target.playVideo();
	player.playVideo();
    }
    function onPlayerStateChange(evt) {
    }
    function stop() {
       try{ player.stopVideo(); }catch(e){}
    }
function close_blur(x)
{
	try{ _$('helper').style.display = "none"; } catch(e){}
	_$('blur_close').style.display = "none";
	_$('blur1').style.display = "none";
	_$('vidBox').style.display = "block";
	_$('vidBox2').style.display = "block";
	_$('mili_box').style.display = "none"
	try { _$('myytplayer2').stopVideo() } catch (err) {}
}


}catch(e)
{
console.log("error = " + e);
	var errorDiv = document.createElement("div");
	errorDiv.innerHTML = "You're security settings are too high or you need to update to a modern browser.";
	document.body.appendChild(errorDiv);
}
