// pages/small-tools/discount/discount.js
var discountC = require('../../../utils/discount.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Title: '',
    Response: {},
    tfl: false,
    tfh: false,
    tfa: false,
    diffPrice:0,
    profit:0
  },
  formSubmit: function (e) {
    var that = this;
    let L = e.detail.value.lowP;
    let H = e.detail.value.highP;
    let A = e.detail.value.allP;
    if (e.detail.value.lowPrice == "" || e.detail.value.highPrice == "") {
      wx.showModal({
        title: '错误提示',
        content: '必须输入低价和高价',
      })
      return;
    } else if ((L+A+H)==(L>A?(L>H?L:H):(A>H?A:H))) {
      wx.showModal({
        title: '错误提示',
        content: '必须输入两个扣率',
      })
      return;
    } else if (L!=""&&H!=""&&A!="") {
      wx.showModal({
        title: '错误提示',
        content: '只能输入两个扣率',
      })
      return;
    } else {
      var rst=discountC.Invoice(e.detail.value.lowPrice, e.detail.value.highPrice,L/100,H/100,A/100);
      that.setData({
        diffPrice: rst[0].toFixed(4) ,
        profit: rst[1].toFixed(4)
      })
    }
  },

  fail: function () {
    // fail
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