import Mock from 'mockjs';
Mock.mock('/api/nav', {
	"data": [{
		"secondMenu": [{
			"path": "/stujxz_exp",
			"title": "进行中的实验"
		}, {
			"path": "/stuywc_exp",
			"title": "已完成的实验"
		}],
		"fistMenu": {
			"title": "实验管理"
		}
	}, {
		"secondMenu": [{
			"path": "/mymsg_list",
			"title": "我的消息"
		}],
		"fistMenu": {
			"title": "消息管理"
		}
	}, {
		"secondMenu": [{
			"path": "/yqgl_list",
			"title": "仪器采购申请"
		}, {
			"path": "/hcgl_list",
			"title": "耗材采购申请"
		}, {
			"path": "/lsyqsh_list",
			"title": "仪器采购审核"
		}],
		"fistMenu": {
			"title": "采购管理"
		}
	}, {
		"secondMenu": [{
			"path": "/expstu_info",
			"title": "实验档案"
		}, {
			"path": "/other_da",
			"title": "文献档案"
		}],
		"fistMenu": {
			"title": "档案管理"
		}
	}],
	"status": true
})