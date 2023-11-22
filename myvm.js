fso = new ActiveXObject("Scripting.FileSystemObject");
program = fso.OpenTextFile(WSH.Arguments(0));
memory = [];
while (!program.AtEndOfStream) {
    line = program.ReadLine();
    memory = memory.concat(line.split(" "));
}
WSH.Echo(memory[memory[17 + 4]]);
prgLen = memory.length;
ip = 0;
while (true) {
    switch (memory[parseInt(ip)]) {
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
            WSH.Echo(memory);
            WSH.Echo(memory[memory[parseInt(ip) + 1]]);
            ip = parseInt(ip) + 2;
            break;
        case "plus":
            WSH.Echo(memory);
            memory[memory[parseInt(ip) + 3]] = parseInt(memory[memory[parseInt(ip) + 1]]) + parseInt(memory[memory[parseInt(ip) + 2]]);
            ip = parseInt(ip) + 4;
            break;
        case "minus":
            WSH.Echo(memory);
            memory[memory[parseInt(ip) + 3]] = memory[memory[parseInt(ip) + 1]] - memory[memory[parseInt(ip) + 2]];
            ip = parseInt(ip) + 4;
            break;
        case "mult":
            WSH.Echo(memory);
            memory[memory[parseInt(ip) + 3]] = parseInt(memory[memory[parseInt(ip) + 1]]) * parseInt(memory[memory[parseInt(ip) + 2]]);
            ip = parseInt(ip) + 4;
            break;
        case "div":
            WSH.Echo(memory);
            memory[memory[parseInt(ip) + 3]] = parseInt(memory[memory[parseInt(ip) + 1]] / memory[memory[parseInt(ip) + 2]]);
            ip = parseInt(ip) + 4;
            break;
        case "mod":
            WSH.Echo("mod");
            WSH.Echo(memory);
            memory[memory[parseInt(ip) + 3]] = parseInt(memory[memory[parseInt(ip) + 1]] % memory[memory[parseInt(ip) + 2]]);
            ip = parseInt(ip) + 4;
            break;
        case "goto":
            WSH.Echo("goto");
            WSH.Echo(memory);
            ip = memory[parseInt(ip) + 1];
            break;
        case "gotox":
            WSH.Echo(memory);
            ip = memory[memory[parseInt(ip) + 1]];
            break;
        case "ifequalx":
            WSH.Echo("ifequal");
            WSH.Echo(memory);
            if (memory[memory[parseInt(ip) + 1]] == memory[memory[parseInt(ip) + 2]]) {
                ip = memory[memory[parseInt(ip) + 3]];
            } else {
                ip = memory[memory[parseInt(ip) + 4]];
            }
            break;
        case "ifequal":
            WSH.Echo("ifequal");
            WSH.Echo(memory);
            if (memory[memory[parseInt(ip) + 1]] == memory[memory[parseInt(ip) + 2]]) {
                ip = memory[parseInt(ip) + 3];
            } else {
                ip = memory[parseInt(ip) + 4];
            }
            break;
        case "iflessx":
            WSH.Echo("ifless");
            WSH.Echo(memory);
            if (memory[memory[parseInt(ip) + 1]] < memory[memory[parseInt(ip) + 2]]) {
                WSH.Echo(ip);
                ip = parseInt(memory[memory[parseInt(ip) + 3]]);
            } else {
                WSH.Echo(ip);
                ip = parseInt(memory[memory[parseInt(ip) + 4]]);
            }
            break;
        case "ifless":
            WSH.Echo("ifless");
            WSH.Echo(memory);
            if (memory[memory[parseInt(ip) + 1]] < memory[memory[parseInt(ip) + 2]]) {
                WSH.Echo(ip);
                ip = parseInt(memory[parseInt(ip) + 3]);
            } else {
                WSH.Echo(ip);
                ip = parseInt(memory[parseInt(ip) + 4]);
            }
            break;
        default:
            
            if (parseInt(ip) <= memory.length) {
                ip++;
            } else {
                WSH.Echo("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                WSH.Echo(ip);
                WSH.Echo(memory.length);
                WSH.Quit();
            }
    }
}