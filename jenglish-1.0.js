/*
Copyright © 2014 Arnouse Digital Device Corp. 
Licensed under the Creative Commons Attribution-NonCommercial 4.0 International Public License (“Public License”); you may not use this file except in compliance with the Public License. You may obtain a copy of the Public License at
http://creativecommons.org/licenses/by-nc/4.0/legalcode
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
var debug = true;
var warnings = true;
function log(x)
{
	try {
		if( debug === true )
		{
			console.log("JEnglish: " + x);
		}
	}catch(e){ }
}
function warn(x)
{
	try {
		if( warnings === true )
		{
			console.log("JEnglish Warning: " + x);
		}
	}catch(e){ }
}
var imageCount = 0; // counts how many images we have to load up.
var imageClickHandlers = []; // holds image ids, and their click handlers

function applyImageClickHandlers()
{
	var next;
	for( var ii = 0; ii < imageClickHandlers.length; ++ii )
	{
		next = imageClickHandlers[ii];
		$_(next.id).onclick = next.func;
	}
}


var c = {
	'create_params': "3",
	'create_order': "2,4,5*",
	'create_exts': [],
	'create': function(x,y,z){
				y = y.toLowerCase();
				var domElem = $_(y);
				
				var insertId = "body";
				if( z !== undefined && z !== null )
				{
					var zSplit = z.trim().split(" ");
					if( zSplit.length <= 0 )
					{
						log("ERROR: Create - Unknown box to insert box |"+x+"| into");
						return;
					}
					insertId = zSplit[zSplit.length-1].toLowerCase();
				}
				
				// Main
				switch(x.toLowerCase())
				{
					case "blur":
						var b = create_blur(y);
						if(b === undefined || b == null )
						{
							return false;
						}
						if( insertId === "body" )
						{
							document.body.appendChild(b);
						}
						else
						{
							$_(insertId).appendChild(b);
						}
						break;
						
					case "box":
					case "div":
						var d = create_elem_id("div", y);
						if( d === undefined || d == null )
						{
							return false;
						}
						if( insertId === "body" )
						{
							document.body.appendChild(d);
						}
						else
						{
							$_(insertId).appendChild(d);
						}
						break;
						
					case "class":	
					case "style":
						var s = create_style(y);
						if( s === undefined || s == null )
						{
							return false;
						}
						document.getElementsByTagName('head')[0].appendChild(s);
						break;
						
					case "hr":
					case "hrule":
					case "horzrule":
					case "horizontalrule":
					case "horizontal":
						var h = create_hrule(y);
						if( h === undefined || h == null )
						{
							return false;
						}
						if( insertId === "body" )
						{
							document.body.appendChild(h);
						}
						else
						{
							$_(insertId).appendChild(h);
						}
						break;
					case "link":
					case "hyperlink":
					case "a":
						var a = create_elem_id("a", y);
						if( a === undefined || a == null )
						{
							return false;
						}
						if( insertId === "body" )
						{
							document.body.appendChild(a);
						}
						else
						{
							$_(insertId).appendChild(a);
						}
						break;
					case "img":
					case "image":
						
						var i = create_elem_id("img", y);
						if( i === undefined || i == null )
						{
							return false;
						}
						imageCount++;
						i.onload = function() {
							imageCount--;
							if( imageCount == 0 )
							{
								applyImageClickHandlers();
							}
						};

						if( insertId === "body" )
						{
							document.body.appendChild(i);
						}
						else
						{
							$_(insertId).appendChild(i);
						}
						break;
					case "ol":
					case "orderedlist":
					case "orderlist":
					case "numberlist":
						var o = create_list("ol",y,z);
						if( o === undefined || o == null )
						{
							return false;
						}
						if( insertId === "body" )
						{
							document.body.appendChild(o);
						}
						else
						{
							$_(insertId).appendChild(o);
						}
						break;

					case "span":
						var s = create_elem_id("span", y);
						if( s === undefined || s == null )
						{
							return false;
						}
						if( insertId === "body" )
						{
							document.body.appendChild(s);
						}
						else
						{
							$_(insertId).appendChild(s);
						}
						break;
						
					case "ul":
					case "unorderedlist":
					case "unorderlist":
					case "bulletlist":
						var u = create_list("ul",y,z);
						if( u === undefined || u == null )
						{
							return false;
						}
						if( insertId === "body" )
						{
							document.body.appendChild(u);
						}
						else
						{
							$_(insertId).appendChild(u);
						}
						break;
					case "template":
						// Switch to the actual HTML5 template tag when fully implemented and supported across all/most browsers
						var b = create_elem_id("template", y);
						if( insertId === "body" )
						{
							document.body.appendChild(b);
						}
						else
						{
							$_(insertId).appendChild(b);
						}
						break;
						
					case "textarea":
						var t = create_elem('textarea');
						t.id = y;
						if( insertId === "body" )
						{
							document.body.appendChild(t);
						}
						else
						{
							$_(insertId).appendChild(t);
						}
						break;
						
					case "vr":
					case "vrule":
					case "vertrule":
					case "verticalrule":
					case "vertical":
						var v = create_vrule(y);
						if( v === undefined || v == null )
						{
							return false;
						}
						if( insertId === "body" )
						{
							document.body.appendChild(v);
						}
						else
						{
							$_(insertId).appendChild(v);
						}
						break;
					
					default:
						try{
							var v = create_elem_id(x.toLowerCase(), y);
							if( v === undefined || v == null )
							{
								return false;
							}
							if( insertId === "body" )
							{
								document.body.appendChild(v);
							}
							else
							{
								$_(insertId).appendChild(v);
							}
						}catch(e){
							return false;
						}						
				}
				
				// Helper Functions
				function create_style(a)
				{
					var style = create_elem('style');
					if( style == null || style === undefined )
					{
						return null;
					}
					style.type = "text/css";
					style.id = a;
					style.innerHTML = "."+a+"{}";
					return style;
				}
				
				function create_blur(a)
				{
					var z = create_elem_id("div", a );
					z.style.position = "fixed";
					z.style.top = "0px";
					z.style.left = "0px";
					z.style.width  = "100%";
					z.style.height = "100%";
					z.style.backgroundColor = "rgba(0,0,0, 0.95)";
					
					var close = create_elem("img", a+"_close");
					close.style.position = "absolute";
					close.style.top = "25px";
					close.style.left = "100%";
					close.style.marginLeft = "-75px";
					close.style.cursor = "pointer";
					close.onclick = function() 
					{
						this.style.display = "none";
						try
						{
							fade( this.parentNode.id, 100, 0, 2 );
						}
						catch(e)
						{
							this.parentNode.style.display = "none";
						}
					};
					// Change these to change the 
					close.src = "http://jenglish.org/images/close_button.png";
					close.style.width = "50px";
					close.style.height = "50px";
					
					z.appendChild(close);
					return z;
				}
				function create_hrule(a)
				{
					var x = create_elem_id("span", a);
					if( x === undefined || x == null )
					{
						log("Cannot create horizontal rule");
						return null;
					}
					x.style.position = "absolute";
					x.style.top = "0px";
					x.style.width = "100%";
					x.style.height = "3px";
					x.style.backgroundColor = "black";
					
					return x;
				}
				function create_vrule(a)
				{
					var x = create_elem_id("span", a);
					if( x === undefined || x == null )
					{
						log("Cannot create vertical rule");
						return null;
					}
					x.style.position = "absolute";
					x.style.top = "0px";
					x.style.height = "100%";
					x.style.width = "3px";
					x.style.backgroundColor = "black";

					return x;
				}
				
				function create_list(a,b,c)
				{
					var elem = create_elem_id(a,b);
					if( elem === undefined || elem == null )
					{
						log("Error creating element with id, "+a+" with id = "+b+" is null");
						return null;
					}
					elem.style.position = "absolute";
					elem.style.top = "0px";
					
					var titles = c.split('~');
					if( titles.length == 0 )
					{
						log("Parsing UL titles, count = 0");
						return;
					}
					for( var ii = 0; ii < titles.length; ++ii )
					{
						if( titles[ii].trim() === '' )
						{
							continue;
						}
						var li = create_elem("li");
						if( li === undefined || li == null )
						{
							log("Error creating element, li is null");
							return null;
						}
						li.innerHTML = titles[ii].trim();
						elem.appendChild(li);
					}
					return elem;
				}
			},

	make_params: "2",
	make_order: "1,2*",
	make_exts: [],
	make: 	function(x,y){ 
				x = x.toLowerCase();
				if( x.indexOf("'s") != -1 || x.indexOf("'S") != -1 )
				{
					x = x.substring( 0, x.length-2);
				}
				var box = $_(x);
				if( x == "body" )
				{
					box = document.body;
				}
				
				if( box === undefined || box == null )
				{	
					log("Object named |"+x+"| was NOT found!");
					return false;
				}

				if( y.indexOf(" and " ) != -1 )
				{
					// we have multiple commands
					var andSplit = y.split(" and ");
					for( var aa = 0; aa < andSplit.length; ++aa )
					{
						var spaceSplit = andSplit[aa].trim().split(" ");
						if( spaceSplit.length < 2 )
						{
							log("ERROR: Make - not enough parameters, need at least 1 css property and 1 css value");
							return false;
						}
						else if( spaceSplit.length == 2 )
						{
							setCssProperty( box, spaceSplit[0], spaceSplit[1]);
						}
						else
						{
							var cssVal = '';
							for( var bb = 1; bb < spaceSplit.length; ++bb )
							{
								cssVal += spaceSplit[bb] + " ";
							}
							cssVal = cssVal.trim();
							setCssProperty( box, spaceSplit[0], cssVal);
						}
					}
				}
				else
				{
					var spaceSplit = y.trim().split(" ");
					if( spaceSplit.length < 2 )
					{
						log("ERROR: Make - not enough parameters, need at least 1 css property and 1 css value");
						return false;
					} 
					else if( spaceSplit.length > 2 )
					{
						var cssVals = '';
						for( var ii = 1; ii < spaceSplit.length; ++ii )
						{
							cssVals += spaceSplit[ii] + ' ';
						}
						cssVals = cssVals.trim();
						setCssProperty( box, spaceSplit[0], cssVals);
					}
					else
					{
						setCssProperty( box, spaceSplit[0], spaceSplit[1]);
					}
				}
				
				function setCssProperty( box, cssProp, cssVal )
				{
					cssProp = cssProp.toLowerCase();
					if( box.tagName.toLowerCase() == "style" )
					{
						if( cssProp.indexOf(':') != -1 )
						{
							var style = box.innerHTML;
							style += ' .' + box.id + cssProp + "{" + cssVal + "}" ;
							box.innerHTML = style;
						}
						else
						{
							var style = box.innerHTML;
							// chop off the ending curly bracket
							var style = style.substring(0,style.length-1);
							// append our new css rule
							style += cssProp + ":" + cssVal + ";}";
							// put it back in the style
							box.innerHTML = style;
						}
					}
					else
					{
						// I think I had a special check in this one to see if it was a className and to handle that properly. maybe just also have style->className
						if( cssProp == "classname" )
						{
							box.className = cssVal;
						}
						else
						{
							if( box[cssProp] === undefined || box[cssProp] == null )
							{
								var com_res = cssProp+":"+cssVal; 
								box.style.cssText = box.style.cssText+";"+com_res; 
							}
							else
							{
								box[cssProp] = cssVal;
							}
						}
					}
				}
			},
	insert_params: "1",
	insert_order: "1*",
	insert_exts: [],
	insert: function(x)
			{
				var xSplit = x.trim().split(" ");
				if( xSplit.length <= 0 )
				{
					log("ERROR: Insert - Nothing to insert");
					return false;
				}
				var boxName = xSplit[xSplit.length-1].toLowerCase();
				var box = $_(boxName);
				if( box === undefined || box === null )
				{
					log("ERROR: Insert - Box |"+boxName+"| to insert into Does NOT Exist. Please create the box first.");
					return false;
				}
				
				var insertStr = '';
				for( var aa = 0; aa < xSplit.length-2; ++aa )
				{
					insertStr += xSplit[aa] + " ";
				}
				insertStr = insertStr.trim();
				box.innerHTML = insertStr;
			},

	append_params: "1",
	append_order: "1*",
	append_exts: [],
	append: function(x)
			{
				var xSplit = x.split(" ");
				if( xSplit.length <= 0 )
				{
					log("ERROR: Append - Nothing to append");
					return false;
				}
				var boxName = xSplit[xSplit.length-1].toLowerCase();
				var box = $_(boxName);
				if( box === undefined || box === null )
				{
					log("ERROR: Append - Box to append to Does NOT Exist. Please create the box first.");
					return false;
				}
				var appendStr = '';
				for( var aa = 0; aa < xSplit.length-2; ++aa )
				{
					appendStr += xSplit[aa] + " ";
				}
				appendStr = appendStr.substring(0,appendStr.length-1);
				box.innerHTML += appendStr;
			},
	
	move_params: "2",
	move_order: "1,2*",
	move_exts: [],
	move: function(x,y) {
		x = x.toLowerCase();
		var elem = $_(x);
		if( elem === undefined || elem == null )
		{
			log("ERROR: Move - A Box named |"+x+"| does not exist.  Please create this element before moving it.");
			return false;
		}
		else if( elem.tagName.toLowerCase() == "style" )
		{
			log("ERROR: Move - You cannot move a style element. Only boxes can be moved");
			return false;
		}
		var splitY = y.split(" ");
		var leftIdx = -1;
		var rightIdx = -1;
		var upIdx = -1;
		var downIdx = -1;
		for( var xx = 0; xx < splitY.length; ++xx )
		{
			var word = splitY[xx].toLowerCase();
			if( word == "left" )
			{
				leftIdx = xx;
			}
			else if( word == "right" )
			{
				rightIdx = xx;
			}
			else if( word == "up" )
			{
				upIdx = xx;
			}
			else if( word == "down" )
			{
				downIdx = xx;
			}
		}
		if( rightIdx != -1 && leftIdx != -1 )
		{
			log("ERROR: Move - You can only specify LEFT or RIGHT, but NOT both");
			return false;
		}
		if( upIdx != -1 && downIdx != -1 )
		{
			log("ERROR: Move - You can only specify UP or DOWN, but NOT both");
			return false;
		}
		if( upIdx == -1 && downIdx == -1 && leftIdx == -1 && rightIdx == -1 )
		{
			log("ERROR: Move - You MUST specify at least one of the following: left, right, up, down");
			return false;
		}

		var leftDist = -1;
		var rightDist = -1;
		var upDist = -1;
		var downDist = -1;
		if( leftIdx != -1 )
		{
			if( leftIdx+1 >= splitY.length )
			{
				log("ERROR: Move - No LEFT distance specified");
				return false;
			}
			else
			{
				leftDist = splitY[leftIdx+1];
				if( ! isLegitDistance( leftDist ) )
				{
					log("ERROR: Move - LEFT Distance is invalid");
					return false;
				}
			}
		}
		else if( rightIdx != -1 )
		{
			if( rightIdx+1 >= splitY.length )
			{
				log("ERROR: Move - No RIGHT distance specified");
				return false;
			}
			else
			{
				rightDist = splitY[rightIdx+1];
				if( ! isLegitDistance( rightDist ) )
				{
					log("ERROR: Move - RIGHT Distance is invalid");
					return false;
				}
			}
		}
		
		if( upIdx != -1 )
		{
			if( upIdx+1 >= splitY.length )
			{
				log("ERROR: Move - No UP distance specified");
				return false;
			}
			else
			{
				upDist = splitY[upIdx+1];
				if( ! isLegitDistance( upDist ) )
				{
					log("ERROR: Move - UP Distance is invalid");
					return false;
				}
			}
		}
		else if( downIdx != -1 )
		{
			if( downIdx+1 >= splitY.length )
			{
				log("ERROR: Move - No DOWN distance specified");
				return false;
			}
			else
			{
				downDist = splitY[downIdx+1];
				if( ! isLegitDistance( downDist ) )
				{
					log("ERROR: Move - DOWN Distance is invalid");
					return false;
				}
			}
		}

		var lrDist = "-1";
		var udDist = "-1";
		
		if( leftDist != -1 )
		{
			leftDist = '-' + leftDist;
			lrDist = leftDist;
		}
		else if( rightDist != -1 )
		{
			lrDist = rightDist;
		}
		
		if( upDist != -1 )
		{
			upDist = '-' + upDist;
			udDist = upDist;
		}
		else if( downDist != -1 )
		{
			udDist = downDist;
		}
		
		// Move the Box(x) with the Specified Parameters(lrDist, udDist)
		moveBox(x, lrDist, udDist );
		
		function moveBox(boxName, destX, destY) {
			var box = $_(boxName);
			if( box === undefined || box == null )
			{
				log("ERROR: Move - Could not find the box named |"+boxName+"|");
				return;
			}
		
			var top = box.offsetTop;
			var left = box.offsetLeft;
			if( destX.indexOf('%') != -1 )
			{
				destX = box.parentNode.offsetWidth * (parseInt(destX) / 100 );
			}
			if( destY.indexOf('%') != -1 )
			{
				destY = box.parentNode.offsetHeight * ( parseInt(destY) / 100 );
			}
			top  = top + parseInt(destY);
			left = left + parseInt(destX);
			box.style.top  = top + "px";
			box.style.left = left + "px";
		}
		
		function getPos(obj) {
			var objStyle = $_(obj).style;
			var x = objStyle.top;
			if( objStyle.top.indexOf("%") != -1 )
			{
				x = $_(obj).offsetTop;
			}
			else if( objectStyle.top.indexOf("px") != -1 )
			{
				x = objStyle.top.replace("px", "");
			}
			var y = objStyle.left;
			if( objStyle.left.indexOf("%") != -1 )
			{
				y = $_(obj).offsetLeft;
			}
			else if( objectStyle.left.indexOf("px") != -1 )
			{
				y = objStyle.left.replace("px", "");
			}
			return [x,y]
		}
		
		
		function isLegitDistance(dist)
		{
			if( parseInt(dist) === "NaN" )
			{
				return false;
			}
			return true;
		}
	},
	when_params:"2",
	when_order:"1,2*",
	when_exts: [],
	when:	function(x,y) {
		try{
			x = x.toLowerCase();
			if( x.indexOf("'s") != -1 )
			{
				x = x.substring(0,x.length-2);
			}
			var box = $_(x);
		}catch(e)
		{
			log("ERROR: When - The Box |"+x+"| was not found. Please create the box first.");
			return false;
		}
		
		var splitY = y.split(' ');
		if( splitY.length < 4 )
		{
			log("ERROR: When - Command not long enough.  Please specify a sub-command(clicked/hovered) and action(web site/style)");
			return false;
		}
		var subCmd = splitY[1].toLowerCase();
		var subCmdAction = splitY[2].toLowerCase();
		
		var param = '';
		for( var ii = 3; ii < splitY.length; ++ii )
		{
			param += splitY[ii] + " ";
		}
		param = param.trim();
		switch( subCmd )
		{
			case "clicked":
				switch( subCmdAction )
				{
					case "open":
						box.style.cursor = "pointer";
						if( box.tagName.toUpperCase() == "IMG")
						{
							if( imageCount == 0 )
							{
								box.onclick = function()
								{
									window.open(param);
								};
							}
							else
							{
								imageClickHandlers.push( { id: box.id, func: function() { window.open(param); } } );
							}
						}
						else
						{
							box.onclick = function()
							{
								window.open(param);
							};
						}						
						break;
					case "goto":
						box.style.cursor = "pointer";
						if( box.tagName.toUpperCase() == "IMG")
						{
							if( imageCount == 0 )
							{
								box.onclick = function()
								{
									window.location.assign(param);
								};
							}
							else
							{
								imageClickHandlers.push( { id: box.id, func: function() {window.location.assign(param); } } );
							}
						}
						else
						{
							box.onclick = function()
							{
								window.location.assign(param);
							};
						}
						break;
					case "show":
						box.style.cursor = "pointer";
						box.onclick = function()
						{
							$_(param).style.display = "block";
						};
						break;
					case "hide":
						box.style.cursor = "pointer";
						box.onclick = function()
						{
							$_(param).style.display = "none";
						};
						break;
					default:
						log("ERROR: When - Unknown sub command action = |"+subCmdAction+"|");
						return false;
				}
				break;
			case "hovered":
				switch( subCmdAction )
				{
					case "make":
						if( param.indexOf(" otherwise ") == -1 )
						{
							box.onmouseover = function() {
								c['make'](x, param);
							};
						}
						else
						{
							var mouseParts = param.split(" otherwise ");
							if( mouseParts.length != 2 )
							{
								log("ERROR: When - Please include both a hovered and otherwise (non-hovered) action");
								return false;
							}
							var mouseOver = mouseParts[0];
							var mouseOut = mouseParts[1];
							if( mouseOut.indexOf("make ") != -1 )
							{
								mouseOut = mouseOut.substring( 5 );
							}
							box.onmouseover = function() {
								c['make'](x, mouseOver);
							};
							box.onmouseout = function() {
								c['make'](x, mouseOut);
							};
						}
						break;
					default:
						log("ERROR: When - Unknown sub command action = |"+subCmdAction+"|");
						return false;
				}
				break;
			default:
				log("ERROR: When - Unkown sub command action = |"+subCmd+"|");
				return false;
		}
		
	}
};

// Global Helper Functions
// =========================
function create_elem(a)
{
	return document.createElement(a);
}
function create_elem_id(a,b)
{
	b = b.trim().toLowerCase();
	if(  ! isValidId(b) ) 
	{
		log("Invalid ID: " + b + ". IDs must start with a letter, and can only contains upper and lower-case letters, digits, underscore, colon, or a period");
		return null;
	}
	var z = document.createElement(a);
	if( z === undefined || z == null )
	{
		log("Unknown Element named: " + a);
		return null;
	}
	z.id = b;
	return z;
}
function $_(x)
{
	return document.getElementById(x);
}
function isValidId(x)
{
	return /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(x);
}
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
// =========================


// Main workhorse -- creates our function calls with the correct parameters using the array: c
function cmd(cmd)
{
	if( cmd == null || cmd === undefined )
	{
		log("ERROR: Cmd - No command given");
		return;
	}
	if( cmd.length == 0 )
	{
		return;
	}
	
	if( cmd.indexOf('.. ') != -1 )
	{
		var cmds = cmd.split(".. ");
		for( var ii = 0; ii < cmds.length; ++ii )
		{
			if( cmds[ii].length > 0 )
			{
				
				if( cmds[ii].substring( cmds[ii].length - 2 ) == "..")
				{
					cmds[ii] = cmds[ii].substring( 0, cmds[ii].length -2);
				}
				i(cmds[ii]);
			}
		}
	}
	else 
	{
		if( cmd.substring( cmd.length - 2 ) == "..")
		{
			cmd = cmd.substring( 0, cmd.length -2);
		}
		i(cmd);
	}
}


function i(cmd)
{
	try {
		var cmdArr = cmd.split(" ");
		cmdArr[0] = cmdArr[0].toLowerCase().trim();
		
		if( cmdArr == null || cmdArr === undefined || cmdArr.length <= 0 )
		{
			log("ERROR: Cmd - Unable to split up the command");
			return;
		}
		var paramCt = c[cmdArr[0] +'_params'];
		if( paramCt == null || paramCt === undefined )
		{
			log("ERROR: Cmd - No parameter count given for command = " + cmdArr[0]);
			return;
		}
		// If there are a variable number of parameters
		var paramOrder = c[cmdArr[0]+'_order'];
		if( paramOrder == null || paramOrder === undefined )
		{
			log("ERROR: Cmd - No parameter order given for command");
			return;
		}
		var cmdParamIdx = paramOrder.split(',');
		if( cmdParamIdx == null || cmdParamIdx === undefined )
		{
			log("ERROR: Cmd - Unable to split parameter indexes for command");
			return;
		}
		if( paramCt > cmdParamIdx.length )
		{
			log("ERROR: Cmd - Parameter count is greater than the number of parameter indexes you passed in");
			return;
		}
		// Get the last one, to check if it has a star on it or not
		var lastParam = cmdParamIdx[paramCt-1];
		if( lastParam == null || lastParam == undefined )
		{
			log("ERROR: Cmd - Unable to parse the final/last parameter index");
			return;
		}
		if( lastParam.endsWith('*') )
		{
			lastParam = lastParam.substring(0,lastParam.length-1);
		}
		// Check that this function fits, by comparing the length to that last parameter
		if( cmdArr.length > lastParam )
		{
			var tmp = cmdArr;
			// Get the End of the Array as an Array
			var finalParam = tmp.slice(lastParam, cmdArr.length);
			// Cut off the End of the Array we took above
			tmp.splice( lastParam, cmdArr.length-lastParam );
			// Push the End of the Array we took above to the last Element of the original Array: ['create','a','box','named','rob'] ==> ['create','a', "box,named,rob"] ], 
			var str = "";
			for( var yy = 0; yy < finalParam.length; ++yy )
			{
				str += finalParam[yy] + " ";
			}
			str = str.substring(0,str.length-1);
			tmp.push( str );
			cmdArr = tmp;
		}
		var func = "c[ '" + cmdArr[0] + "' ]( ";
		var params = '';
		for( var ii = 0; ii < paramCt; ++ii )
		{
			var paramIdx = cmdParamIdx[ii];
			if( paramIdx.endsWith('+') || paramIdx.endsWith('*'))
			{
				paramIdx = paramIdx.substring(0,paramIdx.length-1);
			}
			
			params += "cmdArr[ " + paramIdx + " ]";
			
			if( paramCt > 1 && ii <  paramCt-1 )
			{
				params += ', ';
			}
		}
		func += params + " );";
		eval( func );
		
		// Run the Extensions of the Base Commands
		if( c[cmdArr[0]+'_exts'] == undefined || c[cmdArr[0]+'_exts'] == '' )
		{
			return;
		}
		else if( ! (c[cmdArr[0]+'_exts'] instanceof Array) )
		{
			log("I: Extension of an Object should define an Array, even if there is only 1 variable");
			return;
		}
		
		if( c[cmdArr[0]+'_exts'] instanceof Array )
		{
			if( c[cmdArr[0]+'_exts'].length > 0 )
			{
				for( var ii = 0; ii < c[cmdArr[0]+'_exts'].length; ++ii )
				{
					func = 'c["'+cmdArr[0]+'_exts"]['+ii+']('+params+');';
					try{
						eval(func);
					}catch(e)
					{
						log("I: ERROR: Cannot run Extension for command = |"+cmdArr[0]+"| : " + e);
					}
				}
			}
		}
	}
	catch(e)
	{
		log("ERROR: Cmd - interpreting: |" + cmd + "| for reason = " + e );
	}
}