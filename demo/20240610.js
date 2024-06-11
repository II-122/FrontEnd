function bar() {
    console.log('bar');
}

function foo0(arg){
    return arg;
}

const foo1 = function(arg) {
    return arg;
}

function foo2(arg = 1) {
    console.log(arg);
}

function foo3(arg, ...rest) {
    console.log(rest);
}

function foo4(arg) {
    console.log(arguments);
}

const foo5 = new Function("console.log('foo5')");

const foo6 = () => {
    console.log("foo6");
}

function foo7 (arg) {
    console.log(arg);
    if(arg === 7) {
        return;
    }
    foo7(arg + 1);
}

function foo_parent(arg) {
    function foo_child() {
        console.log(arg);
    }
    foo_child();
}

function foo_callback(arg) {
    arg();
}

foo0(bar)();    // bar
foo1(bar)();    // bar
foo2();     // 1
foo3(1);    // []
foo3(1,2,3,4,5);    // [ 2, 3, 4, 5 ]
foo4(1,2,3,4,5);    // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
foo5();     // foo5
foo6();     // foo6
(function foo_temp() {
    console.log('call now');
}).apply();     // call now
foo7(1);    // 1 2 3 4 5 6 7
foo_parent("parent-child");     // parent-child
foo_callback(() => {
    console.log("callback");
});     // callback