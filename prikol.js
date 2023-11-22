function same (str, text) {
    WSH.Echo(text);
    if (str == text){
        WSH.Echo(str);
        WSH.Echo("f");
        WSH.Echo(text);
        return true;
    }
	for (j = str.length - 1; j >= 0; j--) {
		if (text.charAt(j) != str.charAt(j)) {
			return j;
        }
    }
	return true;
}

ForReading = 1;
fso = new ActiveXObject("Scripting.FileSystemObject");
wap1 = fso.OpenTextFile("D:\\gitprj\\scripts\\harry.txt", ForReading);
str = "Harry";
booktext = wap1.ReadAll();
alphabet = [];


for (i = 0; i < str.length; i++) {
        alphabet[str.charCodeAt(i)] = i;
    }

i = 0;
count = 0;

deb = 0;
steps = booktext.length - str.length + 1;
while (i < steps){
    res = same(str, booktext.slice(i, i + str.length));
    if (typeof(res) == "boolean" && res == true) {
        count++;
        i++;
    } else {
        bad = parseInt(i) + parseInt(res);
        WSH.Echo(bad);
        if (alphabet[booktext.charCodeAt(bad)] == null) {
            i = parseInt(bad) + 1;
        } else {
            i = i + str.length - 1 - parseInt(alphabet[booktext.charCodeAt(bad)]);
        }
    }
    WSH.Echo(deb);
    deb = i
}

WSH.Echo(count);
WSH.Echo(alphabet);
WSH.Echo(i);
WSH.Echo(steps);