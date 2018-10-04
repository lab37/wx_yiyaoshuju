Page({

  /**
   * 页面的初始数据
   */
  data: {
    Title: 0,
    Response: {},
    flows:[]
  },

  formSubmit: function (e) {
    var that = this;
    if (e.detail.value.yaopin_name == "" && e.detail.value.region == "") {
      wx.showModal({
        title: '错误提示',
        content: '你未输入任何内容',
      })
    } else {
      wx.request({
        url: 'https://www.yiyaoshuju.cn/chaxun?neirong=channelh' + '&yaopinname=xx' + '&channel=' + e.detail.value.channel + '&region=' + e.detail.value.region,
        method: 'GET',
        success: function (res) {
          that.setData({
            Title: 1,
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
    this.setData({
        flows: wx.getStorageSync('flowJson')
    });


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