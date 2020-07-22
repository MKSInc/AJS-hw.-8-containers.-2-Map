export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(errCode) {
    if (this.errors.has(errCode)) return this.errors.get(errCode);
    return 'Unknown error';
  }
}
