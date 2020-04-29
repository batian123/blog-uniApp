<template>
	<view class="content">
		<view class="swCount">
			<swiper indicator-dots autoplay interval="3000">
				<swiper-item v-for="(item, index) in bannerList" :key="index"><image :src="item.bannerImg"></image></swiper-item>
			</swiper>
		</view>
		<view class="blogList">
			<view class="blogCount" v-for="item in blogData" :key="item._id">
				<view class="blogTilte">
					{{item.title}}
				</view>
				<view class="blogText">
					{{item.content | filterDiv}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				bannerList:[],
				blogData:[],
			}
		},
		onLoad() {
			this.getBanner()
			this.getBlogList();
		},
		filters:{
			filterDiv:(data)=>{
				return 'aa'
			}
		},
		methods: {
			async getBanner(){
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
			},
			async getBlogList(){
				const data =await this.$myApi({
					url:'api/web/queryPageBlog?pageSize=6&pageIndex=1&tags='
				})
				console.log(data)
				if(data.data.status==1){
					this.blogData = data.data.bloglist
				}else{
					uni.showToast({
						title: `${bannerData.data.massage}`,
						duration: 2000
					});
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
	.blogList{
		.blogCount{
			.blogTilte{}
			.blogText{}
		}
	}
	
</style>
