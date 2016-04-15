import React, {Component} from 'react';
import Row from './Row.js';

export default class Rows extends Component {

  render() {
    'use strict';
    const columns = this.props.rows["0"];
    const rows = this.props.rows;
    let rowDivs = [];

    for(var keys in rows) {
      if(keys !== "0"){
        let key = 'row-'+ keys;
        rowDivs.push(
          <Row index={keys} key={key} columns={columns} rowData={rows[keys]}/>
        )
      }
    }

    return (
      <tbody>
        {rowDivs}
      </tbody>
    )
  }
}