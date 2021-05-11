// Generated by CoffeeScript 1.9.3
var _Declaration;

module.exports = _Declaration = (function() {
  var self;

  self = _Declaration;

  _Declaration.importantClauseRx = /(\s\!important)$/;

  _Declaration.setOnto = function(declarations, prop, val) {
    var dec;
    if (!(dec = declarations[prop])) {
      return declarations[prop] = new this(prop, val);
    } else {
      return dec.set(val);
    }
  };

  _Declaration.sanitizeValue = function(val) {
    return String(val).trim().replace(/[\s]+/g, ' ');
  };

  _Declaration.inheritAllowed = false;

  function _Declaration(prop1, val) {
    this.prop = prop1;
    this.important = false;
    this.set(val);
  }

  _Declaration.prototype.get = function() {
    return this._get();
  };

  _Declaration.prototype._get = function() {
    return this.val;
  };

  _Declaration.prototype._pickImportantClause = function(val) {
    if (self.importantClauseRx.test(String(val))) {
      this.important = true;
      return val.replace(self.importantClauseRx, '');
    } else {
      this.important = false;
      return val;
    }
  };

  _Declaration.prototype.set = function(val) {
    val = self.sanitizeValue(val);
    val = this._pickImportantClause(val);
    val = val.trim();
    if (this._handleNullOrInherit(val)) {
      return this;
    }
    this._set(val);
    return this;
  };

  _Declaration.prototype._set = function(val) {
    return this.val = val;
  };

  _Declaration.prototype._handleNullOrInherit = function(val) {
    if (val === '') {
      this.val = '';
      return true;
    }
    if (val === 'inherit') {
      if (this.constructor.inheritAllowed) {
        this.val = 'inherit';
      } else {
        throw Error("Inherit is not allowed for `" + this.prop + "`");
      }
      return true;
    } else {
      return false;
    }
  };

  return _Declaration;

})();
