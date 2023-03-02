<template>
  <div>
    <div class="demo">
      <div class="circle" id="circle-big">
        <div id="circle-big-ul">
            <div class="circle-big-li" v-for="(itemB, indexB) in transformBig" :key="itemB" :style="{transform: itemB}" >
                  <div class="card" @click="showAction(indexB)">    
                      <div :class="`texte_${list_1[indexB].name}`">
                          
                           
                          <div class="content">
                            <div class="card-image">
                                <img :src="require(`../assets/${list_1[indexB].image}.png`)" alt="img" class="card-image-content"/>
                            </div>
                             <p>{{ list_1[indexB].data }}</p>  
                              
                          </div>
                      </div>
                  </div> 
<!--                 <div class="flipper" v-bind:class="{'flip': list_1[indexB].flip}" v-on:click="letsFlip(list_1[indexB])"> 
                    
                    <figure class="front">
                    <div class="card">
                        
                        <div :class="`texte_${list_1[indexB].name}`">
                          
                            
                            <div class="content">
                              <div class="card-image">
                                  <img :src="require(`../assets/${list_1[indexB].image}.png`)" alt="img" class="card-image-content"/>
                              </div>
                               <p>{{ list_1[indexB].data }}</p>  
                                
                            </div>
                        </div>
                    </div>
                </figure>
                <figure class="back">
                    <div class="card">
                        <div :class="`texte_${list_1[indexB].name}`">
                            
                                
                                        
                          <p class="card_back" @click="showAction(indexB)">{{ list_1[indexB].back }}</p> 
                                
                                
                            
                        </div>
                    </div>
                </figure>
                </div> -->
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
        <div id="logo_card"> 
          <img id="logo_img" src="../assets/Logo.png" alt="logo_engage"/>
          <p id="logo_text">Societal Outreach Methodology</p>
        </div>
        
      </div>
    </div>

    <!-- partie action -->
    <div id="back">


      <div class="flipper" v-bind:class="{'flip': showCard.flip}" v-on:click="letsFlip(showCard)"> 
                    
          <figure class="card_front">
              <div class="card_front_content">
                <div id="intention"></div>
                <input type="button" value="Return" @click="returnMap()"/>
              </div>
                
          </figure>

          <figure class="card_back">
              <div class="card_back_container">
                <div id="action"> 
                    <form action="" method="">
                        <div id="action_form"></div>
                        <!-- <input type="checkbox" name="action_1">
                        <span>action 1</span><br/> -->
                        <input type="submit" value="Confirm" class="btn" id="btn_confirm">
                        <input type="button" value="Return" @click="returnMap()" class="btn" id="btn_return"/>
                    </form>      
                </div>
              </div>
          </figure>

        </div>
    

        
        </div>

    </div>
    </div>
  </template>
  
  <script>
//import { threadId } from 'worker_threads' import bodyParser from 'body-parser'

  export default {
    name:"Menu",
    data() {
      return {
        r: 500, //radius
        action: [],
        showCard: {},
        list_1:[
          {name:5,
          data:"Base actions or activitieson an innovative mindset, collective commitment and co-creation by all stakeholders coming from university and society",
          back:"action",
          flip:false,
          image: "5_img",
          action:["action1","action2"]},
          {name:5,
          data:"Be a driving force for engaged research and innovation and sustainable development",
          back:"back",
          flip:false,
          image: "5_img",
          action:["action1","action2"]},
          {name:5,
          data:"Use the expertise in our disciplines as powerful tools to provide meaningful solutions to today ́s challenges -with a focus on Sustainable Development Goals",
          back:"action",
          flip:false,
          image: "5_img",
          action:["action1","action2"]},
          {name:1,
          data:"Aim at giving knowledge back to society, connecting research and teaching with societal input, sharing university knowledge,and generating value for society and improving teaching and research in exchange with society",
          back:"action",
          flip:false,
          image: "1_img",
          action:["action1","action2"]},
          {name:1,
          data:"Take part in or initiate societal debates based on excellent research",
          back:"action",
          flip:false,
          image: "1_img",
          action:["action1","action2"]},
          {name:1,
          data:"Make research accessible to the public",
          back:"action",
          flip:false,
          image: "1_img",
          action:["action1","action2"]},
          {name:1,
          data:"Acknowledge that our responsibilities go beyond research and teaching and create awareness about the importance of engaging with society",
          back:"action",
          flip:false,
          image: "1_img",
          action:["action1","action2"]},
          {name:1,
          data:"Take responsibility to have a positive impact on society as a whole and its individuals",
          back:"action",
          flip:false,
          image: "1_img",
          action:["action1","action2"]},
          {name:1,
          data:"Provide students and learners with the knowledge and skills to understand societal contexts ",
          back:"action",
          flip:false,
          image: "1_img",
          action:["action1","action2"]},
          {name:1,
          data:"Raise awareness within the universities for societal responsibility",
          back:"action",
          flip:false,
          image: "1_img",
          action:["action1","action2"]},
          {name:2,
          data:"Take dissemination of research findings to the broader public  ",
          back:"action",
          flip:false,
          image: "2_img",
          action:["action1","action2"]},
          {name:2,
          data:"Anchor societal outreach as an element in communication concepts and through science communication as a part of the work of the university press offices",
          back:"action",
          flip:false,
          image: "2_img",
          action:["action1","action2"]},
          {name:2,
          data:"Actively communicate about university’s societal outreach activities as it is essential for visibility towards stakeholders in-and outside the university",
          back:"action",
          flip:false,
          image: "2_img",
          action:["action1","action2"]},
          {name:3,
          data:"Designate someone to be responsible for the topic of societal outreach in each department of the university, preferably at the management level",
          back:"action",
          flip:false,
          image: "3_img",
          action:["action1","action2"]},
          {name:3,
          data:"Actively initiate the mobilization of knowledge on relevant issues between university and society",
          back:"action",
          flip:false,
          image: "3_img",
          action:["action1","action2"]},
          {name:4,
          data:"Enable and motivate students and university members to participate in societal engagement activities",
          back:"action",
          flip:false,
          image: "4_img",
          action:["action1","action2"]},
          {name:4,
          data:"Foster systematic collaborations between researchers and partners to co-create real applications and to work on real-life challenges for teaching, learning, and innovation",
          back:"action",
          flip:false,
          image: "4_img",
          action:["action1","action2"]},
          {name:4,
          data:"Choose a knowledge-based approach to societal outreach activities",
          back:"action",
          flip:false,
          image: "4_img",
          action:["action1","action2"]},
          {name:4,
          data:"Build a constant bi-directional communication with society",
          back:"action",
          flip:false,
          image: "4_img",
          action:["action1","action2"]},
          {name:4,
          data:"Promote a clear profile on societal outreach to highlight the possibilities and opportunities emerging through collaboration among learners, researchers, and societal partners",
          back:"action",
          flip:false,
          image: "4_img",
          action:["action1","action2"]},
          {name:4,
          data:"Promote strong, mission-driven collaborations through partnerships between universities and multi-stakeholder partners in an iterative way",
          back:"action",
          flip:false,
          image: "4_img",
          action:["action1","action2"]},
          {name:5,
          data:"Shape the future of society in a positive way through education",
          back:"action",
          flip:false,
          image: "5_img",
          action:["action1","action2"]},
          {name:5,
          data:"Be aware of the fact that: 1) 2) 3)",
          back:"action",
          flip:false,
          image: "5_img",
          action:["action1","action2"]},
          {name:5,
          data:"Be aware that universities are privileged drivers of change and therefore need to play an active role in developing sustainable solutions preferably with the involvement of society",
          back:"action",
          flip:false,
          image: "5_img",
          action:["action1","action2"]},
          {name:5,
          data:"Contribute significantly to the purposeful education of responsible, proactive, and engaged citizens of the future",
          back:"action",
          flip:false,
          image: "5_img",
          action:["action1","action2"]}
          
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

        var i ;
        var listeTexte1 = document.getElementsByClassName(`texte_1`);
        for(i=0 ; i<listeTexte1.length; i++){
          listeTexte1[i].style.cssText = "background-color: rgb(225, 148, 78, 1); height: 110px; width: 100px; padding-top: 5px;";       
        }

        var listeTexte2 = document.getElementsByClassName(`texte_2`);
        for(i = 0 ; i<listeTexte2.length; i++){
          listeTexte2[i].style.cssText = "background-color: rgb(199, 11, 118, 1); height: 110px; width: 100px; padding-top: 5px;";       
        }

        var listeTexte3 = document.getElementsByClassName(`texte_3`);
        for(i = 0 ; i<listeTexte3.length; i++){
          listeTexte3[i].style.cssText = "background-color: rgb(236, 184, 52, 1);  height: 110px; width: 100px; padding-top: 5px; ";       
        }

        var listeTexte4 = document.getElementsByClassName(`texte_4`);
        for(i = 0 ; i<listeTexte4.length; i++){
          listeTexte4[i].style.cssText = "background-color: rgb(157 205 90);  height: 110px; width: 100px; padding-top: 5px; ";       
        }

        var listeTexte5 = document.getElementsByClassName(`texte_5`);
        for(i = 0 ; i<listeTexte5.length; i++){
          listeTexte5[i].style.cssText = "background-color: rgb(31 98 142);  height: 110px; width: 100px; padding-top: 5px;  ";       
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

      },
      showAction(indexB){
            //add information in "showCard"
            this.showCard = this.list_1[indexB]
            //show text of each action
            this.action = this.list_1[indexB].action;
            var actionForm = document.getElementById("action_form");
            actionForm.innerHTML = "<p id='card_back_text'>Veuillez choisir des actions :</p>" //clear the original text
            for(var i = 0; i<this.list_1[indexB].action.length; i++){
              var actionCat = document.getElementById("action_form");
              actionCat.innerHTML = actionCat.innerHTML + `<input type='checkbox' name='${indexB}_${i}'><span>${this.list_1[indexB].action[i]}</span><br/>`;
            }

            //show information of intentions
            var actionIn = document.getElementById("intention");
            actionIn.innerHTML = `${this.list_1[indexB].data}`;

            //set the color of card
            var actionCard = document.getElementsByClassName("flipper")[0];
            console.log(`${this.list_1[indexB].name}`);
            switch (this.list_1[indexB].name){
              case 1:
                  console.log("1");
                  actionCard.style.cssText = "background-color:rgb(225, 148, 78, 1);";
                  break;
              case 2:
                  console.log("2");
                  actionCard.style.cssText = "background-color:rgb(199, 11, 118, 1);";
                  break;
              case 3:
                  console.log("3");
                  actionCard.style.cssText = "background-color:rgb(236, 184, 52, 1);";
                  break;
              case 4:
                  console.log("4");
                  actionCard.style.cssText = "background-color:rgb(157, 205, 90, 1);";
                  break;
              case 5:
                  console.log("5");
                  actionCard.style.cssText = "background-color:rgb(31, 98, 142, 1);";
                  break;
            }
              

            //make the pop-up display
            var actionStyle = document.getElementsByClassName("flipper")[0];
            actionStyle.style.cssText = actionStyle.style.cssText + "display:block;";
            var backStyle = document.getElementById("back");
            backStyle.style.cssText = "display:block;";
            var bodyStyle = document.body;
            bodyStyle.style.cssText = "overflow:hidden;";      
      },
      returnMap(){
            var actionStyle = document.getElementsByClassName("flipper")[0];
            actionStyle.style.cssText = "display:none;";

            var backStyle = document.getElementById("back");
            backStyle.style.cssText = "display:none;";

            var bodyStyle = document.body;
            bodyStyle.style.cssText = "overflow:scroll;";
      },
      letsFlip: function(item) {
        console.log(this.showCard)
            // this.showCard.filter(function(v, k) {
            //     return v.id != item.id;
            // }).forEach(function(v, k) {
            //     v.flip = false;
            // })
            window.setTimeout(function(v, k) {
                item.flip = !item.flip;
            }, 100)
        }
    }
}
</script>


<style>

</style>