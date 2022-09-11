// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <div className="control-box">
    <h1 className="control-heading">Layout</h1>
    <div className="input-box">
      <input
        type="checkbox"
        id="contentInput"
        value="content"
        className="input"
      />
      <label className="label" htmlFor="contentInput">
        Content
      </label>
    </div>
    <div className="input-box">
      <input
        type="checkbox"
        id="contentInput"
        value="content"
        className="input"
      />
      <label className="label" htmlFor="contentInput">
        Left Navbar
      </label>
    </div>
    <div className="input-box">
      <input
        type="checkbox"
        id="contentInput"
        value="content"
        className="input"
      />
      <label className="label" htmlFor="contentInput">
        Right Navbar
      </label>
    </div>
  </div>
  <ConfigurationContext.Consumer>
  {
      (value)=>{
          const {}=value
      }
  }
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
