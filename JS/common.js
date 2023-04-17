class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="#index">
        <image src="../images/profstroylogo.png" alt="Лого" class="headerLogo"></image>
    </a>

    <header id="header">
        <a class = ${
          document.title == "Main" ? "active" : "nonActive"
        } href="../html/homePage.html">Главная</a>
        <a class = ${
          document.title == "About" ? "active" : "nonActive"
        } href="../html/aboutPage.html">О нас</a>
        <a class = ${
          document.title == "Price" ? "active" : "nonActive"
        } href="../html/pricePage.html">Цены</a>
        <a class = ${
          document.title == "Contacts" ? "active" : "nonActive"
        } href="../html/contactsPage.html">Контакты</a>
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

customElements.define("my-footer", MyFooter);
