memory = [];
var ForReading = 1;
fso = new ActiveXObject("Scripting.FileSystemObject");
f = fso.OpenTextFile("C:\\Users\\lesha\\OneDrive\\Desktop\\scripts\\2.txt", ForReading);
var a = f.ReadLine();
command = "";
b = a + " ";
prglen = 0;
for (i = 0; i < b.length; i++){
    if (b.charAt(i) == " "){
        memory[prglen] = command;
        prglen += 1;
        command = "";
    } else {
        command += b.charAt(i);
    }
}
prglenwithvars = prglen + 1;
i = 0
for (i = 0; i < prglen; i++){
    if(memory[i] == "init"){ 
        i++;
        for (j = i + 1; j < prglen; j++){
            if (memory[j] == memory[i]){
                memory[j] = prglenwithvars;
            }
        }
        prglenwithvars++;
    } else if(memory[i] == "input"){
        i++;
        memory[memory[i]] = Number(WSH.StdIn.ReadLine());
    } else if(memory[i] == "autoinput"){
        memory[memory[i] + 1] = Number(memory[memory[i] + 2]);
        i += 2;
    } else if(memory[i] == "sum"){
        i += 3;
        memory[memory[i]] = Number(memory[memory[i - 1]]) + Number(memory[memory[i - 2]]);
    } else if(memory[i] == "mult"){
        i += 3;
        memory[memory[i]] = Number(memory[memory[i - 1]]) * Number(memory[memory[i - 2]]);
    } else if(memory[i] == "minus"){
        i += 3;
        memory[memory[i]] = Number(memory[memory[i - 1]]) - Number(memory[memory[i - 2]]);
    } else if(memory[i] == "print"){
        i++;
        WSH.Echo(memory[memory[i]]);
    } else if(memory[i] == "checkintfac"){
        i++;
        if (!(memory[i] < 19 && memory >= 0 && Number(memory[i]) == Math.trunc(Number(memory[i])))){
            i += 10000;
        }
    } else if(memory[i] == "jump"){
        i = memory[i + 1] - 1;
    } else if(memory[i] == "ifl"){
        if (memory[i + 1] < memory[i + 2]){
            i = memory[i + 3] - 1;
            i = memory[i + 4] - 1;
        }
        WSH.Echo(memory[memory[i]]);
    } else if(memory[i] == "ifb"){
        WSH.Echo(memory[memory[i]]);
    } else if(memory[i] == "ife"){
        WSH.Echo(memory[memory[i]]);
    } else if(memory[i] == "ifne"){
        WSH.Echo(memory[memory[i]]);
    }
}

WSH.Echo(memory);




