const CashierUrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      id: urlsSplits[1] || null,
      verb: urlsSplits[2] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.id ? '/:id' : '')
      + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

export default CashierUrlParser;
