Page({
  data: {
    showModal: false,
    showModal2:false,
    discountsList: [{
        'englishTitle': 'Hallmork Babies',
        'title': '新品折扣券',
        'num': 9,
        'unit': '折',
        'oldPrice': '',
        'condition': 300,
        'index':1
      },
      {
        'englishTitle': 'Hallmork Babies',
        'title': '新品折扣券',
        'num': 9,
        'unit': '',
        'oldPrice': '',
        'condition': 300,
        'index':2
      },
      {
        'englishTitle': 'Hallmork Babies',
        'title': '新品折扣券',
        'num': 9,
        'unit': '港币',
        'oldPrice': '',
        'condition': 300,
        'index':3
      },
      {
        'englishTitle': 'Hallmork Babies',
        'title': '新品折扣券',
        'num': 9,
        'unit': '港币',
        'oldPrice': 82.5,
        'condition': 300,
        'index':4
      }
    ],
    hongkong: [{
        'rmb': 20,
        'limit': 300,
        'name': '屈臣氏专享券',
        'ddl': 21,
        'desc': '香港地区屈臣氏线下门店可用'
      },
      {
        'rmb': 50,
        'limit': 300,
        'name': '屈臣氏专享券',
        'ddl': 21,
        'desc': '香港地区屈臣氏线下门店可用'
      }
    ],
    foreign: {
      'rmb': 3,
      'limit': 300,
      'name': '屈臣氏专享券',
      'ddl': 15,
      'desc': '使用后扫不同的码可解锁下一张'
    },
    pay:{
      'name':'超优汇率券',
      'ddl':7,
      'hk':100,
      'rmb':85.41,
      'old':85.80
    }
  },
onLoad: function () {
  this.setData({
    showModal: true
  })
  let _this = this
  // wx.request({
  //   url: './test.json',
  //   data:{
  //   },
  //   header: {
  //     'content-type': 'application/json'
  //   },
  //   success(res) {
  //     console.log(res)
  //     _this.setData({
  //     })

  //   }
  // })
},

  // 禁止屏幕滚动
  preventTouchMove: function () {},

  // 弹出层里面的弹窗
  ok: function () {
    this.setData({
      showModal: false,
      showModal2:true
    })
  },
  ok2: function () {
    this.setData({
      showModal2: false,
    })
  }

})