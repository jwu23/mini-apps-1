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
    this.handleHomepageSubmit = this.handleHomepageSubmit.bind(this);
  }

  handleHomepageSubmit(event) {
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
      showFormTwo: false
    }
    this.handleFormOneSubmit = this.handleFormOneSubmit.bind(this);
  }

  handleFormOneSubmit(event) {
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
        <form onSubmit={this.handleFormOneSubmit}>
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
    this.handleFormTwoSubmit = this.handleFormTwoSubmit.bind(this);
  }

  handleFormTwoSubmit(event) {
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
        <form onSubmit={this.handleFormTwoSubmit}>
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
      showSummary: false
    }
    this.handleFormThreeSubmit = this.handleFormThreeSubmit.bind(this);
  }

  handleFormThreeSubmit(event) {
    event.preventDefault();
    this.setState({
      showFormTwo: true
    })
    ReactDOM.render(<Summary />, document.getElementById('app'))
  }

  render() {
    return(
      <div>
        This is form three
        <form onSubmit={this.handleFormThreeSubmit}>
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
      showHomepage: false
    }

    this.handleSummarySubmit = this.handleSummarySubmit.bind(this);
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
        this is the summary page
        <form onSubmit={this.handleSummarySubmit}>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

