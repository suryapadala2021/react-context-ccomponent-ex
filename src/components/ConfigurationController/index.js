// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value
      return (
        <div className="control-box">
          <h1 className="control-heading">Layout</h1>
          <div className="input-box">
            <input
              checked={showContent}
              onChange={onToggleShowContent}
              type="checkbox"
              id="contentInput"
              className="input"
            />
            <label className="label" htmlFor="contentInput">
              Content
            </label>
          </div>
          <div className="input-box">
            <input
              checked={showLeftNavbar}
              onChange={onToggleShowLeftNavbar}
              type="checkbox"
              id="leftNav"
              className="input"
            />
            <label className="label" htmlFor="leftNav">
              Left Navbar
            </label>
          </div>
          <div className="input-box">
            <input
              checked={showRightNavbar}
              onChange={onToggleShowRightNavbar}
              type="checkbox"
              id="rightNav"
              className="input"
            />
            <label className="label" htmlFor="rightNav">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
