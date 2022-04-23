import  {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">404</h1>
          <p className="lead">Page not found</p>
          <hr className="my-2" />
          <p>Địa chỉ không tồn tại</p>
        </Jumbotron>
      </div>
    );
  };
  
  export default Example;