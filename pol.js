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

var F = new ActiveXObject("Scripting.FileSystemObject").OpenTextFile("Primer.txt");
var primer = F.ReadLine();
var arr = F.ReadAll().split('\n');
var nums = {};
for(i = 0; i < arr.length; i++){
    line = arr[i].split(" ");
    nums[line[0]] = line[1];
}
F.close();


var amogus = ["+", "-", "*", "/", "^"];
var result = "";
var resultm = [];
var stack = [];
for (var i = 0; i < primer.length; i++) {
    WSH.Echo(stack);
    if (primer.charAt(i) == "(") {
        stack.push(primer.charAt(i));
    } else if (primer.charAt(i) == ")") {
        var step = stack.pop();
        do {
            result += step;
            resultm.push(step);
            step = stack.pop();
        } while (step != "(")
    } else if (inMas([primer.charAt(i)], amogus)) {
        if (stack.length == 0)
            stack.push(primer.charAt(i));
        else if (getPriority(primer.charAt(i)) > getPriority(stack[stack.length-1]))
            stack.push(primer.charAt(i));
        else {
            while (getPriority(primer.charAt(i)) <= getPriority(stack[stack.length-1])) {
                var step = stack.pop();
                result += step;
                resultm.push(step);
            }
				
            stack.push(primer.charAt(i));
        }
    } else {
        result += primer.charAt(i);
        resultm.push(primer.charAt(i));
    }
        
}
while (stack.length > 0){
    var step = stack.pop();
                result += step;
                resultm.push(step);
}

WSH.Echo(result);
WSH.Echo(resultm);

stack = [];
while(resultm.length != 0){
    var step = resultm.shift();
    while(!inMas(step, amogus)){
        stack.push(nums[step]);
        step = resultm.shift();
    }
    if(step == "+"){
        var first = parseInt(stack.pop());
        var second = parseInt(stack.pop());
        var third = first + second;
        stack.push(third);
    } else if(step == "-"){
        var first = parseInt(stack.pop());
        var second = parseInt(stack.pop());
        var third = first - second;
        stack.push(third);
    } else if(step == "*"){
        var first = parseInt(stack.pop());
        var second = parseInt(stack.pop());
        var third = first * second;
        stack.push(third);
    } else if(step == "/"){
        var first = parseInt(stack.pop());
        var second = parseInt(stack.pop());
        var third = first / second;
        stack.push(third);
    } else if(step == "^"){
        var first = parseInt(stack.pop());
        var second = parseInt(stack.pop());
        var third = Math.pow(first, second);
        stack.push(third);
    } 
}
WSH.Echo(stack[0])




