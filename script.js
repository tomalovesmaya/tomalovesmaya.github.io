async function loadData() {
    const response = await fetch("data.json");
    const data = await response.json();

    const image =
        data.images[Math.floor(Math.random() * data.images.length)];

    const img = new Image();
    img.src = image;

    img.onload = () => {
        const imageEl = document.getElementById("maya-image");
        const photoEl = document.getElementById("photo");

        photoEl.querySelectorAll(".stack").forEach(e => e.remove());

        const stackCount = Math.floor(Math.random() * 3) + 1;

        for (let i = 0; i < stackCount; i++) {
            const stack = document.createElement("div");
            stack.className = "stack";
            stack.style.zIndex = i;
            stack.style.transform =
                `translate(${(Math.random() - 0.5) * 14}px, ${(Math.random() - 0.5) * 14}px) rotate(${(Math.random() - 0.5) * 10}deg)`;
            stack.style.boxShadow =
                `0 ${6 + Math.random() * 8}px ${16 + Math.random() * 12}px rgba(0,0,0,${0.05 + Math.random() * 0.05})`;
            photoEl.insertBefore(stack, imageEl);
        }

        if (img.naturalHeight > img.naturalWidth) {
            imageEl.style.padding = "16px 56px 16px 16px";
        } else {
            imageEl.style.padding = "16px 16px 56px 16px";
        }

        let rotation;

        if (Math.random() < 0.06262026) {
            rotation = (Math.random() < 0.5 ? -1 : 1) * (5 + Math.random() * 3);
        } else {
            rotation = (Math.random() < 0.5 ? -1 : 1) * (0.5 + Math.random() * 2.5);
        }

        if (img.naturalHeight > img.naturalWidth) {
            rotation += (Math.random() < 0.5 ? -2 : 2);
        }

        const x = (Math.random() - 0.5) * 16;
        const y = (Math.random() - 0.5) * 16;

        imageEl.style.transform =
            `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

        const blur = 20 + Math.random() * 12;
        const spread = 8 + Math.random() * 6;
        const opacity = 0.14 + Math.random() * 0.08;

        imageEl.style.setProperty(
            "--shadow",
            `0 2px 6px rgba(0,0,0,.12), 0 ${spread}px ${blur}px rgba(0,0,0,${opacity})`
        );

        imageEl.src = image;

        const textEl = document.getElementById("text");

        if (Math.random() < 0.002132026) {
            textEl.textContent = "yeah i prolly would";
        } else {
            const adjective =
                data.adjectives[Math.floor(Math.random() * data.adjectives.length)];

            textEl.innerHTML = `<strong>Maya</strong> is <em>${adjective}</em>`;
        }

        const heartEl = document.getElementById("heart");

        heartEl.innerHTML = "♡";
        heartEl.style.textDecoration = "none";
        heartEl.style.cursor = "default";

        if (Math.random() < 0.013126) {
            heartEl.innerHTML =
                '<a href="https://entrance.tomalovesmaya.com" style="color:inherit;text-decoration:underline;">♡</a>';
            heartEl.style.cursor = "pointer";
        }

        document.getElementById("page").classList.add("show");

        startCountdown();
    };
}

function startCountdown() {
    const countdownEl = document.getElementById("countdown");

    if (!countdownEl) return;

    const firstTarget = new Date("2026-07-31T12:00:00-07:00");
    const secondTarget = new Date("2027-02-13T00:00:00-08:00");

    function updateCountdown() {
        const now = new Date();

        let target;

        if (now < firstTarget) {
            target = firstTarget;
        } else if (now < secondTarget) {
            target = secondTarget;
        } else {
            countdownEl.textContent = "";
            return;
        }

        let diff = target - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff %= 1000 * 60 * 60 * 24;

        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff %= 1000 * 60 * 60;

        const minutes = Math.floor(diff / (1000 * 60));
        diff %= 1000 * 60;

        const seconds = Math.floor(diff / 1000);

        countdownEl.textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

loadData();
