export default class Resource {
  constructor(data) {
    this.data = data;
    return this;
  }

  make(data) {
    return this.toArray();
  }

  toArray() {
    if (Array.isArray(this.data)) {
      return this.data.map((item) => this.transform(item));
    }
    return this.transform(this.data);
  }

  toJson() {
    return JSON.stringify(this.toArray());
  }

  transform(item) {
    return item;
  }

  static collection(data) {
    return data.map((item) => new this(item).toArray());
  }
}
