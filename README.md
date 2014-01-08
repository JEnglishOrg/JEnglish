JENGLISH
========================================================================
JEnglish is a simple English Programming Language, which allows you to create web pages using just words

Recent Updates:
	Base Code now At Version: jenglish-1.0.js


This Version Has the following Commands Pre-Defined:

CREATE
------------------------------------------------------------------------
create a &lt;box|img|style|numberlist|bulletlist|HTML-TAG-NAME&gt; named &lt;NAME&gt;

MAKE
------------------------------------------------------------------------
make &lt;NAME&gt;['s] &lt;CSS-PROPERTY&gt; &lt;CSS-VALUE&gt; [and &lt;CSS-PROPERTY&gt; &lt;CSS-VALUE&gt; ...]

MOVE
------------------------------------------------------------------------
move &lt;NAME&gt; &lt;left|right|up|down&gt; &lt;UNIT-VALUE&gt; [and to the &lt;right|left|up|down&gt; &lt;UNIT-VALUE&gt;]

This is the most flexible just make sure it follows &lt;MOVE-DIR&gt; &lt;UNIT-VALUE&gt;, one after the other.
You may specify: &lt;left&gt; or &lt;right&gt; and/or &lt;up&gt; or &lt;down&gt;

INSERT
------------------------------------------------------------------------
insert &lt;TEXT|HTML&gt; into &lt;NAME&gt;

APPEND
------------------------------------------------------------------------
append &lt;TEXT|HTML&gt; into &lt;NAME&gt;

WHEN
------------------------------------------------------------------------
when &lt;NAME&gt; is &lt;clicked|hovered&gt; ...
clicked:
open &lt;URL&gt; - Opens the &lt;URL&gt; in a New Window
goto &lt;URL&gt; - Opens the &lt;URL&gt; in the Same Window
show &lt;NAME&gt; - Makes &lt;NAME&gt; visible to the user
hide &lt;NAME&gt; - Makes &lt;NAME&gt; invisible to the user
make &lt;CSS-PROPERTY&gt; &lt;CSS-VALUE&gt; [otherwise &lt;CSS-PROPERTY&gt; &lt;CSS-VALUE&gt;]

hovered:
make &lt;CSS-PROPERTY&gt; &lt;CSS-VALUE&gt; [otherwise &lt;CSS-PROPERTY&gt; &lt;CSS-VALUE&gt;]


========================================================================


COMMAND SYNTAX:
------------------------------------------------------------------------
You may enter 1 or more commands per line with or without: "..<SPACE>", at the end of the line.

You MUST enter "..<SPACE>" between commands on the same line however.
