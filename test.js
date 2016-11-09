onvo;
[<div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl02_pnl_wrapbericht" class=​"klantprofiel" style=​"margin-left:​0px;​">​…​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl03_pnl_wrapbericht" class=​"operatorprofiel" style=​"margin-right:​0px;​">​…​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl04_pnl_wrapbericht" class=​"klantprofiel" style=​"margin-left:​0px;​">​…​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl05_pnl_wrapbericht" class=​"operatorprofiel" style=​"margin-right:​0px;​">​…​</div>​]
var convo = $('[id$=wrapbericht, class="operatorprofiel"]');
jquery-1.10.1.min.js:4 Uncaught Error: Syntax error, unrecognized expression: [id$=wrapbericht, class="operatorprofiel"](…)at.error @ jquery-1.10.1.min.js:4bt @ jquery-1.10.1.min.js:4At @ jquery-1.10.1.min.js:4at @ jquery-1.10.1.min.js:4find @ jquery-1.10.1.min.js:5init @ jquery-1.10.1.min.js:4e.fn.init @ jquery-migrate-1.2.1.min.js:2x @ jquery-1.10.1.min.js:4(anonymous function) @ VM3266:1
var convo = $('[id$=wrapbericht, .operatorprofiel]');
jquery-1.10.1.min.js:4 Uncaught Error: Syntax error, unrecognized expression: [id$=wrapbericht, .operatorprofiel](…)at.error @ jquery-1.10.1.min.js:4bt @ jquery-1.10.1.min.js:4At @ jquery-1.10.1.min.js:4at @ jquery-1.10.1.min.js:4find @ jquery-1.10.1.min.js:5init @ jquery-1.10.1.min.js:4e.fn.init @ jquery-migrate-1.2.1.min.js:2x @ jquery-1.10.1.min.js:4(anonymous function) @ VM3277:1
var convo = $('[id$=wrapbericht], .operatorprofiel');
undefined
convo;
[<td width=​"25%" valign=​"top" class=​"operatorprofiel">​…​</td>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl02_pnl_wrapbericht" class=​"klantprofiel" style=​"margin-left:​0px;​">​…​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl03_wrapper" style=​"width:​ 100%;​ margin-top:​3px;​" class=​"operatorprofiel">​…​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl03_pnl_wrapbericht" class=​"operatorprofiel" style=​"margin-right:​0px;​">​…​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl03_tekst" style=​"font-size:​ 13px;​ overflow-y:​ visible;​ overflow-x:​ " class=​"operatorprofiel">​…​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl03_op_naam" style=​"text-align:​center;​ vertical-align:​bottom;​ height:​ 15px;​ width:​ 100%;​" class=​"operatorprofiel">​zl_850(3)​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl04_pnl_wrapbericht" class=​"klantprofiel" style=​"margin-left:​0px;​">​…​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl05_wrapper" style=​"width:​ 100%;​ margin-top:​3px;​" class=​"operatorprofiel">​…​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl05_pnl_wrapbericht" class=​"operatorprofiel" style=​"margin-right:​0px;​">​…​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl05_tekst" style=​"font-size:​ 13px;​ overflow-y:​ visible;​ overflow-x:​ " class=​"operatorprofiel">​…​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl05_op_naam" style=​"text-align:​center;​ vertical-align:​bottom;​ height:​ 15px;​ width:​ 100%;​" class=​"operatorprofiel">​onbekend(1)​</div>​]
var convo = $('[id$=wrapbericht] > .operatorprofiel');
undefined
convo;
[]
var convo = $('[id$=wrapbericht]');
var convoOperator = convo.find(".operatorprofiel");
var convoCustomer = convo.find(".klantprofiel");

console.log('Operator: ');
console.log(convoOperator);
console.log('Customer: ');
console.log(convoCustomer);

undefined
convo.find(".operatorprofiel");
[<div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl03_tekst" style=​"font-size:​ 13px;​ overflow-y:​ visible;​ overflow-x:​ " class=​"operatorprofiel">​…​</div>​, <div id=​"ctl00_Pagina_CorrespondentieOverzicht_gv_correspondentie_ctl05_tekst" style=​"font-size:​ 13px;​ overflow-y:​ visible;​ overflow-x:​ " class=​"operatorprofiel">​…​</div>​]