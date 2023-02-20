<template>
  <div>
    <div class="demo">
      <div class="circle" id="circle-big">
        <div id="circle-big-ul">
            <div class="circle-big-li" v-for="(itemB, indexB) in transformBig" :key="itemB" :style="{transform: itemB}" >
                <div class="flipper" v-bind:class="{'flip': list_1[indexB].flip}" v-on:click="letsFlip(list_1[indexB])"> 
                    
                    <figure class="front">
                    <div class="card">
                        <div class="card-image">
                            
                        </div>
                        <div class="card-content">
                          
                            
                            <div class="content">
                                {{ list_1[indexB].data }}
                                
                            </div>
                        </div>
                    </div>
                </figure>
                <figure class="back">
                    <div class="card">
                        <div class="card-content">
                            
                                
                                        
                                        {{ list_1[indexB].back }}
                                
                                
                            
                        </div>
                    </div>
                </figure>
                </div>
              </div>
          </div>
        <div class="circle" id="circle-small">
          <ul class="circle-small-ul">
            <li class="circle-small-li" v-for="(item, index) in transform" :key="item" :style="{transform: item}">
                <div> 
                    <img class="img_card" :src="require(`../assets/${index+1}.png`)">
                </div>
            </li>
      </ul>
      </div>
      <!-- <div v-for="item in list_1" :key="item.data" class="flipper" v-bind:class="{'flip': item.flip}" v-on:click="letsFlip(item)">
                <figure class="front">
                    <div class="card" :id="require(`texte_${item.name}`)">
                        <div class="card-image">
                            
                        </div>
                        <div class="card-content">
                          
                            
                            <div class="content">
                                {{ item.data }}
                                
                            </div>
                        </div>
                    </div>
                </figure>
                <figure class="back">
                    <div class="card">
                        <div class="card-content">
                            
                                
                                        
                                        {{ item.back }}
                                
                                <a class="button is-info is-outlined">
                                    <h3 class="title is-3">View Card</h3>
                                </a>
                            
                        </div>
                    </div>
                </figure>
            </div> -->
    </div>
    </div>
    </div>
  </template>
  
  <script>
import { threadId } from 'worker_threads'

  export default {
    name:"Menu",
    data() {
      return {
        r: 500, //radius
        list_1:[
          {name:1,
          data:"Take dissemination of research findings to the broader public",
          back:"back",
          flip:false},
          {name:1,
          data:"Anchor societal outreach as an element in communication concepts and through science communication as a part of the work of the university press offices",
          back:"back",
          flip:false},
          {name:1,
          data:"test3",
          back:"back",
          flip:false},
          {name:1,
          data:"test3",
          back:"back",
          flip:false},
          {name:1,
          data:"test3",
          back:"back",
          flip:false},
          {name:2,
          data:"test3",
          back:"back",
          flip:false},
          {name:2,
          data:"test3",
          back:"back",
          flip:false},
          {name:2,
          data:"test3",
          back:"back",
          flip:false},
          {name:2,
          data:"test3",
          back:"back",
          flip:false},
          {name:2,
          data:"test3",
          back:"back",
          flip:false},
          {name:3,
          data:"test3",
          back:"back",
          flip:false},
          {name:3,
          data:"test3",
          back:"back",
          flip:false},
          {name:3,
          data:"test3",
          back:"back",
          flip:false},
          {name:3,
          data:"test3",
          back:"back",
          flip:false},
          {name:3,
          data:"test3",
          back:"back",
          flip:false},
          {name:4,
          data:"test3",
          back:"back",
          flip:false},
          {name:4,
          data:"test3",
          back:"back",
          flip:false},
          {name:4,
          data:"test3",
          back:"back",
          flip:false},
          {name:4,
          data:"test3",
          back:"back",
          flip:false},
          {name:4,
          data:"test3",
          back:"back",
          flip:false},
          {name:5,
          data:"test3",
          back:"back",
          flip:false},
          {name:5,
          data:"test3",
          back:"back",
          flip:false},
          {name:5,
          data:"test3",
          back:"back",
          flip:false},
          {name:5,
          data:"test3",
          back:"back",
          flip:false},
          {name:5,
          data:"test3",
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
        for(var i = 0; i<this.list_1.length;i++){
          if(this.list_1[i]["name"]==1){
            document.getElementById(`texte_1`).style.cssText = "";
          }
        }
        
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
        ,
      letsFlip: function(item) {
            this.list_1.filter(function(v, k) {
                return v.id != item.id;
            }).forEach(function(v, k) {
                v.flip = false;
            })
            window.setTimeout(function(v, k) {
                item.flip = !item.flip;
            }, 100)
        },
    }
}
</script>


<style>
.flipper {
    margin: 0 auto 10px;
}
.flipper,
.card {
  font-size: 10px;
    height: 120px;
    width: 100px;
    cursor: pointer;
    
    margin: 0 auto 10px;
}


.flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
}
.flipper.flip {
    transform: rotateY(180deg);
}
.front,
.back {
  margin: 0;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
}
.front {
    z-index: 2;
    /* for firefox 31 */
    
    transform: rotateY(0deg);
}
.back {
    transform: rotateY(180deg);
}
</style>