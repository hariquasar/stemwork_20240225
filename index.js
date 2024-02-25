const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16
canvas.height = 64 * 9



const player = new Player()

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    player.update()
}

animate()

window.addEventListener('keydown',(e)=>{
    switch(e.key){
        case 'w':
            if(player.velocity.y === 0)player.velocity.y = -30
            break
        case 'a':
            player.velocity.x = -4
            break
        case 'd':
            player.velocity.x = 4
            break
    }
})