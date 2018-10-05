//app.js
App({
  onLaunch: function() {
    var that = this;
    //  获取商城名称
    that.getSvcData();
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/config/get-value',
      data: {
        key: 'mallName'
      },
      success: function(res) {
        if (res.data.code == 0) {
          wx.setStorageSync('mallName', res.data.data.value);
        }
      }
    })
    // 判断是否登录
    let token = wx.getStorageSync('token');
    if (!token) {
      that.goLoginPageTimeOut()
      return
    }
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/user/check-token',
      data: {
        token: token
      },
      success: function(res) {
        if (res.data.code != 0) {
          wx.removeStorageSync('token')
          that.goLoginPageTimeOut()
        }
      }
    })
  },
  getSvcData: function() {
    wx.request({
        url: 'https://www.yiyaoshuju.cn/wx/yaosousou/menu.json',

        success: function(res) {
          wx.setStorage({
            key: "menuJson",
            data: res.data
          })
        }

      }),
      wx.request({
        url: 'https://www.yiyaoshuju.cn/wx/yaosousou/index.json',
        success: function(res) {
          wx.setStorage({
            key: "indexJson",
            data: res.data
          })
        }
      }),
      wx.request({
        url: 'https://www.yiyaoshuju.cn/wx/yaosousou/all.json',
        success: function(res) {

          wx.setStorage({
            key: "allJson",
            data: res.data
          })
        }
      }),
      wx.request({
        url: 'https://www.yiyaoshuju.cn/wx/yaosousou/flow.json',
        success: function (res) {

          wx.setStorage({
            key: "flowJson",
            data: res.data
          })
        }
      })

  },
  sendTempleMsg: function(orderId, trigger, template_id, form_id, page, postJsonString) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/template-msg/put',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        token: wx.getStorageSync('token'),
        type: 0,
        module: 'order',
        business_id: orderId,
        trigger: trigger,
        template_id: template_id,
        form_id: form_id,
        url: page,
        postJsonString: postJsonString
      },
      success: (res) => {
        //console.log('*********************');
        //console.log(res.data);
        //console.log('*********************');
      }
    })
  },
  sendTempleMsgImmediately: function(template_id, form_id, page, postJsonString) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/template-msg/put',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        token: wx.getStorageSync('token'),
        type: 0,
        module: 'immediately',
        template_id: template_id,
        form_id: form_id,
        url: page,
        postJsonString: postJsonString
      },
      success: (res) => {}
    })
  },
  goLoginPageTimeOut: function() {},
  globalData: {
    userInfo: null,
    subDomain: "8471766f6000e200097fcc10e04159fc", // 如果你的域名是： https://api.it120.cc/abcd 那么这里只要填写 abcd
    version: "1.0.0", //my页面的版本号
    mallName: "药搜搜", //店铺名称
    alipayName: "15853873773", //店主收款支付宝帐号
    startWelcome: "Copy Right@zhoujingcheng", //start页欢迎语
    shareProfile: '山东药品销售小工具', // 首页转发的时候话术
    about: "18660303073，微信同号，祝大家使用愉快！" //关于我们的提示语
  }
  /*
  根据自己需要修改下单时候的模板消息内容设置，可增加关闭订单、收货时候模板消息提醒；
  1、/pages/to-pay-order/index.js 中已添加关闭订单、商家发货后提醒消费者；
  2、/pages/order-details/index.js 中已添加用户确认收货后提供用户参与评价；评价后提醒消费者好评奖励积分已到账；
  3、请自行修改上面几处的模板消息ID，参数为您自己的变量设置即可。  
   */
})