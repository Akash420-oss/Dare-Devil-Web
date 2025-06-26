
const rules=()=>{
    const r=document.getElementById('r')
    r.click();
};
const go=(val)=>{
const a=document.body.firstElementChild;
const b=document.body.firstElementChild.nextElementSibling;
    if(val===1){
        if(document.cookie.includes('Souls')==true){
            location.href="menu.html"
        }
        else{
        a.click();
        }
    }
    else{
       b.click()
    
    }
}
const p=(c)=>{
    let str=[]
    if(c===1){
for(let i=887;i<904;i++){
    str.push(document.head.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling['innerHTML'].at(i));
}
location.href=str.toString().replaceAll(',','');
    }
    else{
    (c==0)?document.getElementById('e').disabled=true:history.back();
}
}

