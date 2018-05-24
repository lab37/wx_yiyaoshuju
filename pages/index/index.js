//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    var context = wx.createContext();

    context.setLineWidth(10);
    context.setLineCap("round");
    context.setLineJoin("round");
    context.setStrokeStyle("#808080");
    //context.setShadow(2,2,10,'#8F8F8F');
  
    context.moveTo(100, 20);
    context.lineTo(31, 140);
    context.lineTo(169, 140);
    context.lineTo(100, 20);
    context.stroke();

    context.beginPath();
    context.moveTo(100, 180);
    context.lineTo(31, 60);
    context.lineTo(169, 60);
    context.lineTo(100, 180);
    context.stroke();
    


    wx.drawCanvas({
      canvasId: 1,
      actions: context.getActions()
    });
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