const clipboard = nw.Clipboard.get()    
const win = nw.Window.get()
const root = document.getElementById('root')
const list = []
let clip = ''


setInterval(() => {
    clip = clipboard.get('text')
    if(!list.includes(clip)) {
        list.push(clip)
        const a = document.createElement('a')
        a.innerText =clip
        a.setAttribute('href', '#')
        a.style.display = 'block'
        root.append(a)
        a.addEventListener('click',  function() {clipboard.set(a.innerText)}) 
    }
}, 1000)

// function topWindow(){
// if(top){
//     win.show()
//     win.isAlwaysOnTop(true)
//     top = !top
// } else {
//     win.hide()
//     top = !top
// }}
// const option = {
//     key: 'Ctrl+Shift+L',
//     active: topWindow
// }
// const shortcut = new nw.Shortcut(option)
// nw.App.registerGlobalHotKey(shortcut)
