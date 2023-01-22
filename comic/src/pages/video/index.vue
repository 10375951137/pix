<template>
    <div class="video">
        <video :src="videoSrc" controls="controls" autoplay="false" :title="title" :poster="poster"
            style="width: 100%;"></video>
    </div>
</template>

<script>
export default {
    data() {
        return {
            poster: "",
            videoSrc: "",
            title: "",
        }
    },
    onLoad({ id, poster, title }) {
        this.poster = decodeURIComponent(poster);
        this.title = decodeURIComponent(title);
        this.videoSrc = `https://la2.killcovid2021.com/m3u8/${id}/${id}.m3u8`;
        uni.setNavigationBarTitle({
            title: this.title
        })
    },
}
</script>

<style scoped lang="less">
.video {
    width: 100vw;
    height: 100vh;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>