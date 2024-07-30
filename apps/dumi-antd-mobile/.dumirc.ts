import { defineConfig } from 'dumi';
import { resolve, join } from 'path'

console.log('__dirname', resolve(__dirname, '../../packages/antd-mobile/src'))

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-antd-mobile',
  },
  alias: {
    // dumi 2 不再感知 monorepo, 参见 https://d.umijs.org/guide/upgrading#%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6%E5%8D%87%E7%BA%A7
    'antd-mobile': join(__dirname, '../../packages/antd-mobile/src'),
    // '@deepjs/cook-mobile/lib/style/index.less': resolve(__dirname, './packages/cook-mobile/src/style/index.less'),
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
  //   { title: '基础组件', path: '/antd-mobile' },
  //   // { title: '业务组件', path: '/cook-mobile-plus' },
  //   // { title: '业务场景', path: '/cook-mobile-pro' },
  //   // null,
  //   // {
  //   //   title: 'GitLab',
  //   //   path: 'http://gitlab.prod.caijj.net/yanfaerbu/qianduan/cook-mobile',
  //   // },
  // ],
});
