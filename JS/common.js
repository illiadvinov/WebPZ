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

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div id="footer">
      <image src="../images/profstroylogo.png" alt="Лого" id="fl"></image>

      <a href="https://www.instagram.com/profstroy.kh/">
        <img src="../images/Instagram.png" alt="Instagram logo" id="inst" />
      </a>
      <a href="https://www.facebook.com/profstroy.kh">
        <img src="../images/Facebook.png" alt="Facebook logo" id="face" />
      </a>
      <ul class="address">
        <li>Украина</li>
        <li>Харьков</li>
        <li>Улица Эстакадная</li>
      </ul>
      <text class="footPr">&copy; 2006-2021 Проф-Строй</text>
    </div>
        `;
  }
}

customElements.define("my-footer", MyFooter)
