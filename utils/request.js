// request.js
const baseUrl = 'http://localhost:8085';  // 替换为你的后端接口地址

export default function My_request(options) {
  return new Promise((resolve, reject) => {
		uni.request({
			  url: baseUrl + options.url,
			  method: options.method || 'GET',
			  data: options.data || {},
			  header: options.header || {},
			  success: (res) => {
					resolve(res.data);
			  },
			  fail: (err) => {
					reject(err);
			  }
		});
  });
}
