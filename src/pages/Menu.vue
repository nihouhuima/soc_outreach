<template>
  <div class="demo_container">
    <div class="demo">
      <!-- {{ visit }}  -->
      <a class="homepage" href="https://www.engageuniversity.eu/societal-outreach-approach/">Return to Welcome Page</a>
      <div id="cart">
            <p v-show="cart_text" id="cart_text" @click="showCart" @mouseenter="showCartText()" @mouseleave="hideCartText()">Check your actions here </p>
            <img @mouseenter="showCartText()" @mouseleave="hideCartText()" @click="showCart" id="cart_img" src="../assets/panier.png" alt="cart" >
          </div> 
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
                <div class="circle_small_card"> 
                    <img class="img_card" :src="require(`../assets/${index+1}.png`)">
                    <img v-if="index==0" class="img_card_icone" :src="require(`../assets/5_img.png`)">
                    <img v-else class="img_card_icone" :src="require(`../assets/${index}_img.png`)">
                </div>
            </li>
        </ul>
        <div id="logo_card"> 
          <a href="https://www.engageuniversity.eu/"><img id="logo_img" src="../assets/Logo.png" alt="logo_engage"/></a>
          <p class="logo_text">Societal Outreach Approach</p>
          <p class="logo_text" id="logo_text_soustitre">Let's be inspired !</p>
          
        </div>
        
      </div>
    </div>

    <!-- partie action -->
    <div id="back" @click="positionMouse()">

      
      <div class="flipper" v-bind:class="{'flip': showCard.flip}"> 
         
          <figure class="card_front">
            <div ><img @click="returnMap()" class="return_img" src="../assets/croix.png"></div>
              <div class="card_front_content">
                <div class="intention"></div>
                <div class="card_button">
                  <p class="overturn" v-on:click="letsFlip(showCard)">Discover some examples</p> 
                  <!-- <p class="overturn" @click="returnMap()" >Back to home page</p>  -->
                </div>
              </div>
                
          </figure>

          <figure class="card_back">
            <div ><img @click="returnMap()" class="return_img" src="../assets/croix.png"></div>
              <div class="card_back_container">
                <div id="action"> 
                    <div class="card_back_form">
                        <div id="action_form" v-for="(elAction, indexA) in list_1[indexTarget].action" :key="indexA">
                            <input type='checkbox' name='action' v-model='actions_list' :value="`${indexTarget}_${indexA}`" :id="`${indexTarget}_${indexA}`">
                            <span class ="card_back_action" v-html="elAction"></span><br/><br/>
                        </div>
                    </div>
                     
                </div>

                <div class="card_button">
                      <button class="btn" id="btn_confirm" @click="confirmAction">Add to cart</button>
                      <p class="overturn" v-on:click="letsFlip(showCard)"> Flip the card</p> 
                      <!-- <p class="overturn" @click="returnMap()" >Back to home page</p>    -->
                    </div>
              </div>
          </figure>

        </div>
    
        <div class="show_cart">
          <div class="cart_title"> 
            <p>The actions you have selected are : </p>
          </div>

          <div class="cart_button">
                <!-- print as PDF-->
                <div class="cart_button_link" @click="deleteAction">Delete</div>
                <div class="cart_button_link" @click="downloadPDF" id="cart_print">Download all the actions</div>
                    <VueHtml2pdf :manual-pagination="true" :enable-download="true" ref="DownloadComp" :htmlToPdfOptions="{filename: `societal_outreach_actions.pdf`}">
                      <section slot="pdf-content">
                          <download :list_1=list_1 :actions_list_content=actions_list_content></download>
                      </section>
                    </VueHtml2pdf>
                <!-- end of print -->

                <div class="cart_button_link" @click="returnMap()" id="cart_home">Back to home page</div> 
          </div>

          
              <div class="cart_content">

                  <div class="cart_content_container">
                        <div class="cart_actions">
                            <div v-if="this.actions_list_content.length>0">
                                <div v-for="(element) in this.actions_list_content" :key="element"> 
                                    <input type="checkbox" :value="element" name="actionChosen" v-model="list_delete">
                                    <span class="cart_action_el" v-html=" getAction(element) "></span><br><br>

                                </div>
                            </div>
                            <div v-else> 
                                <p>You haven't chosen any action</p>
                            </div>
                        </div>
                  </div>

        </div>
        </div>
        
        </div>

    </div>
      
   <!-- <Download/>   -->
    </div>
  </template>
  
  <script>
import Download from '@/components/Download.vue'
import VueHtml2pdf from 'vue-html2pdf'

  export default {
    components: { 
        Download,
        VueHtml2pdf },
    name:"Menu",
    data() {
      return {
        r: 390, //radius 500
        rs : 220, // radius for small circle
        mtb : 150, // margin top for big circle = padding(100) of div 'demo' + margin-top of big circle (100)
        cardHeight: 12, // height of cards intentions
        cardWidth: 13, // width of cards intentions
        
        indexTarget:0, // index of intention at the card chosen
        actions_list:[],  // index of actions chosen at the small windows
        actions_list_content:[], // all the index of actions chosen 
        list_delete:[],
        visit:0,
        indexIntention:{
          type:Number
        },
        indexAction:{
          type:Number
        },
        cart_text: false,
        showCard: {},
        list_1:[
          {name:1,
          data:"Aim at connecting university research and teaching with societal input and improving them in exchange with society",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
          "UMA has developped Academic Collaborative Centers/Hubs/Labs in which researchers, students and societal partners work together (i.e. ENGAGE.EU Lab Mannheim Lab on Culture, Arts and Creative Entrepreneurship) on a shared mission AND TransforMA, a 5year strategic project with the aim of strengthening technology and knowledge transfer in order to identify transformation needs and shape transformation processes in close cooperation with regional stakeholders from business and society.",
          "Several members of NHH’s academic staff participate in government-appointed expert groups.", 
          "NHH researchers are represented on approximately 80 boards in private and public enterprises.", 
          'WU has created a an open platform "WU4Juniors" with 50+ modules on financial and economic literacy, for high school pupils and all interested parties.',
          'TiU has created <a target="_blank" href="https://www.tilburguniversity.edu/collaboration/academic-collaborative-centers-widespread-prosperity">an Academic Collaborative Centers</a> in which researchers, students and societal partners work together on a shared mission (mostly SDG) ']},
          {name:1,
          data:"Take part in or initiate societal debates based on excellent research",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
            'UMA has launched public discussion series such as "Transatlantic Climate Conversations" or public panel discussions such as "One Year of War in Ukraine: Impacts and Prospects," in which researchers discuss current issues.',
            "NHH researchers take part in public debate  (3,714 research relate new stories in 2021).",
            "WU organizes WU Talks, WU Matters public debates series.",
            'TiU  organizes a regular <a target="_blank" href="https://www.tilburguniversity.edu/nl/onderzoek/impact/nieuws/terugblik-online-talkshow-energiearmoede-vraagt-om-maatwerk">talkshow</a> in the local theater for the general public. Items are showcasing the research at TiU, but also answering to events happening in society through the lens of academic research.',
            "UT Capitole launches <a target=\"_blank\" href=\"https://www.ut-capitole.fr/accueil/universite/composantes/faculte-de-droit-et-science-politique/act-u-lactualite-au-coeur-de-luniversite-debat-autour-de-la-reforme-des-retraites\">a series of interdisciplinary debates</a> with university researchers experts to highlight current issues."]},
          {name:1,
          data:"Make research accessible to the public",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
          'In UMA, the Open Science Office supports researchers at all career stages and from all disciplines. It offers Open Science Checks to examine each researchers’ potential and support the implementation of Open Science techniques into their research. Via training in various formats as well as the website, information on Open Science can be obtained. Funding is provided for Open Science research projects (Open Science Grants) and can be applied for conference visits or research stays that focus on Open Science',
          'NHH research is made available through various publications, opinion pieces, <a target="_blank" href="https://podcasts.apple.com/no/podcast/lederskap-nhhs-podkast-om-ledelse/id1498796704">podcasts</a>, conferences, lectures etc. NHH holds regular media training and opinion writing courses.',
          'WU researchers present their research activites to the public as part of the biennial event  "Long Night of Research" across Austria. ',
          'TiU has developped <a target="_black" href="https://www.tilburguniversity.edu/research/open-science-community/open-access">Open access publications</a>, publications in journals for professionals.']},
          {name:1,
          data:"Acknowledge that one of the universities responsibilities beyond research and teaching is engaging with society",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
          "In UMA, Societal relevance/third mission is at the core of the mission statement of the university. It is also part of the strategic plan of the university.",
          "Societal relevance is at the core of the mission statement of NHH: conferences and other large events on issues pertaining to sustainability and digitalization are organized.",
          'In TiU Societal relevance/third mission is at the core of the <a target="_blank" href="https://www.tilburguniversity.edu/about/organization/strategy">mission statement</a> of the university.']},
          {name:1,
          data:"Take responsibility to have a positive impact on society as a whole and its individuals",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
          "UT Capitole has defined indicators like the number of implemented student's projects.",
          'NHH has a range of initiatives in the media or its own channels to promote the important work done by NHH’s researchers in relation to sustainability, for example <a target="_blank" href="https://podcasts.apple.com/no/podcast/b%C3%A6rekraftseventyr-med-j%C3%B8rgensen-pedersen/id1545918010">the NHH podcast Bærekraftseventyr</a>.',
          'WU has an online programme "Eco Business" (Oeko Business) on the Learn Public platform and a competence center for Sustainability Transformation and Responsibility (STaR)']},
          {name:1,
          data:"Provide students and learners with the knowledge and skills to understand societal contexts ",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
          'ENGAGE.EU has developed new <a target="_blank" href="https://www.engageuniversity.eu/engage-eu-modules/">modules</a> and new programs on digital transformation, and also a new diploma focused on societal transition.',
          'Service Learning in UMA is offered in every faculty and implemented in the curriculum of the area teacher education.',
          'NHH develops <a target="_blank" href="https://www.nhh.no/en/executive/andre-executive-studier/developing-sustainable-business-models-and-managing-societal-transition/">courses, integrate topics</a> of sustainability and digital transformation in existing programs and courses on all levels of education at NHH (bachelor, master, PhD and executive).',
          'WU proposes different programs within the WU Entrepreneurship Center.ENGAGE.EU Summer School 2023 of WU is on "Transformation to sustainability in Europe", addresses challenges and solutions related to this societal & business phenomenon.',
          'TiU adopted a <a target="_blank" href="https://www.tilburguniversity.edu/about/education/tep">Tilburg Educational Profile (the TEP)</a> with three pillars; knowledge, skills and character. The latter one is geared towards enhancing the societal responsibility of our students (Intellectual independence - Critical mindset - Social responsibility - Scientific responsibility Entrepreneurship).']},
          {name:1,
          data:"Raise awareness within the universities for societal responsibility",
          back:"action",
          flip:false,
          image: "1_img",
          action:[
            'At UMA, a vice president for sustainability and a vice president for diversity consider these topics especially on the governance level. Many projects and initiatives on all levels adress the topic aswell.',
          "Wu has Volunteering at WU programme, Student Buddies for Kids (Study/Music or Sport Buddies) and KinderUni during Summer for schoolkids",
          'Recently TiU launched 4 <a target="_blank" href="https://www.tilburguniversity.edu/collaboration/academic-collaborative-centers-widespread-prosperity">academic collabroative centers</a> in which researcher, students and partners work interdisciplinary on a joined mission.']},
          {name:2,
          data:"Take dissemination of research findings to the broader public",
          back:"action",
          flip:false,
          image: "2_img",
          action:[
            'NHH research is made available through various publications, opinion pieces, podcasts, conferences, lectures etc. NHH holds regular media training and opinion writing courses.',
            'WU organizes the "Researcher of the Month videos". WU offers also  "One paper, one minute" series in which research papers are presented in one-minute animated videos.',
            'TiU organizes a regular <a target="_blank" href="https://www.tilburguniversity.edu/nl/onderzoek/impact/nieuws/terugblik-online-talkshow-energiearmoede-vraagt-om-maatwerk">tallkshow</a> in the local theater for the general public. Items are showcasing the research at TiU, but also answering to events happening in society through the lens of academic research, for instance the war in Ukrain, or the climate crisis and dutch policies']},
          {name:2,
          data:"Anchor societal outreach in communication concepts and through science communication",
          back:"action",
          flip:false,
          image: "2_img",
          action:[
            'In UMA, Science communication is part of the communications office',
            'NHH research is made available through various publications, opinion pieces, podcasts, conferences, lectures etc. NHH holds regular media training and opinion writing courses.']},
          {name:2,
          data:"Actively communicate about university’s societal outreach activities to improve visibility towards stakeholders in and outside",
          back:"action",
          flip:false,
          image: "2_img",
          action:[
            "In UMA, Press releases and the UMA journal allow to communicate about the university's societal outreach",
            "In WU Through press release, newsletters",
            'Recently TiU launched 4 <a target="_blank" href="https://www.tilburguniversity.edu/collaboration/academic-collaborative-centers-widespread-prosperity"> academic collabroative centers</a> in which researcher, students and partners work interdisciplinary on a joined mission.']},
          {name:3,
          data:"Designate a responsible for societal outreach in each department of the university, preferably at the management level",
          back:"action",
          flip:false,
          image: "3_img",
          action:[
            "TiU has 5 schools, each dean is responsible for one academic collaborative center. Each center is led by two professors (from differenmt schools)."]},
          {name:3,
          data:"Actively initiate the mobilization of knowledge on relevant issues between university and society",
          back:"action",
          flip:false,
          image: "3_img",
          action:[
            'NHH takes responsibility in dissemination of research.'
          ]},
          {name:4,
          data:"Enable and motivate students and university members to participate in societal engagement activities.",
          back:"action",
          flip:false,
          image: "4_img",
          action:[
            'ENGAGE.EU proposes challenges based activities like&nbsp;<a target="_blank" href="https://www.engageuniversity.eu/2022/07/15/students-work-on-real-challenges-during-the-first-engage-eu-expedition/">Expedition week</a>.',
            "In UMA, Student initiatives are highly supported at the UMA campus.",
            "In TiU, Funding has been made available by both the board as the schools to enable researchers to join the Academic collective centers and hire postdocs with a specific impact-profile."
          ]},
          {name:4,
          data:"Foster collaborations between researchers and outside / societal partners to work on real-life challenges",
          back:"action",
          flip:false,
          image: "4_img",
          action:[
            'UT Capitole invites researchers to the challenges activities, and proposes the researchers to go further or to take in consideration the issues of the challenges activities',
            'UMA has academic centres like the ZLBI with a focus on collaboration with and in society.',
            'In NHH, research centers collaborate and partner with industry on research and dissemination.',

          ]},
          {name:5,
          data:"Be aware that as drivers of change, the universities play an active role in developing sustainable solutions with the partners",
          back:"action",
          flip:false,
          image: "5_img",
          action:[
            'ENGAGE.EU has launched a Work Intergrated Learning Programme called "Josefbus" in cooperation with Caritas',
            "UMA has launched the TransforMA project. It is a huge, 5 year project in collaboration with the Hochschule Mannheim and the aim, to strengthen and deepen the collaboration with Mannheim Society. Both universities are in the lead of this project.",
            'WU EA has developed a short executive education program and hosted panel discussion regarding "Strategic Sustainability Management"'
          ]},
          {name:5,
          data:"Base actions on an innovative mindset, collective commitment and co-creation by all stakeholders in and outside",
          back:"action",
          flip:false,
          image: "5_img",
          action:['WU delivers Awards for "Innovative Teaching" and an Innovation Office is organizing Innovation Bootcamps and Facilitation Track.']},
          {name:5,
          data:"Use the expertise in our disciplines as powerful tools to provide meaningful solutions to challenges (focus on SDG)",
          back:"action",
          flip:false,
          image: "5_img",
          action:[
            "In WU, the Star competence center is guiding to embedding the SDGs in teaching activities."
          ]}
          
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
        this.actions_list_content = [];
        // put the circle at right place
        document.getElementById("circle-big").style.cssText = `width: ${this.r*2}px; height: ${this.r*2}px;`;
        document.getElementById("circle-small").style.cssText = `margin-top: ${this.r-this.rs}px;`; //; margin-bottom: ${this.r*2 - 170}px

        var i ;
        var listeTexte1 = document.getElementsByClassName(`texte_1`);
        for(i=0 ; i<listeTexte1.length; i++){
          listeTexte1[i].style.cssText = `background-color: rgb(225, 148, 78, 1); height: ${this.cardHeight}em; width: ${this.cardWidth}em; padding-top: 1em; border: black solid 1px;`;       
        }

        var listeTexte2 = document.getElementsByClassName(`texte_2`);
        for(i = 0 ; i<listeTexte2.length; i++){
          listeTexte2[i].style.cssText = `background-color: rgb(199, 11, 118, 1); height: ${this.cardHeight}em; width: ${this.cardWidth}em; padding-top: 1em; border: black solid 1px;`;       
        }

        var listeTexte3 = document.getElementsByClassName(`texte_3`);
        for(i = 0 ; i<listeTexte3.length; i++){
          listeTexte3[i].style.cssText = `background-color: rgb(236, 184, 52, 1); height: ${this.cardHeight}em; width: ${this.cardWidth}em; padding-top: 1em; border: black solid 1px;`;       
        }

        var listeTexte4 = document.getElementsByClassName(`texte_4`);
        for(i = 0 ; i<listeTexte4.length; i++){
          listeTexte4[i].style.cssText = `background-color: rgb(157 205 90); height: ${this.cardHeight}em; width: ${this.cardWidth}em; padding-top: 1em; border: black solid 1px;`;       
        }

        var listeTexte5 = document.getElementsByClassName(`texte_5`);
        for(i = 0 ; i<listeTexte5.length; i++){
          listeTexte5[i].style.cssText = `background-color: rgb(31 98 142); height: ${this.cardHeight}em; width: ${this.cardWidth}em; padding-top: 1em; border: black solid 1px;`;       
        }
    },
    methods: {
      getAxis(angle) {
        // 公式，r-半径，angle-角度
        // x: r+r*Math.sin(angle*Math.PI/180)
        // y: r-r*Math.cos(angle*Math.PI/180)
        return `translate(${this.rs*Math.sin(angle*Math.PI/180)+this.rs}px, ${this.rs-this.rs*Math.cos(angle*Math.PI/180)}px)`
      },
      getAxisBig(angle) {
        // 公式，r-半径，angle-角度
        // x: r+r*Math.sin(angle*Math.PI/180)
        // y: r-r*Math.cos(angle*Math.PI/180)
        return `translate(${this.r*Math.sin(angle*Math.PI/180)+this.r}px, ${this.r-this.r*Math.cos(angle*Math.PI/180)}px)`

      },
      showAction(indexB){
            //add information in "showCard"
            this.showCard = this.list_1[indexB];
            this.indexTarget = indexB;

            //show information of intentions
            var actionIn = document.getElementsByClassName("intention")[0];
            actionIn.innerHTML = `${this.list_1[indexB].data}`;

            //set the color of card
            var actionCard = document.getElementsByClassName("flipper")[0];
            //console.log(`${this.list_1[indexB].name}`);
            switch (this.list_1[indexB].name){
              case 1:
                  actionCard.style.cssText = "background-color:rgb(225, 148, 78, 1);";
                  break;
              case 2:
                  actionCard.style.cssText = "background-color:rgb(199, 11, 118, 1);";
                  break;
              case 3:
                  actionCard.style.cssText = "background-color:rgb(236, 184, 52, 1);";
                  break;
              case 4:
                  actionCard.style.cssText = "background-color:rgb(157, 205, 90, 1);";
                  break;
              case 5:
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

            var cartStyle = document.getElementsByClassName("show_cart")[0];
            cartStyle.style.cssText = "display:none;";

            var bodyStyle = document.body;
            bodyStyle.style.cssText = "overflow:scroll;";
      },
      letsFlip: function(item) {
        //console.log(this.showCard)
            // this.showCard.filter(function(v, k) {
            //     return v.id != item.id;
            // }).forEach(function(v, k) {
            //     v.flip = false;
            // })
            window.setTimeout(function(v, k) {
                item.flip = !item.flip;
            }, 100)
        },
        confirmAction(){
          if(this.actions_list.length>0){
              //add new action to the list
              for(var i = 0; i<this.actions_list.length; i++){
                  if(this.actions_list_content.indexOf(this.actions_list[i]) == -1){
                    this.actions_list_content.push(this.actions_list[i]);
                  }
              }
              this.returnMap();
              alert("Your actions have been selected to purchase your own action plan");
          }else{
              alert("Please choose at least one action ! ");
          }
          
          

          
        },
        showCart(){
          var backStyle = document.getElementById("back");
          backStyle.style.cssText = "display:block;";
          var cartStyle = document.getElementsByClassName("show_cart")[0];
          cartStyle.style.cssText = "display:block;";
          var bodyStyle = document.body;
          bodyStyle.style.cssText = "overflow:hidden;"; 
        },
        getAction(element){
          var indexIntention = element.substring(0,element.indexOf("_"));
          var indexAction = element.substring(element.indexOf("_")+1,element.indexOf("_")+2);
          return this.list_1[indexIntention].action[indexAction];
        },
        downloadPDF () {
            if(this.actions_list_content.length>0){
                this.$refs.DownloadComp.generatePdf()
                this.$router.push({path:'/refresh',query:{path:this.$route.fullPath}})
                this.returnMap()
            }else{
                alert("Please choose at least one action")
            }
            
        },
        deleteAction(){
            if(this.list_delete.length>0){
                for(var i = 0; i < this.list_delete.length; i++){
                  var index = this.actions_list_content.indexOf(this.list_delete[i]);
                  if (index > -1) { // only splice array when item is found
                    this.actions_list_content.splice(index, 1); // 2nd parameter means remove one item only
                  }
                }
            }else{
                alert("Please choose the action you want to delate")
            }
        },
        positionMouse() {
          var wx = window.event.clientX;
          var wy = window.event.clientY;

          var d = document.getElementsByClassName("flipper")[0];
          var d_left = d.offsetLeft;
          var d_top = d.offsetTop;
          var d_width = d.clientWidth;
          var d_height = d.clientHeight;

          var c = document.getElementsByClassName("show_cart")[0];
          var c_left = c.offsetLeft;
          var c_top = c.offsetTop;
          var c_width = c.clientWidth;
          var c_height = c.clientHeight;

          if(d.style.display=="block"){
            if(wx < d_left || wy<d_top || wx > (d_left + d_width) || wy > (d_top + d_height)){
              //不在内
              this.returnMap();
          }
          }
        
          if(c.style.display=="block"){
            if(wx < c_left || wy<c_top || wx > (c_left + c_width) || wy > (c_top + c_height)){
               //不在内
               this.returnMap();
           }
          }
          
        },
        showCartText(){
          this.cart_text = true;
        },
        hideCartText(){
          this.cart_text = false;
        }
    },
    created(){
    }
}
</script>


<style>

</style>