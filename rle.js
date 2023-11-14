st = WSH.StdIn.ReadLine();
symb = st.charAt(0);
cou = 1;
stenc = ""
escSym = WSH.StdIn.ReadLine();
for (j = 0; j < st.length; j++){
	if(st.charCodeAt(j) == st.charCodeAt(j + 1)){
		cou++;
	}else{
		if (st.charAt(j) == escSym){
			stenc += escSym + String.fromCharCode(cou) + st.charAt(j);
		    cou = 1;
		}else{
			if(cou > 3){
            	stenc += escSym + String.fromCharCode(cou) + st.charAt(j);
		    	cou = 1;
        	}else{
                for (i = 0; i != cou; i++){
            		stenc += st.charAt(j);
            	}
            	cou = 1;
        	}
		}
	}
	if (cou == 255){
		if (st.charAt(j) == escSym){
			stenc += escSym + String.fromCharCode(cou) + st.charAt(j);
		    cou = 1;
		} else {
			stenc += escSym + String.fromCharCode(cou) + st.charAt(j);
		    cou = 1;
		}
	}
}
WSH.echo(stenc);
stdec = "";
for (i = 0; i < stenc.length; i++){
	if (stenc.charCodeAt(i) == escSym.charCodeAt()){
		for (k = 0; k < stenc.charCodeAt(i + 1); k++){
			stdec += stenc.charAt(i + 2);
		}
		i += 2
	}else{
		stdec += stenc.charAt(i);
	}
}
WSH.echo(stdec);

stenc = "";
stenctemp = "";
repl = 0;
norepl = 0;



for (i = 0; i < st.length; i++){
	if (repl == 127) {
		stenc += String.fromCharCode(repl + 1) + st.charAt(i);
			repl = 0;
			i++;
	}
	
	if (st.charCodeAt(i) == st.charCodeAt(i + 1)){
		if (norepl != 0){
			stenc += String.fromCharCode(norepl + 128) + stenctemp;
			stenctemp = "";
			norepl = 0;
		}
		repl++;
		
	}else{
		if (repl != 0){
			stenc += String.fromCharCode(repl + 1) + st.charAt(i);
			repl = 0;
		}else{
		norepl++;
		stenctemp+=st.charAt(i);
		}
	}
}
if (norepl != 0){
	stenc += String.fromCharCode(norepl + 128) + stenctemp;
}

WSH.echo(stenc);

stdec = "";
for (i = 0; i < stenc.length; i++){
	if (stenc.charCodeAt(i) > 128){
		x = stenc.charCodeAt(i) - 128;
		for (n = 0; n < x; n++){
			i++;
			stdec += stenc.charAt(i);
		}
    }else{
		x = stenc.charCodeAt(i);
		i++;
		for (n = 0; n < x; n++){
			stdec += stenc.charAt(i);
		}
	}
}
WSH.echo(stdec);