var React = require('react');
var path = require('path');

class BaseComponent extends React.Component {

    constructor(props) {
        super(props);

        var data = sessionStorage.getItem('user');

        if (data == undefined || data == false) {
            this.props.history.push('/');
        }
    }

}

module.exports = BaseComponent;