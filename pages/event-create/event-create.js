// pages/event-create/event-create.js
var eid = "";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    eid: "",
    event_title: "",
    event_detail: "",
    start_time: "08:00",
    end_time: "21:00",
    img_one: "",
    img_two: "",
    img_three: ""
  },
  upImage: function(e){
    var _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        wx.setStorage({
          key: eid,
          data: tempFilePaths[0],
        })
        _this.setData({
          img_one: tempFilePaths[0]
        });
      }
    })
  },

  bindStartTimeChange: function(e){
    this.setData({
      start_time: e.detail.value
    });
  },

  bindEndTimeChange: function (e) {
    this.setData({
      end_time: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      eid: Math.random().toString()
    });
    console.log(eid);
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