find_box = document.querySelectorAll('.box');
let k = false;

game_player = document.querySelector('span')
design1 = document.getElementById('txtDesign_1');
design2 = document.getElementById('txtDesign_2');
reset = document.getElementById('reset') 

box = [
    document.getElementById('box_1'),
    document.getElementById('box_2'),
    document.getElementById('box_3'),
    document.getElementById('box_4'),
    document.getElementById('box_5'),
    document.getElementById('box_6'),
    document.getElementById('box_7'),
    document.getElementById('box_8'),
    document.getElementById('box_9')
]


let winMap = [
        '▲', '▲', '▲',
        '▲', '▲', '▲',
        '▲', '▲', '▲'
]

//FIND BOX WITH DATASET
function number(event) {
    a = event.target.dataset.num;

    if (k) {
        nolic(a);
        k = false;
        game_player.textContent = 'x';
        game_player.style.color = "#ff615f";
    } else {
        krestik(a);
        k = true;
        game_player.textContent = 'o';
        game_player.style.color = "#3bc6f3";
    }
}

// CLICK DIVS

for (i = 0; i <= 8; i++) {
    box[i].addEventListener('click', number);
}


///Draw krestic
function krestik(num) {
    // console.log(num);
    winMap[num] = 'x';
    box[num].style.backgroundImage = "url('img/krestic.png')";
    box[num].removeEventListener('click', number);
    win('Player X WIN !', 'x' );
}

//Draw nolic
function nolic(num) {
    // console.log(num);
    winMap[num] = 'o';
    box[num].style.backgroundImage = "url('img/nolic.png')";
    box[num].removeEventListener('click', number);
    win('Player O WIN !', 'o');
}

kol = 0; 
function win(text , a) {
        kol++;
        for(let i = 0 ;i <= 2 ; i++)
        {   gorizontal = 0;
            vertical = 0;
            for(let j = 0 ; j <= 2 ; j++)
            {   
               if (winMap[j+(i*3)] == a)gorizontal++;
               if(winMap[(j*3)+i] == a)vertical++
               console.log
            }
            // console.log(winMap);
            if (gorizontal >= 3 || vertical >= 3){
                animation_text(text);
                return 0;
            }
        }

        if(winMap[0] == a && winMap[4] == a && winMap[8] == a )animation_text(text);
        else 
        if (winMap[2] == a && winMap[4] == a && winMap[6] == a )animation_text(text);
        else if (kol == 9){
            animation_text('DRAW');
        }
        

}


function animation_text(text){
    console.log(text);
    design1.textContent = text; 
    design2.textContent = text;
    for(i = 0 ; i<=  8 ; i++)box[i].removeEventListener('click', number);
    
}

reset.addEventListener('click',Reset_game);
function Reset_game(){
    k = false;
    winMap = [
        '▲', '▲', '▲',
        '▲', '▲', '▲',
        '▲', '▲', '▲'
    ]
    game_player = 'X';
    for(let i = 0 ; i <= 8 ; i++)box[i].style.backgroundImage = 'none';
    
    for (i = 0; i <= 8; i++) {
        box[i].addEventListener('click', number);
    }
    kol = 0;
    design1.textContent = "";
    design2.textContent = "";
}

//VERSION 2 FIND BOX WITH DATASET
// let number = (event) => {
//     a = event.target.dataset.num;
//     console.log(a);
//     if (k)
//     {
//         nolic(a);
//         k = false;
//     }else
//     {
//         krestik(a);
//         k = true;
//     }
// }

//VERSION 2 CLICK DIVS
// find_box.forEach(find_box => {
//     find_box.addEventListener('click' , number)
// });

// CLICK DIVS 2
// box[0].addEventListener('click' , number);
// box[1].addEventListener('click' , number);
// box[2].addEventListener('click' , number);
// box[3].addEventListener('click' , number);
// box[4].addEventListener('click' , number);
// box[5].addEventListener('click' , number);
// box[6].addEventListener('click' , number);
// box[7].addEventListener('click' , number);
// box[8].addEventListener('click' , number);
