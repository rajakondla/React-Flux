    var React = require('react');
var path = require('path');
var reactStrap = require('react-bootstrap');
var Button = reactStrap.Button;
var FormGroup = reactStrap.FormGroup;
var FormControl = reactStrap.FormControl;
var ControlLabel = reactStrap.ControlLabel;
var ReactDOM = require('react-dom');
var ReactRoute = require('react-router-dom');
var Redirect = ReactRoute.Redirect;
require('F:\\CopyDVD\\Angular5\\ReactJS\\Content\\Login.css');
var LoginAction = require('../Actions/LoginAction.jsx'); 
const Loading = require('../JSX/Loading.jsx');
let LoginStore = require('../Stores/LoginStore.jsx');


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

    componentWillMount = () => {
        LoginStore.addEmitSuccessLoginListener(this.Success);
        LoginStore.addProgressStartListener(this.LoadProgress);
        LoginStore.addProgressEndListener(this.UnLoadProgress);
        LoginStore.addEmitUnSuccessLoginListener(this.UnSuccess);
    }

    componentWillUnmount = () => {

        LoginStore.removeEmitSuccessLoginListner(this.Success);
        LoginStore.removeProgressStartListner(this.LoadProgress);
        LoginStore.removeProgressEndListner(this.UnLoadProgress);
        LoginStore.removeEmitUnSuccessLoginListner(this.UnSuccess);
    }

    LoadProgress = () => {
        //this.setState.loading = true;
       // alert('aghfg');
       this.setState({loading:true});
    }

    UnLoadProgress = () => {
        this.setState({loading:false});
    }

    Success = () => {
        this.props.history.push('/about/sheri');
    }

    UnSuccess = () => {
        alert(LoginStore.failureMsg());
    }

    handleSubmit = event => {
        event.preventDefault();
        LoginAction.UserLogin(this.state);
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
