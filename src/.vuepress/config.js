

module.exports = {
    title: 'SCODER',
    base: '/blog/',
    dest: 'docs/',
    description: 'とあるソフトウェアエンジニアの記録',
    locales: {
        '/': {
          lang: 'ja'
        }
    },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Github', link: 'https://github.com/shuhey0207' }
      ]
      // sidebarDepth: 0,
      // sidebar: [
      //   {
      //     title: 'Test',
      //     children: [
      //       {
      //         title: 'Test sub',
      //         children: [
      //           '/test/test_sub/test_sub1/',
      //           '/test/test_sub/test_sub2/'
      //         ]
      //       }
      //     ]
      //   }
      // ],
    }
  }
