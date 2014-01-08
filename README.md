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
make <NAME>['s] <CSS-PROPERTY> <CSS-VALUE> [and <CSS-PROPERTY> <CSS-VALUE> ...]

MOVE
------------------------------------------------------------------------
move <NAME> <left|right|up|down> <UNIT-VALUE> [and to the <right|left|up|down> <UNIT-VALUE>]

This is the most flexible just make sure it follows <MOVE-DIR> <UNIT-VALUE>, one after the other.
You may specify: <left> or <right> and/or <up> or <down>

INSERT
------------------------------------------------------------------------
insert <TEXT|HTML> into <NAME>

APPEND
------------------------------------------------------------------------
append <TEXT|HTML> into <NAME>

WHEN
------------------------------------------------------------------------
when <NAME> is <clicked|hovered> ...
clicked:
open <URL> - Opens the <URL> in a New Window
goto <URL> - Opens the <URL> in the Same Window
show <NAME> - Makes <NAME> visible to the user
hide <NAME> - Makes <NAME> invisible to the user

hovered:
make <CSS-PROPERTY> <CSS-VALUE> [otherwise <CSS-PROPERTY> <CSS-VALUE>]


========================================================================


COMMAND SYNTAX:
------------------------------------------------------------------------
You may enter 1 or more commands per line with or without: "..<SPACE>", at the end of the line.

You MUST enter "..<SPACE>" between commands on the same line however.
