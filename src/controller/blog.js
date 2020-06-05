const getList = (author, keyword) => {
    // 先返回假数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题1',
            content: '内容1',
            createTime: 1591328259731,
            author: '张三'
        },
        {
            id: 2,
            title: '标题2',
            content: '内容2',
            createTime: 1591328302400,
            author: '李四'
        }
    ]
}

const getDetail = (id) => {
    // 先返回假数据
    return {
        id: 1,
        title: '标题1',
        content: '内容1',
        createTime: 1591328259731,
        author: '张三'
    }
}

module.exports = {
    getList,
    getDetail
}
