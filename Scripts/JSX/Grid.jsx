var React = require('react');
var ReactDataGrid = require('react-data-grid');

class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.CreateRow();
        this._columns = this.props.columns;
    }

    CreateRow = () => {
        var rows = []
        var data = this.props.data;
        for (i = 0, j = data.length; i < j; i++) {
            var currentRow = data[i];
            rows.push(currentRow);
        }
        this._rows = rows;
    };

    RowGetter = (i) => {
        return this._rows[i];
    }

    render() {
        return (
            <ReactDataGrid
                columns={this._columns}
                rowGetter={this.RowGetter}
                rowsCount={this._rows.length}
                minHeight={500} />);

    }
}



module.exports = Grid;