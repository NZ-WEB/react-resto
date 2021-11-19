export default class RestoService {
  _apiBase = 'http://localhost:3000';

  async getResource(url) {
    const r = await fetch(`${this._apiBase}${url}`);

    if (!r.ok) {
      throw new Error(`could not fetch ${url}, received ${r.status}`);
    }

    return await r.json();
  }

  async getMenuItems() {
    return await this.getResource('/menu/');
  }
}
