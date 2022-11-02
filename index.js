const logo = document.getElementById('logo')
const brx = document.getElementById('img-brx')
const fresh = document.getElementById('img-fresh')
const winner = document.getElementById('img-winner')
const biamo = document.getElementById('img-biamo')
const megapari = document.getElementById('img-mega')
const insta = document.getElementById('insta')
const youtube = document.getElementById('youtube')
const twitter = document.getElementById('twitter')
const twitch = document.getElementById('twitch')
const telegram = document.getElementById('telegram')


insta.addEventListener('click', () =>{
    window.open('https://www.instagram.com/digoneez/')
})

youtube.addEventListener('click', () =>{
    window.open('https://www.youtube.com/channel/UCtJlNiG4jUxrvWI73mbsm8g')
})

twitter.addEventListener('click', () =>{
    window.open('https://twitter.com/digoneez')
})

twitch.addEventListener('click', () =>{
    window.open('https://www.twitch.tv/digoneez')
})

telegram.addEventListener('click', () =>{
    window.open('https://t.me/Driicoo')
})

logo.addEventListener('click', () =>{
    window.location.href = "#inicio"
})

brx.addEventListener('click', ()=>{
    window.open("https://www.betbrx.com/?faff=1392")
})

fresh.addEventListener('click', ()=>{
    window.open("https://freshcasino.life/c2f6b8095")
})

winner.addEventListener('click', ()=>{
    window.open("https://tnscnv.top/bw-casino-br/?p=%2Fregistration%2F&id=1NI4")
})

biamo.addEventListener('click', ()=>{
    window.open("https://biamo.bet/?faff=2508")
})

megapari.addEventListener('click', ()=>{
    window.open("https://refpaiozdg.top/L?tag=d_1848361m_25437c_&site=1848361&ad=25437&r=registration/")
})


function videos() {
    window.open('https://www.youtube.com/channel/UCtJlNiG4jUxrvWI73mbsm8g')
}



function fechar(){
    const popup = document.getElementById('pop-img')

    popup.style.display = "none"
}
