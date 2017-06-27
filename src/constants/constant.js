export const API_URL = 'http://192.168.1.103:8080'

/**
 * 默认分页
 * @type {Object}
 */
export const paginationConfig = {
	total: 0,
	defaultCurrent: 1,
	pageSize: 20
};

/**
 * 展示表单
 * @type {Array}
 */
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

/**
 * 提交表单
 * @type {Array}
 */
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

/**
 * 日期选择控制
 * @param  {[type]} current [description]
 * @return {[type]}         [description]
 */
export const disabledDate = (current) => {
	// Can not select days before today and today
	return current && current.valueOf() < Date.now();
}

export const expTableColumns = [{
	title: '提交时间',
	dataIndex: 'czsj',
	key: 'tjsj',
	width: 240
}, {
	title: '审核状态',
	dataIndex: 'zt',
	key: 'zt',
	render: text => {
		if (text === 3) {
			return '已归档'
		}
		if (text === 2) {
			return '通过'
		}
		if (text === 1 || text === 0) {
			return '审批中'
		}
	},
}, {
	title: '评语',
	dataIndex: 'py',
	key: 'py',
	render: text => {
		if (text) {
			return text
		} else {
			return '--'
		}
	}
}]