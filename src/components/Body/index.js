// Write your code here
import './index.css'

const Body = () => (
  <div className="body-container">
    <div className="left-nav-box">
      <h1 className="nav-bar-menu-heading">Left Navbar Menu</h1>
      <ul className="nav-list">
        <li>
          <p className="left-nav-item">Item 1</p>
        </li>
        <li>
          <p className="left-nav-item">Item 2</p>
        </li>
        <li>
          <p className="left-nav-item">Item 3</p>
        </li>
        <li>
          <p className="left-nav-item">Item 4</p>
        </li>
      </ul>
    </div>
    <div className="content-box">
      <h1 className="content-heading">Content</h1>
      <p className="content">
        Lorem ipsum dolar sitamet,consecuter adipiscing elit,sed do eiusmod
        tempor incidident ut labore et dolore magma alique.Ut enim ad minim
        veniam.
      </p>
    </div>
    <div className="right-nav-box">
      <h1 className="nav-bar-menu-heading">Right Navbar Menu</h1>
      <div className="right-nav-items-box">
        <div className="right-nav-item">
          <p className="right-nav-item-content">1</p>
        </div>
        <div className="right-nav-item">
          <p className="right-nav-item-content">2</p>
        </div>
      </div>
    </div>
  </div>
)
export default Body
