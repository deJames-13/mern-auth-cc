import mongoose from 'mongoose';
class Model extends mongoose.Schema {
  fillables;
  hidden;
  constructor({ name, schema = [] }) {
    super(...schema);
    this.name = name;

    this.statics.filterFillables = this.constructor.filterFillables;

    return this;
  }

  makeModel() {
    return mongoose.model(this.name, this);
  }

  static filterFillables(data) {
    if (!this.fillables) return data;
    return Object.keys(data).reduce((acc, key) => {
      if (this.fillables.includes(key)) {
        acc[key] = data[key];
      }
      return acc;
    }, {});
  }
}

export default Model;
