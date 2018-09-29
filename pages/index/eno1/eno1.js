var app = getApp()
Page({
  data: {

  },
  toSpecies: function (event) {
    var mid = event.currentTarget.dataset.menuId;
      wx.navigateTo({
        url: '../eno2/eno2?id=' + mid + '&key=' + ''
      })
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/category/all',
      success: function (res) {
        var categories = [];
        if (res.data.code == 0) {
          for (var i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].pid == options.id) {
              categories.push(res.data.data[i]);
            }
          }
        }
        that.setData({
          menuKey: categories
        });
      }
    })
  },

  onShareAppMessage: function () {

  }
})