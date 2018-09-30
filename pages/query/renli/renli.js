Page({

  /**
   * 页面的初始数据
   */
  data: {
    Title: 0,
    Response: {}
  },

  formSubmit: function (e) {
    var that = this;
    if (e.detail.value.yaopin_name == "" && e.detail.value.factory == "" && e.detail.value.city == "" && e.detail.value.county == "" && e.detail.value.hospital == "") {
      wx.showModal({
        title: '错误提示',
        content: '你未输入任何内容',
      })
    } else {
      wx.request({
        url: 'https://www.yiyaoshuju.cn/chaxun?neirong=' + e.detail.value.neirong + '&yaopinname=' + e.detail.value.yaopin_name + '&factory=' + e.detail.value.factory + '&city=' + e.detail.value.city + '&county=' + e.detail.value.county + '&hospital=' + e.detail.value.hospital ,
        method: 'GET', 
        success: function (res) {
          console.log(res);
          that.setData({
            Title: e.detail.value.neirong,
            Response: res.data
          })
        }
      })
    }
  },

  fail: function () {
    // fail
  },

  complete: function () {
    // complete
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})