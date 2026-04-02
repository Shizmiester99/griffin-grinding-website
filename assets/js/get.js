const products = [
  {
    name: "Grinding Balls",
    key: "grinding-balls",
    image: "assets/img/grinding-balls.jpg"
  },
  {
    name: "Chrome Cast Balls",
    key: "chrome-cast-balls",
    image: "assets/img/chrome-balls.jpg"
  },
  {
    name: "Grinding Cylpebs",
    key: "cast-grinding-cylpebs",
    image: "assets/img/cylpebs.jpg"
  },
  {
    name: "Grinding Rods",
    key: "grinding-rods",
    image: "assets/img/rods.jpg"
  }
];

const grid = document.getElementById("getGrid");

products.forEach(product => {
  const card = document.createElement("a");
  card.className = "get-card";
  card.href = `product.html?product=${product.key}`;

  card.innerHTML = `
    <div class="get-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="get-name">${product.name}</div>
  `;

  grid.appendChild(card);
});
