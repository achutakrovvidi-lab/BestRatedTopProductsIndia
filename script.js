
const categories = ["Mobiles", "Laptops", "Computer", "TV", "Refrigerator", "Washing Machine", "Water Purifier", "Home Inverter", "Sound Bar", "Wireless headphone", "Microwave"];

const products = [
  {name:"Motorola Edge 60 Pro", desc:"5 star rated phone in India and best smartphone under 30000.", rating:4.3, reviews:"2917 reviews", price:"₹27,999", image:"images/Motorola.jpg", flipkart:"http://dl.flipkart.com/dl/motorola-edge-60-pro-pantone-shadow-256-gb/p/itm3823c3f8f3cc9?pid=MOBH9C9JEHCZYHF2&marketplace=FLIPKART&cmpid=product.share.pp&lid=LSTMOBH9C9JEHCZYHF2YESB5E", amazon:"https://www.amazon.in/Motorola-Pantone-Shadow-256GB-Storage/dp/B0F83HD8SQ/ref=sr_1_1?adgrpid=161400841857&dib=eyJ2IjoiMSJ9.HAr_KTTVMujlk_OW3pAa7Yf6gY5_U0XMBQP76qEeCrn3ccSw3tlHURu5rQ7fy032PWBjKIxipaRWV-jP_0XN4j1tYQdI0Vz-SEcU8txZ9WIMC1lkZxbj0ODtvWUdtLSFpOmQT0M647akvVUgc5IMx-5aiLZZCbpgF2Y25k0RLZKnAMaF7btkXMVoLQ-HW5HOn3llmLITEM-rPAhEp-FWn5S32lpqOlfqUGe_ptIMg_4.v1G1PIzhsDd7BlYaI4AL33oWAkKfQeSo4gvikTlOxXI&dib_tag=se&gad_source=1&hvadid=714735088543&hvdev=c&hvlocphy=9146998&hvnetw=g&hvqmt=b&hvrand=2904822964132665133&hvtargid=kwd-1478073210136&hydadcr=25202_2856641&keywords=motorola+edge+60+pro&mcid=71d0496208de369c97f89662cd7b46ef&qid=1763640207&sr=8-1", category:"Mobiles"},
  {name:"Lenovo V15 AMD Ryzen 5 Quad Core", desc:"Best Thin and Light Laptop under 50000", rating:4.1, reviews:"154 reviews", price:"₹37,990", image:"images/Lenovo.jpg", flipkart:"https://www.flipkart.com/lenovo-v15-amd-ryzen-5-quad-core-7520u-16-gb-512-gb-ssd-windows-11-home-thin-light-laptop/p/itmd7282dfaeb5de", amazon:"https://www.amazon.in/Lenovo-V15-Ryzen-7520U-Quad/dp/B0DKY4SLTR/ref=sr_1_4?crid=2ZMF1AZ9B4J89&dib=eyJ2IjoiMSJ9.epuU2MyHDiMAj4uaIQArAGJmHxJoCOCpEkb2iH7r0ZFir5Dj1RNBVVgUbbSEAPUoYNd4BFzEPuQpo5qnVD3pb1Prvx7BKku0rO7fLPcDMTvpFHlbHxS73BdFY_y19Q1bLZVxy4uoYNcxmMMZJjIp9jEVVkaV7nvcDwQCJkuzXRlCwyELVwum1azD5wpLaf1cLMcF3OyT7BL_gGyxsee-dhqeLpaUtgqVHfx87CUyBEa6SIQirYilnqyMyRgRA_TqmQdFwoCNeVzbv8dxku46ilt9Gb8M-FfRyk8Cj3S6yMM.Wqd0Xf5g3AibHp8E__huCDQZVoITCFkyoDS-648OWy8&dib_tag=se&keywords=Lenovo+V15+AMD+Ryzen+5+7520U&qid=1763641577&s=computers&sprefix=lenovo+v15+amd+ryzen+5+7520u%2Ccomputers%2C184&sr=1-4", category:"Laptops"},
  {name:"Lenovo All in one N100", desc:"best all-in-one desktop in India", rating:4.7, reviews:"1 reviews", price:"₹32690", image:"images/All-in-one desktop", flipkart:"https://www.flipkart.com/lenovo-all-one-n100-8-gb-ddr4-512-ssd-windows-11-home-integrated-intel-uhd-graphics-23-8-inch-screen-a100-ms-office/p/itmf3ad519a91841", amazon:"https://www.amazon.in/Lenovo-1920x1080-Edgeless-Calliope-F0J6005FIN/dp/B0F43SQFZZ?th=1", category:"Computer"},
  {name:"Panasonic 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV", desc:"Best smart tv under 50000 .", rating:4.3, reviews:"56 reviews", price:"₹28550", image:"images/SmartTV", amazon:"https://www.amazon.in/Panasonic-inches-Ultra-Google-TH-43MX660DX/dp/B0BZZCM7C7?th=1", flipkart:"https://www.flipkart.com/panasonic-108-cm-43-inch-ultra-hd-4k-led-smart-google-tv/p/itm15ac83a72b68c", category:"TV"},
  {name:"Samsung 236 L Frost Free Double Door 3 Star Convertible Refrigerator ", desc:"Best Refrigerator under 30000.", rating:4.4, reviews:"2153 reviews", price:"₹25490", image:"images/Refrigerator", flipkart:"https://www.flipkart.com/samsung-236-l-frost-free-double-door-3-star-convertible-refrigerator-digital-inverter-display/p/itm5d34d4279e9f1?pid=RFRGPHMKVNFYGACW&lid=LSTRFRGPHMKVNFYGACWU4MR25&marketplace=FLIPKART&store=j9e%2Fabm%2Fhzg&spotlightTagId=default_FkPickId_j9e%2Fabm%2Fhzg&srno=b_1_3&otracker=browse&fm=organic&iid=00f3a775-6f0c-4c17-ae63-5fef165e0a89.RFRGPHMKVNFYGACW.SEARCH&ppt=browse&ppn=browse&ssid=h8xanq1zrk0000001763646562529", amazon:"https://www.amazon.in/Samsung-Convertible-Refrigerator-RT28C3733S8-HL/dp/B0C2TPHG6Q?th=1", category:"Refrigerator"},
  {name:"Samsung Washing Machine 8kg", desc:"Fully Automatic Top Load Washing Machine under 30000.", rating:4.3, reviews:"6680 reviews", price:"₹19490", image:"images/Samsung.jpg", flipkart:"https://www.flipkart.com/samsung-8-kg-inverter-5-star-ecobubble-technology-washing-machine-fully-automatic-top-load-grey/p/itmc6526adbb9164", amazon:"https://www.amazon.in/Samsung-Fully-Automatic-Ecobubble-WA80BG4441BGTL-Technology/dp/B0B8NK5HTH?th=1", category:"Washing Machine"},
  {name:"Aquaguard Delight NXT Aquasaver", desc:"Best rated water Purifier.", rating:4.3, reviews:"12,540 reviews", price:"₹9497", image:"images/WaterPurifier", flipkart:"https://www.flipkart.com/aquaguard-delight-nxt-aquasaver-6-l-ro-uv-uf-ta-water-purifier-9-stage-purification-ro-uv-uf-mc-taste-adjuster-suitable-all-borewell-tanker-municipality/p/itm9d6e48861b62a", amazon:"https://www.amazon.in/Aquaguard-Aquasaver-Purifier-Adjuster-Municipal/dp/B0CW5YZ6VV?th=1", category:"Water Purifier"},
  {name:"LUMINOUS 60 Months Warranty Tubular Inverter Battery", desc:"Best reliable inverter brand for home", rating:4.4, reviews:"1581 reviews", price:"₹20925", image:"images/Home_Inverter", flipkart:"https://www.flipkart.com/luminous-zelio-1100-v2-inverter-iltt-18060-tubular-inverter-battery/p/itm45b6607832ef2", amazon:"https://www.amazon.in/Luminous-ILTT18060-High-Performance-Maintenance-Installation/dp/B076FYQRNV?th=1", category:"Home Inverter"},
  {name:"MOTOROLA AmphisoundX 200 W Bluetooth Soundbar", desc:"Best rated sound bar", rating:4.3, reviews:"1,102 reviews", price:"₹5499", image:"images/Soundbar", flipkart:"https://www.flipkart.com/motorola-amphisoundx-200-w-bluetooth-soundbar/p/itme99fe4fffa928?pid=ACCGXTST9DGHVPSB&lid=LSTACCGXTST9DGHVPSBVNERDR&marketplace=FLIPKART&q=motorola+soundbar&store=0pm%2F0o7%2F2to%2Fynx&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=3f8f5b6a-ae72-4181-9484-9815c6ba9bda.ACCGXTST9DGHVPSB.SEARCH&ppt=sp&ppn=sp&ssid=5ud5wi3tm80000001763648048609&qH=2d4132682eb51956", amazon:"#", category:"Sound Bar"},
  {name:"Bose New QuietComfort Ultra Headphones", desc:"Best brand for wireless headphones", rating:4.3, reviews:"17 reviews", price:"₹35,900", image:"images/Wireless_headphones", flipkart:"https://www.flipkart.com/bose-new-quietcomfort-ultra-wireless-noise-cancelling-headphones-spatial-audio-bluetooth-headset/p/itme032a484c1bb0", amazon:"https://www.amazon.in/Bose-QuietComfort-Wireless-Cancelling-Headphones/dp/B0CCZ1L489?th=1", category:"Wireless headphone"},
  {name:"Samsung 28 L Grill Microwave Oven", desc:"Best oven company", rating:4.3, reviews:"1056 reviews", price:"₹12490", image:"images/Microwave", flipkart:"https://www.flipkart.com/samsung-28-l-curd-making-pre-heat-eco-mode-power-defrost-auto-cook-convection-grill-microwave-oven/p/itm16a0a01ca9e79", amazon:"https://www.amazon.in/Samsung-Convection-Microwave-MC28A5013AK-TL/dp/B09XBMXQ34?th=1", category:"Microwave"}
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
