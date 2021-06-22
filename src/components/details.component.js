import { Component } from 'react';
import axios from 'axios';
import * as Constants from '../constants';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { employee: {} }
    }

    componentDidMount() {
        axios.get(Constants.apiUri + this.props.match.params.id)
            .then(res => {
                this.setState({ employee: res.data });
            })
            .catch((error) => { 
                console.log(error); 
            })
    }

    render() {
        return (
          <div>
            <h2>Employees Details</h2>
            <ul>
                <li>First Name: {this.state.employee.firstName}</li>
                <li>Middle Name: {this.state.employee.middleName}</li>
                <li>Last Name: {this.state.employee.lastName}</li>
                <li>Salary Per Year: ${this.state.employee.salaryPerAnnum}</li>
                <li>Personal Benefit Cost Per Year: ${this.state.employee.personalBenefitCostPerAnnum}</li>
                <li>{this.state.employee.hasDiscountedPersonalBenefitCost ? "Has Personal Discount" : "No Personal Discount"}</li>
                <li>Total Benefit Cost Per Year: ${this.state.employee.totalBenefitCostPerAnnum}</li>
            </ul>
            <p className='text-danger'>We could then display any nested dependent info below (and format the above way more appropriately...).</p>
          </div>
        );
    }
}