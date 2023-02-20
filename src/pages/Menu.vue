<template>
    <div class="demo">
      <div class="circle" id="circle-big">
        <ul id="circle-big-ul">
            <li class="circle-big-li" v-for="(itemB, indexB) in transformBig" :key="itemB" :style="{transform: itemB}">
                <div> 
                    {{indexB+1}}
                </div>
            </li>
        </ul>
        <div class="circle" id="circle-small">
          <ul class="circle-small-ul">
            <li class="circle-small-li" v-for="(item, index) in transform" :key="item" :style="{transform: item}">
                <div> 
                    <img class="img_card" :src="require(`../assets/${index+1}.png`)">
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"Menu",
    data() {
      return {
        r: 500, //radius
        list_1:[
          {name:"",
          data:"Take dissemination of research findings to the broader public",
          back:"back",
          flip:false},
          {name:"",
          data:"Anchor societal outreach as an element in communication concepts and through science communication as a part of the work of the university press offices",
          back:"back",
          flip:false}
        ]
      }
    },
    computed: {
      transform() {
        let num = 5
        let angle = 360/num
        let arr = []
        for (let index = 0; index < num; index++) {
          arr.push(index*angle)
        }
        arr = arr.map(d => this.getAxis(d) )
        return arr
      },
      transformBig() {
        let num = 25
        let angle = 360/num
        let arr = []
        for (let index = 0; index < num; index++) {
          arr.push(index*angle)
        }
        arr = arr.map(d => this.getAxisBig(d) )
        return arr
      }
    },
    mounted(){
        document.getElementById("circle-big").style.cssText = `width: ${this.r*2}px; height: ${this.r*2}px;`;
        //document.getElementById("circle-big").style.cssText = `width: ${this.r*2}px; height: ${this.r*2}px;`;
        document.getElementById("circle-small").style.cssText = `margin-top: ${this.r - 200}px; margin-bottom: ${this.r*2 - 170}px;`;
    },
    methods: {
      getAxis(angle) {
        // 公式，r-半径，angle-角度
        // x: r+r*Math.sin(angle*Math.PI/180)
        // y: r-r*Math.cos(angle*Math.PI/180)
        return `translate(${170*Math.sin(angle*Math.PI/180)+170}px, ${170-170*Math.cos(angle*Math.PI/180)}px)`
      },
      getAxisBig(angle) {
        // 公式，r-半径，angle-角度
        // x: r+r*Math.sin(angle*Math.PI/180)
        // y: r-r*Math.cos(angle*Math.PI/180)
        return `translate(${this.r*Math.sin(angle*Math.PI/180)+this.r}px, ${this.r-this.r*Math.cos(angle*Math.PI/180)}px)`

      }
    }
}
</script>