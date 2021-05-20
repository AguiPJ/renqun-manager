<template>
  <h2>备份</h2>
  <div class="container flex flex-col h-full">
    <div class="flex mt-3">
      <ElButton>浏览</ElButton>
      <div class="flex-grow"/>
      <ElButton>备份</ElButton>
      <div>
        <ElCheckbox v-model="autoBakIsCheck" class="pt-2 ml-2">自动备份</ElCheckbox>
      </div>
    </div>

    <div class="border-1 mt-2 border-black min-h-full flex-grow">
      <pre>
        百度为您找到相关结果约2,760,000个
        vue-cli3使用Echart动态渲染数据 轮询获取后台数据_rya...

        2020年3月17日 因为我是采用轮询的方式向后台获取数据,每10秒刷新一次,所监听监听函数里,只要监听到数据变化就再次执行this.drawLine()这个函数,这样就刷新了,因为this.option发生了变化。
        CSDN技术社区
        百度快照
        Vue轮询方法_kabit的博客-CSDN博客
        2020年9月12日 vue接口轮询.txt 06-05 setInterval不会清除定时器队列,每重复执行1次都会导致定时器叠加,最终卡死你的网页。但是setTimeout是自带清除定时器的 Vue清除定时器s...
        CSDN技术社区
        百度快照
        VUE前端轮询实现 - 简书
        2019年3月12日 VUE前端轮询实现 第一次轮询实现 在data中定义 timer:null setTimer方法实现如下: 在打码的方法(方法1)中判断是否需要轮询,状态变更后调用方法:clearInterval(t...
        简书社区
        百度快照
        其他人还在搜
        vue只执行一次的函数前端轮询vue的生命周期执行顺序vue组件拆分vue定时任务vue前端轮询vue中datatime前端vue定时器vue项目启动执行顺序websocketvue框架
        vue项目轮询 || setInterval()和setTimeout()区别 - 十点...
        2021年1月31日 clearTimeout( timer ); //clearTimeout(ID)来取消 未执行 的超时调用 1 轮询 轮询就是不断地去调用同一个接口。当离开这个界面时,就停止对这个接口的不断调用...
        博客园
        百度快照
        Vue内部使用setInterval轮询数据,对象数据重新赋值后再次...

        2020年4月20日 2、轮询执行要在mounted钩子方法下做,具体说明见下; 3、setInterval中调用方法时不要加()及引号等。 Vue每个钩子函数都在啥时间触发 beforeCreate 在实例初始化之后,数据观测(data o...
        博客园
        百度快照
        vue 设置轮询访问方法 - 百度经验
        2020年1月30日 7 保存代码并运行项目，打开浏览器查看，点击保存按钮，然后查看按钮变化 总结 1 1、创建项目2、新建组件3、插入按钮4、绑定事件5、运行项目6、查看效果 注意事...
        百度经验
        百度快照
        Vue使用轮询定时发送请求代码_vue.js_脚本之家
                  脚本之家
                  
                  百度快照
                  vue 通过定时器轮询获取后台数据 - 码农教程
                  2020年8月10日 本文章向大家介绍vue 通过定时器轮询获取后台数据,主要包括vue 通过定时器轮询获取后台数据使用实例、应用技巧、基本知识点总结和需要注意事项,具有一定的参考...
                  www.manongjc.com/detail/18-tzh...
        百度快照
        vuejs如何实现长轮询? - SegmentFault 思否
        2016年12月28日 现在的项目需要通过ajax进行轮询,获取已经处理过的数据的个数,vue-reousrce怎样实现? vue.js 关注3收藏2 赞0 回复 阅读10.6k 2 个回答 得票数最新 0 灰色v碰触...
        segmentfault.com/q/10100000079...
        百度快照
        vue中使用轮询 - CSDN
        Vue定时器轮询及 销毁定时器 2020-09-22 11:56:09 项目中我们经常需要实现轮询 每隔几秒请求一次接口刷新数据 一般都会使用setInterval,但要注意单纯使用它可能导致页面卡...
        CSDN技术社区
        百度快照

      </pre>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "back",
  setup() {
    const autoBakIsCheck = ref(true)

    return {autoBakIsCheck}
  }
}
</script>

<style scoped>

</style>