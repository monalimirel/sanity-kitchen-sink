export default {
  widgets: [
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
                  buildHookId: '5f8f8c55c7637a1bd589da8a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5g2day2p',
                  apiId: 'c3bf2212-d2b5-4826-9ede-a5a911f0bb07'
                },
                {
                  buildHookId: '5f8f8c56ca7daf21802156ed',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4ei2125b',
                  apiId: 'f2074deb-e91e-44cf-8522-e34209d8d7e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/monalimirel/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4ei2125b.netlify.app', category: 'apps'}
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
