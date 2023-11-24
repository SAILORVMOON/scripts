function inMas(elemInMas, masInMas) {
    for (h = 0; h < masInMas.length; h++) {
        if (elemInMas == masInMas[h]) {
            return true;
        }
    }
    return false;
}

function getInMasPos(elemInMasPos, masInMasPos) {
    for (h = 0; h < masInMasPos.length; h++) {
        if (elemInMasPos == masInMasPos[h]) {
            return h;
        }
    }
}

str = WSH.StdIn.ReadLine();
alph = [];

for (i = 0; i < str.length; i++){
    alph[str.charCodeAt(i)] = str.charAt(i);
}
a = str.split('');
aa ='';
allsplit =[]

for (i = 0; i < a.length; i++) {
    allsplit.push(aa);
    aa += a[i];
}

allsplit.push(aa);
WSH.Echo(allsplit);
states = [];

for (j = 0; j < str.length + 2; j++) {
    states.push([]);
}

alphLen = 0;

for (i = 0; i < alph.length; i++){
    if (alph[i] != null) {
        states[0].push(alph[i]);
        alphLen++;
    }
}

for (j = 1; j < states.length; j++) {
    for (i = 0; i < states[0].length; i++) {
        states[j][i] = '';
    }
}

for (j = 1; j < states.length; j++) {
    for (i = 0; i < states[0].length; i++) {
        qwe = allsplit[j - 1] + states[0][i];
        if (inMas(qwe, allsplit)) {
            states[j][i] = qwe;
            
        } else {
            for (k = 1; k < qwe.length; k++) {
                if (inMas(qwe.slice(k, qwe.length), allsplit)) {
                    states[j][i] = qwe.slice(k, qwe.length);
                    break;
                }
            }
        }
    }
    
}
for (j = 0; j < states.length; j++) {
    WSH.Echo(states[j]);
    
}
count = 0;
ForReading = 1;
fso = new ActiveXObject("Scripting.FileSystemObject");
book1 = fso.OpenTextFile("D:\\gitprj\\scripts\\harry.txt", ForReading);
booktext = book1.ReadAll();
curState = '';
for (i = 0; i < booktext.length - 1; i++) {
    letter = booktext.charAt(i);
    if (!inMas(letter, alph)) {
        curState = '';
        continue;
    }
    if (curState == null) {
        curState = '';
    }
    curState = states[curState.length + 1][getInMasPos(letter, states[0])];
    if (curState == null) {
        curState = '';
    }
    if (curState.length == str.length) {
        count++;
    }
}
WSH.Echo(count);



