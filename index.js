let pol = prompt( 'Введите пол male/female' )
let age = prompt( 'Введите возраст' );
switch (pol) {
    case String( 'male' ):
if (age <= 14) {
    alert( 'Подросток' );
}
else if ((age > 14) && (age <= 20)) {
    alert( 'юноша' );
}
else if ((age > 20) && (age <= 60)) {
    alert( 'молодой человек' );
}
else if ((age > 60) && (age <= 100)) {
    alert( 'дед' );
}
break;
    case String( 'female' ):
    alert( 'девушка' );
break;
    }
