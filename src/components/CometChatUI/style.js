export const unifiedStyle = (props) => {
	return {
		display: "flex",
		height: "100%",
		width: "100%",
		boxSizing: "border-box",
		fontFamily: `${props.theme.fontFamily}`,
		// border: `1px solid red`,
		position: "relative",
		"*": {
			boxSizing: "border-box",
			fontFamily: `${props.theme.fontFamily}`,
			"::-webkit-scrollbar": {
				width: "8px",
				height: "4px",
			},
			"::-webkit-scrollbar-track": {
				background: "#ffffff00",
			},
			"::-webkit-scrollbar-thumb": {
				background: "#ccc",
				"&:hover": {
					background: "#aaa",
				},
			},
		},
	};
};

export const unifiedSidebarStyle = (state, props) => {
	const sidebarView = state.sidebarview
		? {
				left: "0",
				boxShadow: "rgba(0, 0, 0, .4) -30px 0 30px 30px",
		  }
		: {};

	const mq = [...props.theme.breakPoints];

	return {
		width: "280px",
		borderRight: `1px solid ${props.theme.borderColor.primary}`,
		height: "100%",
		position: "relative",
		display: "flex",
		background:"#1767B0",
		flexDirection: "column",
		"> .contacts, .chats, .groups, .userinfo": {
			height: "calc(100% - 64px)",
		},
		[`@media ${mq[0]}`]: {
			position: "absolute!important",
			left: "-100%",
			top: "0",
			bottom: "0",
			width: "100%!important",
			zIndex: "2",
			backgroundColor: `${props.theme.backgroundColor.white}`,
			transition: "all .3s ease-out",
			...sidebarView,
		},
	};
};

export const unifiedMainStyle = (state, props) => {
	const mq = [...props.theme.breakPoints];

	return {
		width: "100%",
		height: "96%",
		// order: "2",
		// display: "flex",
		// flexDirection: "row",
		margin:"20px",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
		[`@media ${mq[1]}, ${mq[2]}`]: {
			width: "100%",
		},
	};
};
