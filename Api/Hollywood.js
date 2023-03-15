const get = (req, res) => {
    res.send([
        {
            img: 'https://imgs.search.brave.com/HUA1J4E4_EW30EF7gLAzH2bgSK5IkMJMw5k1pwmw1QA/rs:fit:1200:700:1/g:ce/aHR0cHM6Ly9zdGF0/aWMzLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDEvSGFycnktUG90/dGVyLTIuanBn',
            title: 'Harry Potter',
            description: 'A famous Magic MOvie',
            directedBy: 'The Warner Brothers '
          },
          {
            img: 'https://imgs.search.brave.com/ztA2Sxj_MSva7tz5pIojzn9JYs4WeAMREnl-g_01rk4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/c3JnY2RuLmNvbS9l/L1oyOUlaakZZTmtz/M01GbHNOVE5RTjBn/NFUza3VhbkJuLmpw/Zw',
            title: 'TITANIC',
            description: ' Directed by James Cameron. With Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang. A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
            directedBy: 'The Warner Brothers '
          },
          {
            img: 'https://imgs.search.brave.com/a4Gh34yjVHp4mZoSTLJou0jNOZUECvAWdtheAGin0V8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vbWljaGFl/bG1heS51cy8xMGJs/b2cvMDEvMDEwMV9h/dmF0YXIuanBn',
            title: 'AVATAR',
            description: ' Avatar: Directed by James Cameron. With Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang. A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
            directedBy: 'The  Brothers '
          }
    ])
}

module.exports.apiController = get