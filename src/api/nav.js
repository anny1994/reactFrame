import Mock from 'mockjs';

/**
 * 侧边栏菜单
 */
Mock.mock('/menuController.do?qx', function(options) {
	let params = options.body
	if (params) {
		return {
			"data": [{
				"secondMenu": [{
					"path": "/account_xxgly",
					"title": "账号管理"
				}],
				"fistMenu": {
					"title": "账号管理"
				}
			}, {
				"secondMenu": [{
					"path": "/start_exp_list",
					"title": "发起实验"
				}, {
					"path": "/dsp_exp",
					"title": "待审批的实验"
				}, {
					"path": "/teaywc_exp",
					"title": "已完成的实验"
				}],
				"fistMenu": {
					"title": "实验管理"
				}
			}, {
				"secondMenu": [{
					"path": "/fqmsg_list",
					"title": "发起消息"
				}, {
					"path": "/mymsg_list",
					"title": "我的消息"
				}],
				"fistMenu": {
					"title": "消息管理"
				}
			}, {
				"secondMenu": [{
					"path": "/zdcggly",
					"title": "指定管理员"
				}, {
					"path": "/yqsh_list",
					"title": "仪器采购审核"
				}, {
					"path": "/hcsh_list",
					"title": "耗材采购审核"
				}, {
					"path": "/yqgl_list",
					"title": "仪器采购申请"
				}, {
					"path": "/hcgl_list",
					"title": "耗材采购申请"
				}],
				"fistMenu": {
					"title": "采购管理"
				}
			}, {
				"secondMenu": [{
					"path": "/account_info",
					"title": "人员档案"
				}, {
					"path": "/exptea_info",
					"title": "实验档案"
				}, {
					"path": "/cg_info",
					"title": "采购档案"
				}, {
					"path": "/other_da",
					"title": "文献档案"
				}],
				"fistMenu": {
					"title": "档案管理"
				}
			}],
			"status": true
		}
	} else {
		return {
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
		}

	}
})

/**
 * 进行中实验列表
 * @param  {[type]} options) {	let        params [description]
 * @return {[type]}          [description]
 */
Mock.mock('/xssyController.do?listjxz', 'get', function(options) {
	let params = options.body
	if (params) {
		let paramsObj = JSON.parse(params)
		if (paramsObj.sybh) {
			return {
				"msg": "查询成功",
				"data": {
					"list": [{
						"name": "ddddddddddd",
						"id": "402881e85c72ac2e015c72ad80690000",
						"cjsj": "2017-06-04 18:36:32",
						"syrq": "2017-06-04 18:36:29",
						"sybh": "20170604001",
						"fqr": "2c9330175c3a645a015c4e0df42e0035",
						"xsid": "2c9330175c3a645a015c4e0eb4810036",
						"xszt": 3,
						"lszt": 1,
						"lsname": "南农",
						"xsname": "小胖"
					}],
					"totalRecords": 1
				},
				"status": true
			}
		}
		if (paramsObj.page) {
			return {
				"msg": "查询成功",
				"data": {
					"list": [{
						"name": "ddddddddddd",
						"id": "402881e85c72ac2e015c72ad80690000",
						"cjsj": "2017-06-04 18:36:32",
						"syrq": "2017-06-04 18:36:29",
						"sybh": "20170604001",
						"fqr": "2c9330175c3a645a015c4e0df42e0035",
						"xsid": "2c9330175c3a645a015c4e0eb4810036",
						"xszt": 3,
						"lszt": 1,
						"lsname": "南农",
						"xsname": "小胖"
					}, {
						"name": "dddd",
						"id": "402881e85c72ac2e015c72b0bbd30002",
						"cjsj": "2017-06-04 18:40:04",
						"syrq": "2017-06-04 18:39:54",
						"sybh": "20170604002",
						"fqr": "2c9330175c3a645a015c4e0df42e0035",
						"xsid": "2c9330175c3a645a015c4e0eb4810036",
						"xszt": 2,
						"lszt": 1,
						"lsname": "南农",
						"xsname": "小胖"
					}],
					"totalRecords": 20
				},
				"status": true
			}
		}
	}
	return {
		"msg": "查询成功",
		"data": {
			"list": [{
				"name": "ddddddddddd",
				"id": "402881e85c72ac2e015c72ad80690000",
				"cjsj": "2017-06-04 18:36:32",
				"syrq": "2017-06-04 18:36:29",
				"sybh": "20170604001",
				"fqr": "2c9330175c3a645a015c4e0df42e0035",
				"xsid": "2c9330175c3a645a015c4e0eb4810036",
				"xszt": 3,
				"lszt": 1,
				"lsname": "南农",
				"xsname": "小胖"
			}, {
				"name": "dddd",
				"id": "402881e85c72ac2e015c72b0bbd30002",
				"cjsj": "2017-06-04 18:40:04",
				"syrq": "2017-06-04 18:39:54",
				"sybh": "20170604002",
				"fqr": "2c9330175c3a645a015c4e0df42e0035",
				"xsid": "2c9330175c3a645a015c4e0eb4810036",
				"xszt": 2,
				"lszt": 1,
				"lsname": "南农",
				"xsname": "小胖"
			}, {
				"name": "xxx",
				"id": "402881e85c8d1a7e015c8d1c04560000",
				"cjsj": "2017-06-09 21:47:22",
				"syrq": "2017-06-09 21:47:14",
				"sybh": "20170609002",
				"fqr": "2c9330175c3a645a015c4e0df42e0035",
				"xsid": "2c9330175c3a645a015c4e0eb4810036",
				"xszt": 2,
				"lszt": 1,
				"lsname": "南农",
				"xsname": "小胖"
			}, {
				"name": "ddxx",
				"id": "402881e85c8d1a7e015c8d2ecdb60007",
				"cjsj": "2017-06-09 22:07:53",
				"syrq": "2017-06-09 22:07:45",
				"sybh": "20170609003",
				"fqr": "2c9330175c3a645a015c4e0df42e0035",
				"xsid": "2c9330175c3a645a015c4e0eb4810036",
				"xszt": 2,
				"lszt": 1,
				"lsname": "南农",
				"xsname": "小胖"
			}],
			"totalRecords": 20
		},
		"status": true
	}
})

/**
 * 个人信息
 */
Mock.mock('/userController.do?hqyhxx', {
	"data": {
		"qq": "",
		"wx": "",
		"phone": "13057633227",
		"bh": "xp",
		"schoolid": "2c9330175c3a645a015c4e0d35820034",
		"name": "小胖",
		"zt": 1,
		"id": "2c9330175c3a645a015c4e0eb4810036",
		"dqsj": "2017-07-17",
		"email": ""
	},
	"status": true
})

Mock.mock('/xssyController.do?syjlck', function(options) {
	let params = options.body
	if (params) {
		return {
			"fqsy": {
				"name": "ddddddddddd",
				"id": "402881e85c72ac2e015c72ad80690000",
				"zt": 1,
				"cjsj": "2017-06-04 18:36:32",
				"rwbh": "",
				"xmbh": "",
				"fzr": "",
				"yjlx": "",
				"ktz": "",
				"syrq": "2017-06-04 18:36:29",
				"sybh": "20170604001",
				"fqr": "南农",
				"ktfx": "",
				"pzr": "",
				"synr": "dddddddddddddd",
				"yqjg": "ddddddddddddddd",
				"schoolid": "2c9330175c3a645a015c4e0d35820034"
			},
			"syzb": [{
				"id": "402881e85c8d1a7e015c8d2b08550002",
				"zt": 2,
				"syid": "402881e85c72ac2e015c72ad80690000",
				"xsid": "2c9330175c3a645a015c4e0eb4810036",
				"czff": "ddd",
				"py": "ddd",
				"czsj": "2017-06-09 22:03:46",
				"syxxjfx": "ddd"
			}],
			"syjl": [],
			"status": true
		}
	} else {
		return {
			"status": false,
			"msg": '缺少实验id'
		}
	}
})