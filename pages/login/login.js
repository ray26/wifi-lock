// pages/login/login.js
Page({

  /**
   * Page initial data
   */
  data: {
    isScuess: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasUserInfo: false,
    userInfo: {},
    name: "用户名",
    stuId: "密码"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var tempThis=this;
    var app=getApp();
    

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  formSubmit: function(e){
    var tapThis=this;
    var app = getApp();
    console.log(e); 
    wx.request({
      url: "https://www.happydoudou.xyz/public/index.php/User/login",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        name: e.detail.value.name,
        pwd: e.detail.value.stuId,
        openid: app.globalData.openid
      },
      success: res => {
        console.log(res);
        if (res.data == 0) {
          tapThis.setData({
            isScuess: true
          })
          wx.switchTab({
            url: '../../pages/devices/index/index',
          })
        } else {
          wx.showToast({
            title: '账户错误',
            image: "../../images/warn.png"
          })
        }
      }
    })
  }
})