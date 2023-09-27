class AppHero extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .app-hero {
          position: relative;
          background-image: url('./src/styles/img/background.jpg');
          background-size: cover;
          background-position: center;
          color: #fff;
          text-align: center;
          padding: 100px 0;
          margin: 0;
        }
        
          .app-hero-content {
            margin: 0 auto;
          }
          
          h1 {
            font-size: 36px;
            margin-bottom: 20px;
          }
          
          .hero-content p {
            font-weight: 500;
            font-size: 18px;
            margin-bottom: 30px;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 10px;
            border-radius: 5px;
            color: #fff;
          }
          
          .search-container {
            display: flex;
            justify-content: center;
          }
          
          input[type="search"] {
            width: 70%;
            padding: 20px;
            border: none;
            border-radius: 5px 0 0 5px;
          }
          
          button {
            background-color: brown;
            border: none;
            border-radius: 0 5px 5px 0;
            padding: 10px 30px;
            color: #fff;
            cursor: pointer;
          }
          
          button:hover {
            background-color: #d32f2f;
          }
        </style>

            <div class="app-hero">
                <div class="hero-content">
                    <h1>Welcome to <span style="color: red;">Drive Players</span></h1>
                    <p>Browse your favorite player's here :D</p>
                    <div id="search-container" class="search-container">
                        <input placeholder="Search..." id="searchElement" type="search">
                        <button id="searchButtonElement" type="submit">Search</button>
                    </div>
                </div> 
            </div>`;

        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('app-hero', AppHero);