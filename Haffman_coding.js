function inMas(elem, mas) {
    for (h = 0; h < mas.length; h++)
        if (elem == mas[h])
            return true;
    return false;
}
function makeAlphabet(str) {
    var alphabet = [];
    for (var i = 0; i < str.length; i++){
        if (!isNaN(alphabet[str.charCodeAt(i)]))
            alphabet[str.charCodeAt(i)]++;
        else
            alphabet[str.charCodeAt(i)] = 1;
    }
    return alphabet;
}
function makeGoodAlphabet(alphabet) {
    var goodAlphabet = [];
    for (var i = 0; i < alphabet.length; i++)
        if (alphabet[i] != undefined){
            goodAlphabet.push(String.fromCharCode(i));
        }
    goodAlphabet.sort();
    return goodAlphabet;
}
function makeLetters(str) {
    var alphabet = makeAlphabet(str);
    var leaves = [];
    for (i = 0; i < alphabet.length; i++)
        if (!isNaN(alphabet[i]))
            leaves.push([alphabet[i], String.fromCharCode(i)]);
    leaves.sort();
    return leaves;
}
function makeTree(leaves){
    while (leaves.length > 1) {
        combo = [leaves[0][0] + leaves[1][0], [leaves[0][1], leaves[1][1]]];
        leaves = leaves.slice(2, leaves.length);
        leaves.push(combo);
        leaves.sort();
    }
    return leaves[0][1];
}
function helpMakeCode(node, tempCode, code) {
    if (typeof(node) == typeof(""))
        code[node] = tempCode;
    else {
        helpMakeCode(node[0], tempCode + '0', code);
        helpMakeCode(node[1], tempCode + '1', code);
    }
}
function makeCode(node, tempCode) {
    var code = {};
    helpMakeCode(node, tempCode, code);
    return code;
}

var str = WSH.StdIn.ReadLine();
var alphabet = makeGoodAlphabet(makeAlphabet(str));
var code = makeCode(makeTree(makeLetters(str)), "");
for (var i = 0; i < alphabet.length; i++)
    WSH.Echo(alphabet[i], ": ", code[alphabet[i]]); 
WSH.Quit();



for (i = 0; i < alphabet.length; i++) {
    if (!isNaN(alphabet[i])){
        leaves.push([alphabet[i], String.fromCharCode(i)]);
    }
}
leaves.sort();
tree = makeTree(leaves);

makeCode(tree, tempCode);
for (i in code)
    WSH.Echo(code["a"]);  