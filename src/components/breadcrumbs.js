import { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class Ex extends Component{
    
    render(){
      if(this.props.link==="/"){
        return (
          <div>
            
            <Breadcrumb>
              <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
          </div>
        );
      } else {
        // let links=this.props.link.split("/")
        // if(links.length==2){
        //   links=[links[1]]
        // } else{
        //   links.shift()
        // }
        // let linkPop=links.map((value)=>(value))
        // linkPop.splice(linkPop.length-1)
        

        return (
          <div>
            
            <Breadcrumb>
              <BreadcrumbItem ><Link to="/">Home</Link></BreadcrumbItem>
              {/* {
                  linkPop.map(
                    function(unit,index){
                      let temp=linkPop.map((value)=>(value))
                      temp.splice(index+1)
                      return (
                        <BreadcrumbItem><Link to={"/"+temp.join("/")}>{temp[index]}</Link></BreadcrumbItem>
                      )
                    }
                  )
              } */}
              <BreadcrumbItem active>{this.props.name}</BreadcrumbItem>
            </Breadcrumb>
          </div>
        );
      }
      
    }
}

export default Ex;