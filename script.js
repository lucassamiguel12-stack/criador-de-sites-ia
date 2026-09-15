function criarSite() {
  const descricao = document.getElementById("descricao-site").value.trim();
  const preview = document.getElementById("site-preview");

  if (!descricao) {
    alert("Descreva o site que você quer criar.");
    return;
  }

  preview.innerHTML = `
    <div style="
      min-height:100%;
      padding:60px 30px;
      text-align:center;
      font-family:Arial,sans-serif;
    ">

      <div style="
        display:inline-block;
        padding:8px 14px;
        background:#e8f7ec;
        color:#28723b;
        border-radius:20px;
        font-size:12px;
        font-weight:bold;
        margin-bottom:20px;
      ">
        SITE GERADO PELA IA
      </div>

      <h1 style="
        font-size:42px;
        color:#18352a;
        margin-bottom:20px;
      ">
        Seu novo site
      </h1>

      <p style="
        max-width:600px;
        margin:0 auto;
        color:#555;
        font-size:17px;
        line-height:1.6;
      ">
        ${descricao}
      </p>

      <div style="
        max-width:800px;
        margin:50px auto 0;
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:15px;
      ">

        <div style="
          padding:30px;
          background:#f4f7f5;
          border-radius:15px;
        ">
          <h3>✨ Design</h3>
          <p>Visual criado para o seu projeto.</p>
        </div>

        <div style="
          padding:30px;
          background:#f4f7f5;
          border-radius:15px;
        ">
          <h3>🚀 Moderno</h3>
          <p>Estrutura moderna e responsiva.</p>
        </div>

        <div style="
          padding:30px;
          background:#f4f7f5;
          border-radius:15px;
        ">
          <h3>📱 Responsivo</h3>
          <p>Funciona no celular e computador.</p>
        </div>

      </div>

    </div>
  `;
}


function visualizarDesktop() {
  const preview = document.querySelector(".browser");
  preview.style.maxWidth = "100%";
  preview.style.margin = "0 auto";
}


function visualizarMobile() {
  const preview = document.querySelector(".browser");

  preview.style.maxWidth = "390px";
  preview.style.margin = "0 auto";
}