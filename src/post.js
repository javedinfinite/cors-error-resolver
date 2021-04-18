import React from 'react';
import axios from 'axios';

const batchBody = {
  carrierid: 1,
  batchyyyymm: "202002",
  batchset: "A",
  batchnum: 0,
  batchtaskid: "0",
  batchstateid: "0",
  batchtypecd: "Production",
  reasondesc: "0",
  changedby: "javed",
  createddt: "2021-04-16T09:49:41.508Z",
  updateddt: "2021-04-16T09:49:41.508Z"
}

const buttonStyle= {
 
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textalign: 'center',
    textdecoration: 'none',
    display: 'inline-block',
    fontsize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    background: 'green'
  
}

export default class PersonList extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    axios.post(`https://25gynkrqfg.execute-api.us-east-1.amazonaws.com/Prod/api/batch`,batchBody )
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(e=>{console.log("error",e)})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label >
            <b style={{color:'Green'}}>Sample Data to create a Batch:</b>
            {/* <div><pre>{JSON.stringify(batchBody)}</pre></div> */}
            <ul style={{color:'blue'}}>
                  {
                  Object.keys(batchBody).map((key,i) => {
                    return <li key={i}><b>{key}</b> :{batchBody[key]}</li>
                  })}
            </ul>
          </label>
          <button type="submit" style={buttonStyle} >Create Batch</button>
        </form>
      </div>
    )
  }
}