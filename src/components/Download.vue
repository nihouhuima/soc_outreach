<template>
    <div class="download"> 
        <div id="download_bannner">
            <div> 
                <h1>Societal Outreach Approach</h1>
                <p>Let's be inspired !</p> 
            </div>
            
            <img id="download_logo" src="../assets/Logo.png" alt="logo_engage">
        </div>
        <div>
            <p><br><b>Here are the actions which you've chosen: </b></p><br>
          <div class="download_action" v-if="this.actions_list_content.length>0">
              <div v-for="element in this.actions_list_content" :key="element"> 
                <p class="cart_action_el" v-html=" getAction(element) "></p><br>


              </div>
          </div>
          <div v-else> 
              <p>You don't choose any action</p>
          </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Download",
    props: {
        list_1: {   // should have a default value 
            type: Array,
            default: function () { //Here you can also use the arrow function 
                return []
            }
        },
        actions_list_content: {
            type: Array,
            default: function () { //Here you can also use the arrow function 
                return []
            }
        }
        },
    methods: {
        getAction(element){
          var indexIntention = element.substring(0,element.indexOf("_"));
          var indexAction = element.substring(element.indexOf("_")+1,element.indexOf("_")+2);
          return this.list_1[indexIntention].action[indexAction];
        }
    }
}
</script>
