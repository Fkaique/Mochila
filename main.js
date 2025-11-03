var items=[]
var blocks=[]
window.addEventListener("keydown",(k)=>{
    if (k.key.length===1 && /^[a-zA-Z]$/.test(k.key)){
        create_item(k.key)
        items.push(k.key)
    }
})
function create_item(icon){
    if (blocks.some(x=>x.dataset.item==icon)){
        blocks.forEach(x=>{
            if (x.dataset.item==icon){
                const value = x.querySelector(".counter")
                value.innerHTML = `${Number(value.innerHTML)+1}`
            }
        })
        console.log("neh")
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
        blocks.push(item)
        block.append(item)
        block.append(icon)
        inventario.append(block)
    }
}

function getColorForLetter(letter) {
    const code = letter.toLowerCase().charCodeAt(0); // 1
    const hue = (code - 97) * (360 / 26);          // 2
    return `hsl(${hue}, 70%, 60%)`;                // 3
}