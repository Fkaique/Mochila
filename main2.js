var items = []
var blocks = []
var values = new Map()

window.addEventListener("keydown", (k)=>{
    if (k.key.length === 1 && /^[a-zA-Z]$/.test(k.key)){
        createItem(k.key)
        items.push(k.key)
    }
})

function createItem(icon){
    if (values.has(icon)){
        values.set(icon, values.get(icon)+1)
        var i = blocks
            .find(b => b.querySelector(".item").dataset.item == icon)
            .querySelector(".counter");
        i.innerHTML = Number(i.innerHTML)+1
    }else{
        var inventario = document.getElementById("inventario")
        var block = document.createElement("div")
        block.className = "block"
        var item = document.createElement("div")
        item.className = "item"
        item.dataset.item = icon 
        var count = document.createElement("div")
        count.className = "counter"
        count.innerHTML = "1"
        var items = document.createElement("div")
        items.className = "icon"
        items.style.backgroundColor = getColorForLetter(icon)
        item.append(items)
        item.append(count)
        block.append(item)
        block.append(icon)
        values.set(icon, 1)
        blocks.push(block)
        inventario.append(block)
    }
}

function getColorForLetter(letter) {
    const code = letter.toLowerCase().charCodeAt(0); // 1
    const hue = (code - 97) * (360 / 26);          // 2
    return `hsl(${hue}, 70%, 60%)`;                // 3
}