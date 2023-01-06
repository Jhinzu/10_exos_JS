// partie 2
/*
// déclarations des variable
let num = 255 ; 
let txt = "255";
let bin = true;
let flt = 7.23;
console.log(typeof num,typeof txt,typeof bin,typeof flt) ;
// opérations sur les variable
console.log(++num) ;

console.log (txt + " est ici une chaîne de caractères") ;

bin = false; 
console.log (bin) ;

console.log (flt + num) ;
// Type des variables
num = 23 ; 
console.log(num) ;

txt = "33" ;
console.log (txt) ;

let tmp = 0

txt = parseInt(txt);
console.log (txt);
tmp = txt ;

console.log (num + tmp ) ;
*/
// Partie3

// teste simple
let mature = (age) =>
{
    if (age >= 18 )
    {
        console.log("vous ètes majeurs et vous aviez " + age + "ans");
    }
    else
    {
        console.log("vous ètes mineurs et vous aviez " + age + "ans");
    }

}
mature(23);

// teste sur la longueur d'une chaîne de caractères 
let caractère = (texte) =>
{
    if (texte.lenght > 10)
    {
        console.log (true);
    }
    else
    {
        console.log (false) ;
    }

}

caractère("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
