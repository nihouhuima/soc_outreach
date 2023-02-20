<template>
    <div id="div_home">
        <div class="home_block">
            <router-link to="/Mission"><p class="block_content" id="content_mission">MISSION</p></router-link>
        </div>
        <div class="home_block">
            <p class="block_content" id="content_leadership">LEADERSHIP</p> 
        </div>
        <div class="home_block">
            <p class="block_content" id="content_communication">COMMUNICATION</p>
        </div>
    </div>
</template>

<script>

export default 
    {
        name: "Home",
        data() {
            return{

            }
        
        },
    }
</script>
