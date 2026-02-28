(function () {

  const ID = "custom-chat-css";

  // -----------------------------
  // remove <tp-yt-iron-pages id="panel-pages">
  // -----------------------------
  function removePanelPages() {
    const el = document.getElementById("panel-pages");
    if (el) {
      el.remove();
    }
  }

  // -----------------------------
  // toggle: se já existir, remove
  // -----------------------------
  let old = document.getElementById(ID);
  if (old) {
    old.remove();
    console.log("CSS do chat removido");
    return;
  }

  const style = document.createElement("style");
  style.id = ID;

  style.textContent = `
/* ========= SUA ÁREA DE EDIÇÃO ========= */

/* fundo transparente */
yt-live-chat-renderer {
  background: black !important;
}

/* remove topo do chat */
yt-live-chat-header-renderer {
  display: none !important;
}

/* remove campo de digitar mensagem */
yt-live-chat-message-input-renderer {
  display: none !important;
}

/* remove banners e mensagens de sistema */
yt-live-chat-banner-manager,
yt-live-chat-viewer-engagement-message-renderer {
  display: none !important;
}

/* mensagens mais compactas */
yt-live-chat-text-message-renderer {
  padding: 1px 4px !important;
  font-size: 20px !important;
  line-height: 2 !important;
}

/* remove avatar */
#author-photo {
  display: none !important;
}

/* nome do autor */
#author-name {
  font-weight: 500 !important;
  color: #008bff !important;
  margin-right: 4px !important;
}

/* texto da mensagem */
#message {
  color: white !important;
}

/* ========= FIM DA ÁREA DE EDIÇÃO ========= */
  `;

  document.head.appendChild(style);

  // remove imediatamente
  removePanelPages();

  // garante que, se o YouTube recriar, ele seja removido novamente
  const observer = new MutationObserver(() => {
    removePanelPages();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  console.log("CSS do chat aplicado e panel-pages removido");

})();