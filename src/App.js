import React, { Component } from 'react';
import './App.css';
import { Table } from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiData: {},
      data: []
    }

  }

  componentWillMount(){
    let url = "http://api.demo.muulla.com/cms/merchant/all/active/10/1"
    fetch(url, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NGQxOTY4MGI1MWMxNTI2MGI5NDRmZDUiLCJpc3N1ZV9kYXRlIjoiMjAxNS0wOS0wOVQwNToxMzo1My40NThaIn0.Hk2XypA_KMUnIKdSVYnwq3Rn3QyMNSQ-e80-sZsA9bY'
      }
    })
  .then(api => api.json())
  .then(apiJSON => {
    this.setState(
     { apiData: apiJSON }, () => {
       this.setState(
         { data: this.state. apiData.data }
       )
     }
    )

  });
}
  render() {
    console.log(this.state.apiData)
    let data_list = this.state.data.map((datum, index) => {
    return (
      <tr key={index}>
      <img src={datum.logo.path_to_file} alt='No Logo'/>
      <td>{datum.display_name}</td>
      <td>{datum.email}</td>
      <td>{datum.phone}</td>
      <td>{datum.status}</td>
      <td>
        <ol>
          <li>{datum.address.address1}</li>
          <li>{datum.address.address2}</li>
          <li>{datum.address.address3}</li>
        </ol>
      </td>
      </tr>
    )
  });

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">API</h1>
        </header>
      </div>
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th id="titlebar">Image</th>
          <th>Display Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Address</th>
        </tr>
        {data_list}
        </thead>
      </Table>
    </div>
  );
}
}

export default App;
