import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
	code: 0,
	msg: "",
	data: [
		{
			id: "1",
			midImg:
				"https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
			bigImg:
				"https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=1920&h=1080",
			title: "王阳明",
			description: "此心光明，亦复何言。",
		},
		{
			id: "2",
			midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
			bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
			title: "心外无物",
			description:
				"如未来看此花时，此花与汝心同归于寂，汝来看此花时，此花颜色一时明白起来，便知此花不在汝心之外。",
		},
		{
			id: "3",
			midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
			bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
			title: "致良知",
			description:
				"无善无恶心之体,有善有恶意之动,知善知恶是良知,为善去恶是格物。",
		},
	],
});
