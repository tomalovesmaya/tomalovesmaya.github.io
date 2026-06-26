img.onload = () => {
    const imageEl = document.getElementById("maya-image");
    imageEl.src = image;

    let rotation;

    if (Math.random() < 0.06262026) {
        rotation = (Math.random() < 0.5 ? -1 : 1) * (5 + Math.random() * 3);
    } else {
        rotation = (Math.random() < 0.5 ? -1 : 1) * (0.5 + Math.random() * 2.5);
    }

    imageEl.style.transform = `rotate(${rotation}deg)`;

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
