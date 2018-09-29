var dashang = require('../../../utils/dashang.js')
Page({
  data: {
  },
  onLoad: function (options) {
    var aid = options.aid;
    var mid = "all_" + aid.substr(0, 6);
    var allData = wx.getStorageSync('allJson');
    var all = allData[mid];
    var alldetail;
    all.forEach(function (e) {
      if (e.allId==aid){
        alldetail=e;
      }
    });
    this.setData(alldetail);
  },
  onShareAppMessage: function () {

  },

  calling: function() {
    wx.makePhoneCall({
      phoneNumber: '15853873773'
    })
  },

  daShang: function () {
    let that = this;
    let userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      wx.navigateTo({
        url: "/pages/authorize/index"
      })
    } else {
      dashang.dashang();
    }
  }


    
})
  

