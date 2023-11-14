WSH.Echo("будьте так добры ввести строку");
st = WSH.StdIn.ReadLine();





ma = [];
for (i = 0; i < st.length; i ++){
    ma[i] = 0;
}
for (i = 0; i < st.length; i ++){
    ma[st.charCodeAt(i)] += 1;
}
cou = ma[0];
for (i = 0; i < st.length; i ++){
    if (cou < ma[i]){
        cou = ma[i];
    }
}
//изза такого непечатаемые символы
//неприкольно




angry_cou = 0;
not_angry_sen = ["Вы наверное немного промахнулись по клавиутуре и ввели не один символ, пожулуйста, введите один символ, он послужит нам escape-симвлом", "Вы явно ввели не то количество символов, что нам требуется. Но ничего страшного, просто введите ещё раз один символ", "Прошу вас, будьте внимательны, мне требуется только один символ"];
angry_sen = ["Введите еще раз ОДИН символ", "МНЕ\nНУЖЕН\n ООО    ДДДД И    И Н   Н\nО   О   Д  Д И    И Н   Н\nО   О   Д  Д И   ИИ Н   Н\nО   О   Д  Д И  И И ННННН\nО   О ДДДДДД И И  И Н   Н\nО   О Д    Д ИИ   И Н   Н\n ООО  Д    Д И    И Н   Н\nСИМВОЛ", "Мне нужен ОДИН символ, ноль не подойдёт, два тоже, и больше тоже не подойдёт"];
very_angry_sen = ["ты что совсем тупой? прошу тебя ввести ОДИН символ, ОДИН, не два, не три, а только ОДИН", "да ты похоже совсем угашенный об дерево. говорю тебе ОДИН символ мне надо", "повторяю для тебя ещё ОДИН раз. дай ОДИН символ, вот пример для тупых \"##\" это два сивола например, а это \"#\" ОДИН", "я понимаю что это намного выше твоих возможностей понять множество моих просьб, но постарайся приложить хоть немножечко усилий чтобы нажать на ОДНУ кнопочку с символом, а потом энтер и никак иначе"];
WSH.Echo("будьте так добры ввести эскейп символ, он должен быть один");
escSym = WSH.StdIn.ReadLine();

while (escSym.length != 1){
	angry_text = "";
	if (angry_cou < 3){
		angry_text += not_angry_sen[Math.floor(Math.random() * 3)];
		angry_cou++;
		WSH.echo(angry_text);
	}
	else if (angry_cou < 10){
		angry_text = angry_sen[Math.floor(Math.random() * 3)];
		angry_cou++;
		WSH.echo(angry_text);
	}
	else if (angry_cou == 15){
		angry_text = very_angry_sen[3];
		angry_cou++;
		WSH.echo(angry_text);
	}
	else if (angry_cou == 20){
		WSH.Echo("все, короче делай что хочешь");
		angry_cou++;
	}
	else if (angry_cou == 21){
		WSH.Echo();
	}
	else{
		angry_text = very_angry_sen[Math.floor(Math.random() * 3)];
		WSH.echo(angry_text);
		angry_cou++;
	}
	escSym = WSH.StdIn.ReadLine();
}

veryvery_angry_cong = "Я тебя очень-ОЧЕНЬ сильно поздравляю с тем, что ты каким-то чудесным образом справился с этой невыполнимой задачей. Я верю, что все родственники, знакомые и цыганские гадалки, которых ты непонятно где откопал, помогли тебе решить этот загадочный квест.";
cong = ["", "", "", "четвертого", "пятого", "шестого", "седьмого", "восьмого", "девятого", "десятого", "одиннадцатого"]

if (angry_cou < 3){
	WSH.echo("Благодарю");
}
else if (angry_cou < 11){
	WSH.echo("Поздравляю, с " + cong[angry_cou] + " раза до тебя дошло");
}
else if (angry_cou == 21){
	WSH.Echo(veryvery_angry_cong);
}
else{
	WSH.echo("наконец-то у тебя получилось");
}

symb = st.charAt(0);
cou = 1;
stenc = ""
for (j = 0; j < st.length; j++){
	if(st.charCodeAt(j) == st.charCodeAt(j + 1)){ //тотже символ
		cou++;
	}
	else{ //другой символ
		if (st.charAt(j) == escSym){//эсксимвол
			stenc += escSym + String.fromCharCode(cou) + st.charAt(j);
		    	cou = 1;
		}
		else{//другой
			if(cou > 3){
            	stenc += escSym + String.fromCharCode(cou) + st.charAt(j);
		    	cou = 1;
        	}
        	else{
				while (cou != 0){
            		stenc += st.charAt(j);
            		cou --;
            	}
            	cou = 1;
        	}
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
	}
	else {
		stdec += stenc.charAt(i);
	}
}

WSH.echo(stdec);