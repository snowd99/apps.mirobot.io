// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">vizuāla programmēšanas vide</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Apskatīt ģenerēto JavaScript pirmkodu.</span><span id="linkTooltip">Saglabāt un piesaistīt blokiem.</span><span id="runTooltip">Palaidiet programmu, ko definē bloki darbvietā.</span><span id="runProgram">Izpildīt programmu</span><span id="resetProgram">Sākt no sākuma</span><span id="dialogOk">Labi</span><span id="dialogCancel">Atcelt</span><span id="catLogic">Loģika</span><span id="catLoops">Cikli</span><span id="catMath">Matemātika</span><span id="catText">Teksts</span><span id="catLists">Saraksti</span><span id="catColour">Krāsa</span><span id="catVariables">Mainīgie</span><span id="catProcedures">Procedūras</span><span id="httpRequestError">Pieprasījuma kļūda.</span><span id="linkAlert">Dalies ar saviem blokiem ar šo saiti:\n\n%1</span><span id="hashError">Atvainojiet, bet \'%1\' neatbilst nevienai no saglabātajām programmām.</span><span id="xmlError">Nevaru ielādēt tavu saglabāto failu.  Iespējams, tas tika izveidots ar citu Blockly versiju?</span><span id="listVariable">saraksts</span><span id="textVariable">teksts</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">Labi</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Pārvieto bruņurupuci uz priekšu vai atpakaļ par norādīto attālumu.</span><span id="Turtle_moveForward">pārvieto uz priekšu par</span><span id="Turtle_moveBackward">pārvieto atpakaļ par</span><span id="Turtle_turnTooltip">Pagriež bruņurupuci pa kreisi vai pa labi par norādīto leņķi, grādos.</span><span id="Turtle_turnRight">pagriezt pa labi par</span><span id="Turtle_turnLeft">pagriezt pa kreisi par</span><span id="Turtle_widthTooltip">Izmaina zīmuļa platumu</span><span id="Turtle_setWidth">iestatīt platumu, uz</span><span id="Turtle_colourTooltip">Maina zīmuļa krāsu.</span><span id="Turtle_setColour">iestatīt krāsu, uz</span><span id="Turtle_penTooltip">Paceļ vai nolaiž zīmuli, lai beigtu vai sāktu zīmēt.</span><span id="Turtle_penUp">pacelt zīmuli</span><span id="Turtle_penDown">nolaist zīmuli</span><span id="Turtle_turtleVisibilityTooltip">Padara bruņurupuci (apli un bultu) redzamu vai neredzamu.</span><span id="Turtle_hideTurtle">paslēpt bruņrupuci</span><span id="Turtle_showTurtle">rādīt bruņrupuci</span><span id="Turtle_printHelpUrl">https://lv.wikipedia.org/wiki/Drukāšāna</span><span id="Turtle_printTooltip">Zīmē tekstu bruņurupuča virzienā no tā atrašanās vietas.</span><span id="Turtle_print">drukāt</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Iestata fontu, ko izmantos drukāšanas bloks.</span><span id="Turtle_font">fonts</span><span id="Turtle_fontSize">fonta lielums</span><span id="Turtle_fontNormal">normāls</span><span id="Turtle_fontBold">treknraksts (bold)</span><span id="Turtle_fontItalic">slīpraksts (italic)</span><span id="Turtle_unloadWarning">Atstājot šo lapu jūsu darbs tiks pazaudēts.</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /></svg><!-- Fast icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></svg></td><td style="text-align: right"><button id="simButton" class="primary"><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21"> Simulate Program</button><button id="resetButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"> Reset Simulation</button></td></tr><tr><td><button id="codeButton" title="Apskatīt ģenerēto JavaScript pirmkodu."><img src=\'/assets/apps/blockly/media/1x1.gif\' class="code icon21">View JS Code</button></td><td style="text-align: right"><button id="runButton" class="primary" title="Liek bruņurupucim darīt to, ko saka bloki."><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21">Run on Mirobot</button><button id="stopButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"> Stop Mirobot</button></td></tr></table><p id="lang">Language: <select id="languageMenu"></select></p><script type="text/javascript" src="/assets/apps/blockly/' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/common.js"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/turtle.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Bruņurupucis"><block type="draw_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="draw_pen"></block></category><category name="Loģika"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Cikli"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Matemātika"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Saraksti"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><field name="NUM">5</field></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">saraksts</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">saraksts</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">saraksts</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">saraksts</field></block></value></block></category><category name="Mainīgie" custom="VARIABLE"></category><category name="Procedūras" custom="PROCEDURE"></category></xml>';
};
