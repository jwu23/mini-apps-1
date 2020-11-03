// import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

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
    this.handleHomepageSubmit = this.handleHomepageSubmit.bind(this);
  }

  handleHomepageSubmit(event) {
    event.preventDefault();
    this.setState({
      showFormOne: true
    });
    ReactDOM.render(<FormOne />, document.getElementById('app'));
  }

  // componentDidUpdate() {
  //   ReactDOM.render(<FormOne />, document.getElementById('app'))
  // }

  render() {
    return (
      <div>
        This is the homepage
        <form onSubmit={this.handleHomepageSubmit}>
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
      showFormTwo: false,
      name: '',
      email: '',
      password: ''
    }
    this.handleFormOneSubmit = this.handleFormOneSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormOneSubmit(event) {
    event.preventDefault();
    axios.post('/newCustomer', this.state)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    this.setState({
      showFormTwo: true
    })
    ReactDOM.render(<FormTwo user={this.state}/>, document.getElementById('app'));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        This is form one
        <form onSubmit={this.handleFormOneSubmit}>
          <label>Name:
            <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>Email:
            <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>Password:
            <input name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
          </label>
          <br></br>
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
      showFormThree: false,
      address: '',
      city: '',
      state: '',
      zip: '',
      name: props.user.name,
      email: props.user.email,
      password: props.user.password

    }
    this.handleFormTwoSubmit = this.handleFormTwoSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormTwoSubmit(event) {
    event.preventDefault();
    axios.put('/address', this.state)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    this.setState({
      showFormTwo: true
    })
    ReactDOM.render(<FormThree user={this.props.user}/>, document.getElementById('app'));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        This is form two
        <form onSubmit={this.handleFormTwoSubmit}>
          <label> Address:
            <input name="address" value={this.state.address} onChange={this.handleChange}/>
          </label>
          <br></br>
          <label> City:
            <input name="city" value={this.state.city} onChange={this.handleChange}/>
          </label>
          <br></br>
          <label> State:
            <input name="state" value={this.state.state} onChange={this.handleChange}/>
          </label>
          <br></br>
          <label> Zip:
            <input name="zip" value={this.state.zip} onChange={this.handleChange}/>
          </label>
          <br></br>
          <button>Continue</button>
        </form>
      </div>

    )
  }
}


// form three for user to enter credit card information
class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSummary: false,
      number: '',
      expiration: '',
      cvv: '',
      billing: '',
      name: props.user.name,
      email: props.user.email,
      password: props.user.password
    }
    this.handleFormThreeSubmit = this.handleFormThreeSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormThreeSubmit(event) {
    event.preventDefault();
    axios.put('/card', this.state)
    this.setState({
      showFormTwo: true
    })
    ReactDOM.render(<Summary user={this.props.user}/>, document.getElementById('app'));
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        This is form three
        <form onSubmit={this.handleFormThreeSubmit}>
          <label> Card Number:
            <input name="number" value={this.state.number} onChange={this.handleChange}/>
          </label>
          <br></br>
          <label> Expiration:
            <input name="expiration" value={this.state.expiration} onChange={this.handleChange}/>
          </label>
          <br></br>
          <label> CVV:
            <input name="cvv" value={this.state.cvv} onChange={this.handleChange}/>
          </label>
          <br></br>
          <label> Billing Zip:
            <input name="billing" value={this.state.billing} onChange={this.handleChange}/>
          </label>
          <br></br>
          <button>Continue</button>
        </form>
      </div>

    )
  }
}


// Summary Page which renders all of the previous information
class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHomepage: false,
      name: props.user.name,
      email: props.user.email,
      password: props.user.password,
      result: []
    }

    this.handleSummarySubmit = this.handleSummarySubmit.bind(this);
  }

  componentDidMount() {
    // console.log("props",this.props.user)
    axios.get('/customer', this.state)
    .then((res) => {
      console.log(this.state.showHomepage)
      console.log("body", res.data[0])
      console.log(res.data[0].name)
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].name === this.state.name) {
          if (res.data[i].email === this.state.email) {
            if (res.data[i].password === this.state.password) {
              this.getResults(res.data[i]);
            }
          }
        }
      }
    })
  }

  getResults(response) {
    console.log("RESPONSE", response)
    this.setState({
      result: response
    })
  }

  handleSummarySubmit(event) {
    event.preventDefault();
    this.setState({
      showHomepage: true
    })
    ReactDOM.render(<Homepage />, document.getElementById('app'))
  }

  render() {
    return(
      <div>
          <p>
            <h2>Summary</h2>
            <h4>Account</h4>
            Name: {this.state.result.name}
            <br></br>
            Email: {this.state.result.email}
            <br></br>
            Password: {this.state.result.password}
            <br></br>
            <h4>Address</h4>
            Address: {this.state.result.address}
            <br></br>
            City: {this.state.result.city}
            <br></br>
            State: {this.state.result.state}
            <br></br>
            Zip: {this.state.result.zip}
            <br></br>
            <h4>Card Info</h4>
            Card Number: {this.state.result.number}
            <br></br>
            Expiration: {this.state.result.Expiration}
            <br></br>
            CVV: {this.state.result.cvv}
            <br></br>
            Billing Zip: {this.state.result.billing}
          </p>
        <form onSubmit={this.handleSummarySubmit}>
          <button>Purchase</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

