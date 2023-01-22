<template>
	<div class="container">
		<!-- <el-date-picker v-model="date" type="date" placeholder="选择日期" class="date-picker"></el-date-picker> -->
		<div class="content">
			<el-card class="box-card" v-for="(item, index) in 8" :key="index">
				<image src="https://cdn-msp.18comic.vip/media/albums/411246_3x4.jpg?v=1673078488" mode="aspectFill"
					class="image"></image>
				<div style="padding:14rpx 20rpx;">
					<span class="title">好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡</span>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
import cheerio from 'cheerio'
export default {
	props: [],
	components: {},
	data() {
		return {
			date: "",
		}
	},
	mounted() {
		console.log(uni.$u.config.v);

	},
	methods: {
		getData(page = 1) {
			uni.request({
				url: 'http://91porn.com/v.php?category=rf&viewtype=basic&page=' + page,
				method: 'GET',
				header: {
					'content-type': 'text/html,application/xhtml+xml,application/xml',
					"Accept-Language": "zh-CN,zh;q=0.9",
					"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/108.0.0.0"
				},
				success: (res) => {
					console.log(res.data);
					let $ = cheerio.load(res.data);
					let list = [];
					$('.videos-text-align').each((index, item) => {
						let obj = {};
						obj.title = $(item).find('.video-title').text();
						obj.img = $(item).find('.img-responsive').attr('src');
						obj.id = $(item).find('.thumb-overlay').attr('id');
						list.push(obj);
					})
					console.log(list);

				}
			});
		}
	}
}
</script>

<style scoped lang="less">
.container {
	padding: 30rpx;
	min-height: 100%;
	padding-top: 100rpx;
}

.date-picker {
	margin-bottom: 30rpx;
}

.content {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	.box-card {
		width: 48%;
		margin-bottom: 30rpx;

		& /deep/ .el-card__body {
			padding: 0;
		}

		.image {
			width: 100%;
			aspect-ratio: 3/4;
		}

		.title {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			font-size: 16rpx;
			color: #777777;
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