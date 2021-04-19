export default class Api {

  async Post(_url, _json) {
    try {
      const response = await fetch(_url, {
        headers: { "Accept": "application/json", "Content-Type": "application/json", },
        method: 'post',
        body: JSON.stringify(_json),
      });
      const responseJSON = await response.json();
      console.log('[API][POST]', _url, responseJSON);
      return responseJSON;
    } catch (error) {
      console.log('[API][POST]  ERROR => ', error);
    }
  }

}