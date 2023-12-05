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
    var count = 0;
    var collision = 0;
    var textHash= 0;
    var strHash = 0;
    for (var i = 0; i <= str.length - 1; i++) {
        strHash += str.charCodeAt(i);
        textHash+= text.charCodeAt(i);
    }
    for (var i = 0; i <= text.length - str.length; i++) {
        if (textHash == strHash) {
            if (same(str, text.slice(i, i + str.length)))
                count++;
            else
                collision++;
        }
        textHash = textHash - text.charCodeAt(i) + text.charCodeAt(i + str.length);
    }
    WSH.Echo("collisions: ", collision);
    WSH.Echo("count: ", count);
}
function hashPow (str, text) {
    WSH.Echo(new Date().getTime());
    var count = 0;
    var collision = 0;
    var textHash= 0;
    var strHash = 0;
    var two = 1;
    for (var i = 0; i <= str.length - 1; i++) {
        two = two << 1;
        strHash += str.charCodeAt(i) * two;
        textHash+= text.charCodeAt(i) * two;
    }
    for (var i = 0; i <= text.length - str.length; i++) {
        if (textHash == strHash) {
            if (same(str, text.slice(i, i + str.length)))
                count++;
            else
                collision++;
        }
        textHash -= text.charCodeAt(i) * 2;
        textHash /= 2;
        textHash += text.charCodeAt(i + str.length) * two;
    }
    WSH.Echo("collisions: ", collision);
    WSH.Echo("count: ", count);
}
function printHowMany(str, books) {
    for (var i = 0; i < books.length; i++)
        howMany(str, books[i]);
    WSH.Echo(new Date().getTime(), "\n\n");
}
function printHashSum(str, books) {
    for (var i = 0; i < books.length; i++)
        hashSum(str, books[i]);
    WSH.Echo(new Date().getTime(), "\n\n");
}
function printHashPow(str, books) {
    for (var i = 0; i < books.length; i++)
        hashPow(str, books[i]);
    WSH.Echo(new Date().getTime(), "\n\n");
}
function printThree(str, book) {
    printHowMany(str, book);
    printHashSum(str, book);
    printHashPow(str, book);
}
function doAll(strs, books) {
    for (var i = 0; i < strs.length; i++)
        printThree(strs[i], books)
}

var fso = new ActiveXObject("Scripting.FileSystemObject");
var waptext1 = fso.OpenTextFile("wap1.txt", 1).ReadAll();
var waptext12 = waptext1 + fso.OpenTextFile("wap2.txt", 1).ReadAll();
var waptext123 = waptext12 + fso.OpenTextFile("wap3.txt", 1).ReadAll();
var waptext1234 = waptext123 + fso.OpenTextFile("wap4.txt", 1).ReadAll();
var books = [waptext1, waptext12, waptext123, waptext1234];
var strs = ["князь Андрей", "князь", "князь Андрей Болконский"]

doAll(strs, books);

str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
aaaaa = fso.OpenTextFile("a106.txt", 1).ReadAll();
howMany(str, aaaaa);
str = "baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
howMany(str, aaaaa);
WSH.Echo(new Date().getTime());