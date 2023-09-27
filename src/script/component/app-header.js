class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render();

        const hamburger = this.shadowDOM.getElementById("hamburger");
        const menu = this.shadowDOM.getElementById("menu");

        hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .app-header {
            color: black;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 20px;
          }
          
          
          .menu ul {
            list-style: none;
            display: flex;
          }
          
          .menu li {
            margin-right: 20px;
          }
          
          .menu a {
            text-decoration: none;
            color: black
          }
          
          .menu a:hover {
            padding: 8px 15px;
            border-radius: 5px;
            background-color: #943F55;
            color: #fff;
          }
          
          .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
          }
          
          .bar {
            width: 25px;
            height: 3px;
            background-color: black;
            margin: 3px 0;
          }
          
          @media screen and (max-width: 768px) {
            .menu {
                display: none;
            }
          
            .hamburger {
                display: flex;
            }
          
            .menu.active {
                display: flex;
                flex-direction: row;
                position: absolute;
                top: 60px;
                right: 20px;
                background-color: #fff;
                z-index: 1;
            }
          }
        </style>

        <nav id="appHeader" class="app-header">
        <h2>Drive Players</h2>
        <div class="menu" id="menu">
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div class="hamburger" id="hamburger">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        </nav>`;
    }
}

customElements.define('app-header', AppHeader);