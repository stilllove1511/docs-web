import {Row} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
} from "react-router-dom";

import logo from './logo.svg';
import  {Component} from 'react';
import ReactDOM from "react-dom";
import Subject from './components/body/detail/detail'
import Header from './components/header';
import IndexBody from './components/body/index/index-body';
import Navs from './components/breadcrumbs'
import './App.css';
import Page404 from './components/404'
import Spinner from './components/spinner'

class App extends Component{
    constructor(){
        super()
        this.units=[
            {
                id:1,
                name:"Toán",
            },
            {
                id:2,
                name:"Lý",
            },
            {
                id:3,
                name:"Hóa",
            },{
                id:4,
                name:"Tin",
            },{
                id:5,
                name:"Sinh",
            },
        ]
    }
    render(){
        return (
            <div>
                <Header />
                
                <div class="mt-2 container-xxl">
                    
                    <Switch>
                        <Route exact path="/">
                            <Navs link="/"/>
                            <IndexBody />
                        </Route> 
                        {
                            this.units.map((unit)=> (
                                    <Route exact path={"/"+unit.id.toString()}>
                                        <Navs link={"/"+unit.id.toString()} name={unit.name}/>
                                        <Subject id={unit.id.toString()} />
                                    </Route>
                                )
                            )
                        }
                        <Route path="*">
                            <Page404/>
                        </Route>
                    </Switch>
                </div>

                
            </div>
        )
    }
}

export default App;
