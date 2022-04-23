import React, {Component} from 'react';
import Unit from '../unit';
import {Row} from 'reactstrap';
import Spinner from '../../spinner'


class IndexBody extends Component{
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
        this.state={
            loaded: true
        }
        setTimeout(()=>{
            this.setState({
                loaded: true
            })
        },3000)    
    }
        render(){
        if(this.state.loaded==false){
            return <Spinner/>
        }
        else return (
            <Row>
                {
                    this.units.map((unit)=> <Unit link={unit.id.toString()} name={unit.name}/>)
                }
            </Row>
        )
    }
}

export default IndexBody