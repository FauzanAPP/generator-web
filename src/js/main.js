const btnDefault = document.getElementById("btn-def");

const copyright = document.querySelector(".copyright");
const icon = document.querySelector(".icon-container");
const input = document.getElementById("title");
const container = document.querySelector(".card");

input.addEventListener("focusin", () => {
  copyright.style.display = "none";
  icon.style.display = "none";

  input.addEventListener("focusout", () => {
    copyright.style.display = "";
    icon.style.display = "";
  });
});

setInterval(() => {
  const inp = document.getElementById("title").value;

  const mark = document.querySelector(".html-lang");
  mark.innerHTML = `<span class="mark-awal">&lt</span><span class="mark-akhir">title</span><span class="mark-awal">&gt</span><span class="mark-content">${inp}</span><span class="mark-awal">&lt/<span class="mark-akhir">title</span><span class="mark-awal">&gt</span>`;
});

setInterval(() => {
  const val = document.getElementById("dropdown").value;
  if (val == "html") {
    return (btnDefault.innerHTML = "Continue");
  }
  if (val != "html") {
    return (btnDefault.innerHTML = "Download");
  }
}, 1);

const loading = document.getElementById("load");

function onClick() {
  const opsi = document.getElementById("dropdown");
  const value = opsi.value;
  const cardDefault = document.getElementById("card");
  const cardHtml = document.getElementById("card-html");
  const btnDef = document.getElementById("btn-def");
  const loading = document.getElementById("load");

  switch (value) {
    case "html":
      cardDefault.style.display = "none";
      cardHtml.classList.toggle("card-html");
      return;
      break;

    case "css":
      loading.classList.toggle("load-hide");
      var animate = document.getElementById("progress");

      anime({
        targets: animate,
        innerHTML: [0, 5000],
        easing: "linear",
        round: 1,
        duration: 4600,
      });

      setTimeout(() => {
        loading.classList.toggle("load-hide");
        downloadType(
          "style.css",
          `
            /* ✨ Template CSS */
/* 🌱 Clearing */
*, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ☕ Styling Body ( Contoh )*/
body {
/* Background akan berwarna merah */
  background-color: red;
  /* Ketinggian akan setinggi vertical height layar mu */
  height: 100vh;
}

/** 📃 Mulai Styling Di Bawah **/
`
        );
      }, 5000);
      break;

    case "js":
      loading.classList.toggle("load-hide");
      var animate = document.getElementById("progress");

      anime({
        targets: animate,
        innerHTML: [0, 5000],
        easing: "linear",
        round: 1,
        duration: 4600,
      });

      setTimeout(() => {
        loading.classList.toggle("load-hide");
        downloadType(
          "script.js",
          `
            /* ✨ Template JavaScript */
/* Variabel Constanta ( tidak bisa diubah ubah ) dengan value string */
const title = "Hello World!"
/* Cara melihat nya, tinggal klik kanan bagian mouse, lalu pilih inspect, dan di sidebar pilih console, maka akan muncul 'Hello World' di console tersebut */
console.log(title)
`
        );
      }, 5000);
      break;

    case "unipack":
      loading.classList.toggle("load-hide");
      var animate = document.getElementById("progress");

      anime({
        targets: animate,
        innerHTML: [0, 15000],
        easing: "linear",
        round: 1,
        duration: 14600,
      });

      setTimeout(() => {
        loading.classList.toggle("load-hide");
        let el = document.createElement("a");
        el.href = "src/downloader/UniversalPack.zip";
        el.download = "";
        el.style.display = "none";
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
      }, 15000);
      break;
  }
}

/** Thanks To ChatGPT **/
const downloadType = (filename, content) => {
  let el = document.createElement("a");
  el.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(content)
  );
  el.setAttribute("download", filename);

  el.style.display = "none";
  document.body.appendChild(el);

  el.click();

  document.body.removeChild(el);
};

const htmlEvent = () => {
  let getTitle = document.getElementById("title").value;

  const loading = document.getElementById("load");

  if (getTitle == "") {
    getTitle = "HTML | Template";
  }

  if (getTitle.length > 20) {
    return alert("Jumlah Message tidak boleh lebih dari 20 karakter");
  }

  loading.classList.toggle("load-hide");
  var animate = document.getElementById("progress");
  var random = ~~Math.floor(Math.random() * 10);

  anime({
    targets: animate,
    innerHTML: [0, 5000],
    easing: "linear",
    round: 1,
    duration: 4600,
  });

  setTimeout(() => {
    loading.classList.toggle("load-hide");
    downloadType(
      "index.html",
      `
  <!-- ✨ Template HTML ✨ -->

<!-- ${getTitle} - For downloading! -->

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <!-- 🌱 Dibawah ini adalah Logo website yang berada di samping title -->
  <link rel="shortcut icon" href="https://i.ibb.co/nzpQ2Ln/20231103-181323.png" type="image/x-icon" />
  
  <!-- 🎁 Nama Title Yang akan dimunculkan di website -->
  <title>${getTitle}</title>
</head>

<!-- 📓 Yang ada tulisan (style) boleh di hapus, Contoh: '<h1 style="color: red"></h1>' kalo di hapus '<h1></h1> -->

<body style="background-color: black;">
  <!-- 🗺️ Isi Content -->
  
  <!-- Contoh ( Boleh Di Hapus! ) -->
  <h1 style="text-align: center;position: absolute; width: 100%; top: 50%;left: 50%;transform: translate(-50%, -50%);font-size: 2rem;color: white;text-shadow: 1px 2px 1px black, 0 0 50px white;letter-spacing: 4px;">Hello Dunia!</h1>
  <!-- End Contoh -->
</body>
</html>
`
    );
  }, 5000);
};
