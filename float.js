function makeLeft(str) {
    for (var i = 0; i < str.length; i++)
        if (str.charAt(i) == ".")
            return str.slice(0, i);
    return str;
}
function makeBinLeft(num) {
    num = num.toString();
    if (num.charAt(0) == "-")
        num = num.slice(1, num.length);
    var binNum = "";
    var remain = 0;
    num = parseInt(num);
    do {
        remain = parseInt(num) - parseInt(num / 2) * 2;
        num = parseInt(num / 2);
        binNum += remain.toString();
    } while (num != 0)
    return binNum.split('').reverse().join('');
}
function makeRight(str, leftPart) {
    return str.slice(leftPart.length + 1, str.length);
}
function makeBinRight(str) {
    str = "0." + str;
    str = parseFloat(str);
    var result = "";
    for (var i = 0; i < 130; i++){
        str *= 2;
        if (parseInt(str) == 1) {
            str -= 1;
            result += "1";
        } else
        result += "0";
    }
    return result;
}
function makePeriod(a, b) {
    var count;
    if(a == 0){
        var i = 0;
        // do{
        //     i++;
        // } while(b.charAt(i - 1) != "1");
    } else {
        count = a.toString(2).length - 1;
        count += 128;
        if (count > 255){
            return "inf";
        }
        WSH.Echo("count", count);
        return count;
    }
}
function makeFloat(sign, leftPart, rightPart) {
    var fl = [];
    fl[0] = sign;
    var period = makePeriod(leftPart,rightPart);
    var binPeriod = makeBinLeft(period);
    for (var i = 0; i < 8; i++)
        fl.push(binPeriod.charAt(i));
    var i = period - 128;
    while(i < leftPart.length && fl.length < 32){
        fl.push(leftPart.charAt(i));
        i++;
    }
    WSH.Echo(fl);
    i = 0;
    while(fl.length < 32){
        fl.push(rightPart.charAt(i));
        i++;
    }
    WSH.Echo(fl);
}

fl1 = [];
fl2 = [];
fl3 = [];
inp1 = WSH.StdIn.ReadLine();
// inp2 = WSH.StdIn.ReadLine();
var left = makeLeft(inp1);
WSH.Echo(left);
var binleft = makeBinLeft(left);
WSH.Echo(binleft);
var right = makeRight(inp1, left);
WSH.Echo(right);
var binright = makeBinRight(right);
WSH.Echo(binright);
WSH.Echo("end")
if(inp1.charAt(0) == "-")
    WSH.Echo(makeFloat(1, binleft, binright));
else
    WSH.Echo(makeFloat(0, binleft, binright));




