window.addEventListener('load',()=>{
if(document.cookie.includes('Diabolical_Host')==true && document.cookie.includes('Level')==true && document.cookie.includes('Souls')==true){
location.href="no_souls.html"
const expire_time=new Date();
expire_time.setTime(expire_time.getTime() + (2*24*60*60*1000))
let expire_date=expire_time.toUTCString()
document.cookie=`Souls=${btoa('0')}; expires=${expire_date}; path=/`;
}
else{
if(document.cookie.includes('Sinister')==true){
const expire_time=new Date();
expire_time.setTime(expire_time.getTime() + (2*24*60*60*1000))
let expire_date=expire_time.toUTCString()
document.cookie=`Souls=${btoa('99')}; expires=${expire_date}; path=/`;
let s=setTimeout(()=>{
location.href="sinister_level.html"
},13000);
}
else if(document.cookie.includes('Inferno')==true){
const expire_time=new Date();
expire_time.setTime(expire_time.getTime() + (2*24*60*60*1000))
let expire_date=expire_time.toUTCString()
document.cookie=`Souls=${btoa('99')}; expires=${expire_date}; path=/`;
let i=setTimeout(()=>{
 location.href="level_inferno.html"
},13000); 
}
}
})