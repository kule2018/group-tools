const app = getApp();
Page({
  data: {
    show: true
  },
  init() {
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    //util.wxlogin(app, this.init);
  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  create() {
    wx.navigateTo({
      url: '/pages/myVoting/index',
    });
  },
  part() {
    wx.navigateTo({
      url: '/pages/joinedVoting/index',
    });
  },
  about() {
    wx.navigateTo({
      url: '/pages/about/index',
    });
  }

})