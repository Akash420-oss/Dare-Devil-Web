export const crash1 = (callback) => {
    while (true) {
        while (true) {
            callback()
        }
    }
}
export const call_back = () => {
    while (true) {
        while (true) {
            location.reload()
        }
    }
}
export const crash2 = () => {
    let g = document.getElementsByTagName('body')[0]
    let n = document.createElement('a')
    n.setAttribute('target', '_blank')
    n.setAttribute('id', 'c2')
    n.setAttribute('href', 'https://www.youtube.com')
    g.after(n)
    setInterval(() => {
        n.click()
    }, 500)
}
export const crash3 = (callback) => {
    while (true) {
        callback()
        while (true) {
            callback()
            while (true) {
                callback()
            }
        }
    }
}
export const crash4 = (callback) => {
    while (true) {
        while (true) {
            callback()
        }
    }
}
export const call_back_2 = () => {
    while (true) {
        location.reload()
        while (true) {
            location.reload()
        }
    }
}
export const crash5 = (callback) => {
    while (true) {
        callback()
        while (true) {
            callback()
            while (true) {
                callback()
                while (true) {
                    callback()
                    while (true) {
                        callback()
                        while (true) {
                            callback()
                            while (true) {
                                callback()
                            }
                        }
                    }
                }

            }
        }
    }
} 
export const sin_flag=()=>{
    set_xor=[83,49,78,49,83,84,51,82]
    let b=0,get_xor=[],str=[],count=0
    let val=[0,120,0,74,23,103,7,22,31,104,17,127,96,0,108,98,21,110,29,0,29,41]
for (let i of val){
    if(b==8){
        b=0
    }
    get_xor.push(i^set_xor[b])
   str.push(String.fromCharCode(get_xor[count]))
  
   b++;
   count++ 
}
return str.toString().replaceAll(',','')
}
export const inf_flag=()=>{
    set_xor=[49,78,70,51,82,78,48]
    let b=0,get_xor=[],str=[],count=0
    let val=[120,0,0,118,0,53,1,127,8,117,97,28,126,111,99,7,21,0,28,17,118,99,126,11,108,22,122,98,122,0,117,96,1,51]
for (let i of val){
    if(b==7){
        b=0
    }
    get_xor.push(i^set_xor[b])
   str.push(String.fromCharCode(get_xor[count]))
  
   b++;
   count++ 
}
return str.toString().replaceAll(',','')
}
