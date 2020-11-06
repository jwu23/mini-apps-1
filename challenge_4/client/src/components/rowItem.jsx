import React from 'react';

class RowItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log('here',props)
    // bring player state
    this.state ={

    }
  }

  render() {
    const style = {
      backgroundColor: this.props.color
    }
    return(
      <td style={style} onClick={() => {this.props.handleClick(this.props.column)}}></td>
    )
  }
}


export default RowItem;