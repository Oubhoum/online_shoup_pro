import "./header.css"


const TopHeader = ({toggleMenu, setToggleMenu}) => {
    return (

        <div className="top-header">
            <div
                onClick={() => setToggleMenu(!toggleMenu)}
                className="top-header-menu"
            >
                {
                    toggleMenu ? (
                        <i className="bi bi-x-lg"></i>
                    ) : (
                        <i className="bi bi-list"></i>
                    )
                }
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

    )
}

export default TopHeader