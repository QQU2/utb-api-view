<template>
  <Navbar/>
  <YtDiv :YtList="chnlPlList" :ChInfo="chnlInfo"/>
  
</template>

<script>
import ytData from './assets/youtubeData.js';
import navbar from './components/Navbar.vue';
import ytDiv from './components/YoutubeData.vue';

export default {
  name: 'App',
  components: {
    Navbar: navbar,
    YtDiv: ytDiv,
  },
  data() {
    return {
      chnlPlList: [],
      chnlInfo: ytData.channelInfo,
    }
  },
  async mounted() {
    this.chnlPlList = await ytData.getData();
  },
}
</script>
<style>
.flex {
  display: flex;
}

.container {
  justify-content: space-between;
  flex-flow: row wrap;
}

.content-box {
  width: 33.33%;
  height: 600px;
  margin-bottom: 30px;
}

.thumbnail {
  display: flex;
  justify-content: center;
}

.thumbnail img {
  width: 99%;
  border-radius: 1rem;
  object-fit: cover;
}

.explain {
  padding : 5px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.explain h4 {
  margin: 5px 0px;
  height: 2.5rem;
}

.explain p {
  margin: 5px 0px;
  color: gray;
  font-size: 0.8rem;
}

.p10 { padding: 10px;}
.p20 { padding: 20px;}
.p30 { padding: 30px;}

.pL10 { padding-left: 10px;}
.pL20 { padding-left: 20px;}

.pB10 { padding-bottom: 10px;}
.pB20 { padding-bottom: 20px;}

.pT10 { padding-top: 10px;}
.pT20 { padding-top: 20px;}

.mL10 { margin-left: 10px;}
.mL20 { margin-left: 20px;}

.mB10 { margin-bottom: 10px;}
.mB20 { margin-bottom: 20px;}

.mT10 { margin-top: 10px;}
.mT20 { margin-top: 20px;}
</style>
