// import React from 'react';
// import ReactDOM from 'react-dom';


const App = () => (
  <div>
    <Homepage />
  </div>
)

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormOne: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      showFormOne: true
    });
    ReactDOM.render(<FormOne />, document.getElementById('app'))
  }

  // componentDidUpdate() {
  //   ReactDOM.render(<FormOne />, document.getElementById('app'))
  // }

  render() {
    return (
      <div>
        This is the homepage
        <form onSubmit={this.handleSubmit}>
          <button>Checkout</button>
        </form>
      </div>
    )
  }
}

// form one for user to enter name, email, and password
class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormTwo: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      showFormTwo: true
    })
    ReactDOM.render(<FormTwo />, document.getElementById('app'))
  }

  render() {
    return(
      <div>
        This is form one
        <form onSubmit={this.handleSubmit}>
          <button>Continue</button>
        </form>
      </div>

    )
  }
}


// form two for user to enter address and phone number
class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormThree: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      showFormTwo: true
    })
    ReactDOM.render(<FormThree />, document.getElementById('app'))
  }

  render() {
    return(
      <div>
        This is form two
        <form onSubmit={this.handleSubmit}>
          <button>Continue</button>
        </form>
      </div>

    )
  }
}





// form three for user to enter credit card information
const FormThree = () => (
  <div>
    This is form three
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));

