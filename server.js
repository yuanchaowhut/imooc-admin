const express = require('express')
const bodyParser = require('body-parser')
const md5 = require('md5')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/', (request, response) => {
    response.status(200)
    response.send('hello express')
    response.end()
})

// 获取人员信息接口
app.get('/smart/sys/profile', (req, res) => {
    res.json({
        success: true,
        code: 200,
        data: {
            role: [
                {
                    id: '1',
                    title: '超级管理员'
                }
            ],
            _id: '612710a0ec87aa543c9c341d',
            id: '0',
            username: 'super-admin',
            title: '超级管理员',
            avatar: 'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
            permission: {
                menus: ['userManage', 'roleList', 'permissionList', 'articleRanking', 'articleCreate'],
                points: ['distributeRole', 'importUser', 'removeUser', 'distributePermission']
            }
        },
        message: '获取资料成功'
    })
})

// 登录接口
app.post('/smart/sys/login', function (req, res) {
    if (req.body.data) {
        handleLogin(req.body.data)
    } else {
        let body = ''
        req.on('data', function (chunk) {
            body += chunk
        })
        req.on('end', function () {
            let payload = null
            try {
                payload = JSON.parse(body)
                handleLogin(payload)
            } catch (err) {
                payload = null
            }
        })
    }

    function handleLogin(data) {
        if (data.username === 'admin' && data.password === md5('123456')) {
            res.json({
                data: {
                    user: { password: 'e10adc3949ba59abbe56e057f20f883e', username: 'super-admin' },
                    token: 'Bearer d8c6ed7a-3fd4-46e4-a477-b20d1ce9cda0'
                },
                message: '登录成功!',
                success: true,
                tipType: 1
            })
        }
    }
})

// 在8600端口启用服务器
app.listen(8600, function () {
    console.log('Server started on port 8600...')
})
