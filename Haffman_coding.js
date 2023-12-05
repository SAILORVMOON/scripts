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
function superSort(mas){
    for(var i = 0; i < mas.length; i++) {
        for(var j = 0; j < mas.length - 1; j++){
            if((mas[j][0]) > parseInt(mas[j + 1][0])) {
                var c = mas[j];
                mas[j] = mas[j + 1];
                mas[j + 1] = c;
            }
        }
    }
    return mas;
}
function makeTree(leaves){
    while (leaves.length > 1) {
        leaves = superSort(leaves);
        // WSH.Echo(leaves);
        combo = [leaves[0][0] + leaves[1][0], [leaves[0][1], leaves[1][1]]];
        leaves = leaves.slice(2, leaves.length);
        leaves.push(combo);
        
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
function encode (str, code) {
    encodedStr = "";
    for (var i = 0; i < str.length; i++)
        encodedStr += code[str.charAt(i)];
    return encodedStr;
}
function seeCodes(str) {
    var alphabet = makeGoodAlphabet(makeAlphabet(str));
    var code = makeCode(makeTree(makeLetters(str)), "");
    for (var i = 0; i < alphabet.length; i++)
        WSH.Echo(alphabet[i], ": ", code[alphabet[i]]); 
}
function doAll(str) {
    return encode(str, makeCode(makeTree(makeLetters(str)), ""));
}

var str = WSH.StdIn.ReadLine();
seeCodes(str);
WSH.Echo(doAll(str));