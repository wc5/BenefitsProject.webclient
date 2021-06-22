import React, { Component } from 'react';
import axios from 'axios';
import * as Constants from '../constants';

export default class Create extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onClear = this.onClear.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            middleName: '',
            lastName: ''
        }
    }

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeMiddleName = (e) => {
        this.setState({
            middleName: e.target.value
        });
    }

    onChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }

    onClear = (e) => {
        this.setState({
            firstName: '',
            middleName: '',
            lastName: ''
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const body = {
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            dependents: []
        };

        axios.post(Constants.apiUri, body)
            .then(res => console.log(res.data));
        
        this.setState({
            firstName: '',
            middleName: '',
            lastName: ''
        });
    }

    render() {
        return (
            <div style={{marginTop: 10, marginBottom: 20}} className="container-fluid">
                <h3>Add New Employee</h3>
                <form onSubmit={this.onSubmit} onReset={this.onClear}>
                    <div className="form-group row" style={{marginBottom: 10}}>
                        <label className="col-sm-1 col-form-label">First Name</label>
                        <div className="col-sm-2">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={this.onChangeFirstName}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={{marginBottom: 10}}>
                        <label className="col-sm-1 col-form-label">Middle Name</label>
                        <div className="col-sm-2">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Middle Name"
                                value={this.state.middleName}
                                onChange={this.onChangeMiddleName}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={{marginBottom: 10}}>
                        <label className="col-sm-1 col-form-label">Last Name</label>
                        <div className="col-sm-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                onChange={this.onChangeLastName}
                            />
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-end">
                        <div className="col-sm-11">
                            <button type="reset" className="btn btn-danger">Clear</button>
                            &nbsp;&nbsp;
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}