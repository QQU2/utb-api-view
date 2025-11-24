<template>
    <div class="parent">
        <div class="head">
            <div class="profile-box flex p20">
                <img :src="ChInfo.icon_url" alt="채널 아이콘" style="width: 80px; height: 80px; object-fit: cover; border-radius: 50%;">
                <div class="channel-text mL20">
                <h3 class="mB10 mT10">{{ChInfo.name}}</h3>
                <p class="mB10 mT10"  >
                    <template v-for="(item, idx) in ChInfo.detail" :key="idx">
                        {{ item }}<br v-if="idx != ChInfo.detail.length -1"/>
                    </template>
                </p>
                </div>
            </div>
        </div>

        <div class="body flex container p30">
            <div v-for="item in YtList" :key="item.id" class="content-box">
                <div class="thumbnail">
                    <a :href="`https://www.youtube.com/watch?v=${item.videoId}`">
                        <img :src="item.thumbnail_url" :alt="item.title+' 썸네일 이미지'">
                    </a>
                </div>
                <div class="explain">
                <h4>{{ item.title }}</h4>
                <p>{{ item.date }}</p>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    name: "youtubeDataComp",
    props: {
        YtList: {
            type: Array,
            required: true,
        },
        ChInfo: {
            type: Object,
            required: true,
        },
    },
}
</script>
<style lang="">
    
</style>