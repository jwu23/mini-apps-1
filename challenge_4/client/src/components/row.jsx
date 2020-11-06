import React from 'react';
import RowItem from './rowItem.jsx';

class Row extends React.Component {
  constructor(props) {
    super(props);
    // console.log('props', props)
    this.state = {

    }
  }


  render() {
    return (
      <tbody>
        <tr>
          {this.props.row.map((item, index) => (
            <RowItem key={index} column={index} item={item} player={this.props.player} color={this.props.color} handleClick={this.props.handleClick}/>
          ))}
        </tr>
      </tbody>

    )
  }
}




export default Row;