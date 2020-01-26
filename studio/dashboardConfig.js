export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2df52e8ac2c8ed4e4efa14',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jou7gvi3',
                  apiId: '7971c635-9934-47b9-bf56-1bc12c232bdb'
                },
                {
                  buildHookId: '5e2df52e22392dcca1b27c89',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6hi6bab2',
                  apiId: '6881bc51-6a20-4a17-b06a-900c151692d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yesigye/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6hi6bab2.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
