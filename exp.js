fso = new ActiveXObject("Scripting.FileSystemObject");
program = fso.OpenTextFile(WSH.Arguments(0));
memory = [];
while (!program.AtEndOfStream) {
    line = program.ReadLine();
    memory = memory.concat(line.split(" "));
}
WSH.Echo(memory);
for (i = 0; i < memory.length; i++) {
    WSH.Echo(memory[i]);
    WSH.Echo(i);
}