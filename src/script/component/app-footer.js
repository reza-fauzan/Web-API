class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        footer {
            display: flex;
            justify-content: space-between;
            background-color: #f0f0f0;
            text-align: center;
            padding: 15px;
            align-items: center;
          }
          
          footer p {
            font-size: 14px;
            font-weight: 500;
          }
        
          @media screen and (max-width: 768px) {
            footer {
              text-align: center;
              flex-direction: column;
          }
        }
        </style>

            <footer>
                <p>Copyright &#169; Reza Fauzan Pratama. All right reserved</p>
            </footer>`
    }
}

customElements.define('app-footer', AppFooter);