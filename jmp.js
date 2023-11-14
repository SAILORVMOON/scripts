st = WSH.StdIn.ReadLine();

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