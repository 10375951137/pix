<template>
	<view class="container">
		<picker @change="bindPickerChange" :value="pickerIndex" :range="category" range-key="name">
			<view class="uni-input">{{ category[pickerIndex].name }}</view>
		</picker>
		<u--input placeholder="请输入内容" border="surround" @confirm="confirm" color="#ffffff"></u--input>
		<view class="content">
			<view class="box-card" v-for="(item, index) in list" :key="index" @click="itemClick(item)"
				@longpress="longPress(item)">
				<image :src="item.img" mode="aspectFit" class="image"></image>
				<view>
					<span class="title">{{ item.title }}</span>
				</view>
			</view>
		</view>
		<u-loadmore :status="loadMoreStatus" />

		<!-- 悬浮视频播放 -->
		<view class="video" v-if="videoShow" @longpress="videoShow = false">
			<video :src="videoSrc" :controls="false" autoplay="true" :loop="true" style="width: 100%;"></video>
		</view>

	</view>
</template>

<script>
import cheerio from 'cheerio'
export default {
	props: [],
	components: {},
	data() {
		return {
			date: "",
			list: [],
			loadMoreStatus: "loadmore",
			page: 1,
			pickerIndex: 0,
			videoSrc: "",
			videoShow: false,
			category: [
				{
					name: "加精",
					url: "category=rf&viewtype=basic"
				}, {
					name: "最新",
					url: "next=watch"
				}, {
					name: "原创",
					url: "category=ori&viewtype=basic"
				}, {
					name: "10分钟以上",
					url: "category=long&viewtype=basic"
				}, {
					name: "20分钟以上",
					url: "category=longer&viewtype=basic"
				}, {
					name: "本月最热",
					url: "category=top&viewtype=basic"
				}, {
					name: "非付费",
					url: "category=nonpaid&viewtype=basic"
				}, {
					name: "本月收藏",
					url: "category=tf&viewtype=basic"
				}, {
					name: "本月讨论",
					url: "category=md&viewtype=basic"
				}
			],
		}
	},
	mounted() {
		console.log(uni.$u.config.v);
		this.getData()
	},
	methods: {
		getData() {
			console.log(this.page);
			uni.request({
				url: 'http://91porn.com/v.php?' + this.category[this.pickerIndex].url + '&page=' + this.page,
				method: 'GET',
				header: {
					'content-type': 'text/html,application/xhtml+xml,application/xml',
					"Accept-Language": "zh-CN,zh;q=0.9",
					"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/108.0.0.0"
				},
				success: (res) => {
					let $ = cheerio.load(res.data);
					$('.videos-text-align').each((index, item) => {
						let obj = {};
						obj.title = $(item).find('.video-title').text();
						obj.img = $(item).find('.img-responsive').attr('src');
						obj.id = $(item).find('.thumb-overlay').attr('id');
						obj.duration = $(item).find('.duration').text();
						this.list.push(obj);
					})
					this.loadMoreStatus = "loadmore";
				}
			});
		},
		itemClick(item) {
			let id = item.id.split('_')[1];
			this.videoShow = false;
			uni.navigateTo({
				url: '/pages/video/index?id=' + id + '&poster=' + encodeURIComponent(item.img) + '&title=' + encodeURIComponent(item.title)
			})
		},
		longPress(item) {
			this.videoSrc = `https://vthumb.killcovid2021.com/thumb/${item.id.split('_')[1]}.mp4`
			this.videoShow = true;
		},
		confirm(e) {
			this.list = [];
			this.page = e;
			this.getData();
		},
		bindPickerChange(event) {
			this.pickerIndex = event.detail.value;
			this.list = [];
			this.page = 1;
			this.getData();
		}
	},
	onReachBottom() {
		this.loadMoreStatus = 'loading';
		this.page = ++this.page;
		this.getData();
	}
}
</script>

<style scoped lang="less">
page {
	background-color: #262626;
	min-height: 100vh;
}

.container {
	min-height: 100vh;
	padding: 30rpx 0;
	min-height: 100%;
	padding-top: 140rpx;
	background-color: #262626;

	/deep/ .u-input {
		margin: 30rpx;
	}

	.uni-input {
		color: #fff;
		padding-left: 30rpx;
	}
}

//悬浮视频播放
.video {
	position: fixed;
	//刘海屏适配
	top: env(safe-area-inset-top);
	left: 0;
	right: 0;
	z-index: 999;
	width: 100%;
	height: 300rpx;
	background-color: aqua;
}



.date-picker {
	margin-bottom: 30rpx;
}

.content {
	// display: flex;
	// flex-wrap: wrap;
	// justify-content: space-between;
	min-height: 100vh;

	.box-card {
		// width: 48%;
		margin: 0 30rpx 30rpx;
		padding-bottom: 20rpx;
		background: #fff;
		border-radius: 10rpx;
		overflow: hidden;

		.image {
			width: 100%;
			height: 400rpx;
			background-color: #000;
		}

		.title {
			font-size: 30rpx;
			color: #333;
			margin-top: 10rpx;
			padding: 0 20rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}


	}
}

.bg-purple {
	background: #d3dce6 !important;
}

.grid-content {
	border-radius: 8rpx;
	min-height: 72rpx;
}
</style>