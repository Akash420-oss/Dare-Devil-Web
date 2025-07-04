import { crash1, call_back, crash2, crash3, crash4, call_back_2, crash5, inf_flag } from './c.js'
let arr1 = [], devil_call
window.mode
let devil_card = `<div class='symbol'>𓄋</div>
<div class='card-title'></div>
<div class='card-title'>The Devil</div>
<div class='glow-number'>15</div>`

let fool_card = `<div class='symbol'>🜁</div>
  <div class='card-title'></div>
  <div class='card-title'>The Fool</div>
  <div class='glow-number'>0</div>`

let moon_card = `<div class='symbol'>☾</div>
  <div class='card-title'></div>
 <div class='card-title'>The Moon</div>
 <div class='glow-number'>18</div>`

let tower_card = `<div class='symbol'>🗲</div>
  <div class='card-title'></div>
  <div class='card-title'>The Tower</div>
  <div class='glow-number'>16</div>`
let death_card = `<div class='symbol'>☠</div>
 <div class='card-title'></div>
  <div class='card-title'>The Death</div>
  <div class='glow-number'>13</div>`
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
const soul = (souls) => {
  const expire_time = new Date();
  expire_time.setTime(expire_time.getTime() + (2 * 24 * 60 * 60 * 1000))
  let expire_date = expire_time.toUTCString()
  let soul_val = atob(get_soul(soul_check))
  let soul_val_num = Number.parseInt(soul_val)
  if (souls === "+50") {
    soul_val_num = soul_val_num + 50
  }
  else if (souls === "-50") {
    soul_val_num = soul_val_num - 50
  }
  else if (souls === "0") {
    soul_val_num = 0
  }
  while (num == 1) {
    document.cookie = `Souls=${btoa('0')}; expires=${expire_date}; path=/`;
  }
  document.cookie = `Souls=${btoa(soul_val_num)}; expires=${expire_date}; path=/`;
}

const infer = async () => {
  if (document.cookie.includes('Diabolical_Host') == true && document.cookie.includes('Level') == true && document.cookie.includes('Souls') == true) {
    const level_change = (level_name) => {
      const expire_time = new Date()
      expire_time.setTime(expire_time.getTime() + (2 * 24 * 60 * 60 * 1000))
      let expire_date = expire_time.toUTCString()
      document.cookie = `Level=${level_name};expires=${expire_date}`
    }
    if (document.cookie.includes('Level=Inferno') == false) {
      level_change("Inferno")
    }
    let card_1 = document.getElementsByClassName('tarot-card')[0], card_2 = document.getElementsByClassName('tarot-card')[1];
    let card_change = Number.parseInt(Math.random() * 20)
    let set = Number.parseInt(Math.random() * 5)
    let arr = []
    for (let i = 0; i < 5; i++) {
      arr.push(Number.parseInt(Math.random() * 14));
    }
    arr1 = arr
    let i = 0
    do {
      devil_call = arr[i];
      i++;
    } while (i <= set)

    const devill = () => {
      if (arr[0] === devil_call) {
        document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${devil_card.replace("<div class='card-title'></div>", "<div class='card-title'>Ψ You Embrace the Devil’s Power +50 Soul acquired Ψ</div>")}</div>`
        soul("+50")
      }

      else {

        document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${devil_card.replace("<div class='card-title'></div>", "<div class='card-title'>Ψ Your Will Weakens, and the Devil Smiles –50 Soul Comsumed Ψ</div>")}</div>`
        soul("-50")
        crash2()
      }


    }

    const moonn = () => {
      if (arr[1] === devil_call) {
        document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${moon_card.replace("<div class='card-title'></div>", "<div class='card-title'>☾ The Moon’s Whisper +50 Souls Embraced ☾</div>")}</div>`
        soul("+50")
      }

      else {
        document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${moon_card.replace("<div class='card-title'></div>", "<div class='card-title'>☾ The Moon’s Shadow -50 Souls Vanished ☾</div>")}</div>`
        soul("-50")
        crash1(call_back)
      }
    }
    const fooll = () => {
      if (arr[2] === devil_call) {
        document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${fool_card.replace("<div class='card-title'></div>", "<div class='card-title'>🜂 The Fool’s Price Paid +50 Souls Claimed 🜂</div>")}</div>`
        soul("+50")
      }

      else {
        document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${fool_card.replace("<div class='card-title'></div>", "<div class='card-title'>🜂 Fool’s Folly No Souls Gained, -50 Lost 🜂</div>")}</div>`
        soul("-50")
        crash3(call_back_2)
      }
    }

    const deathh = () => {
      if (arr[3] === devil_call) {
        document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${death_card.replace("<div class='card-title'></div>", "<div class='card-title'>☠ The Realm of Rebirth +50 Souls Gained, Transformation Through Every End ☠</div>")}</div>`
        soul("+50")
      }

      else {
        document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${death_card.replace("<div class='card-title'></div>", "<div class='card-title'>☠ No souls gained, for you are no longer among them. You have failed ☠</div>")}</div>`
        soul("-50")
        crash5(call_back_2)
      }
    }
    const towerr = () => {
      if (arr[4] === devil_call) {
        document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${tower_card.replace("<div class='card-title'></div>", "<div class='card-title'>🗲 Tower Speaks +50 Souls Claimed in Ruin 🗲</div>")}</div>`
        soul("+50")
      }
      else {
        document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${tower_card.replace("<div class='card-title'></div>", "<div class='card-title'>🗲 Tower Calls -50 Cursed Souls Devoured 🗲</div>")}</div`
        soul("-50")
        crash4(call_back)
      }
    }
    const card_changer = () => {
      setTimeout(() => {
        document.getElementsByClassName('devil-face')[0].outerHTML = `<div class="devil-face">${devil_call}</div>`;
        if (card_change === 0) {
          card_1.innerHTML = devil_card
          card_2.innerHTML = fool_card
          card_1.addEventListener('click', devill)
          card_2.addEventListener('click', fooll)
        }
        else if (card_change === 1) {
          card_1.innerHTML = devil_card
          card_2.innerHTML = moon_card
          card_1.addEventListener('click', devill)
          card_2.addEventListener('click', moonn)
        }
        else if (card_change === 2) {
          card_1.innerHTML = devil_card
          card_2.innerHTML = tower_card
          card_1.addEventListener('click', devill)
          card_2.addEventListener('click', towerr)
        }
        else if (card_change === 3) {
          card_1.innerHTML = devil_card
          card_2.innerHTML = death_card
          card_1.addEventListener('click', devill)
          card_2.addEventListener('click', deathh)
        }
        else if (card_change === 4) {
          card_1.innerHTML = death_card
          card_2.innerHTML = devil_card
          card_1.addEventListener('click', deathh)
          card_2.addEventListener('click', devill)
        }
        else if (card_change === 5) {
          card_1.innerHTML = death_card
          card_2.innerHTML = fool_card
          card_1.addEventListener('click', deathh)
          card_2.addEventListener('click', fooll)
        }
        else if (card_change === 6) {
          card_1.innerHTML = death_card
          card_2.innerHTML = moon_card
          card_1.addEventListener('click', deathh)
          card_2.addEventListener('click', moonn)
        }
        else if (card_change === 7) {
          card_1.innerHTML = death_card
          card_2.innerHTML = tower_card
          card_1.addEventListener('click', deathh)
          card_2.addEventListener('click', towerr)
        }
        else if (card_change === 8) {
          card_1.innerHTML = fool_card
          card_2.innerHTML = death_card
          card_1.addEventListener('click', fooll)
          card_2.addEventListener('click', deathh)
        }
        else if (card_change === 9) {
          card_1.innerHTML = fool_card
          card_2.innerHTML = devil_card
          card_1.addEventListener('click', fooll)
          card_2.addEventListener('click', devill)
        }
        else if (card_change === 10) {
          card_1.innerHTML = fool_card
          card_2.innerHTML = moon_card
          card_1.addEventListener('click', fooll)
          card_2.addEventListener('click', moonn)
        }
        else if (card_change === 11) {
          card_1.innerHTML = fool_card
          card_2.innerHTML = tower_card
          card_1.addEventListener('click', fooll)
          card_2.addEventListener('click', towerr)
        }
        else if (card_change === 12) {
          card_1.innerHTML = moon_card
          card_2.innerHTML = devil_card
          card_1.addEventListener('click', moonn)
          card_2.addEventListener('click', devill)
        }
        else if (card_change === 13) {
          card_1.innerHTML = moon_card
          card_2.innerHTML = death_card
          card_1.addEventListener('click', moonn)
          card_2.addEventListener('click', deathh)
        }
        else if (card_change === 14) {
          card_1.innerHTML = moon_card
          card_2.innerHTML = fool_card
          card_1.addEventListener('click', moonn)
          card_2.addEventListener('click', fooll)
        }
        else if (card_change === 15) {
          card_1.innerHTML = moon_card
          card_2.innerHTML = tower_card
          card_1.addEventListener('click', moonn)
          card_2.addEventListener('click', towerr)
        }
        else if (card_change === 16) {
          card_1.innerHTML = tower_card
          card_2.innerHTML = devil_card
          card_1.addEventListener('click', towerr)
          card_2.addEventListener('click', devill)
        }
        else if (card_change === 17) {
          card_1.innerHTML = tower_card
          card_2.innerHTML = death_card
          card_1.addEventListener('click', towerr)
          card_2.addEventListener('click', deathh)
        }
        else if (card_change === 18) {
          card_1.innerHTML = tower_card
          card_2.innerHTML = fool_card
          card_1.addEventListener('click', towerr)
          card_2.addEventListener('click', fooll)
        }
        else if (card_change === 19) {
          card_1.innerHTML = tower_card
          card_2.innerHTML = moon_card
          card_1.addEventListener('click', towerr)
          card_2.addEventListener('click', moonn)
        }
      }, 13000);
    }
    const devil_mode_set = () => {
      let i = 0
      do {
        if (arr1[i] === devil_call) {
          break;
        }
        i++
      } while (i < arr1.length)
      let tarot_card
      if (i === 0) {
        tarot_card = "The Death"
      }
      else if (i === 1) {
        tarot_card = "The Fool"
      }
      else if (i === 2) {
        tarot_card = "The Moon"
      }
      else if (i === 3) {
        tarot_card = "The Devil"
      }
      else if (i === 4) {
        tarot_card = "The Tower"
      }
      console.log("\x1b[0;31m𓆩<--------Đēꝟīł ᛗꝋđē------->𓆪\x1b[0m")
      console.log(`\t\t\t\x1b[0;31mĐēꝟīł:\x1b[0m \x1b[0;32m${devil_call}\x1b[0m`)
      console.log(`\t\t\t\x1b[0;33mᥴꪖ᥅ᦔ:\x1b[0m \x1b[0;35m${tarot_card}\x1b[0m`)
      console.log("\x1b[0;31m𓆩<--------------------------->𓆪\x1b[0m")

      let dev = setTimeout(() => {
        console.clear()
        clearTimeout(dev)
      }, 3000);
    }
    let set_mode = () => {
      setTimeout(() => {
        window.mode = "devil"
      }, 3000)
    }
    const angel_mode_set = () => {
      let i = 0
      do {
        if (arr1[i] === devil_call) {
          break;
        }
        i++
      } while (i < arr1.length)
      let tarot_card
      if (i === 0) {
        tarot_card = "The Devil"
      }
      else if (i === 1) {
        tarot_card = "The Moon"
      }
      else if (i === 2) {
        tarot_card = "The Fool"
      }
      else if (i === 3) {
        tarot_card = "The Death"
      }
      else if (i === 4) {
        tarot_card = "The Tower"
      }
      console.log("\x1b[0;34m꧁༺------𝓐𝓷𝓰𝓮𝓵 𝓜𝓸𝓭𝓮-------༻꧂\x1b[0m")
      console.log(`\t\t\t\x1b[0;36m𝒜𝓃𝑔𝑒𝓁:\x1b[0m \x1b[0;31m${devil_call}\x1b[0m`)
      console.log(`\t\t\t\x1b[0;35m𝓒𝓪𝓻𝓭:\x1b[0m \x1b[0;32m${tarot_card}\x1b[0m`)
      console.log("\x1b[0;34m꧁༺----------------------༻꧂\x1b[0m")
      let ang = setTimeout(() => {
        console.clear()
        clearTimeout(ang)
      }, 3000);
    }
    const mode_change = () => {
      setTimeout(() => {
        if (window.mode === "angel") {
          angel_mode_set()
          card_changer()
        }
        else if (window.mode === "devil") {
          devil_mode_set()
          card_changer()
        }
        else {
          card_changer()
        }
      }, 8000)
    }
    await set_mode()
    await mode_change()
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
}

infer().then(() => {
  setTimeout(() => {
    location.href = "menu.html"
  }, 40000);
});

window.set_card = (card) => {

  const devill = () => {
    if (arr1[0] === devil_call) {
      document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${devil_card.replace("<div class='card-title'></div>", "<div class='card-title'>Ψ You Embrace the Devil’s Power +50 Soul acquired Ψ</div>")}</div>`
      soul("+50")
    }

    else {

      document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${devil_card.replace("<div class='card-title'></div>", "<div class='card-title'>Ψ Your Will Weakens, and the Devil Smiles –50 Soul Comsumed Ψ</div>")}</div>`
      soul("-50")
      crash2()
    }


  }

  const moonn = () => {
    if (arr1[1] === devil_call) {
      document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${moon_card.replace("<div class='card-title'></div>", "<div class='card-title'>☾ The Moon’s Whisper +50 Souls Embraced ☾</div>")}</div>`
      soul("+50")
    }

    else {
      document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${moon_card.replace("<div class='card-title'></div>", "<div class='card-title'>☾ The Moon’s Shadow -50 Souls Vanished ☾</div>")}</div>`
      soul("-50")
      crash1(call_back)
    }
  }
  const fooll = () => {
    if (arr1[2] === devil_call) {
      document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${fool_card.replace("<div class='card-title'></div>", "<div class='card-title'>🜂 The Fool’s Price Paid +50 Souls Claimed 🜂</div>")}</div>`
      soul("+50")
    }

    else {
      document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${fool_card.replace("<div class='card-title'></div>", "<div class='card-title'>🜂 Fool’s Folly No Souls Gained, -50 Lost 🜂</div>")}</div>`
      soul("-50")
      crash3(call_back_2)
    }
  }

  const deathh = () => {
    if (arr1[3] === devil_call) {
      document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${death_card.replace("<div class='card-title'></div>", "<div class='card-title'>☠ The Realm of Rebirth +50 Souls Gained, Transformation Through Every End ☠</div>")}</div>`
      soul("+50")
    }

    else {
      document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${death_card.replace("<div class='card-title'></div>", "<div class='card-title'>☠ No souls gained, for you are no longer among them. You have failed ☠</div>")}</div>`
      soul("-50")
      crash5(call_back_2)
    }
  }
  const towerr = () => {
    if (arr1[4] === devil_call) {
      document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${tower_card.replace("<div class='card-title'></div>", `<div class='card-title' style='font-size: 19px'>🗲 Tower Speaks ${inf_flag()} 🗲</div>`)}</div>`
      soul("+50")
    }
    else {
      document.getElementsByClassName('tarot-table')[0].innerHTML = `<div class='tarot-card'>${tower_card.replace("<div class='card-title'></div>", "<div class='card-title'>🗲 Tower Calls -50 Cursed Souls Devoured 🗲</div>")}</div`
      soul("-50")
      crash4(call_back)
    }
  }
  if (card == "devil") {
    let devil_set_card = document.getElementsByClassName('tarot-card')[1]
    let devil_set = document.createElement('div')
    devil_set.setAttribute('class', 'tarot-card')
    devil_set_card.after(devil_set)
    devil_set.innerHTML = death_card
    document.getElementsByClassName('tarot-card')[2].addEventListener('click', devill)
  }
  else if (card == "fool") {
    let fool_set_card = document.getElementsByClassName('tarot-card')[1]
    let fool_set = document.createElement('div')
    fool_set.setAttribute('class', 'tarot-card')
    fool_set_card.after(fool_set)
    fool_set.innerHTML = fool_card
    document.getElementsByClassName('tarot-card')[2].addEventListener('click', fooll)
  }
  else if (card == "moon") {
    let moon_set_card = document.getElementsByClassName('tarot-card')[1]
    let moon_set = document.createElement('div')
    moon_set.setAttribute('class', 'tarot-card')
    moon_set_card.after(moon_set)
    moon_set.innerHTML = moon_card
    document.getElementsByClassName('tarot-card')[2].addEventListener('click', moonn)
  }
  else if (card == "tower") {
    let tower_set_card = document.getElementsByClassName('tarot-card')[1]
    let tower_set = document.createElement('div')
    tower_set.setAttribute('class', 'tarot-card')
    tower_set_card.after(tower_set)
    tower_set.innerHTML = tower_card
    document.getElementsByClassName('tarot-card')[2].addEventListener('click', towerr)
  }
  else if (card == "death") {
    let death_set_card = document.getElementsByClassName('tarot-card')[1]
    let death_set = document.createElement('div')
    death_set.setAttribute('class', 'tarot-card')
    death_set_card.after(death_set)
    death_set.innerHTML = death_card
    document.getElementsByClassName('tarot-card')[2].addEventListener('click', deathh)
  }
}

