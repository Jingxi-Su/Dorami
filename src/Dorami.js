import string from './css.js'


    
const player = {
    id: undefined,
    n: 1,
    time: 40,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')

    },
    init: () => {
        player.ui.demo.innerText = string.substring(0, player.n)
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.play()
        player.bindEvents()
    },
    events: {
        '#btnPause': onclick = 'pause',
        '#btnPlay': onclick = 'play',
        '#btnSlow': onclick = 'slow',
        '#btnNormal': onclick = 'normal',
        '#btnFast': onclick = 'fast'
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
            
        }
        
        document.querySelector('#btnPause').onclick = player.pause
        document.querySelector('#btnPlay').onclick = player.play
        document.querySelector('#btnSlow').onclick = player.slow
        document.querySelector('#btnNormal').onclick = player.normal
        document.querySelector('#btnFast').onclick = player.fast
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substring(0, player.n)
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.ui.demo.scrollTop = demo.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 40
        player.play()
    }
}

player.init()

