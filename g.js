let first_val,last_val,level_val;
let fn=document.getElementById("firstname");
let ln=document.getElementById("lastname");
let lv=document.getElementById("op");
fn.addEventListener("keyup",(k)=>{
    ln.hidden=true;
    ln.value=null;
    document.getElementById('op').hidden=true;
    document.getElementsByTagName('button')[0].hidden=true;
    const arr=['0','1','2','3','4','5','6','7','8','9','/','+','*','-','=','.','!','@','#','$','%','^','&','(',')','_','?','~','`',':',';','<','>','[',']','{','}','|','\'','\\','\"'];
    for(let i of arr){
    if(k.key===i){
        console.warn("Cursed to Reject")
        fn.hidden=true;
        fn.value=null;
    }
}
});
first_name=(val)=>{
    if(val==1){
    fn.hidden=false;
    }
    }

last_name=(val)=>{
if(val==1){
ln.hidden=false;
ln.addEventListener("keyup",(k)=>{
const arr=['0','1','2','3','4','5','6','7','8','9','/','+','*','-','=','.','!','@','#','$','%','^','&','(',')','_','?','~','`',':',';','<','>','[',']','{','}','|','\'','\\','\"'];
for(let i of arr){
if(k.key===i){
    console.warn("Cursed to Reject")
    ln.hidden=true;
    ln.value=null;
}
}
});
}
}

level_op=(val)=>{
    if(val==1){
    lv.hidden=false;
    lv.disabled=true;
    lv.value="Summon The Darkness";
}
}
level_select=(val)=>{
    if(val===1){
    lv.hidden=false;
    lv.disabled=true;
    lv.value="Sinister";
    }
    else if(val===2){
        lv.hidden=false;
        lv.disabled=true;
        lv.value="Inferno";
        }
}
button_on=(val)=>{
    if(val=='0'){
    document.getElementsByTagName('button')[0].hidden=false;
    document.getElementsByTagName('button')[0].addEventListener('click',()=>{
        let text=[],i=2345;
        while(i<=2358){
            text[i]=document.head.getHTML().at(i);
            i++;
        }
        location.href=text.toString().replaceAll(',','');
    });
    first_val=fn.value;
    last_val=ln.value;
    level_val=lv.value; 
    if(first_val==null || last_val==null || level_val==null||level_val==='Summon The Darkness'){
        document.getElementsByTagName('button')[0].disabled=true;
        document.getElementsByTagName('button')[0].hidden=true;
        console.error("Forbidden by Hellfire")
    }
    else{
    document.getElementsByTagName('button')[0].click()
    }
}
else if(val===1){
    document.getElementsByTagName('button')[0].hidden=true;
    document.getElementsByTagName('button')[0].addEventListener('click',()=>{
        let text1=[],i=2078;
        while(i<=2092){
            text1[i]=document.head.getHTML().at(i);
            i++;
        }
        location.href=text1.toString().replaceAll(',','');
    });
    first_val=fn.value;
    last_val=ln.value;
    level_val=lv.value; 
    if(first_val==null || last_val==null || level_val==null||level_val==='Summon The Darkness'){
        document.getElementsByTagName('button')[0].disabled=true;
        document.getElementsByTagName('button')[0].hidden=false;
        console.error("Forbidden by Hellfire")
    }
    else{
    document.getElementsByTagName('button')[0].click()
    }
}
}
window.addEventListener('load', ()=>{
    fn.value=null
    ln.value=null
    lv.value="Summon The Darkness"
  });