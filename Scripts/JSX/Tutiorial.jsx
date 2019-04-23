var React = require('react');
var BaseComponent = require('./BaseComponent.jsx');
var PropTypes = require('prop-types');
var reactStrap = require('reactstrap');
var qs = require('query-string');
const Grid = require('./Grid.jsx');

class CommentBox extends BaseComponent {

    constructor(props) {
        super(props);
        
        state = { Name: this.props.match.params.username, SurName:'Kondla' }
     //   self = this;
        //this.state = { userdata: self.props.userdetails };
        this._columns = [
            { key: 'id', name: 'ID' },
            { key: 'name', name: 'User Name' }];

            this._rows= [
                             {'id':1,'name':'Raja Kondla'},
                             {'id':2,'name':'Arun'},
                             {'id':3,'name':'Praveen'},
                             {'id':4,'name':'Srinu'},
                        ];
    }

    render() {
        //var data = this.props.userDetails.Name;
        return (
            <div>
              <Grid data={this._rows} columns={this._columns} ></Grid>
            </div>
        );
    }
     
}


module.exports = CommentBox;
//export default CommentBox;