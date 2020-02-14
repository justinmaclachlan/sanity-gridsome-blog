export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e4675b79d95ebef1105711a',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-77jz1pni',
                  apiId: '7dbd1804-e61a-407d-9d72-9132224c34a4'
                },
                {
                  buildHookId: '5e4675b7140b49cd72daac19',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-rkhv1nqd',
                  apiId: '61d8e740-157f-4b41-958a-46f3ef41248f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justinmaclachlan/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-rkhv1nqd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
