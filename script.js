async function loadData() {
    const response = await fetch("data.json");
    const data = await response.json();

    const image =
        data.images[Math.floor(Math.random() * data.images.length)];

    const adjective =
        data.adjectives[Math.floor(Math.random() * data.adjectives.length)];

    document.getElementById("maya-image").src = image;
    document.getElementById("adjective").textContent = adjective;
}

loadData();
