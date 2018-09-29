var app = getApp()
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false, // loading
    userInfo: {},
    swiperCurrent: 0,
    selectCurrent: 0,
    categories: [],
    scrollTop: 0,
    loadingMoreHidden: true,
    hasNoCoupons: true,
    coupons: [],
    searchInput: '',
  },
  swiperchange: function (e) {
    //console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  ones: function (event) {
    var id = event.currentTarget.dataset.indexId;
    var keyWord = this.data.searchInput;
    var urlto = "";
    urlto = 'no1/no1?id=' + id;
    wx.navigateTo({
      url: urlto
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let faData = wx.getStorageSync('indexJson');
    faData='';
    if (!faData) {
      wx.request({
        url: 'https://www.yiyaoshuju.cn/wx/yaosousou/menu.json',
        
        success: function (res) {
          wx.setStorage({
            key: "menuJson",
            data: res.data
          })
        }

      }),
        wx.request({
          url: 'https://www.yiyaoshuju.cn/wx/yaosousou/index.json',
          success: function (res) {
            that.setData({
              indexKey: res.data
            });
            wx.setStorage({
              key: "indexJson",
              data: res.data
            })
          }
        }),
        wx.request({
        url: 'https://www.yiyaoshuju.cn/wx/yaosousou/all.json',
          success: function (res) {
            
            wx.setStorage({
              key: "allJson",
              data: res.data
            })
          }
        })
    }
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    }),
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/banner/list',
      data: {
        key: 'mallName'
      },
      success: function (res) {
        if (res.data.code == 404) {
          wx.showModal({
            title: '提示',
            content: '请在后台添加 banner 轮播图片',
            showCancel: false
          })
        } else {
          that.setData({
            banners: res.data.data
          });
        }
      }
    })
    that.getNotice();    
  },
  onPageScroll(e) {
    let scrollTop = this.data.scrollTop
    this.setData({
      scrollTop: e.scrollTop
    })
  },

  onShareAppMessage: function () {
    return {
      title: wx.getStorageSync('mallName') + '——' + app.globalData.shareProfile,
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  getNotice: function () {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/notice/list',
      data: { pageSize: 5 },
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            noticeList: res.data.data
          });
        }
      }
    })
  },
  listenerSearchInput: function (e) {
    this.setData({
      searchInput: e.detail.value
    })

  },
  toSearch: function () {
    var keyWord = this.data.searchInput;
    var id = '';
    var urlto = 'eno2/eno2?id=' + id + '&key=' + keyWord;
    wx.navigateTo({
      url: urlto
    })
  },
  one: function (event) {
    var iid = 'i01';
    var urlto = "";
    if (iid == "i01" || iid == "i03") {
      urlto = 'no1/no1?iid=' + iid;
    } else {
      urlto = 'no2/no2?mid=' + iid + "m01";
    }

    wx.navigateTo({
      url: urlto
    })
  }
})