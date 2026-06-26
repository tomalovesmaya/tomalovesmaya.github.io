async function loadData() {
    const response = await fetch("data.json");
    const data = await response.json();

    const image =
        data.images[Math.floor(Math.random() * data.images.length)];

    const img = new Image();
    img.src = image;

    img.onload = () => {
        document.getElementById("maya-image").src = image;

        const textEl = document.getElementById("text");

        if (Math.random() < 0.002132026) {
            textEl.textContent = "yeah I prolly would";
        } else {
            const adjective =
                data.adjectives[Math.floor(Math.random() * data.adjectives.length)];

            textEl.innerHTML = `<strong>Maya</strong> is <em>${adjective}</em>`;
        }

        document.getElementById("page").classList.add("show");
    };
}

loadData();
