const products = [
  {
    name: "Bucket Teeth",
    key: "bucket-teeth",
    image: "assets/img/bucket-teeth.png"
  },
  {
    name: "Root Rakes",
    key: "root-rakes",
    image: "assets/img/root-rakes.png"
  },
  {
    name: "Ripper",
    key: "ripper",
    image: "assets/img/rippers.png"
  },
  {
    name: "Pallet Forks",
    key: "pallet-forks",
    image: "assets/img/pallet-forks.png"
  },
   {
    name: "4 in 1 Buckets",
    key: "4-in-1-buckets",
    image: "assets/img/4-in-1-buckets.png"
  },
  {
    name: "Augerss",
    key: "Augers",
    image: "assets/img/Augers.png"
  },
  {
    name: "Hydraulic Breakers",
    key: "hydraulic-breakers",
    image: "assets/img/hydralic-breakers.png"
  },
  {
    name: "Standard Digging Buckets",
    key: "standard-digging-buckets",
    image: "assets/img/standard-digging-buckets.png"
  },
   {
    name: "Heel Shrouds",
    key: "heel-shrouds",
    image: "assets/img/heel-shrouds.png"
  },
  {
    name: "Lip and Cheek Shrouds",
    key: "lip-and-cheek-shrouds",
    image: "assets/img/lip-and-cheek-shrouds.png"
  },
  {
    name: "Cutting Edges",
    key: "cutting-edges",
    image: "assets/img/cutting-edges.png"
  },
  {
    name: "Pins and Retainers",
    key: "pins-and-retainers",
    image: "assets/img/pins-and-retainers.png"
  },
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
