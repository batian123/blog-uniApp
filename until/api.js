const base_URL ='http://localhost:8633/';
export const myApi = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:base_URL +options.url ,
			method:options.method || "GET",
			data:options.data || {},
			success:(resp)=>{
				resolve(resp)
			},
			fail:(err)=>{
				reject(err)
			}
		})
	})
}