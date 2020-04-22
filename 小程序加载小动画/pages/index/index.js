//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
 
    loader1:false,
    loader2: false,
    loader3: false

  },

  onLoad: function () {
    

  },
  openLoader1(){

    this.setData({

      loader1:true

    })

  },
  openLoader2() {

    this.setData({

      loader2: true

    })

  },
  openLoader3() {

    this.setData({

      loader3: true

    })

  },
  hideLoading(){

    this.setData({

      loader1: false,
      loader2: false,
      loader3: false

    })

  }
})
