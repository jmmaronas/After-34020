console.log("main")

const contenedorProductos=document.getElementById('contenedorProductos')
const cart=[]

function mostrarProdcutos(items){
    items.forEach(element => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.style="width: 18rem;"
        card.innerHTML=`
            <img src=${element.img} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <p class="card-text">${element.detalle}</p>
            <p class="card-text">$ ${element.precio}</p>
            <button id="agregar${element.id}" class="btn btn-primary">Compra</button>
            </div>
        `
        contenedorProductos.appendChild(card)

        let botonAgregar=document.getElementById(`agregar${element.id}`)
        botonAgregar.addEventListener("click", ()=>{
            agregarAlCarrito()
            alert(element.precio)
        })
    });
}

function agregarAlCarrito(){}


mostrarProdcutos(productos)