document.addEventListener("DOMContentLoaded", function () {
  // CONFIG
  const config = {
    initialMessages: [
      "Hai, ada sesuatu untukmu...",
      "Sekarang lihat ini ya ~"
    ],
wallpaper: "img/rasin1.jpg",

    scenes: [
      {
        image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExamE1bHBzajZmNWxqcDZubXo4aGl4OHY2ZzF5ODIxNnEzOGExb3gwOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tpVKvAabWt3G5csMkT/giphy.gif",
        text: "Saayaaangg ❤️"
      },
      {
        image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXpxZXd1NWVybWJ6c21seXhtbzlkamZpaXV2aW01YTVwcjA2d202eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xH88i6WQsAxR6/giphy.gif",
        text: "Aku mau ngomong serius nih"
      },
      {
        image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDFnOG41cmt5eHJoMGpvNjRrZmk4cHowYjBzNmN3M3NmcncyamJnaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RSk4bOw2ptIkAcVxK2/giphy.gif",
        text: "Tahukah kamu?"
      },
      {
        image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjE3M2wxMGgwZzdmYTN6eHV6NDQwcjRtOG10dTluZndzZm0xczBiNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1yTi0ivyYrnuVh5Z4P/giphy.gif",
        text: "Satu-satunya hal yang dapat meredakan stress adalah bercerita dengan orang yang dikasihi."
      },
      {
        image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZnYnl2MDR6MnBlMGw0bzZkaGdlZ2Q2eHFqZXd0ejNxMHA0dGtleiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tpVKvAabWt3G5csMkT/giphy.gif",
        text: "Karena, kamu adalah wanita favorit yang kukasihi.",
        proposalText: "bersedia kah kau makan bersamaku di malam ini ? 😃"
      },
      {
        image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2dkcGxzZTJ0ZzFlMHY4ZnJhMXltODI0bTRranZsdW9wYWRsejZidyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JHxzdprX2FItgcpct5/giphy.gif",
        text: "Yeayyy! Makasih ayaangg ❤️",
        closingText: "I Love You ❤️❤️❤️"
      }
    ],
    noButtonTexts: ["Eits 😝", "Gabisa 😝", "Yakin?", "Harus mau!!! 😝"]
  };

  // DOM
  const body = document.body;
  const content = document.getElementById("Content");
  const wallpaper = document.getElementById("wallpaper");
  const idgeser = document.getElementById("idgeser");
  const bq = document.querySelector("blockquote");
  const katakata = document.getElementById("katakata");
  const katabawah = document.getElementById("katabawah");
  const contTom = document.getElementById("contTom");
  const btnYes = document.getElementById("By");
  const btnNo = document.getElementById("Bn");
  const btnV2 = document.getElementById("buttonv2");
  const images = [
    document.getElementById("foto1"),
    document.getElementById("foto2"),
    document.getElementById("foto3"),
    document.getElementById("foto4"),
    document.getElementById("foto5"),
    document.getElementById("foto6"),
  ];

  // SweetAlert
  const swals = Swal.mixin({ allowOutsideClick: false, cancelButtonColor: "#FF0040" });
  const swalst = Swal.mixin({ allowOutsideClick: false, showConfirmButton: false, timer: 1500, timerProgressBar: true });

  let currentSceneIndex = 0;
  let noButtonState = 0;

  // Helpers
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
  async function typeText(el, text, speed = 40) {
    el.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      el.innerHTML += text.charAt(i);
      await sleep(speed);
    }
  }
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = Math.random() * 90 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  function updateScene(scene) {
    images.forEach((img, idx) => img.classList.toggle("active", idx === currentSceneIndex));
    katakata.innerHTML = scene.text;
    katabawah.innerHTML = scene.proposalText || scene.closingText || "";
  }
  function showButtons() {
    contTom.style.display = "flex";
  }
  function handleNoClick() {
    noButtonState = (noButtonState + 1) % 4;
    switch (noButtonState) {
      case 1:
        btnNo.style = "margin-left:90px;transform: rotate(45deg)";
        btnV2.style.opacity = "1";
        btnYes.style.opacity = "0";
        btnV2.innerHTML = config.noButtonTexts[0];
        break;
      case 2:
        btnNo.style = "margin-left:95px;transform: rotate(135deg)";
        btnV2.innerHTML = config.noButtonTexts[1];
        break;
      case 3:
        btnNo.style = "margin-left:90px;";
        btnV2.innerHTML = config.noButtonTexts[2];
        break;
      case 0:
        btnNo.style = "margin:12px 8px 12px 0";
        btnV2.style.opacity = "0";
        btnYes.style.opacity = "1";
        swalst.fire(config.noButtonTexts[3]);
        break;
    }
  }

  async function nextScene() {
  contTom.style.display = "none";
  currentSceneIndex++;

  if (currentSceneIndex < config.scenes.length) {
    const scene = config.scenes[currentSceneIndex];
    updateScene(scene);

    if (scene.proposalText) {
      await typeText(katabawah, scene.proposalText, 80);
    }

    if (currentSceneIndex < config.scenes.length - 1) {
      setTimeout(showButtons, 1000);
    } else {
      // Final scene actions
      setInterval(createHeart, 200);

      // ⬇️ setelah 5 detik, hilangkan teks box dan tombol
      setTimeout(() => {
        document.getElementById("Content").style.display = "none";
        document.querySelector("blockquote").style.display = "none";
      }, 5000);

      // ⬇️ mainkan backsound
      const audio = document.getElementById("backsound");
      audio.volume = 0.5; // setengah volume biar soft
      audio.play().catch(() => {
        console.log("Autoplay dicegah, user harus klik dulu.");
      });
    }
  }
}


  // Start
  async function start() {
    for (const msg of config.initialMessages) {
      await swals.fire(msg);
    }
    await typeText(idgeser, "........");
    wallpaper.src = config.wallpaper;
    document.getElementById("bodyblur").style.opacity = "1";
    idgeser.style.display = "none";
    content.style.opacity = "1";
    content.style.visibility = "visible";
    content.style.transform = "scale(1)";
    bq.style.opacity = "1";
    bq.style.visibility = "visible";
    images.forEach((img, idx) => (img.src = config.scenes[idx].image));
    updateScene(config.scenes[0]);
    setTimeout(showButtons, 1200);

    btnYes.addEventListener("click", nextScene);
    btnNo.addEventListener("click", handleNoClick);
  }

  start();
});
