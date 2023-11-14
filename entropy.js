str = WSH.StdIn.ReadLine();
entropy = 0;
alphabet = [];
alphabetLenght = 0;
chance = 0;
sumChance = 0;
for (i = 0; i < str.length; i++){
    if (!isNaN(alphabet[str.charCodeAt(i)])){
        alphabet[str.charCodeAt(i)]++;
    } else {
        alphabetLenght++;
        alphabet[str.charCodeAt(i)] = 1;
    }
}

for (i = 0; i < alphabet.length; i++){
    if (!isNaN(alphabet[i])){
        chance = alphabet[i] / str.length;
        WSH.Echo("chance of " + String.fromCharCode(i) + " is " + chance);
        sumChance += chance;
    }
    
}
WSH.Echo(alphabetLenght);
WSH.Echo(alphabet);
WSH.Echo(sumChance);



if (alphabetLenght == 1){
    entropy = 0
} else {
    for (i = 0; i < alphabet.length; i++){
        if (!isNaN(alphabet[i])){
                entropy += (alphabet[i] / str.length) * ((Math.log(alphabet[i] / str.length)) / Math.log(alphabetLenght));
        } 
    }
}
entropy *= -1;
WSH.Echo("entropy is " + entropy); 