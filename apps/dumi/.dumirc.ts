import { defineConfig } from 'dumi';
import { resolve } from 'path'

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'taro-vant',
  },
  alias: {
    // '@deepjs/cook-mobile/lib/style/index.less': resolve(__dirname, './packages/cook-mobile/src/style/index.less'),
    'ui-mobile': resolve(__dirname, './packages/ui-mobile/src'),
    // '@deepjs/cook-mobile-plus': resolve(__dirname, './packages/cook-mobile-plus/src'),
    // '@deepjs/cook-mobile-pro': resolve(__dirname, './packages/cook-mobile-pro/src'),
    // 'demos': process.cwd() + '/packages/cook-mobile/src/demo-block/index.tsx',
    // '@docs': resolve(__dirname, './docs'),
  },
  resolve: {
    // 这里使用 packages，而不是 tailPkgList，否则导致输出路由有问题
    docDirs: ['docs', 'packages'],
  },
  // nav: [
  //   { title: '首页', path: '/' },
  //   { title: '基础组件', path: '/ui-mobile' },
  //   // { title: '业务组件', path: '/cook-mobile-plus' },
  //   // { title: '业务场景', path: '/cook-mobile-pro' },
  //   // null,
  //   // {
  //   //   title: 'GitLab',
  //   //   path: 'http://gitlab.prod.caijj.net/yanfaerbu/qianduan/cook-mobile',
  //   // },
  // ],
});
