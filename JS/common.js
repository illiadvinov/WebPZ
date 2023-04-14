console.log("Working");

class MyHeader extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
    <a href="#index">
        <image src="../images/profstroylogo.png" alt="Лого" class="ig"></image>
    </a>

    <header id="header">
        <a class = ${
          document.title == "Main" ? "active" : "na"
        } href="../html/index.html">Главная</a>
        <a class = ${
          document.title == "About" ? "active" : "na"
        } href="../html/about.html">О нас</a>
        <a class = ${
          document.title == "Price" ? "active" : "na"
        } href="../html/price.html">Цены</a>
        <a class = ${
          document.title == "Contacts" ? "active" : "na"
        } href="../html/contacts.html">Контакты</a>
    </header>
        `;
  }
}

customElements.define("my-header", MyHeader);
