<template>

    <div id="div_mission">
        <div class="mission_text">
            <p class="mission_text_title"><b>{{question}}</b></p>
            <p class="mission_text_title">Select an option to see your level</p>
            <!-- <p v-for="(option,indexe) of options" :key="option">{{ option }}index{{ indexe }}</p> -->
            <div v-for="(option,indexe) of options" :key="option">
                <input type="radio" :id="indexe" :value="indexe" v-model="picked" :disabled="validated==1">
                <label>{{option}}</label>
                <br>
            </div>

            <div id="mission_button_center">
                <button class="mission_button" @click="showName">confirm</button>
                <router-link to="/home"><button class="mission_button">return to home</button></router-link>
            </div>
            
            <!-- <span>Picked: {{ picked }}</span> -->
            <div :style="sty" class="mission_answer">
                <p class="mission_answer_title">{{ calculerLevel() }}</p>
                <p v-if="picked=='op1' || picked=='op2'">M.1: Aim at giving knowledge back to society, connecting research and teaching with societal input, sharing university knowledge,and generating value for society and improving teaching and research in exchange with society</p>
                
                <div v-if="picked=='op3' || picked=='op4'">
                    <p class="mission_matrice">M.2: Raise awareness within the universities for societal responsibility</p>
                    <p class="mission_matrice">M.3: Make research accessible to the public</p>
                    <p class="mission_matrice">M.4: Provide students and learners with the knowledge and skills to understand societal contexts</p>
                    <p class="mission_matrice">M.5: Acknowledge that our responsibilities go beyond research and teaching and create awareness about the importance of engaging with society</p>
                    <p class="mission_matrice">M.6: Take responsibility to have a positive impact on society as a whole and its individuals</p>
                    <p class="mission_matrice">M.7: Take part in or initiate societal debates based on excellent research</p>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default
        {
            name:'Mission',
            data(){
                return{
                picked:"0",
                schoolName:'xuexiao',
                address:'add',
                question:'1.	Which of these sentences describes your institution in the most accurate way?',
                options:{
                    'op1':'There is little or no reference to public engagement in the organisational mission or in other institution-wide strategies.',
                    'op2':'Public engagement is referenced sporadically within the institutional mission documents and strategies, but is not considered a priority area.',
                    'op3':'Public engagement is clearly referenced within the institutional mission and strategies and the institution is developing an institution-wide strategic approach.',
                    'op4':'Public engagement is prioritised in the institution\'s official mission and in other key strategies, with success indicators identified. It is a key consideration in strategic developments in the institution.'
                },
                basic:"You are in the “basic” level, if you want to step in to the next level “optimized”, here are the intentions you need to work on :",
                optimized:"You are in the “optimized” level, congratulations !",
                sty:"display: none;",
                validated:0
                }
            },
            methods: {
                showName(){
                    if(this.picked != 0){
                        this.sty="",
                        this.validated=1
                    }            
                },
                calculerLevel(){
                    if (this.picked=='op1' || this.picked=='op2'){
                        return this.basic
                    }
                    else if (this.picked=='op3'|| this.picked=='op4'){
                        return this.optimized
                    }
                    else{
                        return 'Select an option to see your level'
                    }
                }
            },
        }
    
    
    // export default school
    </script>
    
    <style>
    
    </style>
    