import { crash2, call_back_2, crash5, sin_flag } from "./c.js";
let arr = [], count = 0
window.x = 0, window.y = 1;
let fool = document.getElementsByClassName('tarot-card')[0];
let moon = document.getElementsByClassName('tarot-card')[1];
let devil = document.getElementsByClassName('tarot-card')[2];
let tower = document.getElementsByClassName('tarot-card')[3];
let death = document.getElementsByClassName('tarot-card')[4];
window.addEventListener('load', () => {
    if (document.cookie.includes('Diabolical_Host') == true && document.cookie.includes('Level') == true && document.cookie.includes('Souls') == true) {
        const level_change = (level_name) => {
            const expire_time = new Date()
            expire_time.setTime(expire_time.getTime() + (2 * 24 * 60 * 60 * 1000))
            let expire_date = expire_time.toUTCString()
            document.cookie = `Level=${level_name};expires=${expire_date}`
        }
        if (document.cookie.includes('Level=Sinister') == false) {
            level_change("Sinister")
        }
        let sin = setInterval(() => {
            let num
            let get_soul = (callback) => {
                let arr = [];
                if (document.cookie.includes('Souls') == true) {
                    let s = document.cookie.indexOf('Souls')
                    let e = s + 6; let stop = e + 4
                    for (; e < stop; e++) {
                        arr[e] = document.cookie.at(e)
                    }
                    callback(arr, stop)
                }
                return arr.toString().replaceAll(',', '')
            }
            let soul_check = (arr, stop) => {
                if (arr[stop - 1] === '=') {
                    num = 0
                }
                else {
                    num = 1
                }
            }
            let checker = false;
            const soul = (souls) => {
                const expire_time = new Date();
                expire_time.setTime(expire_time.getTime() + (2 * 24 * 60 * 60 * 1000))
                let expire_date = expire_time.toUTCString()
                let soul_val = atob(get_soul(soul_check))
                let soul_val_num = Number.parseInt(soul_val)
                if (souls === "+10") {
                    soul_val_num = soul_val_num + 10
                }
                else if (souls === "-10") {
                    soul_val_num = soul_val_num - 10
                }
                else if (souls === "0") {
                    soul_val_num = 0
                }
                while (num == 1) {
                    document.cookie = `Souls=${btoa('0')}; expires=${expire_date}; path=/`;
                }
                document.cookie = `Souls=${btoa(soul_val_num)}; expires=${expire_date}; path=/`;
            }

            for (let i = 0; i < 5; i++) {
                arr[i] = Number.parseInt(Math.random() * 14);
            }
            let val = Number.parseInt(Math.random() * 5), call, i = 0;
            do {
                call = arr[i];
                i++;
            } while (i < val)
            document.getElementsByClassName('devil-face')[0].outerHTML = `<div class="devil-face">${call}</div>`;
            let check = Number.parseInt(Math.random() * 5);
            const devill = () => {
                if (arr[0] === call) {
                    checker = true
                    moon.style.display = 'none';
                    tower.style.display = 'none';
                    devil.style.display = 'none';
                    fool.style.display = 'none';
                    death.removeAttribute('style')
                    let t = setTimeout(() => {
                        death.setAttribute('style', 'transform:rotateY(180deg)')
                        document.getElementById('5').outerHTML = "<div id='5' style='transform:rotateY(180deg);'>☠ Death’s Domain No Souls Gained, Only Endless Emptiness ☠</div>"
                        soul("0")
                        crash2()
                        clearTimeout(t)
                    }, 1000);
                }

                else {
                    checker = true
                    tower.style.display = 'none';
                    devil.style.display = 'none';
                    moon.style.display = 'none';
                    fool.style.display = 'none';
                    death.removeAttribute('style')
                    let d = setTimeout(() => {
                        death.setAttribute('style', 'transform:rotateY(180deg)')
                        document.getElementById('5').outerHTML = "<div id='5' style='transform:rotateY(180deg);'>☠ No souls gained, for you are no longer among them. You have failed ☠</div>"
                        soul("0")
                        crash5(call_back_2)
                        clearTimeout(d)
                    }, 1000);
                }
            }
            const moonn = () => {
                if (arr[1] === call) {
                    checker = true
                    devil.style.display = 'none';
                    tower.style.display = 'none';
                    death.style.display = 'none';
                    moon.style.display = 'none';
                    fool.removeAttribute('style')
                    let f = setTimeout(() => {
                        fool.setAttribute('style', 'transform:rotateY(180deg)')
                        document.getElementById('1').outerHTML = "<div id='1' style='transform:rotateY(180deg);'>🜂 The Fool’s Price Paid +10 Souls Claimed 🜂</div>"
                        soul("+10")
                        clearTimeout(f)
                    }, 1000);
                }
                else if (x === y) {
                    checker = true
                    soul("+10")
                    fool.style.display = 'none'
                    moon.style.display = 'none'
                    devil.style.display = 'none'
                    tower.style.display = 'none'
                    death.style.display = 'none'
                    let f_l = setTimeout(() => {
                        fool.setAttribute('style', 'transform:rotateY(180deg)')
                        document.getElementById('1').outerHTML = `<div id='1' style='transform:rotateY(180deg);'>🜂 The Fool’s Price ${sin_flag()} 🜂</div>`
                        soul("+10")
                        clearTimeout(f_l)
                    },0);
                }

                else {
                    checker = true
                    moon.style.display = 'none';
                    devil.style.display = 'none';
                    death.style.display = 'none';
                    tower.style.display = 'none';
                    fool.removeAttribute('style')
                    let de = setTimeout(() => {
                        fool.setAttribute('style', 'transform:rotateY(180deg)')
                        document.getElementById('1').outerHTML = "<div id='1' style='transform:rotateY(180deg);'>🜂 Fool’s Folly No Souls Gained, -10 Lost 🜂</div>"
                        soul("-10")
                        clearTimeout(de)
                    }, 1000);

                }

            }
            const fooll = () => {
                if (arr[2] === call) {
                    checker = true
                    death.style.display = 'none';
                    fool.style.display = 'none';
                    devil.style.display = 'none';
                    moon.style.display = 'none';
                    tower.removeAttribute('style')
                    let dev = setTimeout(() => {
                        tower.setAttribute('style', 'transform:rotateY(180deg)')
                        document.getElementById('4').outerHTML = "<div id='4' style='transform:rotateY(180deg);'>🗲 Tower Speaks +10 Souls Claimed in Ruin 🗲</div>"
                        soul("+10")
                        clearTimeout(dev)
                    }, 1000);
                }
                else if (x === y) {
                    checker = true
                    soul("+10")
                    fool.style.display = 'none'
                    moon.style.display = 'none'
                    devil.style.display = 'none'
                    tower.style.display = 'none'
                    death.style.display = 'none'
                }
                else {
                    checker = true
                    moon.style.display = 'none';
                    devil.style.display = 'none';
                    fool.style.display = 'none';
                    death.style.display = 'none';
                    tower.removeAttribute('style')
                    let fo = setTimeout(() => {
                        tower.setAttribute('style', 'transform:rotateY(180deg)')
                        document.getElementById('4').outerHTML = "<div id='4' style='transform:rotateY(180deg);'>🗲 Tower Calls -10 Cursed Souls Devoured 🗲</div>"
                        soul("-10")
                        clearTimeout(fo)
                    }, 1000);
                }
            }
            const deathh = () => {
                if (arr[3] === call) {
                    checker = true
                    fool.style.display = 'none';
                    tower.style.display = 'none';
                    death.style.display = 'none';
                    moon.style.display = 'none';
                    devil.removeAttribute('style')
                    let devv = setTimeout(() => {
                        devil.setAttribute('style', 'transform:rotateY(180deg)')
                        document.getElementById('3').outerHTML = "<div id='3' style='transform:rotateY(180deg);'>Ψ The Devil Claims Your Soul Ψ</div>"
                        soul("0")
                        crash5(call_back_2)
                        clearTimeout(devv)
                    }, 1000);
                }

                else {
                    checker = true
                    fool.style.display = 'none';
                    moon.style.display = 'none';
                    tower.style.display = 'none';
                    death.style.display = 'none';
                    devil.removeAttribute('style')
                    let mo = setTimeout(() => {
                        devil.setAttribute('style', 'transform:rotateY(180deg)')
                        document.getElementById('3').outerHTML = "<div id='3' style='transform:rotateY(180deg);'>Ψ Infernal Chains Bind Your Soul Prepare to Burn Ψ</div>"
                        soul("0")
                        crash2()
                        clearTimeout(mo)
                    }, 1000);
                }
            }
            const towerr = () => {
                if (arr[4] === call) {
                    checker = true
                    fool.style.display = 'none';
                    tower.style.display = 'none';
                    death.style.display = 'none';
                    devil.style.display = 'none';
                    moon.removeAttribute('style')
                    let moo = setTimeout(() => {
                        moon.setAttribute('style', 'transform:rotateY(180deg)')
                        document.getElementById('2').outerHTML = "<div id='2' style='transform:rotateY(180deg);'>☾ Moon’s Whisper +10 Souls Embraced ☾</div>"
                        soul("+10")
                        clearTimeout(moo)
                    }, 1000);
                }
                else if (x === y) {
                    checker = true
                    soul("+10")
                    fool.style.display = 'none'
                    moon.style.display = 'none'
                    devil.style.display = 'none'
                    tower.style.display = 'none'
                    death.style.display = 'none'
                }
                else {
                    checker = true
                    fool.style.display = 'none';
                    devil.style.display = 'none';
                    tower.style.display = 'none';
                    death.style.display = 'none';
                    moon.removeAttribute('style')
                    let to = setTimeout(() => {
                        moon.setAttribute('style', 'transform:rotateY(180deg)')
                        document.getElementById('2').outerHTML = "<div id='2' style='transform:rotateY(180deg);'>☾ Moon’s Shadow -10 Souls Vanished ☾</div>"
                        soul("-10")
                        clearTimeout(to)
                    }, 1000);
                }
            }

            if (check === 0) {
                devil.addEventListener('click', devill);
            }
            else if (check === 1) {
                moon.addEventListener('click', moonn);
            }
            else if (check === 2) {
                fool.addEventListener('click', fooll);
            }
            else if (check === 3) {
                death.addEventListener('click', deathh);
            }
            else if (check === 4) {
                tower.addEventListener('click', towerr);
            }
            const expire_time = new Date();
            expire_time.setTime(expire_time.getTime() + (2 * 24 * 60 * 60 * 1000))
            let expire_date = expire_time.toUTCString()
            let soul_val = atob(get_soul(soul_check))
            let soul_val_num = Number.parseInt(soul_val)
            let stop = setInterval(() => {
                if (checker == false) {
                    soul_val_num = soul_val_num - 1
                    document.cookie = `Souls=${btoa(soul_val_num)}; expires=${expire_date}; path=/`;
                }
                else {
                    clearInterval(stop)
                }
            }, 1000)
            //Hint: I didn't use removeEventListener
            let setu = setTimeout(() => {
                if (fool.style.display === 'none' || moon.style.display === 'none' || devil.style.display === 'none' || tower.style.display === 'none' || death.style.display === 'none') {
                    fool.removeAttribute('style')
                    moon.removeAttribute('style')
                    devil.removeAttribute('style')
                    tower.removeAttribute('style')
                    death.removeAttribute('style')
                    document.getElementById('1').hidden = true
                    document.getElementById('2').hidden = true
                    document.getElementById('3').hidden = true
                    document.getElementById('4').hidden = true
                    document.getElementById('5').hidden = true

                }
            }, 13000)
            if (count === 2) {
                clearTimeout(setu);
            }
            if (count === 3) {
                document.getElementsByClassName('devil-face')[0].outerHTML = `<div class="devil-face">𓆩😈𓆪</div>`;
                location.href = "menu.html"
                clearInterval(sin);
            }
            count++;
        }, 13000);
    }
    else {
        const pd = (callback) => {
            while (true) {
                callback()
            }
        }
        const pd2 = () => {
            while (true) {
                console.error("Forbidden by infernal decree")
            }
        }
        pd(pd2)
    }
})
