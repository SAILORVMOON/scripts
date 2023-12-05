function inMas(elem, mas) {
    for (var i = 0; i < mas.length; i++)
        if (elem == mas[i])
            return true;
    return false;
}
function getPriority(oper) {
    if (oper == "+" || oper == "-")
        return 0;
    if (oper == "*" || oper == "/")
        return 1;
    if (oper == "^")
        return 2;
}


var amogus = ["+", "-", "*", "/", "^"];
var primer = WSH.StdIn.ReadLine();
var result = "";
var stack = [];
for (var i = 0; i < primer.length; i++) {
    WSH.Echo(stack);
    if (primer.charAt(i) == "(") {
        stack.push(primer.charAt(i));
    } else if (primer.charAt(i) == ")") {
        var step = stack.pop();
        do {
            result += step;
            step = stack.pop();
        } while (step != "(")
    } else if (inMas([primer.charAt(i)], amogus)) {
        if (stack.length == 0)
            stack.push(primer.charAt(i));
        else if (getPriority(primer.charAt(i)) > getPriority(stack[stack.length-1]))
            stack.push(primer.charAt(i));
        else {
            while (getPriority(primer.charAt(i)) <= getPriority(stack[stack.length-1]))
				result += stack.pop();
            stack.push(primer.charAt(i));
        }
    } else
        result += primer.charAt(i);
}
WSH.Echo(stack)
while (stack.length > 0)
	result += stack.pop();
 WSH.Echo(result);

