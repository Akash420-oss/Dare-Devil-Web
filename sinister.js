
let arr=[],count=0,x=0,y=1;
let fool=document.getElementsByClassName('tarot-card')[0];
let moon=document.getElementsByClassName('tarot-card')[1];
let devil=document.getElementsByClassName('tarot-card')[2];
let tower=document.getElementsByClassName('tarot-card')[3];
let death=document.getElementsByClassName('tarot-card')[4];
 let sin=setInterval(()=>{
for(let i=0;i<5;i++){
arr[i]=Number.parseInt(Math.random()*14);
}
let val=Number.parseInt(Math.random()*5),call,i=0;
do{
call=arr[i];
i++; 
}while(i<val)
document.getElementsByClassName('devil-face')[0].outerHTML=`<div class="devil-face">${call}</div>`;
let check=Number.parseInt(Math.random()*5);
devill=()=>{
    if(arr[0]===call){
    moon.style.display='none';
    tower.style.display='none';
    devil.style.display='none';
    fool.style.display='none';
    death.removeAttribute('style')
    let t=setTimeout(()=>{
    death.setAttribute('style','transform:rotateY(180deg)')
    document.getElementById('5').outerHTML="<div id='5' style='transform:rotateY(180deg);'>☠ Death’s Domain No Souls Gained, Only Endless Emptiness ☠</div>"
    clearTimeout(t)
    },1000);
    }

    else{
        tower.style.display='none';
        devil.style.display='none';
        moon.style.display='none';
        fool.style.display='none';
        death.removeAttribute('style')
        let d=setTimeout(()=>{
        death.setAttribute('style','transform:rotateY(180deg)')
        document.getElementById('5').outerHTML="<div id='5' style='transform:rotateY(180deg);'>☠ No souls gained, for you are no longer among them. You have failed ☠</div>"
        clearTimeout(d)
        },1000);
    }
}
moonn=()=>{
    if(arr[1]===call){
    devil.style.display='none';
    tower.style.display='none';
    death.style.display='none';
    moon.style.display='none';
    fool.removeAttribute('style')
    let f=setTimeout(()=>{
    fool.setAttribute('style','transform:rotateY(180deg)')
    document.getElementById('1').outerHTML="<div id='1' style='transform:rotateY(180deg);'>🜂 The Fool’s Price Paid +10 Souls Claimed 🜂</div>"
    clearTimeout(f)
    },1000);
    }
    else if(x===y){
        console.log("Hack")
    }
    
    else{
        moon.style.display='none';
        devil.style.display='none';
        death.style.display='none';
        tower.style.display='none';
        fool.removeAttribute('style')
        let de=setTimeout(()=>{
        fool.setAttribute('style','transform:rotateY(180deg)')
        document.getElementById('1').outerHTML="<div id='1' style='transform:rotateY(180deg);'>🜂 Fool’s Folly No Souls Gained, -10 Lost 🜂</div>"
        clearTimeout(de)
        },1000);
        
    }
    
}
fooll=()=>{
    if(arr[2]===call){
    death.style.display='none';
    fool.style.display='none';
    devil.style.display='none';
    moon.style.display='none';
    tower.removeAttribute('style')
    let dev=setTimeout(()=>{
    tower.setAttribute('style','transform:rotateY(180deg)')
    document.getElementById('4').outerHTML="<div id='4' style='transform:rotateY(180deg);'>🗲 Tower Speaks +10 Souls Claimed in Ruin 🗲</div>"
    clearTimeout(dev)
    },1000);
    }
    else if(x===y){
        console.log("Hack")
    }
    else{
        moon.style.display='none';
        devil.style.display='none';
        fool.style.display='none';
        death.style.display='none';
        tower.removeAttribute('style')
        let fo=setTimeout(()=>{
        tower.setAttribute('style','transform:rotateY(180deg)')
        document.getElementById('4').outerHTML="<div id='4' style='transform:rotateY(180deg);'>🗲 Tower Calls -10 Cursed Souls Devoured 🗲</div>"
        clearTimeout(fo)
        },1000);
    }
}
deathh=()=>{
    if(arr[3]===call){
    fool.style.display='none';
    tower.style.display='none';
    death.style.display='none';
    moon.style.display='none';
    devil.removeAttribute('style')
    let devv=setTimeout(()=>{
    devil.setAttribute('style','transform:rotateY(180deg)')
    document.getElementById('3').outerHTML="<div id='3' style='transform:rotateY(180deg);'>Ψ The Devil Claims Your Soul Ψ</div>"
    clearTimeout(devv)
    },1000);
    }

    else{
        fool.style.display='none';
        moon.style.display='none';
        tower.style.display='none';
        death.style.display='none';
        devil.removeAttribute('style')
        let mo=setTimeout(()=>{
        devil.setAttribute('style','transform:rotateY(180deg)')
        document.getElementById('3').outerHTML="<div id='3' style='transform:rotateY(180deg);'>Ψ Infernal Chains Bind Your Soul Prepare to Burn Ψ</div>"
        clearTimeout(mo)
        },1000);
    }
}
towerr=()=>{
    if(arr[4]===call){
    fool.style.display='none';
    tower.style.display='none';
    death.style.display='none';
    devil.style.display='none';
    moon.removeAttribute('style')
    let moo=setTimeout(()=>{
    moon.setAttribute('style','transform:rotateY(180deg)')
    document.getElementById('2').outerHTML="<div id='2' style='transform:rotateY(180deg);'>☾ Moon’s Whisper +10 Souls Embraced ☾</div>"
    clearTimeout(moo)
    },1000);
    }
    else if(x===y){
        console.log("Hack")
    }
    else{
        fool.style.display='none';
        devil.style.display='none';
        tower.style.display='none';
        death.style.display='none';
        moon.removeAttribute('style')
        let to=setTimeout(()=>{
        moon.setAttribute('style','transform:rotateY(180deg)')
        document.getElementById('2').outerHTML="<div id='2' style='transform:rotateY(180deg);'>☾ Moon’s Shadow -10 Souls Vanished ☾</div>"
        clearTimeout(to)
        },1000);
    }
}
// check=0
if(check===0){
devil.addEventListener('click',devill);
}
else if(check===1){
moon.addEventListener('click',moonn);
}
else if(check===2){
fool.addEventListener('click',fooll);
}
else if(check===3){
death.addEventListener('click',deathh);     
}
else if(check===4){
tower.addEventListener('click',towerr);            
}
//Hint: I didn't use removeEventListener
let setu=setTimeout(()=>{
    if(fool.style.display==='none' || moon.style.display==='none' || devil.style.display==='none' || tower.style.display==='none' || death.style.display==='none'){
    fool.removeAttribute('style')
    moon.removeAttribute('style')
    devil.removeAttribute('style')
    tower.removeAttribute('style')
    death.removeAttribute('style')
    document.getElementById('1').hidden=true
    document.getElementById('2').hidden=true
    document.getElementById('3').hidden=true
    document.getElementById('4').hidden=true
    document.getElementById('5').hidden=true

    }
    },13000)
    if(count===2){
        clearTimeout(setu);
    }
if(count===2){
    clearInterval(sin);
}
count++;
},13000);
