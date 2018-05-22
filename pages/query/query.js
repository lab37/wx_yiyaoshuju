var app = getApp()
Page({
  data: {
    Title: '',
    Response: {}
  },

  formSubmit: function (e) {
    var that = this
    if(e.detail.value.yaopin_name==""&&e.detail.value.shengchanqiye==""){
      wx.showModal({
        title: '错误提示',
        content: '你未输入任何内容' ,
      })
    }else{
      wx.request({
      url: 'https://www.yiyaoshuju.cn/chaxun?neirong=' + e.detail.value.neirong + '&yaopinname=' + e.detail.value.yaopin_name + '&shengchanqiye='+e.detail.value.shengchanqiye,//上线的话必须是https，没有appId的本地请求貌似不受影响
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
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
  }
})
  

