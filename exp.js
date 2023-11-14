var q = new ActiveXObject('Scripting.FileSystemObject');
var str = q.OpenTextFile('wap1.txt');
str = new String(str.ReadAll()); //строка
subs = "князь Андрей";
var count = 0;
function equal(str, subs, startSymbol) {
	for (j = 0; j < subs.length; j++) 
		if (str.charAt(startSymbol + j) != subs.charAt(j))
			return false;
	return true;
}


    var h = 0; //Хэш части строки
    var hs = 0; //Хэш подстроки
    var firstSymbol = str.charCodeAt(0); //Первый символ части строки
    var lastSymbol = str.charCodeAt(subs.length - 1); //Последний символ
    for (var i = 0; i <= subs.length - 1; i++) { //Считаем хэш подстроки и первой части строки
        hs += subs.charCodeAt(i);
        h += str.charCodeAt(i);	
    } 
    for (i = 0; i <= str.length - subs.length; i++) { //Ищем дальше
        if (h == hs) {
            if (equal(str, subs, i)) { //Вхождение
                count++;
            }
        }
        h -= firstSymbol; //Меняем хэш
        firstSymbol = str.charCodeAt(i + 1);
        lastSymbol = str.charCodeAt(i + subs.length);
        h += lastSymbol;
    }
    WSH.Echo(count);