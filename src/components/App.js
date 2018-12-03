import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faArrowCircleDown, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faMoon, faSun, faArrowCircleDown, faArrowRight, faArrowLeft);
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';
import DciBrand from './portfolio/items/DciBrand';
import Environmental from './portfolio/items/Environmental';
import ScrollToTop from './ScrollToTop';
import WomenDrowning from './portfolio/items/WomenDrowning';

const portfolioItems= [
    {
        path: 'dci-brand',
        comp: DciBrand
    },
    {
        path: 'environmental-design',
        comp: Environmental
    },
    {
        path: 'women-drowning',
        comp: WomenDrowning
    }
];


export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dark: false
        };

        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme() {
        this.setState({ dark: !this.state.dark });
    }

    render() {
        return (
            <div className={'theme ' + (this.state.dark ? 'theme-dark' : 'theme-light')}>
                <div className='base'>
                    <Router onUpdate={() => window.scrollTo(0, 0)}>
                        <ScrollToTop>
                            <div>
                                <Navbar collapseOnSelect className='header'>
                                    <Link to='/' className="logo"></Link>
                                    <Navbar.Header>
                                        <Navbar.Toggle />
                                    </Navbar.Header>
                                    <Navbar.Collapse>
                                        <Nav pullRight className='header__utility'>
                                            <NavItem className="theme-toggle link" onClick={this.changeTheme}>
                                                <FontAwesomeIcon icon={this.state.dark ? 'sun' : 'moon'}/>
                                            </NavItem>
                                        </Nav>
                                        <div className='header__links'>
                                            <Nav>
                                                <LinkContainer to='/' exact>
                                                    <NavItem eventKey={1} className='link'>
                                                        Portfolio
                                                    </NavItem>
                                                </LinkContainer>
                                                <LinkContainer to={'/resume'}>
                                                    <NavItem eventKey={2} className='link'>
                                                        Resume
                                                    </NavItem>
                                                </LinkContainer>
                                                <LinkContainer to="/contact">
                                                    <NavItem eventKey={3} className='link'>
                                                        Contact
                                                    </NavItem>
                                                </LinkContainer>
                                            </Nav>
                                        </div>
                                    </Navbar.Collapse>
                                </Navbar>

                                <div className="body text-center">

                                    {/*main*/}
                                    <Route exact path="/" component={Portfolio} />
                                    <Route path="/home" component={Portfolio} routes={portfolioItems} />
                                    <Route path="/resume" component={Resume} />
                                    <Route path="/contact" component={Contact} />

                                    {/*portfolio*/}
                                    {portfolioItems.map(item => (
                                        <Route key={item.path} path={'/portfolio/' + item.path} component={item.comp} />
                                    ))}
                                </div>
                            </div>
                        </ScrollToTop>
                    </Router>
                </div>
            </div>
        );
    }
}