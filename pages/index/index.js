Page({
  data:{
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    year:0,
    month:'',
    _index:''
  },
  onLoad:function(){
    let that=this
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day=date.getDate()
    let index=day<10?'0'+day:day
    this.setData({
      year: year,
      month: this.data.months[month],
      _index:index
    })
    wx.request({
      url: 'http://bl.7yue.pro/v1/classic/latest',
      data:{},
      header: {
        'content-type': 'application/json',
        'appkey': "RdshydjBvcYZhMZC"
      }, // 设置请求的 header
      success:function(res){
        console.log(res.data.fav_nums)
        that.setData({
          likeCount: res.data.fav_nums,
          likeStatus: res.data.like_status
        });
      }

    })
    
  },
  
})