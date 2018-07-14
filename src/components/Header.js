import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            isTop: true,
            navbarCollapse: false,
            navbarCollapseDisplay: 'none',
        };
    }

    // hideNavbarCollapse() {
    //     this.setState({
    //         navbarCollapseDisplay: 'flex'
    //     });
    // }

    navbarNotScrolled = {
        fontSize: '1.2em',
        transitionDuration: '0.1s',
        paddingTop: '0.8em',
        paddingBottom: '0.8em',
    };   

    navbarScrolled = {
        fontSize: '1em',
        paddingBottom: '0.5em',
        transitionDuration: '0.1s',
    }; 

    navbarBgWhite = {
        background: '#FFFFFF',
        transitionDuration: '0.1s',
    };

    navbarBgTransparent = {
        background: 'none',
        transitionDuration: '0.1s',
    };

    navbarCollapseOpen = {
        display: 'flex'
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 50;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop });
            }
        });
    }

    handleMenuClick(e) {
        // const clicked = e.target.id;
        if( this.state.navbarCollapse === true) {
            this.setState({navbarCollapse : false,navbarCollapseDisplay: 'flex'});
            // this.hideNavbarCollapse();
        } else {
            this.setState({navbarCollapse : true,navbarCollapseDisplay: 'none'});
        }
    }
    

    render() {
        
        return (
           
            <nav className='mynavbar' style={this.state.isTop? this.navbarBgTransparent : this.navbarBgWhite }>
                <div className="mynavbar-container container">
                    <span className='mynavbar-brand mr-auto' style={this.state.isTop? this.navbarNotScrolled : this.navbarScrolled}>
                        FA
                    </span>
                    <div className={'mynavbar-collapsible flex-container ' + (this.state.navbarCollapse? 'menu-active': '') } >
                        <span><Link className="nav-link" to="/">Home</Link></span>
                        <span><Link className="nav-link" to="/Portofolio">Work</Link></span>    
                        <span><Link className="nav-link" to="/Blog">Blog</Link></span>
                    </div>
                    <span className='fa fa-bars menu-toggle' onClick={this.handleMenuClick.bind(this)} ></span>
                </div>
            </nav>
        )
    }

    

}

export default Header;

 // <nav className="navbar navbar-expand-md fixed-top navbar-light" style={this.state.isTop? this.navbarBgTransparent : this.navbarBgWhite }>
            //     <div className="container">
            //         <a className='navbar-brand' style={this.state.isTop? this.navbarNotScrolled : this.navbarScrolled } href="#">FA</a>
            //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon" ></span>
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarCollapse">
            //             <ul className="mr-auto">
            //             </ul>
            //             <ul className="navbar-nav">
            //                 <li className="nav-item active">
            //                     <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
            //                 </li>
            //                 <li className="nav-item">
            //                     <Link className="nav-link" to="/portofolio">Portofolio</Link>
            //                 </li>
            //                 <li className="nav-item">
            //                     <Link className="nav-link" to="/blog">Blog</Link>
            //                 </li>
            //                 <li className="nav-item">
            //                     <Link className="nav-link" to="/contact">Contact</Link>
            //                 </li>
            //             </ul>
            //         </div>
            //     </div>
            // </nav>