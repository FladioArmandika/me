import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import Home from './pages/HomePage';
import Blog from './Blog';
import Portofolio from './pages/Portofolio';
import Contact from './pages/Contact';


class Main extends React.Component {

    style =  {
        // marginTop: "20px"
    }
    
    render() {
        return (
            <div>
                {/* <Wrapper> */}
                    <TransitionGroup>
                        <CSSTransition
                            timeout={{enter: 300, exit: 300}}
                            classNames={'fade'}
                        >
                            <Switch>
                                <Route exact path='/me' component={Home}/>
                                <Route exact path='/me' component={Home}/>
                                <Route path='/blog' component={Blog} />
                                <Route path='/portofolio' component={Portofolio} />
                                <Route path='/contact' component={Contact} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                {/* </Wrapper> */}
            </div>
        )
    }
    

    
}

export default Main;