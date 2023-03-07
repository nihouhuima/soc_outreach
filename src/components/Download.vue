<template>
    <div class="download"> 
        <h1>ACTIONS</h1> <br>
        <div>
          <div class="download_action" v-if="this.actions_list_content.length>0">
              <div v-for="element in this.actions_list_content" :key="element"> 
                <p>{{ getAction(element) }}</p><br>

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
        // items: {
        //     type: String,
        //     required: true, // 必须提供字段
        //     default:'this is a default'  //这是第一种写法
        // },
        list_1: {   // 可选字段，有默认值
            type: Array,
            default: function () { //这里也可以使用箭头函数的方式  和以上第二种形式类似
                return []
            }
        },
        actions_list_content: {
            type: Array,
            default: function () { //这里也可以使用箭头函数的方式  和以上第二种形式类似
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
