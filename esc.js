WSH.Echo("������ ��� ����� ������ ������");
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
//���� ������ ������������ �������
//�����������




angry_cou = 0;
not_angry_sen = ["�� �������� ������� ������������ �� ���������� � ����� �� ���� ������, ����������, ������� ���� ������, �� �������� ��� escape-�������", "�� ���� ����� �� �� ���������� ��������, ��� ��� ���������. �� ������ ���������, ������ ������� ��� ��� ���� ������", "����� ���, ������ �����������, ��� ��������� ������ ���� ������"];
angry_sen = ["������� ��� ��� ���� ������", "���\n�����\n ���    ���� �    � �   �\n�   �   �  � �    � �   �\n�   �   �  � �   �� �   �\n�   �   �  � �  � � �����\n�   � ������ � �  � �   �\n�   � �    � ��   � �   �\n ���  �    � �    � �   �\n������", "��� ����� ���� ������, ���� �� �������, ��� ����, � ������ ���� �� �������"];
very_angry_sen = ["�� ��� ������ �����? ����� ���� ������ ���� ������, ����, �� ���, �� ���, � ������ ����", "�� �� ������ ������ ��������� �� ������. ������ ���� ���� ������ ��� ����", "�������� ��� ���� ��� ���� ���. ��� ���� ������, ��� ������ ��� ����� \"##\" ��� ��� ������ ��������, � ��� \"#\" ����", "� ������� ��� ��� ������� ���� ����� ������������ ������ ��������� ���� ������, �� ���������� ��������� ���� ���������� ������ ����� ������ �� ���� �������� � ��������, � ����� ����� � ����� �����"];
WSH.Echo("������ ��� ����� ������ ������ ������, �� ������ ���� ����");
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
		WSH.Echo("���, ������ ����� ��� ������");
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

veryvery_angry_cong = "� ���� �����-����� ������ ���������� � ���, ��� �� �����-�� �������� ������� ��������� � ���� ������������ �������. � ����, ��� ��� ������������, �������� � ��������� �������, ������� �� ��������� ��� �������, ������� ���� ������ ���� ���������� �����.";
cong = ["", "", "", "����������", "������", "�������", "��������", "��������", "��������", "��������", "�������������"]

if (angry_cou < 3){
	WSH.echo("���������");
}
else if (angry_cou < 11){
	WSH.echo("����������, � " + cong[angry_cou] + " ���� �� ���� �����");
}
else if (angry_cou == 21){
	WSH.Echo(veryvery_angry_cong);
}
else{
	WSH.echo("�������-�� � ���� ����������");
}

symb = st.charAt(0);
cou = 1;
stenc = ""
for (j = 0; j < st.length; j++){
	if(st.charCodeAt(j) == st.charCodeAt(j + 1)){ //����� ������
		cou++;
	}
	else{ //������ ������
		if (st.charAt(j) == escSym){//���������
			stenc += escSym + String.fromCharCode(cou) + st.charAt(j);
		    	cou = 1;
		}
		else{//������
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