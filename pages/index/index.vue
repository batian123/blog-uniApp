<template>
	<view class="content">
		<view class="swCount">
			<swiper indicator-dots autoplay interval="3000">
				<swiper-item v-for="(item, index) in bannerList" :key="index"><image :src="item.bannerImg"></image></swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				bannerList:[],
			}
		},
		onLoad() {
			this.getBanner()
		},
		methods: {
			async getBanner(){
				// uni.request({
				// 	url:"http://localhost:8633/api/web/queryAllBannerIsTrue",
				// 	success:(resp)=> {
				// 		console.log(resp)
				// 		if(resp.data.status==1){
				// 			uni.showToast({
				// 			    title: `${resp.data.massage}`,
				// 			    duration: 2000
				// 			});
				// 			this.bannerList = resp.data.rows
				// 		}
				// 	},
				// 	method:"GET"
				// })
				const bannerData = await this.$myApi({
					url:'api/web/queryAllBannerIsTrue'
				})
				console.log(bannerData)
				if(bannerData.data.status==1){
					uni.showToast({
						title: `${bannerData.data.massage}`,
						duration: 2000
					});
					this.bannerList = bannerData.data.rows
					console.log(this.bannerList)
				}
			}
		}
	}
</script>

<style lang="scss">
	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	} */

	
	.swCount{ 
		swiper{width: 750rpx;height: 380rpx;}
		image{width:100%;height: 380rpx;}
	}
	
</style>
