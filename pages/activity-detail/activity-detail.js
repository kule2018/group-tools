// pages/activity-detail/activity-detail.js
var domain = "http://3130846838.cross.echosite.cn";
var root = "/wx/grouptool";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    describe: "",
    start_date: "",
    end_date: "",
    item_event_list: []
  },

  enterCreateEvent: function(){
    wx.navigateTo({
      url: '/pages/event-create/event-create',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
      wx.request({
        url: domain + root + '/activity/detail',
        success: function(res){
          console.log("a_d success");
          _this.setData({
            title: res.data.title,
            describe: res.data.describe,
            start_date: res.data.start_date,
            end_date: res.data.end_date,
          });
        },
        fail: function(err){
          console.log("a_d fail");
        }
      })
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