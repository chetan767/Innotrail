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



let items = document.getElementsByClassName('tb-item')

for (let item of items) {

    item.addEventListener('dragstart', (event) => {

        event.dataTransfer.setData("text", event.target.id);
        event.dataTransfer.setData("parent", item);
        item.style.opacity = 0.1


    })


    item.addEventListener('drop', (event) => {

        event.preventDefault();
        let data = document.getElementById(event.dataTransfer.getData("text"))

        let start = data.parentNode
        let end = event.target

        event.target.replaceWith(data);

        data.style.opacity = 1
        setTimeout(() => {

            start.appendChild(end)


            $('#id2').animate({
                left: 200,
                top: 200,

            }, 1000)

        }, 400);

    })


    item.addEventListener("dragend", function(event) {
        // reset the transparency
        event.target.style.opacity = "1";
    }, false);

    item.addEventListener('dragover', (event) => {

        event.preventDefault();

    })




}

// move one div to another div with animation








let startValue = 1000
let index = 0

let x;
let y;

document.getElementById('btn').addEventListener('click', () => {

    let tr = document.createElement("tr");

    for (let step = 0; step < 3; step++) {

        let td = document.createElement('td')
        let color = colors[Math.floor(Math.random() * colors.length)];
        let item = document.createElement('div')
        item.className = 'tb-item'
        item.innerText = startValue
        item.style.backgroundColor = color.bg
        item.style.color = color.color
        item.draggable = true
        item.ondragstart = "drag(event)"
        item.id = `id${index+1}`
        index += 1
        addDragEvents(item)
        td.appendChild(item)


        startValue += 200

        tr.appendChild(td)

    }




    document.getElementsByTagName('table')[0].appendChild(tr)


})



function addDragEvents(item) {
    item.addEventListener('dragstart', (event) => {

        event.dataTransfer.setData("text", event.target.id);
        event.dataTransfer.setData("parent", item);
        item.style.opacity = 0.1
        console.log(event.screenX)
        console.log(event.screenY)
        x = event.screenX
        y = event.screenY



    })


    item.addEventListener('drop', (event) => {

        event.preventDefault();
        let data = document.getElementById(event.dataTransfer.getData("text"))

        let start = data.parentNode
        let end = event.target

        event.target.replaceWith(data);
        console.log(event.screenX)
        console.log(event.screenY)



        data.style.opacity = 1
        setTimeout(() => {

            start.appendChild(end)



        }, 400);

    })


    item.addEventListener("dragend", function(event) {
        // reset the transparency
        event.target.style.opacity = "1";
    }, false);

    item.addEventListener('dragover', (event) => {

        event.preventDefault();

    })

}