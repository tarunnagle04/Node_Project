const get = (req, res) => {
    res.send([
        {
            img: 'https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/tree%20pose.jpg.webp?itok=4tYNxjPC',
            title: 'YOGA POSES',
            description: 'The practice of yoga goes back thousands of years. While originally an oral tradition, parts of this beautiful heritage have been preserved in texts and commentaries like the Yoga Sutras of Patanjali. There, Sage Patanjali describes the poses, called asanas, as one of the eight limbs of yoga..'
          },
          
          {
            img: 'https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/cobra%20pose.jpg.webp?itok=jpH3j_Ho',
            title: 'YOGA',
            description: 'The practice of yoga goes back thousands of years. While originally an oral tradition, parts of this beautiful heritage have been preserved in texts and commentaries like the Yoga Sutras of Patanjali. There, Sage Patanjali describes the poses, called asanas, as one of the eight limbs of yoga..'
          },
          
          {
            img: 'https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/child%27s%20pose.jpg.webp?itok=nQUVZx9W',
            title: 'YOG',
            description: 'The practice of yoga goes back thousands of years. While originally an oral tradition, parts of this beautiful heritage have been preserved in texts and commentaries like the Yoga Sutras of Patanjali. There, Sage Patanjali describes the poses, called asanas, as one of the eight limbs of yoga..'
          },
          
          {
            img: 'https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/downward%20dog.jpg.webp?itok=9K-nwI7K',
            title: 'POSES',
            description: 'The practice of yoga goes back thousands of years. While originally an oral tradition, parts of this beautiful heritage have been preserved in texts and commentaries like the Yoga Sutras of Patanjali. There, Sage Patanjali describes the poses, called asanas, as one of the eight limbs of yoga..'
          },
    ])
}

module.exports.apiController = get