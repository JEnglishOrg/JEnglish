JEnglish
========

Updated to: jenglish-0.1.js

Changes Include:
	Create commands are require an 'a' or 'an' after the create keyword
	Examples: create a box named george
	          create a verticalBar named vBar1

	The Command Function is no longer: command() but c()
	Better parsing of commands with 'and' in them
	Better parsing of commands with a css-property in the div id
	Fallback to document.body.appendChild() if there is no div with an id of "center" in the HTML page
	Added fade in/out after a certain number of seconds and/or repeating after a certain number of seconds
		Work in progress to get them to all start at the same time, rather than when interpreted
		
	
	

JEnglish is a simple English Programming Language, which allows you to create web pages using just words


Simple Example for jenglish.js:
---------------
See simple.html

Reserved Words:
---------------
NOTE:   Do not use the following words as names of elements, 
            or for any modules you may create

create, generate, presentation, powerpoint, blur, ul, bullet, bulletlist, 
unorderedlist, old, numberlist, orderedList, slideshow, menu, menubar,
navbar, navigationbar, navigationBar, drop-down, dropdown, submenu,
hovermenu, hover-menu, verticalBar, vertBar, vBar, vbar, horizontalBar,
horzBar, hBar, hbar, bar, async, ajax, asynchronously, append-elem, make, 
set, remove, delete, rm, embed, youtube, video, put, insert, append, move,
shift, mymove, prepend, rename, use, using, when
