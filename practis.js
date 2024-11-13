let $ = document;

const div_loading = $.querySelector('.loading-page');// select dom items 
const box_items_div = $.querySelector('.box-items')
const div_befor_start = $.querySelector('.befor-start-game-div');
const div_welcome_back = $.querySelector('.reward-dayli-div');
const end_game_div = $.querySelector('.end-game');
const btn_play = $.querySelector('button');
const btn_startplay = $.querySelector('.btn-come-game');
const btn_accept = $.querySelector('.thank-you-btn');
const div_game = $.querySelector('.main-game');
const points = $.querySelector('.coins');
const bombs = $.querySelector('.bombs');
const frezes = $.querySelector('.freze');
const image = $.querySelector('.img-game');
const div_img = $.getElementById('div-items');
const show_game_values_div = $.querySelector('.show-game-values');
const show_time = $.querySelector('.remembertime');
const ticket_localstorage = $.getElementById('ticket-number');
const day_Stric_localstorage = $.getElementById('day-strick');
const day_ticket = $.querySelector('.dayly-ticket');
const day_strick = $.querySelector('.day-stric');
const show_ticket_p = $.getElementById('p-tiket');
const again_play_btn = $.querySelector('.play-again-btn');
const reward_coins = $.querySelector('.reward-game');
const points_h1 = $.querySelector('.points-h1');
const show_points_play_again = $.querySelector('.rward-game-history');

points_h1.textContent = localStorage.getItem('rewards');//set items value in the dom and lcoal storage 
again_play_btn.textContent = 'you have 🎫 ' + (+localStorage.getItem('ticket'));


let colectpoints = 0; //all rewaeds points for play game 
let time = 30;//time game 30 secend 


const loading_page = () => {
    setTimeout(() => {

        div_loading.id = 'hiden'
        div_befor_start.id = 'show'
    }, 1000)
}
const handelgame = () => { //array function for handel game 

    const timeline = () => { //every 1 secend time is game cost 

        if (time > 0) {

            show_time.textContent = time;
            time--;
        } else {
            clearInterval(handeltime);
            show_time.textContent = 'end...';
            end_game_div.style.display = 'block'
            end_game_div.style.top = '-550%'


            const coins = $.querySelectorAll('.coins')//select create items on the function
            const bombs = $.querySelectorAll('.bombs')
            const freze = $.querySelectorAll('.freze')

            coins.forEach((items) => {//loop for empity class items 

                items.className = ''

            })
            bombs.forEach((items) => {

                items.className = ''

            })
            freze.forEach((items) => {

                items.className = ''

            })
        }
    }
    btn_startplay.style.display = 'none'
    box_items_div.style.display = 'block'
    const handeltime = setInterval(timeline, 1000)
    let rewards = +points_h1.textContent;
    for (let i = 0; i <= 100; i++) {   //create 100 timse 🍀 items

        let random = Math.floor(Math.random() * 100)//random number for left and margin positon to all items
        setTimeout(() => {

            let newitem = $.createElement("span")
            newitem.textContent = '🍀';
            newitem.className = 'coins';
            newitem.style.left = random;
            box_items_div.append(newitem)
            const handelcoins = () => {// handel click on the 🍀

                rewards += 1;
                localStorage.setItem('rewards', rewards);
                colectpoints += 1;
                reward_coins.textContent = colectpoints
                newitem.textContent = '+1'
                newitem.id = 'hiden-items'
                setTimeout(() => {
                    newitem.remove()
                }, 1000)
                show_points_play_again.textContent = colectpoints

            }
            newitem.addEventListener('click', handelcoins)
            show_game_values_div.appendChild(box_items_div)
        }, i * 10)
    }
    for (let i = 0; i <= 60; i++) { //create 60 times 💣 function

        let random = Math.floor(Math.random() * 100)
        setTimeout(() => {

            let newitem = $.createElement("span")
            newitem.textContent = '💣'
            newitem.className = 'bombs'
            newitem.style.left = random
            box_items_div.append(newitem)


            const handelbumbs = () => {
                $.body.className = 'explosion_color'
                newitem.textContent = '-10'
                newitem.id = 'hiden-items'
                newitem.style.display = 'none'
                setTimeout(() => {

                    newitem.remove()

                }, 1000)

                show_points_play_again.textContent = colectpoints

                if (colectpoints >= 10) {
                    colectpoints -= 10
                } else {
                    colectpoints = 0
                }
                setTimeout(() => {
                    $.body.className = ''
                }, 1000)
                reward_coins.textContent = colectpoints
            }


            newitem.addEventListener('click', handelbumbs)
            show_game_values_div.appendChild(box_items_div)
        }, i * 10)
    }
    for (let i = 0; i <= 40; i++) { //create 40 timse ❄

        let random = Math.floor(Math.random() * 100)

        setTimeout(() => {
            let newitem = $.createElement("span")
            newitem.textContent = '❄'
            newitem.className = 'freze'
            newitem.style.left = random
            box_items_div.append(newitem)


            const handelfreze = () => { //click on the ❄ frze background for 1 secend 

                $.body.className = 'freze-colro'
                newitem.style.display = 'none'

                const coins = $.querySelectorAll('.coins')//select create items on the function
                const bombs = $.querySelectorAll('.bombs')
                const freze = $.querySelectorAll('.freze')

                coins.forEach((items) => {//give all items class:stop-items to stop items 
                    items.classList.add('stop-items')
                })
                bombs.forEach((items) => {
                    items.classList.add('stop-items')
                })
                freze.forEach((items) => {
                    items.classList.add('stop-items')
                })
                setTimeout(() => {
                    $.body.className = ''
                    newitem.remove()
                    coins.forEach((items) => {//returen to deful class after 1 secend 
                        items.className = 'coins'
                    })
                    bombs.forEach((items) => {
                        items.className = 'bombs'
                    })
                    freze.forEach((items) => {
                        items.className = 'freze'
                    })
                }, 1000);
            }
            newitem.addEventListener('click', handelfreze)
            show_game_values_div.appendChild(box_items_div)
        }, i * 10)

    }
}

const handelplay = () => { // if   playe have ticket game start if dinont have massage to player   
    if (numbers > 0) {

        div_befor_start.style.display = 'none'
        div_game.style.display = 'block'
        numbers -= 1;
        localStorage.setItem('ticket', numbers)
    } else {
        alert('you dont have ticket 🎫 ')
        return;
    }
}


//set ticket in local storage 

let numbers = parseInt(localStorage.getItem('ticket')) || 0;
let numbers2 = parseInt(localStorage.getItem('dayStric')) || 0;
let lastroun = localStorage.getItem('lastrun');
let ondaypermilisecend = 8 * 60 * 60 * 1000;

const handel_lcoalstorage_ticket = () => {//set ticket in the lcoal storage functions 
    day_ticket.textContent = 'ticket ' + numbers + '🎫';
    day_strick.textContent = 'day ' + numbers2 + ' 🔥'
    show_ticket_p.textContent = 'you tiket 🎫 ' + numbers;
    setInterval(() => {
        let one = 1;
        numbers2 += one;

        div_befor_start.style.display = 'block'
        div_welcome_back.style.display = 'block'
        localStorage.setItem('dayStric', numbers2)
    }, 28800000)

}
const acceptitems = () => {
    div_befor_start.style.display = 'block'
    div_welcome_back.style.display = 'none'

    let five = 5
    numbers += five

    localStorage.setItem('ticket', numbers)
}

function fristtime() {//if player play for frist time give hime 5 ticket 
    if (!localStorage.getItem('frist-time')) {

        alert('welcome to you frist  ')
        localStorage.setItem('frist-time', 'true')
        return true;
    }
    return false;
}
if (fristtime()) {
    numbers += 5
}


const againplayhandel = () => {// if time is game is end box again play show in the dom

    localStorage.setItem('ticket', numbers)
    again_play_btn.textContent = 'you have 🎫 ' + (+localStorage.getItem('ticket'))
    handelgame()
    numbers -= 1
    end_game_div.style.display = 'none'
    time = 30
}
fristtime()
loading_page() //call functions 
handel_lcoalstorage_ticket()
again_play_btn.addEventListener('click', againplayhandel)//set event click on items 
btn_startplay.addEventListener('click', handelgame)
btn_play.addEventListener('click', handelplay)
btn_accept.addEventListener('click', acceptitems)










