var txt = new Array();
txt[0]="setagaya_6x6.html";
txt[1]="setagaya_20x20.html";
txt[2]="setagaya_33x33.html";
txt[3]="setagaya_64x12.html";
txt[4]="setagaya-sen_10x12.html";
txt[5]="rainbowVW2021_20x20.html";
txt[6]="denent_12x12.html";
txt[7]="setagaya-sen_10x12.html";
txt[8]="setagaya-sen_10x12.html";
txt[9]="setagaya-sen_10x12.html";

mmax = 10; //メッセージ行数
txtno = Math.floor(Math.random() * mmax);
location.href=txt[txtno];
