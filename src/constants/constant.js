export const paginationConfig = {
	total: 0,
	defaultCurrent: 1,
	pageSize: 10
};
export const infoFormfield = [
	[
		'sybh', 'text', '实验编号'
	],
	[
		'cjsj', 'time', '创建时间'
	],
	[
		'fqr', 'text', '发起人'
	],
	[
		'name', 'text', '实验名称'
	],
	[
		'yjlx', 'text', '研究类型'
	],
	[
		'syrq', 'time', '实验日期'
	],
	[
		'xmbh', 'text', '项目编号'
	],
	[
		'fzr', 'text', '负责人'
	],
	[
		'ktz', 'text', '课题组'
	],
	[
		'rwbh', 'text', '任务编号'
	],
	[
		'pzr', 'text', '批准人'
	],
	[
		'ktfx', 'text', '课题方向'
	]
]

export const formfield = [
	[
		'name', 'text', '实验名称'
	],
	[
		'yjlx', 'text', '研究类型'
	],
	[
		'syrq', 'time', '实验日期'
	],
	[
		'xmbh', 'text', '项目编号'
	],
	[
		'fzr', 'text', '负责人'
	],
	[
		'ktz', 'text', '课题组'
	],
	[
		'rwbh', 'text', '任务编号'
	],
	[
		'pzr', 'text', '批准人'
	],
	[
		'ktfx', 'text', '课题方向'
	]
]

export const disabledDate = (current) => {
	// Can not select days before today and today
	return current && current.valueOf() < Date.now();
}