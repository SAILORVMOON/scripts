fso = new ActiveXObject("Scripting.FileSystemObject");
program = fso.OpenTextFile(WSH.Arguments(0));
memory = [];
while (!program.AtEndOfStream) {
    line = program.ReadLine();
    memory = memory.concat(line.split(" "));
}
WSH.Echo(memory[39]);
prgLen = memory.length;
ip = 0;
while (true) {
    WSH.Echo(ip);
    switch (memory[ip]) {
        case "input":
            memory[memory[ip + 1]] = WScript.StdIn.ReadLine();
            if ((memory[memory[ip + 1]] % 1 != 0) || (memory[memory[ip + 1]] < 0) || (memory[memory[ip + 1]] > 17)) {
				WScript.Echo("Incorrect value");
				WScript.Quit();
			}
            ip = parseInt(ip) + 2;
            break;
        case "print":
            WSH.Echo(memory);
            WSH.Echo(memory[memory[ip + 1]]);
            ip = parseInt(ip) + 2;
            break;
        case "plus":
            WSH.Echo(memory);
            memory[memory[ip + 3]] = parseInt(memory[memory[ip + 1]]) + parseInt(memory[memory[ip + 2]]);
            ip = parseInt(ip) + 4;
            break;
        case "minus":
            WSH.Echo(memory);
            memory[memory[ip + 3]] = memory[memory[ip + 1]] - memory[memory[ip + 2]];
            ip = parseInt(ip) + 4;
            break;
        case "mult":
            WSH.Echo(memory);
            memory[memory[ip + 3]] = parseInt(memory[memory[ip + 1]]) * parseInt(memory[memory[ip + 2]]);
            ip = parseInt(ip) + 4;
            break;
        case "div":
            WSH.Echo(memory);
            memory[memory[ip + 3]] = parseInt(memory[memory[ip + 1]] / memory[memory[ip + 2]]);
            ip = parseInt(ip) + 4;
            break;
        case "mod":
            WSH.Echo("mod");
            WSH.Echo(memory);
            memory[memory[ip + 3]] = parseInt(memory[memory[ip + 1]] % memory[memory[ip + 2]]);
            ip = parseInt(ip) + 4;
            break;
        case "goto":
            WSH.Echo("goto");
            WSH.Echo(memory);
            ip = memory[ip + 1];
            break;
        case "gotox":
            WSH.Echo(memory);
            ip = memory[memory[ip + 1]];
            break;
        case "ifequal":
            WSH.Echo("ifequal");
            WSH.Echo(memory);
            if (memory[memory[ip + 1]] == memory[memory[ip + 2]]) {
                WSH.Echo(ip);
                ip = memory[memory[ip + 3]]
            } else {
                WSH.Echo(ip);
                ip = memory[memory[ip + 4]]
            }
            break;
        case "ifless":
            WSH.Echo("ifless");
            WSH.Echo(memory);
            if (memory[memory[ip + 1]] < memory[memory[ip + 2]]) {
                WSH.Echo(ip);
                ip = parseInt(memory[memory[ip + 3]]);
            } else {
                WSH.Echo(ip);
                ip = parseInt(memory[memory[ip + 4]]);
            }
            break;
        default:
            
            if (ip <= memory.length) {
                ip++;
            } else {
                WSH.Echo("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                WSH.Quit();
            }
    }
}