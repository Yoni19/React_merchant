
import React from "react";


class Client extends React.Component {
    render() {
      let { firstName, lastName,phone,photo,job,email } = this.props;
      console.log(firstName, lastName);
  
      return (
        <div class="card" style={{ maxWidth: 250}}>
        <div class="card-img-top" style={{display: 'flex', justifyContent:'center'}}>{photo}</div>
        <div class="card-body">
            <div class="card-title" style={{display: 'flex', justifyContent:'center'}}><h5>{firstName} {lastName}</h5></div>
            <div class="card-text" style={{display: 'flex', justifyContent:'center'}}><h6>{job}</h6></div>
            <div class="card-text" style={{display: 'flex', justifyContent:'center'}}><button class="btn btn-outline-info" style={{ textDecoration: 'none' }}>{email}</button> <button class="btn btn-outline-warning" style={{ textDecoration: 'none' }}>{phone}</button></div>
        </div>
    </div>
);
}
}

  export default Client