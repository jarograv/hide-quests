// ==UserScript==
// @name     Hide-quests-css
// @include https://*.the-west.*/game.php*
// @grant    GM_addStyle
// Some quests are crap. They take your cake, they take your sword, they block you from getting shiny weapon keys and notes. This script blocks them.
// ==/UserScript==


GM_addStyle('.questlog_entrie#open_quest_2971 { display: none }'); //hide quest that takes your regen cake
GM_addStyle('.questlog_entrie#open_quest_130 { display: none }'); //hide quest that takes your hernandos sword
GM_addStyle('.questlog_entrie#open_quest_64 { display: none }'); //hide maya quest that blocks you from getting note #3 in hernando little things (used for hernandos)
GM_addStyle('.questlog_entrie#open_quest_240 { display: none }'); //hide path #2 of raid that doesnt give key
GM_addStyle('.questlog_entrie#open_quest_152 { display: none }'); //hides path #1 of the decision as path #2 is used for hernando notes
