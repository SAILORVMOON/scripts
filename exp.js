var q = new ActiveXObject('Scripting.FileSystemObject');
var str = q.OpenTextFile('wap1.txt');
str = new String(str.ReadAll()); //������
subs = "����� ������";
var count = 0;
function equal(str, subs, startSymbol) {
	for (j = 0; j < subs.length; j++) 
		if (str.charAt(startSymbol + j) != subs.charAt(j))
			return false;
	return true;
}


    var h = 0; //��� ����� ������
    var hs = 0; //��� ���������
    var firstSymbol = str.charCodeAt(0); //������ ������ ����� ������
    var lastSymbol = str.charCodeAt(subs.length - 1); //��������� ������
    for (var i = 0; i <= subs.length - 1; i++) { //������� ��� ��������� � ������ ����� ������
        hs += subs.charCodeAt(i);
        h += str.charCodeAt(i);	
    } 
    for (i = 0; i <= str.length - subs.length; i++) { //���� ������
        if (h == hs) {
            if (equal(str, subs, i)) { //���������
                count++;
            }
        }
        h -= firstSymbol; //������ ���
        firstSymbol = str.charCodeAt(i + 1);
        lastSymbol = str.charCodeAt(i + subs.length);
        h += lastSymbol;
    }
    WSH.Echo(count);