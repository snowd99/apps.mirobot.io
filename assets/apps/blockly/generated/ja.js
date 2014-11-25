// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">視覚的なプログラミング環境</span><span id="blocklyMessage">ブロックリー</span><span id="codeTooltip">生成された JavaScript コードを表示します。</span><span id="linkTooltip">ブロックの状態を保存してリンクを取得します。</span><span id="runTooltip">ブロックで作成したプログラムを実行します。</span><span id="runProgram">プログラムを実行</span><span id="resetProgram">リセット</span><span id="dialogOk">OK</span><span id="dialogCancel">キャンセル</span><span id="catLogic">論理</span><span id="catLoops">繰り返し</span><span id="catMath">数学</span><span id="catText">テキスト</span><span id="catLists">リスト</span><span id="catColour">色</span><span id="catVariables">変数</span><span id="catProcedures">関数</span><span id="httpRequestError">ネットワーク接続のエラーです。</span><span id="linkAlert">ブロックの状態をこのリンクで共有できます:\n\n%1</span><span id="hashError">すみません。「%1」という名前のプログラムは保存されていません。</span><span id="xmlError">保存されたファイルを読み込めませんでした。別のバージョンのブロックリーで作成された可能性があります。</span><span id="listVariable">リスト</span><span id="textVariable">テキスト</span></div>';
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
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">指定した長さだけ前または後ろにタートルを動かします。</span><span id="Turtle_moveForward">前に進む</span><span id="Turtle_moveBackward">後ろに進む</span><span id="Turtle_turnTooltip">指定した角度だけタートルを回転させます。</span><span id="Turtle_turnRight">右に回転</span><span id="Turtle_turnLeft">左に回転</span><span id="Turtle_widthTooltip">ペンの太さを変えます。</span><span id="Turtle_setWidth">太さを変える</span><span id="Turtle_colourTooltip">ペンの色を変えます。</span><span id="Turtle_setColour">色を変える</span><span id="Turtle_penTooltip">線を引いたり引くのをやめたりするために、ペンを上げるか下げるかします。</span><span id="Turtle_penUp">ペンを上げる</span><span id="Turtle_penDown">ペンを下ろす</span><span id="Turtle_turtleVisibilityTooltip">タートル (円と矢印) の表示/非表示を切り替えます。</span><span id="Turtle_hideTurtle">タートルを隠す</span><span id="Turtle_showTurtle">タートルを表示する</span><span id="Turtle_printHelpUrl">https://ja.wikipedia.org/wiki/印刷</span><span id="Turtle_printTooltip">タートルの方向と場所を文字として表示します。</span><span id="Turtle_print">表示</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">表示ブロックで使うフォントを設定します。</span><span id="Turtle_font">フォント</span><span id="Turtle_fontSize">フォント サイズ</span><span id="Turtle_fontNormal">標準</span><span id="Turtle_fontBold">太字</span><span id="Turtle_fontItalic">斜体</span><span id="Turtle_unloadWarning">このページから離れると、作った作品が失われます。</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /></svg><!-- Fast icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></svg></td><td style="text-align: right"><button id="simButton" class="primary"><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21"> Simulate Program</button><button id="resetButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"> Reset Simulation</button></td></tr><tr><td><button id="codeButton" title="生成された JavaScript コードを表示します。"><img src=\'/assets/apps/blockly/media/1x1.gif\' class="code icon21">View JS Code</button></td><td style="text-align: right"><button id="runButton" class="primary" title="ブロックに書かれた通りの動きをタートルにさせてください。"><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21">Run on Mirobot</button><button id="stopButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"> Stop Mirobot</button></td></tr></table><p id="lang">Language: <select id="languageMenu"></select></p><script type="text/javascript" src="/assets/apps/blockly/' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/common.js"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/turtle.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="タートル"><block type="draw_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="draw_pen"></block></category><category name="論理"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="繰り返し"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="数学"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="リスト"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><field name="NUM">5</field></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">リスト</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">リスト</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">リスト</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">リスト</field></block></value></block></category><category name="変数" custom="VARIABLE"></category><category name="関数" custom="PROCEDURE"></category></xml>';
};
