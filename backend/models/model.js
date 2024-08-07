import mongoose from 'mongoose';
class Model extends mongoose.Schema {
  constructor({ name, schema = [] }) {
    super(...schema);
    this.name = name;

    this.statics.filterFillables = (data) => {
      if (!this.statics.fillables) return data;
      return Object.keys(data).reduce((acc, key) => {
        if (this.statics.fillables.includes(key)) {
          acc[key] = data[key];
        }
        return acc;
      }, {});
    };

    this.statics.filterHidden = (data) => {
      if (!this.statics.hidden) return data;
      return Object.keys(data).reduce((acc, key) => {
        if (!this.statics.hidden.includes(key)) {
          acc[key] = data[key];
        }
        return acc;
      }, {});
    };
    return this;
  }

  makeModel() {
    return mongoose.model(this.name, this);
  }
}

export default Model;
