import React, {Component, useState } from 'react';
import {Row} from 'reactstrap';
import Unit from './unit';
import Spinner from '../../spinner'

class page extends Component{
    constructor(){
        super()
        this.data=[
            {
                id:1,
                name:"file 1"
            },
            {
                id:2,
                name:"file 2"
            },
            {
                id:3,
                name:"file 3"
            },
            {
                id:4,
                name:"file 4"
            },
            {
                id:5,
                name:"file 5"
            },
        ]
        this.state={
            loaded:true
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
                    this.data.map((unit)=> <Unit link={this.props.id+"/"+unit.id} name={unit.name} redirect/>)
                }
            </Row>
        )
    }
}
export default page;