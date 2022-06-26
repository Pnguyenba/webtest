

const color = [
    '#00aefd',
    '#ffa400',
    '#07a787',
    '#ff7870',
    'pink',
    'yellow',
    '#e74c3c',
    '#2979ff',
  ]
var boxes = document.querySelectorAll('.box')

var index = 0



setInterval(() =>{
    if (boxes[index] != null){
        boxes[index].style.borderTop = '30px solid ' + color[index] 
    }
    index++
    if(index == color.length +1){
        index = 0
        resetBorderBG()
    }
   
}, 500)

const resetBorderBG = () => {
    boxes.forEach((box) => {
        box.style.borderTop = '30px solid transparent'
    })
}