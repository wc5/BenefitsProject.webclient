import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Constants from '../constants';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete = () => {
        axios.delete(Constants.apiUri + this.props.employee.id)
            .then(console.log('deleted'))
            .catch(error => console.log(error));
        
        this.props.d(this.props.employee.id);
    }
    
    render() {
        return (
            <tr>
                <td>
                    {this.props.employee.lastName}
                </td>
                <td>
                    {this.props.employee.firstName}
                </td>
                <td>
                    {this.props.employee.middleName}
                </td>
                <td>
                    ${this.props.employee.salaryPerAnnum}
                </td>
                <td>
                    {this.props.employee.dependents.length}
                </td>
                <td>
                    ${this.props.employee.totalBenefitCostPerAnnum}
                </td>
                <td>
                    ${this.props.paycheck}
                </td>
                <td>
                    <Link to={"/details/"+this.props.employee.id} className="btn btn-primary">Details</Link>
                    &nbsp;&nbsp;
                    <Link to={"/edit/"+this.props.employee.id} className="btn btn-secondary">Edit</Link>
                    &nbsp;&nbsp;
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;