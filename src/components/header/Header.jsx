
import "./header.css"


const Header = () => {
  return (
    <header className="header">
      <div className="top-header">
        <div className="top-header-menu">
          <i className="bi bi-list"></i>
        </div>
        <div className="top-header-logo">
          <i className="bi bi-basket2"></i>
          اون لاين شوب برو
        </div>
        <div className="top-header-text">أهلا وسهلا بكم</div>
        <div className="top-header-phone">
          1234-567-890
          <i className="bi bi-telephone"></i>
        </div>
      </div>
    </header>
  )
}

export default Header