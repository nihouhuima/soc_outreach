<template>
  <div>
    <div class="demo">
      <!-- <div id="panier">
          <p id="panier_text">panier</p>
      </div> -->
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
          <p id="logo_text">Societal Outreach Approach</p>
        </div>
        
      </div>
    </div>

    <!-- partie action -->
    <div id="back">


      <div class="flipper" v-bind:class="{'flip': showCard.flip}"> 
                    
          <figure class="card_front">
              <div class="card_front_content">
                <div id="intention"></div>
                <!-- <input type="button" value="Return" @click="returnMap()"/> -->
                <p class="overturn" v-on:click="letsFlip(showCard)">Discover some examples</p>
                <p class="overturn" @click="returnMap()" >Back to home page</p>
              </div>
                
          </figure>

          <figure class="card_back">
              <div class="card_back_container">
                <div id="action"> 
                    <form class="card_back_form" action="" method="">
                        <div id="action_form"></div>
                        <input type="submit" value="Confirm" class="btn" id="btn_confirm">
                        <!-- <input type="button" value="Return" @click="returnMap()" class="btn" id="btn_return"/> -->
                    </form>
                    <p class="overturn" v-on:click="letsFlip(showCard)"> Flip the card</p>  
                    <p class="overturn" @click="returnMap()" >Back to home page</p>    
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
        r: 430, //radius 500
        action: [],
        showCard: {},
        list_1:[
          {name:5,
          data:"Base actions or activities on an innovative mindset, collective commitment and co-creation by all stakeholders in and outside",
          back:"action",
          flip:false,
          image: "5_img",
          action:["action1","action2"]},
          {name:5,
          data:"Use the expertise in our disciplines as powerful tools to provide meaningful solutions to challenges (focus on SDG)",
          back:"action",
          flip:false,
          image: "5_img",
          action:["action1","action2"]},
          {name:1,
          data:"Aim at connecting university research and teaching with societal input and improving them in exchange with society",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
          "Several members of NHH’s academic staff participate in government-appointed expert groups.", 
          "NHH researchers are represented on approximately 80 boards in private and public enterprises.", 
          "Researchers are encouraged to engage in public debate. Research-relate news stories in 2021 for NHH was 3,714.",
          'WU has created a an open platform "WU4Juniors" with 50+ modules on financial and economic literacy, dedictaed primarily to high school pupils, but open to all interested parties',
          "Tilburg has created an Academic Collaborative Centers in which researchers, students and societal partners work together on a shared mission (mostly SDG) "]},
          {name:1,
          data:"Take part in or initiate societal debates based on excellent research",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
          "Several members of NHH’s academic staff participate in government-appointed expert groups.",
          "NHH researchers are represented on approximately 80 boards in private and public enterprises.",
          "Researchers are encouraged to engage in public debate. Research-relate news stories in 2021 for NHH was 3,714.",
          "The WU Talks, WU Matters public debates series",
          "At TiU we also organize a regular tallkshow in the local theater for the general public. Items are showcasing the research at TiU, but also answering to events happening in society through the lens of academic research, for instance the war in Ukrain, or the climate crisis and dutch policies etc etc"]},
          {name:1,
          data:"Make research accessible to the public",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
          "UT capitole Encourage researchers to develop webinars, conferences etc, accessible to the public.",
          "NHH research is made available through publications, newsletters, media articles and opinion pieces, podcasts, conferences, lectures etc. NHH holds regular media training and opinion writing courses.",
          'WU researchers present their research activites to the public as part of the biennial event  "Long Night of Research" across Austria. ',
          'Open access publications, publications in journals for professionals.']},
          {name:1,
          data:"Acknowledge that one of the universities responsibilities beyond research and teaching is engaging with society",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
          "UT Capitole fosters conferences about the main societal challenges.",
          "Societal relevance is at the core of the mission statement of NHH - Together for sustainable value creation.",
          "Societal relevance/third mission is at the core of the mission statement of the university."]},
          {name:1,
          data:"Take responsibility to have a positive impact on society as a whole and its individuals",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
          "UT Capitole has defined indicators like the number of implemented student's projects.",
          "Sustainability holds a central place in NHH’s research communication. The NHH podcast Bærekraftseventyr reaches a wide audience with discussions about how to achieve sustainable business models, circular flows of material and green business. The number of listeners has increased steadily since 2020. The podcast is just one example of a range of initiatives in the media or our own channels where we draw attention to and shed light on the important work done by NHH’s researchers in relation to sustainability.",
          'WU has an online programme "Eco Business" (Oeko Business) on the Learn Public platform and a competence center for Sustainability Transformation and Responsibility (STaR)']},
          {name:1,
          data:"Provide students and learners with the knowledge and skills to understand societal contexts ",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
          "ENGAGE.EU has Developped new modules and new programs on digital transformation.",
          "NHH has adopted a new strategy with sustainability at the core, where knowledge of the social, economic and environmental aspects of sustainability will be clearly integrated into all study programs. Sustainability issues and topics are included in a number of the courses offered in NHH’s study programmes, bot regular and executive education.",
          "Different programs is proposed within the WU Entrepreneurship Center: Skills Academy, Inspirational Talks, Changemaker, Entrepreneurship avenue, Transfer Hubs.",
          "ENGAGE.EU Summer School 2023 is on the topic  Transformation to sustainability in Europe, addresses challenges and solutions related to this societal & business phenomenon.",
          "TiU adopted a Tilburg Educational Profile (the TEP) with three pillars; knowledge, skills and character. The latter one is geared towards enhancing the societal responsibility of our students (Intellectual independence - Critical mindset - Social responsibility - Scientific responsibility Entrepreneurship). We do this for example via modules, challenges."]},
          {name:1,
          data:"Raise awareness within the universities for societal responsibility",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
          "UT Capitole wants to create chairs linked to societal outreach",
          "Wu has Volunteering at WU programme, Student Buddies for Kids (Study/Music or Sport Buddies) and KinderUni during Summer for schoolkids",
          "Recently TiU launched 4 academic collabroative centers in which researcher, students and partners work interdisciplinary on a joined mission."]},
          {name:2,
          data:"Take dissemination of research findings to the broader public",
          back:"action",
          flip:false,
          image: "2_img",
          action:["action1","action2"]},
          {name:2,
          data:"Anchor societal outreach in communication concepts and through science communication",
          back:"action",
          flip:false,
          image: "2_img",
          action:["action1","action2"]},
          {name:2,
          data:"Actively communicate about university’s societal outreach activities to improve visibility towards stakeholders in and outside",
          back:"action",
          flip:false,
          image: "2_img",
          action:["action1","action2"]},
          {name:3,
          data:"Designate a responsible for societal outreach in each department of the university, preferably at the management level",
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
          data:"Foster collaborations between researchers and outside / societal partners to work on real-life challenges",
          back:"action",
          flip:false,
          image: "4_img",
          action:["action1","action2"]},
          {name:4,
          data:"Define societal outreach to highlight the opportunities emerging through collaborations among learners, researchers, and societal partners",
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
          // {name:5,
          // data:"Shape the future of society in a positive way through education",
          // back:"action",
          // flip:false,
          // image: "5_img",
          // action:["action1","action2"]},
          {name:5,
          data:"Be aware that we can only achieve impact or societal outreach if we collaborate with partners who transfer the impact in society",
          back:"action",
          flip:false,
          image: "5_img",
          action:["action1","action2"]},
          {name:5,
          data:"Be aware that as privileged drivers of change, the universities need to playan active role in developing with the society",
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
        let num = this.list_1.length
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
          listeTexte1[i].style.cssText = "background-color: rgb(225, 148, 78, 1); height: 12em; width: 13em; padding-top: 1em; border: black solid 1px;";       
        }

        var listeTexte2 = document.getElementsByClassName(`texte_2`);
        for(i = 0 ; i<listeTexte2.length; i++){
          listeTexte2[i].style.cssText = "background-color: rgb(199, 11, 118, 1); height: 12em; width: 13em; padding-top: 1em; border: black solid 1px;";       
        }

        var listeTexte3 = document.getElementsByClassName(`texte_3`);
        for(i = 0 ; i<listeTexte3.length; i++){
          listeTexte3[i].style.cssText = "background-color: rgb(236, 184, 52, 1);  height: 12em; width: 13em; padding-top: 1em; border: black solid 1px;";       
        }

        var listeTexte4 = document.getElementsByClassName(`texte_4`);
        for(i = 0 ; i<listeTexte4.length; i++){
          listeTexte4[i].style.cssText = "background-color: rgb(157 205 90);  height: 12em; width: 13em; padding-top: 1em; border: black solid 1px;";       
        }

        var listeTexte5 = document.getElementsByClassName(`texte_5`);
        for(i = 0 ; i<listeTexte5.length; i++){
          listeTexte5[i].style.cssText = "background-color: rgb(31 98 142);  height: 12em; width: 13em; padding-top: 1em; border: black solid 1px;";       
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
            actionForm.innerHTML = "" //clear the original text ######## <p id='card_back_text'>Veuillez choisir des actions :</p>
            for(var i = 0; i<this.list_1[indexB].action.length; i++){
              var actionCat = document.getElementById("action_form");
              actionCat.innerHTML = actionCat.innerHTML + `<input type='checkbox' name='${indexB}_${i}'><span>${this.list_1[indexB].action[i]}</span><br/><br/>`;
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