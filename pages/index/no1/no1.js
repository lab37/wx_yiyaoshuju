Page({
  data: {

  },
  toSpecies: function (event) {
    var mid = event.currentTarget.dataset.menuId;
      wx.navigateTo({
        url: '../no2/no2?mid='+mid
      })
  },
  onLoad: function (options) {
    var id = "menu_" + options.id;
    var menuData = wx.getStorageSync('menuJson');
    var menu = menuData[id];

    this.setData({ menuKey: menu });
  },

  onShareAppMessage: function () {

  }
})