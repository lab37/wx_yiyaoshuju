var app = getApp()
Page({
  data: {
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/list',
      data: {
        categoryId: options.id,
        nameLike: options.key
      },
      success: function (res) {
        var goods = [];
        if (res.data.code != 0 || res.data.data.length == 0) {
          that.setData({
            loadingMoreHidden: false,
          });
          return;
        }
        for (var i = 0; i < res.data.data.length; i++) {
          goods.push(res.data.data[i]);
        }
        console.log(goods);
        that.setData({
          allKey: goods
        });
      }
    })
  },
  toDetail: function (e) {
    wx.navigateTo({
      url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.goodId
    })
  },

  onShareAppMessage: function () {

  }
})