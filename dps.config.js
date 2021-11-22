const fs = require('fs')
const path = require('path')
const dpsConfig = {
	device: 'pc',
	// 待生成骨架屏页面的地址，
	// url: 'https://juejin.cn/', // 掘金（结果较为完美）
	// url: 'https://www.baidu.com/', // 百度
	// url: 'https://appstore-vidaa.vidaahub.com/V2.0/index-store.html#/', // 线上的 Store 应用
	url: 'http://192.168.100.123:8083/free-U51.11.V204.14.L082621/index-free.html#/', // 本地打包的 Free 应用
	// url: 'http://192.168.100.123:8080/#/', // 本地启动的 Free 应用
	// url: 'https://html5.toongoggles.com/', // Toon Goggles TV
	output: {
		filepath: '',   // 生成骨架屏的存放页面，一般为项目的入口页面
		injectSelector: '#app'  // 生成的骨架屏插入页面的节点
	},
	// header: {
	// 	height: 40,
	// 	background: '#3388ff'
	// },
	// background: '#504f4f',
	// animation: 'opacity 1s linear infinite;',
	background: 'linear-gradient(90deg,#504f4f 25%,#5f5e5e 37%,#504f4f 63%);background-size: 400% 100%;',
	animation: 'el-skeleton-loading 1.4s ease infinite;',
	includeElement: function(node, draw) {
		// console.log('======= func includeElement >>> node:\n', node)
		// console.log('======= func includeElement >>> draw:\n', draw)
		// 定制某个节点画出来的样子，带上return false
		if(node.id == 'ui-alert') {
			// 跳过该节点及其子节点
			return false;
		}
		// if(node.tagName.toLowerCase() === 'img') {
		// 	console.log('======= 111111111111111111:', 111111111111111111)
		// 	// 对该图片生成宽100%，高8%，颜色为红色的色块
		// 	draw({
		// 		width: 5,
		// 		height: 8,
		// 		left: 0,
		// 		top: 0,
		// 		zIndex: 999,
		// 		background: '#8a5ad0' // red
		// 	});
		// 	return false;
		// }
	},
	// writePageStructure: function(html) {
	// 	// console.log('======= this:', this)
	// 	// console.log('======= dpsConfig:', dpsConfig)
	// 	// console.log('======= filepath:', filepath)
	// 	// 自己处理生成的骨架屏
	// 	// fs.writeFileSync(filepath, html);
	// 	console.log('\n\n======= html content is follows:\n', html)
	// },
	init: function() {
		document.querySelectorAll('.m-icon').forEach(item => item.parentNode.removeChild(item));
		// 生成骨架屏之前的操作，比如删除干扰节点
	}
}

module.exports = dpsConfig;
