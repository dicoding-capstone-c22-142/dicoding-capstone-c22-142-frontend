const CashierUrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1);
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      menu: urlsSplits[1] || null,
      verb: urlsSplits[2] || null,
      id: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.menu ? `/${splitedUrl.menu}` : '/')
      + (splitedUrl.verb ? `/${splitedUrl.verb}` : '')
      + (splitedUrl.id ? '/:id' : '');
  },
};

export default CashierUrlParser;
