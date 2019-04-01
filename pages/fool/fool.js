// pages/fool/fool.js
import { Lang } from '../../lang/lang.js';

Page({
  data: {
    foolLaughters: Lang.zh.fool.nogame_laughters,
    foolTitle: '',
    foolTitleEnd: Lang.zh.fool.nogame_end,
  },

  onLoad: function (options) {
    let title = Lang.zh.fool.nogame_beginning + options.name + '?';
    this.setData({
      foolTitle: title
    });
  },

  onReady: function () {},

  onShow: function () {},

  onHide: function () {},

  onUnload: function () {},

  onPullDownRefresh: function () {},

  onReachBottom: function () {},

  onShareAppMessage: function () {},
})