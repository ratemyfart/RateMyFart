const template = document.createElement("template");
template.innerHTML = `
<div id="videos" width="100%"></div>
<style>
div{
    text-align: center;
    background-color: #68350B;
    padding:10px;
    border-radius:20px;
}
video{
    display:inline;
    margin: 0 auto;
    padding: 10px 10px 10px 10px;
    max-width:90%;
    border-radius:20px;
}
</style>
`;
class InstaFrame extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$videoList = this._shadowRoot.querySelector("div");
  }
  _renderInstaFrame() {
    this.$videoList.innerHTML = "";

    this._instas.forEach((instas, index) => {
      let $test = document.createElement("video");

      $test.src = instas;
      $test.controls = "true";
      this.$videoList.appendChild($test);
    });
  }

  set instas(value) {
    this._instas = value;
    this._renderInstaFrame();
  }

  get instas() {
    return this._instas;
  }
}

customElements.define("insta-frame", InstaFrame);
