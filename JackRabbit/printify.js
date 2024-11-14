//append link url to https://jack-rabbit-arts-crafts.printify.me/
//append img url to https://images-api.printify.com/mockup/
fetch('printify_products.json')
.then(response => response.json())
.then(items => {
  const storeDiv = document.getElementById("store");

  items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const img = document.createElement("img");
    img.src = `https://images-api.printify.com/mockup/${item.image_url}`;
    img.alt = item.description;
    itemDiv.appendChild(img);

    const link = document.createElement("a");
    link.href = `https://jack-rabbit-arts-crafts.printify.me/${item.link}`;
    link.target = "_blank";
    link.textContent = item.description;
    itemDiv.appendChild(link);

    storeDiv.appendChild(itemDiv);
  });
})
.catch(error => console.error('Error fetching the JSON:', error));