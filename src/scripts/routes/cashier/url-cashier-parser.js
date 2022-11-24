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
      verb: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.verb ? `/${splitedUrl.verb}` : '/')
      + (splitedUrl.id ? '/:id' : '');
  },
};

export default CashierUrlParser;
