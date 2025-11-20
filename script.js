
const categories = ["Mobiles", "Laptops", "Computer", "TV", "Refrigerator", "Washing Machine", "Water Purifier", "Home Inverter", "Sound Bar", "Wireless headphone", "Microwave" ,"Gas Stove", "Mixer Grinder", "Instant Geyser"];

const products = [
  {name:"Apple iPhone 15 Pro", desc:"Premium flagship smartphone.", rating:5, reviews:"12,540 reviews", price:"₹1,19,900", image:"product1.jpg", amazon:"#", flipkart:"#", category:"Mobiles"},
  {name:"Samsung Galaxy Book 4", desc:"Lightweight laptop with AMOLED.", rating:5, reviews:"4,320 reviews", price:"₹89,999", image:"product2.jpg", amazon:"#", flipkart:"#", category:"Laptops"},
  {name:"LG Washing Machine 7kg", desc:"Energy-efficient washing machine.", rating:5, reviews:"1,980 reviews", price:"₹32,499", image:"product3.jpg", amazon:"#", flipkart:"#", category:"Computer"},
  {name:"Apple iPhone 15 Pro", desc:"Premium flagship smartphone.", rating:5, reviews:"12,540 reviews", price:"₹1,19,900", image:"product1.jpg", amazon:"#", flipkart:"#", category:"TV"},
  {name:"Samsung Galaxy Book 4", desc:"Lightweight laptop with AMOLED.", rating:5, reviews:"4,320 reviews", price:"₹89,999", image:"product2.jpg", amazon:"#", flipkart:"#", category:"Refrigerator"},
  {name:"LG Washing Machine 7kg", desc:"Energy-efficient washing machine.", rating:5, reviews:"1,980 reviews", price:"₹32,499", image:"product3.jpg", amazon:"#", flipkart:"#", category:"Washing Machine"},
  {name:"Apple iPhone 15 Pro", desc:"Premium flagship smartphone.", rating:5, reviews:"12,540 reviews", price:"₹1,19,900", image:"product1.jpg", amazon:"#", flipkart:"#", category:"Water Purifier"},
  {name:"Samsung Galaxy Book 4", desc:"Lightweight laptop with AMOLED.", rating:5, reviews:"4,320 reviews", price:"₹89,999", image:"product2.jpg", amazon:"#", flipkart:"#", category:"Home Inverter"},
  {name:"LG Washing Machine 7kg", desc:"Energy-efficient washing machine.", rating:5, reviews:"1,980 reviews", price:"₹32,499", image:"product3.jpg", amazon:"#", flipkart:"#", category:"Sound Bar"},
  {name:"Apple iPhone 15 Pro", desc:"Premium flagship smartphone.", rating:5, reviews:"12,540 reviews", price:"₹1,19,900", image:"product1.jpg", amazon:"#", flipkart:"#", category:"Wireless headphone"},
  {name:"Samsung Galaxy Book 4", desc:"Lightweight laptop with AMOLED.", rating:5, reviews:"4,320 reviews", price:"₹89,999", image:"product2.jpg", amazon:"#", flipkart:"#", category:"Microwave"},
  {name:"LG Washing Machine 7kg", desc:"Energy-efficient washing machine.", rating:5, reviews:"1,980 reviews", price:"₹32,499", image:"product3.jpg", amazon:"#", flipkart:"#", category:"Gas Stove"},
  {name:"Apple iPhone 15 Pro", desc:"Premium flagship smartphone.", rating:5, reviews:"12,540 reviews", price:"₹1,19,900", image:"product1.jpg", amazon:"#", flipkart:"#", category:"Mixer Grinder"},
  {name:"Samsung Galaxy Book 4", desc:"Lightweight laptop with AMOLED.", rating:5, reviews:"4,320 reviews", price:"₹89,999", image:"product2.jpg", amazon:"#", flipkart:"#", category:"Instant Geyser"}
];

function loadCategories() {
  const catDiv = document.getElementById("categories");
  categories.forEach(c => {
    const el = document.createElement("div");
    el.className = "cat";
    el.textContent = c;
    el.onclick = () => { document.getElementById('search').value = c; filterProducts(); };
    catDiv.appendChild(el);
  });
}

function loadProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h2>${p.name}</h2>
        <p>${p.desc}</p>
        <div>⭐⭐⭐⭐⭐</div>
        <div style="color:gray;font-size:14px">${p.reviews}</div>
        <div style="color:green;font-weight:bold;">${p.price}</div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <a href="${p.amazon}" target="_blank"><img src="amazon-logo.png" height="30"></a>
          <a href="${p.flipkart}" target="_blank"><img src="flipkart-logo.png" height="30"></a>
        </div>
      </div>`;
  });
}

function filterProducts() {
  const q = document.getElementById("search").value.toLowerCase();
  loadProducts(products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)));
}

loadCategories();
loadProducts(products);
