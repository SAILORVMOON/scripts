function same (str, text) {
	for (j = 0; j < str.length; j++) {
		if (text.charAt(j) != str.charAt(j)) {
			return false;
        }
    }
	return true;
}

function howMany (str, text) {
    WSH.Echo(new Date().getTime());
    count = 0;
    for (i = 0; i <= text.length - str.length + 1; i++) {
        if (same(str, text.slice(i, i + str.length))) {
            count++;
        }
    }
    WSH.Echo(count);
}

function hashSum (str, text) {
    WSH.Echo(new Date().getTime());
    count = 0;
    textHash= 0;
    strHash = 0;
    for (var i = 0; i <= str.length - 1; i++) {
        strHash += str.charCodeAt(i);
        textHash+= text.charCodeAt(i);
    }
    for (i = 0; i <= text.length - str.length; i++) {
        if (textHash == strHash) {
            if (same(str, text.slice(i, i + str.length))) {
                count++;
            }
        }
        textHash = textHash - text.charCodeAt(i) + text.charCodeAt(i + str.length);
    }
    WSH.Echo(count);
}

function hashPow (str, text) {
    WSH.Echo(new Date().getTime());
    count = 0;
    textHash= 0;
    strHash = 0;
    two = 1;
    for (var i = 0; i <= str.length - 1; i++) {
        two = two << 1;
        strHash += str.charCodeAt(i) * two;
        textHash+= text.charCodeAt(i) * two;
    }
    for (i = 0; i <= text.length - str.length; i++) {
        if (textHash == strHash) {
            if (same(str, text.slice(i, i + str.length))) {
                count++;
            }
        }
        textHash -= text.charCodeAt(i) * 2;
        textHash /= 2;
        textHash += text.charCodeAt(i + str.length) * two;
    }
    WSH.Echo(count);
}



ForReading = 1;
fso = new ActiveXObject("Scripting.FileSystemObject");
wap1 = fso.OpenTextFile("C:\\Users\\lesha\\OneDrive\\Desktop\\scripts\\wap1.txt", ForReading);
wap2 = fso.OpenTextFile("C:\\Users\\lesha\\OneDrive\\Desktop\\scripts\\wap2.txt", ForReading);
wap3 = fso.OpenTextFile("C:\\Users\\lesha\\OneDrive\\Desktop\\scripts\\wap3.txt", ForReading);
wap4 = fso.OpenTextFile("C:\\Users\\lesha\\OneDrive\\Desktop\\scripts\\wap4.txt", ForReading);
str = "князь Андрей";
waptext1 = wap1.ReadAll();
waptext12 = waptext1 + wap2.ReadAll();
waptext123 = waptext12 + wap3.ReadAll();
waptext1234 = waptext123 + wap4.ReadAll();



howMany(str, waptext1);
howMany(str, waptext12);
howMany(str, waptext123);
howMany(str, waptext1234);
WSH.Echo(new Date().getTime());
WSH.Echo();WSH.Echo();

hashSum(str, waptext1);
hashSum(str, waptext12);
hashSum(str, waptext123);
hashSum(str, waptext1234);
WSH.Echo(new Date().getTime());
WSH.Echo();WSH.Echo();

hashPow(str, waptext1);
hashPow(str, waptext12);
hashPow(str, waptext123);
hashPow(str, waptext1234);
WSH.Echo(new Date().getTime());
WSH.Echo();WSH.Echo();

str = "князь";
howMany(str, waptext1234);
hashSum(str, waptext1234);
hashPow(str, waptext1234);
WSH.Echo(new Date().getTime());
WSH.Echo();WSH.Echo();

str = "князь Андрей Болконский";
howMany(str, waptext1234);
hashSum(str, waptext1234);
hashPow(str, waptext1234);
WSH.Echo(new Date().getTime());
WSH.Echo();WSH.Echo();

str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
aaaaa = fso.OpenTextFile("C:\\Users\\lesha\\OneDrive\\Desktop\\scripts\\a106.txt", ForReading);
aaaaa = aaaaa.ReadAll();
howMany(str, aaaaa);
WSH.Echo();WSH.Echo();
str = "baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
howMany(str, aaaaa);
WSH.Echo(new Date().getTime());



