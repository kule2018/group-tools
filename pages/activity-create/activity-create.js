// pages/activity-create/activity-create.js
var domain = "http://3130846838.cross.echosite.cn";
var root = "/wx/grouptool";
Page({
  /**
 * 页面的初始数据
 */
  data: {
    title: "",
    describe: "",
    start_date: "2018-09-25",
    end_date: "2018-10-30"
  },
  submitActForm: function (e) {
    console.log(e.detail.value);
    console.log(this);
    var data = {
      "title": e.detail.value.title,
      "describe": e.detail.value.describe,
      "start_date": this.data.start_date,
      "end_date": this.data.end_date
    }
    console.log(data);
    wx.request({
      url:  domain + root + '/activity/add',
      data: data,
      method: "POST",
      success: function(res){
        console.log("success");
        console.log(res.data);
        if(res.data.addActivity == "ok"){
          wx.redirectTo({
            url: '/pages/activity-detail/activity-detail?aid=' + res.data.aid,
            success: function(res){
              console.log("successfully redirectTo");
            },
            fail: function(res){
              console.log("addActivity fail!");
            }
          })
        }
      },
      fail: function(err) {
        console.log(err);
      }
    })
  },
  bindStartDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      start_date: e.detail.value
    })
  },
  bindEndDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      end_date: e.detail.value
    })
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