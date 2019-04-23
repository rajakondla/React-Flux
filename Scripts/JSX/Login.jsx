var React = require('react');
var path = require('path');
var reactStrap = require('react-bootstrap');
var Button = reactStrap.Button;
var FormGroup = reactStrap.FormGroup;
var FormControl = reactStrap.FormControl;
var ControlLabel = reactStrap.ControlLabel;
var Row = reactStrap.Row;
var Col = reactStrap.Col;
var ReactDOM = require('react-dom');
var axios = require('axios');
var ReactRoute = require('react-router-dom');
var Redirect = ReactRoute.Redirect;
require('F:\\CopyDVD\\Angular5\\ReactJS\\Content\\Login.css');
const Loading = require('./Loading.jsx');

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: "", password: "", loading: false };
    }

    validateForm() {
        return (this.state.email.length > 0 && this.state.password.length > 0);
    }

    handleChange = event => {

        this.setState(
            {
                [event.target.id]: event.target.value
            }
        );

    }

    handleSubmit = event => {
        event.preventDefault();
        // this.state.loading = true;
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic QWRtaW46QWRtaW4='
            }
        };

        this.setState({ loading: true }, () => {
            axios.get('http://localhost:5000/api/Values/GetUser').then(res =>
                this.setState(
                    { loading: false }
                    , () => {
                        if (res.data.isSuccess) {
                            sessionStorage.setItem('user', true);
                            this.props.history.push('/about/sheri');
                        }
                    }
                )
            );
        });
    }

    render() {

        return (
            <div>
                <div className={!this.state.loading ? 'Login' : 'hidden'} >
                    <form>
                        <FormGroup controlId="email" bsSize="small">
                            <div className="row">
                                <div className="col-md-4"> <ControlLabel>Email:</ControlLabel> </div>

                                <div className="col-md-8">  <FormControl type="email" autoFocus value={this.state.email} onChange={this.handleChange} />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="small">
                            <div className="row">
                                <div className="col-md-4">
                                    <ControlLabel>Password:</ControlLabel>
                                </div>
                                <div className="col-md-8">
                                    <FormControl type="password" autoFocus value={this.state.password} onChange={this.handleChange} />
                                </div>
                            </div>
                        </FormGroup>

                        <FormGroup controlId="submit" bsSize="small">
                            <div className="row">
                                <div className="col-md-12">
                                    <Button type="submit" disabled={!this.validateForm()} block bsSize="small" onClick={this.handleSubmit} >Login</Button>

                                </div>
                            </div>
                        </FormGroup>

                    </form>
                </div>
                <div className={this.state.loading ? 'show' : 'hidden'}>
                    {this.state.loading ? <Loading /> : <div />}
                </div>
            </div>
        );
    }
}


module.exports = Login;
