export abstract class Util {
  montaQuery(model: any, charInit = "&"): string {
    let _queryString = charInit;

    for (const key in model) {
      if (model[key] !== "") {
        if (model[key] || model[key] === 0) {
          if (typeof model[key].getMonth === "function") {
            _queryString +=
              key + "=" + encodeURIComponent(model[key].toISOString()) + "&";
          } else {
            _queryString += key + "=" + encodeURIComponent(model[key]) + "&";
          }
        }
      }
    }
    _queryString = _queryString.substring(0, _queryString.length - 1);

    return _queryString;
  }
}
