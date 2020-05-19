import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
const Header = () => {
    return (

        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col s8 logo">
                        <img src={require('../img/logo.png')} alt=""/>
                    </div>
                    <div className="col s4 trolley">
                        <img src={'https://svgsilh.com/svg/304843.svg'} alt='trolley'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;