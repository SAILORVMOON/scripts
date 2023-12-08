var F = new ActiveXObject("Scripting.FileSystemObject").OpenTextFile("Primer.txt");
var a = F.ReadLine();
var arr = F.ReadAll().split('\n');
var nums = {}
for(i = 0; i < arr.length; i++){
    line = arr[i].split(" ");
    nums[line[0]] = line[1];
}
WSH.Echo(a)
WSH.Echo(nums["a"])
WSH.Echo(nums["b"])
WSH.Echo(nums["c"])
F.close();
