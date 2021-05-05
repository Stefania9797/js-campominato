/*Istuzioni:
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/
function random_bombe(min , max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
var diff = Number(prompt("inserisci livello 0-1-2"));
var lista_bombe =[];
var bomba;
var num_massimo
var possibilità;
if(diff==0){
    num_massimo=100;
    possibilità=num_massimo-16;
}else if(diff==1){
    num_massimo=80;
    possibilità=num_massimo-16;
}else if(diff==2){
    num_massimo=50;
    possibilità=num_massimo-16;
}
while(lista_bombe.length<16){
    bomba=random_bombe(1,num_massimo);
    if(!lista_bombe.includes(bomba)){
        lista_bombe.push(bomba);
    }
}
var punteggio=0;
var lista=[]
do{
    var user_num= Number(prompt("Inserisci un numero"));
    if(lista_bombe.includes(user_num)){
        alert("Hai perso. Il tuo punteggio è "+ punteggio)
    }else if(lista.includes(user_num)){
        alert("Numero già inserito");
    }else if(user_num<1||user_num>num_massimo){
        alert("Numero non consentito")
    }
    else{
        lista.push(user_num)
        punteggio = punteggio+1;
    }
}while(lista.length<=possibilità&&!lista_bombe.includes(user_num))

if(lista.length==possibilità){
    alert("Hai vinto")
}