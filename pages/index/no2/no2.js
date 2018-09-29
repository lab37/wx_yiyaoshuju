Page({
  data: {
  },
  onLoad: function (options) {
    var mid = "all_" + options.mid;
    var allData = wx.getStorageSync('allJson');
    var all = allData[mid];
    this.setData({ allKey: all });
  },
  toDetail: function (event) {
    var aid = event.currentTarget.dataset.allId;
    //console.log(aid);
    wx.navigateTo({
      url: '../detail/detail?aid='+aid
    })
  },

  onShareAppMessage: function () {

  }
})