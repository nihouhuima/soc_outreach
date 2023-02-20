<template>
    <div class="demo">
      <ul>
        <li v-for="(item,index) in transform" :key="item" :style="{transform: item}">{{index+1}}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name:"Menu",
    computed: {
      transform() {
        let num = 11
        let angle = 360/num
        let arr = []
        for (let index = 0; index < num; index++) {
          arr.push(index*angle)
        }
        arr = arr.map(d => this.getAxis(d) )
        return arr
      }
    },
    methods: {
      getAxis(angle) {
        // 公式，r-半径，angle-角度
        // x: r+r*Math.sin(angle*Math.PI/180)
        // y: r-r*Math.cos(angle*Math.PI/180)
        return `translate(${200*Math.sin(angle*Math.PI/180)+200}px, ${200-200*Math.cos(angle*Math.PI/180)}px)`
      }
    }
}
</script>