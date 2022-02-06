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

window.onload = (event) => {

    let index = 0

    let x = 200
    let y = 200


    let items = document.getElementsByClassName('tb-item')

    for (let item of items) {
        item.style.backgroundColor = colors[index].bg
        item.style.color = colors[index].color
        item.draggable = true
        item.ondragstart = "drag(event)"
        item.id = `id${index+1}`
        item.innerText = `${(index+1)*100}`
        index = index + 1


    }

};




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