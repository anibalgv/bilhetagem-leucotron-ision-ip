export default class Api {

  async Post(_url, _json) {
    try {
      const response = await fetch(_url, {
        headers: { "Accept": "application/json", "Content-Type": "application/json", },
        method: 'post',
        body: JSON.stringify(_json),
      });
      console.log('[API][POST]', _url, _json);
      return response.json();
    } catch (error) {
      console.log('[API][POST]  ERROR => ', error);
    }
  }

}