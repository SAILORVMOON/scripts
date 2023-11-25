fso = new ActiveXObject("Scripting.FileSystemObject");
program = fso.OpenTextFile(WSH.Arguments(0));
memory = [];
while (!program.AtEndOfStream) {
    line = program.ReadLine();
    memory = memory.concat(line.split(" "));
}
prgLen = memory.length;
ip = 0;
while (true) {
    switch (memory[parseInt(ip)]) {
        case "end":
            WSH.Quit();
        case "checkgoodnum":
            if ((memory[memory[parseInt(ip) + 1]] % 1 != 0) || (memory[memory[parseInt(ip) + 1]] < 0)) {
				WScript.Echo("Incorrect value");
				WScript.Quit();
			}
        case "check":
            if ((memory[memory[parseInt(ip) + 1]] % 1 != 0) || (memory[memory[parseInt(ip) + 1]] < 0) || (memory[memory[parseInt(ip) + 1]] > 17)) {
				WScript.Echo("Incorrect value");
				WScript.Quit();
			}
        case "input":
            memory[memory[parseInt(ip) + 1]] = WScript.StdIn.ReadLine();
            ip = parseInt(ip) + 2;
            break;
        case "is":
            memory[memory[parseInt(ip) + 1]] = memory[memory[parseInt(ip) + 2]];
            ip = parseInt(ip) + 3;
            break;
        case "print":
            WSH.Echo(memory[memory[parseInt(ip) + 1]]);
            ip = parseInt(ip) + 2;
            break;
        case "plus":
            memory[memory[parseInt(ip) + 3]] = parseInt(memory[memory[parseInt(ip) + 1]]) + parseInt(memory[memory[parseInt(ip) + 2]]);
            ip = parseInt(ip) + 4;
            break;
        case "minus":
            memory[memory[parseInt(ip) + 3]] = memory[memory[parseInt(ip) + 1]] - memory[memory[parseInt(ip) + 2]];
            ip = parseInt(ip) + 4;
            break;
        case "mult":
            memory[memory[parseInt(ip) + 3]] = parseInt(memory[memory[parseInt(ip) + 1]]) * parseInt(memory[memory[parseInt(ip) + 2]]);
            ip = parseInt(ip) + 4;
            break;
        case "div":
            memory[memory[parseInt(ip) + 3]] = parseInt(memory[memory[parseInt(ip) + 1]] / memory[memory[parseInt(ip) + 2]]);
            ip = parseInt(ip) + 4;
            break;
        case "goto":
            ip = memory[parseInt(ip) + 1];
            break;
        case "gotox":
            ip = memory[memory[parseInt(ip) + 1]];
            break;
        case "ifequalx":
            if (memory[memory[parseInt(ip) + 1]] == memory[memory[parseInt(ip) + 2]]) {
                ip = memory[memory[parseInt(ip) + 3]];
            } else {
                ip = memory[memory[parseInt(ip) + 4]];
            }
            break;
        case "ifequal":
            if (memory[memory[parseInt(ip) + 1]] == memory[memory[parseInt(ip) + 2]]) {
                ip = memory[parseInt(ip) + 3];
            } else {
                ip = memory[parseInt(ip) + 4];
            }
            break;
        case "iflessx":
            if (memory[memory[parseInt(ip) + 1]] < memory[memory[parseInt(ip) + 2]]) {
                ip = parseInt(memory[memory[parseInt(ip) + 3]]);
            } else {
                ip = parseInt(memory[memory[parseInt(ip) + 4]]);
            }
            break;
        case "ifless":
            if (memory[memory[parseInt(ip) + 1]] < memory[memory[parseInt(ip) + 2]]) {
                ip = parseInt(memory[parseInt(ip) + 3]);
            } else {
                ip = parseInt(memory[parseInt(ip) + 4]);
            }
            break;
        default:
            
            if (parseInt(ip) <= memory.length) {
                ip++;
            } else {
                WSH.Echo("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                WSH.Quit();
            }
    }
}