import Url from '../constants/url.js'
class Request {
  constructor() {}

  // params is a instance of a object {}
  request(methos, api, query, succ_callback, fail_callback) {
    return wx.request({
      url: Url.Dev.BASE_URL + api,
      method: methos.toString().toUpperCase(),
      data: query,
      success: succ_callback(),
      fail: fail_callback(),
    });
  }
}