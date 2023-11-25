function same (str, text) {
	for (var j = str.length - 1; j >= 0; j--)
		if (text.charAt(j) != str.charAt(j))
			return j;
	return true;
}
function makeAlphabet(str) {
    var alphabet = [];
    for (var i = 0; i < str.length; i++)
        alphabet[str.charCodeAt(i)] = i;
    return alphabet;
}
function BMSearch(str, booktext, alphabet) {
    var count = 0;
    var steps = booktext.length - str.length + 1;
    var i = 0;
    while (i < steps) {
        res = same(str, booktext.slice(i, i + str.length));
        if (typeof(res) == "boolean" && res) {
            count++;
            i++;
        } else {
            bad = parseInt(i) + parseInt(res);
            if (alphabet[booktext.charCodeAt(bad)] == null)
                i = parseInt(bad) + 1;
            else
                i = i + str.length - 1 - parseInt(alphabet[booktext.charCodeAt(bad)]);
        }
    }
    return count;
}
function doAll (str, booktext) {
    return BMSearch(str, booktext, makeAlphabet(str));;
}


var booktext = new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(WSH.StdIn.ReadLine(), 1).ReadAll();
var str = WSH.StdIn.ReadLine();
WSH.Echo(doAll(str, booktext));