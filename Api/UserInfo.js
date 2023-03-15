const get = (req, res) => {
    res.send([
        {
            img: 'https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            name: 'RoBo',
            created: 'Jan 28, 2019',
            time: '10 min read',
            shareIcons: true
        }
    ])
}

module.exports.apiController = get