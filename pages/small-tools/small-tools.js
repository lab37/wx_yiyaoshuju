var base64 = require('../../utils/encode/base64.js');
var mors = require('../../utils/encode/mors.js');
Page({
  Base64: function(e){
    var result = '';
    if (e.detail.target.id=="1") {
    result = base64.encode(e.detail.value.base64text);

    } else {
    result = base64.decode(e.detail.value.base64text);
    }
    this.setData({
      base64result: result
    })
  },
  smallTools: function (e) {
    var id = e.currentTarget.dataset.indexId;
    var urlto = id + '/' + id;
    wx.navigateTo({
      url: urlto
    })
  },
  Mors: function (e) {
    var result = '';
    if (e.detail.target.id == "1") {
      result = mors.encode(e.detail.value.morsstr);

    } else {
      result = mors.decode(e.detail.value.morsstr);
    }
    this.setData({
      morsResult: result
    })
  }

})