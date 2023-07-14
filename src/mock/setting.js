import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
	code: 0,
	msg: "",
	data: {
		avatar:
			"https://img0.baidu.com/it/u=3490270743,2008112147&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
		siteTitle: "解忧空间",
		github: "https://github.com/JackZoumj",
		qq: "1233023350",
		qqQrCode:
			"https://img.xianjichina.com/editer/20210903/image/8978254ff0d1129c6fb0186a9e550bda.jpg",
		weixin: "JackZoumjbao",
		weixinQrCode:
			"https://img.xianjichina.com/editer/20210903/image/8978254ff0d1129c6fb0186a9e550bda.jpg",
		mail: "JackZoumj@gmail.com",
		icp: "杭ICP备17001719号",
		githubName: "hz-fyyf",
		favicon:
			"https://img0.baidu.com/it/u=3490270743,2008112147&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
	},
});
