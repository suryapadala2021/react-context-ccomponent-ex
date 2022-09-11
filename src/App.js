import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import ConfigurationContext from './context/ConfigurationContext'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  toggleShowContent = () => {
    this.setState(prev => ({showContent: !prev.showContent}))
  }

  toggleShowLeftNav = () => {
    this.setState(prev => ({showLeftNav: !prev.showLeftNav}))
  }

  toggleShowRightNav = () => {
    this.setState(prev => ({showRightNav: !prev.showRightNav}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.toggleShowContent,
          onToggleShowLeftNavbar: this.toggleShowLeftNav,
          onToggleShowRightNavbar: this.toggleShowRightNav,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
