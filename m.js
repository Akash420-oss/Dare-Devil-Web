const get_soul=()=>{
    let arr=[];
    if(document.cookie.includes('Souls')==true){
        let s=document.cookie.indexOf('Souls')
        let e=s+6;let stop=e+4
        for(;e<stop;e++){
        arr[e]=document.cookie.at(e)
    }
}
let soul=arr.toString().replaceAll(',','')
return atob(soul);
}
const level_change=(level_name)=>{
   const expire_time=new Date()
   expire_time.setTime(expire_time.getTime() + (2*24*60*60*1000))
   let expire_date=expire_time.toUTCString()
   document.cookie=`Level=${level_name};expires=${expire_date}`
}
const host_name=()=>{
    let arr=[];
    if(document.cookie.includes('Diabolical_Host')==true){
        let d=document.cookie.indexOf('Diabolical_Host')
        let e=d+16;
        do{
            arr.push(document.cookie.at(e));
            e++; 
        }while(document.cookie.at(e)!=';')
}
return arr.toString().replaceAll(',','')
}
let get_level
if(document.cookie.includes('Level')==true){
    if(document.cookie.includes('Level=Sinister')==true){
      get_level=1
    }
    else if(document.cookie.includes('Level=Inferno')==true){
get_level=2
    }
    else{
        get_level=0
    }
}
let level_check
document.getElementById('scores').innerHTML=`<strong>Souls:</strong> ☠ ${get_soul()}`
document.getElementById('name').innerHTML=`<strong>Diabolical Host:</strong> ◈ ${host_name()}`
if(get_level==1){
document.getElementsByClassName('current')[0].outerHTML="<div class='current'>CURRENT LEVEL → Level 1: SINISTER</div>"
level_check=1
}
else if(get_level==2){
document.getElementsByClassName('current')[0].outerHTML="<div class='current'>CURRENT LEVEL → Level 2: INFERNO</div>"
level_check=2
}
let set_level
const select_level=(level)=>{
    let sinister=document.getElementById('sini');
    let inferno=document.getElementById('infer');
if(level==1){
   if(level_check==1){
    sinister.outerHTML=null
    if(set_level==1){
        level_change("Sinister")
        location.href="sinister_level.html" 
        sinister.click() 
    }
}
else{
    level_change("Sinister")
    location.href="sinister_level.html" 
    sinister.click() 

    }
} 
   
else if(level==2){
    if(level_check==2){
        inferno.outerHTML=null
        if(set_level==2){
            level_change("Inferno")
            location.href="level_inferno.html"
            inferno.click() 
        }
    }
    else{
        level_change("Inferno")
        location.href="level_inferno.html"
        inferno.click()
        }
       
}
}
window.addEventListener('load',()=>{
    if(document.cookie.includes('Diabolical_Host')==false && document.cookie.includes('Level')==false && document.cookie.includes('Souls')==false){
    location.href="not_found.html"
    }
});
