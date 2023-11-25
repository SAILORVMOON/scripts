function inMas(elem, mas) {
    for (h = 0; h < mas.length; h++)
        if (elem == mas[h])
            return true;
    return false;
}
function getInMasPos(elem, mas) {
    for (var h = 0; h < mas.length; h++)
        if (elem == mas[h])
            return h;
}
function makeAlphabet(str) {
    var alphabet = [];
    for (var i = 0; i < str.length; i++)
        if (!inMas(str.charAt(i), alphabet))
            alphabet.push(str.charAt(i));
    alphabet.sort;
    return alphabet;
}
function getAllStates(str) {
    var states = [];
    for (var i = 0; i < str.length + 1; i++)
        states.push(str.slice(0, i));
    return states;
}
function makeMoveTable(str, alphabet) {
    var moveTable = [];
    var states = getAllStates(str);
    for (var j = 0; j < str.length + 2; j++)
        moveTable.push([]);
    for (j = 0; j < alphabet.length; j++)
            moveTable[0].push(alphabet[j]);
    for (var j = 1; j < moveTable.length; j++)
        for (var i = 0; i < moveTable[0].length; i++)
            moveTable[j][i] = '';
    for (i = 1; i < moveTable.length; i++)
        for (j = 0; j < moveTable[0].length; j++) {
            currentState = states[i - 1] + moveTable[0][j];
            if (inMas(currentState, states))
                moveTable[i][j] = currentState;
            else
                for (var k = 1; k < currentState.length; k++)
                    if (inMas(currentState.slice(k, currentState.length), states)) {
                        moveTable[i][j] = currentState.slice(k, currentState.length);
                        break;
                    }
    }
    return moveTable;
}
function avtomatSearch(str, booktext) {
    var count = 0;
    var currentState = '';
    var alphabet = makeAlphabet(str);
    var moveTable = makeMoveTable(str, alphabet)
    for (i = 0; i < booktext.length - 1; i++) {
        var letter = booktext.charAt(i);
        if (!inMas(letter, alphabet)) {
            currentState = '';
            continue;
        }
        if (currentState == null)
            currentState = '';
        currentState = moveTable[currentState.length + 1][getInMasPos(letter, alphabet)];
        if (currentState == null)
            currentState = '';
        if (currentState.length == str.length)
            count++;
    }
    return count;
}


var booktext = new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(WSH.StdIn.ReadLine(), 1).ReadAll();
var str = WSH.StdIn.ReadLine();
WSH.Echo(avtomatSearch(str, booktext));