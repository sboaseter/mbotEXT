
console.log('MLDOMBot 0.1');


var convo = $('[id$=wrapbericht]');
var convoOperator = convo.find(".operatorprofiel");
var convoCustomer = convo.find(".klantprofiel");


console.log('Conversation history: ');
$.each(convoCustomer, function (i, e) {
    console.log('Customer: ', e.innerHTML);
});
$.each(convoOperator, function (i, e) {
    console.log('Operator: ', e.innerHTML);
});
console.log('----------------------');
if (convoOperator.length > 0) {
    console.log('Last Operator: ', convoOperator[0].innerHTML);
    chrome.runtime.sendMessage({ role: 'operator', message: convoOperator[0].innerHTML }, function (response) {
        console.log(response);
    });
}
if (convoCustomer.length > 0) {
    console.log('Last Customer: ', convoCustomer[0].innerHTML);
    chrome.runtime.sendMessage({ role: 'customer', message: convoCustomer[0].innerHTML }, function (response) {
        console.log(response);
    });
}

//console.log('Operator: ');
//console.log('Customer: ');

//$('#btn1').click(function do_something() {
//    alert(5);
//    console.log(1);
//});
//$('#btn2').click(function do_something(){
//    console.log(2);
//});
//$('#btn3').click(function do_something(){
//    console.log(3);
//});


