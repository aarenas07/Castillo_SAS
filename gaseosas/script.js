
const productContainer = document.querySelector(".product-container");
const subirId = (arg) => {
  localStorage.setItem("idProducto", arg)
}
const loadDrinksProduct = async () => {
    const url = "http://localhost:3000/productos?idCategoria=bebidas"
    fetch(url).then(res => res.json())
    .then(data => {
      console.log(data)
      data.forEach(product => {
          const productElement = document.createElement("div");
          productElement.classList.add("product");
  
          const imageElement = document.createElement("img");
          imageElement.src = product.img;
          imageElement.alt = product.nombre;
  
          const nameElement = document.createElement("h2");
          nameElement.textContent = product.nombre;

  
          productElement.appendChild(imageElement);
          productElement.appendChild(nameElement);
  
          productContainer.appendChild(productElement);
      });
  })
}

loadDrinksProduct()
