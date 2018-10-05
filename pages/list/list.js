// pages/list/list.js
var app = getApp();
Page({
  data: {    
    goods: [],
    searchInput: '',
    curIndex: 0
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/list',
      data: {
        nameLike: that.data.searchInput
      },
      success: function (res) {
        var goods = [];
        for (var i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].categoryId == 22831) {
          goods.push(res.data.data[i]);
          }
        }
        that.setData({
          goods: goods,
        });
      }
    })
  },
  toDetailsTap: function (e) {
    wx.navigateTo({
      url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
    })
  }
})