export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(errCode) {
    return this.errors.has(errCode) ? this.errors.get(errCode) : 'Unknown error';
  }
}
