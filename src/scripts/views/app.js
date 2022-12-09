import appBarInitiator from '../utils/appBar-initiator';

class App {
  constructor({
    nav, button, drawer, wrapper, span,
  }) {
    this.nav = nav;
    this._button = button;
    this._drawer = drawer;
    this._wrapper = wrapper;
    this._span = span;
    this._initialAppShell();
  }

  _initialAppShell() {
    appBarInitiator.init({
      nav: this.nav,
      button: this._button,
      drawer: this._drawer,
      wrapper: this._wrapper,
      span: this._span,
    });
  }
}

export default App;
