let colors = [
    { 'bg': 'rgb(127, 151, 177)', 'color': 'white' },
    { 'bg': 'rgb(175, 199, 233)', 'color': 'black' },
    { 'bg': 'rgb(34, 84, 154)', 'color': 'white' },

    { 'bg': 'rgb(68, 132, 147)', 'color': 'white' },
    { 'bg': 'rgb(190, 226, 178)', 'color': 'black' },
    { 'bg': 'rgb(255, 217, 87)', 'color': 'black' },
    { 'bg': 'rgb(211, 0, 0)', 'color': 'white' },
    { 'bg': 'rgb(255, 88, 0)', 'color': 'white' },
    { 'bg': 'rgb(191, 191, 191)', 'color': 'black' },

]

let index = 0

let x = 220
let y = 208
let height = 101
let position_top = 180




document.getElementById('btn').addEventListener('click', () => {

    console.log("ww")


    for (let step = 0; step < 3; step++) {

        let item = document.createElement('div')
        item.className = 'tb-item'
        let color = colors[Math.floor(Math.random() * colors.length)];
        item.style.backgroundColor = color.bg
        item.style.color = color.color
        item.draggable = true
        item.ondragstart = "drag(event)"
        item.id = `id${index+1}`
        item.innerText = `${(index+1)*100}`
        item.style.position = 'absolute'
        item.style.left = `${x}px`
        item.style.top = `${y}px`
        addDragEvents(item)

        x += 200
        if ((index + 1) % 3 == 0) {
            x = 220
            y += 100


            for (line of document.getElementsByClassName('v')) {
                line.style.height = `${height}px`

            }
            height += 100


            let hr = document.createElement('hr')
            hr.className = 'one'
            hr.style.top = `${position_top}px`
            position_top += 100
            document.getElementById('test').appendChild(hr)

            console.log(hr)

            if (index + 1 == 3) {
                let hr2 = document.createElement('hr')
                hr2.className = 'one'
                hr2.style.top = `${position_top}px`
                position_top += 100
                document.getElementById('test').appendChild(hr2)
            }
        }
        index = index + 1


        document.getElementById('test').appendChild(item)
    }



})



function addDragEvents(item) {

    item.addEventListener('dragstart', (event) => {

        event.dataTransfer.setData("text", event.target.id);
        event.dataTransfer.setData("parent", item);
        item.style.opacity = 0.1


    })


    item.addEventListener('drop', (event) => {

        event.preventDefault();

        let data = document.getElementById(event.dataTransfer.getData("text"))
        let startX = data.offsetLeft
        let startY = data.offsetTop

        event.target.style.visibility = 'hidden'

        data.style.left = `${event.target.offsetLeft}px`
        data.style.top = `${event.target.offsetTop}px`
        data.style.opacity = "1"


        setTimeout(() => {

            event.target.style.visibility = 'visible'

            $(`#${event.target.id}`).animate({
                left: startX,
                top: startY,

            }, 1000)


        }, 100);

    })

    item.addEventListener("dragend", function(event) {
        // reset the transparency
        event.target.style.opacity = "1";
    }, false);

    item.addEventListener('dragover', (event) => {

        event.preventDefault();

    })

}