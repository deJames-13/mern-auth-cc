import mongoose from 'mongoose';

class Model extends mongoose.Schema {
  _fillables;
  _hidden;
  constructor({ name, schema = [] }) {
    super(...schema);
    this.name = name;
    this.statics.filterFillables = this.constructor.filterFillables;

    return mongoose.model(this.name, this);
  }

  static filterFillables(data) {
    if (!this._fillables) return data;
    return Object.keys(data).reduce((acc, key) => {
      if (this._fillables.includes(key)) {
        acc[key] = data[key];
      }
      return acc;
    }, {});
  }
}

export default Model;
