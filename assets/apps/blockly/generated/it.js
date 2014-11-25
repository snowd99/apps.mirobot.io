// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">un ambiente di programmazione grafico</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Vedi il codice JavaScript generato.</span><span id="linkTooltip">Salva e collega ai blocchi.</span><span id="runTooltip">Esegui il programma definito dai blocchi nell\'area di lavoro.</span><span id="runProgram">Esegui programma</span><span id="resetProgram">Reimposta</span><span id="dialogOk">OK</span><span id="dialogCancel">Annulla</span><span id="catLogic">Logica</span><span id="catLoops">Cicli</span><span id="catMath">Matematica</span><span id="catText">Testo</span><span id="catLists">Elenchi</span><span id="catColour">Colore</span><span id="catVariables">Variabili</span><span id="catProcedures">Funzioni</span><span id="httpRequestError">La richiesta non è stata soddisfatta.</span><span id="linkAlert">Condividi i tuoi blocchi con questo collegamento:\n\n%1</span><span id="hashError">Mi spiace, \'%1\' non corrisponde ad alcun programma salvato.</span><span id="xmlError">Non è stato possibile caricare il documento.  Forse è stato creato con una versione diversa di Blockly?</span><span id="listVariable">elenco</span><span id="textVariable">testo</span></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Muove avanti e indietro la tartaruga secondo quanto specificato.</span><span id="Turtle_moveForward">sposta in avanti di</span><span id="Turtle_moveBackward">sposta indietro di</span><span id="Turtle_turnTooltip">Gira la tartaruga a destra o a sinistra, secondo l\'angolazione suggerita.</span><span id="Turtle_turnRight">gira a destra di</span><span id="Turtle_turnLeft">gira a sinistra di</span><span id="Turtle_widthTooltip">Cambia la larghezza della penna.</span><span id="Turtle_setWidth">imposta la larghezza a</span><span id="Turtle_colourTooltip">Cambia il colore della penna.</span><span id="Turtle_setColour">imposta colore a</span><span id="Turtle_penTooltip">Alza o abbassa la penna, per iniziare a disegnare o fermarti.</span><span id="Turtle_penUp">penna sù</span><span id="Turtle_penDown">penna giù</span><span id="Turtle_turtleVisibilityTooltip">Rende la tartaruga (cerchio con la freccia), visibile o invisibile.</span><span id="Turtle_hideTurtle">nascondi tartaruga</span><span id="Turtle_showTurtle">mostra tartaruga</span><span id="Turtle_printHelpUrl">https://it.wikipedia.org/wiki/Stampa</span><span id="Turtle_printTooltip">disegna il testo nella direzione e alla posizione della tartaruga.</span><span id="Turtle_print">stampa</span><span id="Turtle_fontHelpUrl">https://it.wikipedia.org/wiki/Tipo_di_carattere</span><span id="Turtle_fontTooltip">Imposta il tipo di carattere utilizzato dal blocco di stampa.</span><span id="Turtle_font">tipo di carattere</span><span id="Turtle_fontSize">dimensione carattere</span><span id="Turtle_fontNormal">normale</span><span id="Turtle_fontBold">grassetto</span><span id="Turtle_fontItalic">corsivo</span><span id="Turtle_unloadWarning">Lasciando questa pagina perderai il lavoro svolto.</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /></svg><!-- Fast icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></svg></td><td style="text-align: right"><button id="simButton" class="primary"><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21"> Simulate Program</button><button id="resetButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"> Reset Simulation</button></td></tr><tr><td><button id="codeButton" title="Vedi il codice JavaScript generato."><img src=\'/assets/apps/blockly/media/1x1.gif\' class="code icon21">View JS Code</button></td><td style="text-align: right"><button id="runButton" class="primary" title="Fai fare alla tartaruga ciò che il blocco dice."><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21">Run on Mirobot</button><button id="stopButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"> Stop Mirobot</button></td></tr></table><p id="lang">Language: <select id="languageMenu"></select></p><script type="text/javascript" src="/assets/apps/blockly/' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/common.js"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/turtle.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Tartaruga"><block type="draw_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="draw_pen"></block></category><category name="Logica"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Cicli"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Matematica"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Elenchi"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><field name="NUM">5</field></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">elenco</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">elenco</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">elenco</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">elenco</field></block></value></block></category><category name="Variabili" custom="VARIABLE"></category><category name="Funzioni" custom="PROCEDURE"></category></xml>';
};
