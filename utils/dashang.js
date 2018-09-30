//index.js
//获取应用实例
var wxpay = require('pay.js')
var app = getApp()

var data={
    totalScoreToPay: 0,
    goodsList: [],
    isNeedLogistics: 0, // 是否需要物流信息
    allGoodsPrice: 1,
    yunPrice: 0,
    allGoodsAndYunPrice: 1,
    goodsJsonStr: '[{"goodsId":92337,"number":1,"propertyChildIds":"","logisticsType":0, "inviter_id":0}]',
    orderType: ""
  };
function dashang(e) {
    wx.showLoading();
    var loginToken = wx.getStorageSync('token') // 用户登录 token
    var remark = ""; // 备注信息

    var postData = {
      token: loginToken,
      goodsJsonStr: data.goodsJsonStr,
      remark: remark
    };
    if (data.kjId) {
      postData.kjid = data.kjId;
    }
    if (data.curCoupon) {
      postData.couponId = data.curCoupon.id;
    }
    if (!e) {
      postData.calculate = "true";
    }
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/order/create',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: postData, // 设置请求的 参数
      success: (res) => {
        wx.hideLoading();
        if (res.data.code != 0) {
          wx.showModal({
            title: '错误',
            content: res.data.msg,
            showCancel: false
          })
          return;
        }
        var money = 1;
        var orderId = res.data.data.id;
        wxpay.wxpay(app, money, orderId, "/pages/order-list/index", cancelOrderTap);
      }
    })
  }
function cancelOrderTap(orderId) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/order/close',
      data: {
        token: wx.getStorageSync('token'),
        orderId: orderId
      },
      success: (res) => {
        wx.hideLoading();
        if (res.data.code == 0) {
          that.onShow();
        }
      }
    })
  }
module.exports = {
  dashang: dashang
}