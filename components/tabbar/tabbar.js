Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabBar: [
      {
        "pagePath": "../../pages/demo01/demo01",
        "text": "首页",
        "iconPath": "../../icons/doctor1 (1).png",
        "selectIconPath":"../../icons/doctor1 (2).png"
      },
      { 
        "pagePath": "../../pages/user/user",
        "text": "我的",
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateDetail: function (e) {
      wx.reLaunch({ // 关闭所有打开过的页面，跳转到相对于的页面
        url: e.currentTarget.dataset.url  // 获取tabbar.wxml中data-url传递的参数
      })
    }
  }
})
