import React, { useEffect } from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import 'antd/dist/antd.css'
import './home-page.less'

export default () => {
  useEffect(() => {
    const algoliaSearch: any =
      document.querySelector('.__dumi-default-search-input') || {}
    algoliaSearch.placeholder = '搜索'
  }, [])

  return (
    <div className="homePage">
      <Main />
      <Footer />
    </div>
  )
}
