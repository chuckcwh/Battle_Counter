var myblood=100;
var enemyblood=100;    
var myattack;
var enemyattack;

function show_my_condition () {
    $('#my_poke').html('<p><b>My energy </b></p><p>' + myblood + '</p>');
}
function show_enemy_condition () {
    $('#enemy_poke').html('<p><b>Enemy energy </b></p><p>' + enemyblood + '</p>');
}

var damage;
var hit;
var hit2="";

function calculation() {
    var attack = Math.floor(Math.random()*60+1); //attacker 1~60
    var defense = Math.floor(Math.random()*30+1); //defender 1~30
    
    if (attack > defense) {
        damage = attack - defense; 
        hit = "Attack! resulted in " + damage + " damage!";
        hit2 = "";
        if (damage > 30) {
            hit2= " great hit!";
        }
    } else {
        damage = 0;
        hit = "Fails! defender evaded!";
        hit2 = "";
    }
}


$('#find_pokemon').on('click', function() {
    show_my_condition();
    show_enemy_condition();
    $('#find_pokemon').hide();
    $('#attack').show();
});


$('#attack').on('click', function() {
    $('#condition_myP').html("");
    $('#discription').html("");
    calculation();
    $('#discription').append("<p><b>Your turn:</b> " + hit + hit2 + "</p>");
    $('#condition_enP').html("- " + damage);
    enemyblood -= damage;
    setTimeout("$('#ani_pic').show();", 500 );
    setTimeout("$('#ani_pic').hide();", 3000 );
    if (enemyblood <= 0) {
        var say = function () {$('#discription').append('<p><b>You win</b></p>');};
        setTimeout(say, 2000);
        enemyblood = 0;     
        show_enemy_condition ();        
    } else {
        show_enemy_condition ();
        calculation();
        var say2 = function(){
            $('#discription').append('<p><b>Enemy turn:</b> ' + hit + hit2 + '</p>');
            $('#condition_enP').html("");
            $('#condition_myP').html("- " + damage);
            show_my_condition();
        };
        setTimeout(say2, 2000);
        myblood -= damage;
        if (myblood <= 0) {
            var say3 = function() {
                $('#discription').append('<p><b>Enemy win</b></p>');
            };
            setTimeout(say3, 4000);     
            myblood = 0;
        }
    }
});
