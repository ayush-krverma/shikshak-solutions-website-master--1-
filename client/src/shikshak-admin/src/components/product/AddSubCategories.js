import React, { Component } from 'react'
import MainCategoryList from "./MainCategoryList";
import swal from 'sweetalert';
import { connect } from 'react-redux';
import {actionToCreateSubCategories} from "../../store/action";

class AddSubCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', selectCategory: ''
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleChangeCategoryList = (value) => {
        this.setState({ selectCategory: value });
    }


    handleSubmit = async event => {
        event.preventDefault();
        const { name, selectCategory } = this.state;
        let data = { sub_name: name, categoryId: selectCategory };
        swal({
            title: "Are you sure?",
            text: "You want to Add New Location",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (success) => {
                if (success) {
                    this.props.dispatch(actionToCreateSubCategories(data));
                }
            });
    }
    render() {
        return (
          <div className="card card-static-2 mb-30">
                            <div className="card-title-2">
                                <h4>Add Sub Category</h4>
                            </div>
                            <div className="card-body-table">
                                <div className="news-content-right pd-20">
                                    <div className="form-group">
                                        <label className="form-label">Name*</label>
                                        <input type="text" className="form-control" placeholder="Category Name" name="name" onChange={(e) => this.handleChange(e)} />
                                    </div>
                                    <div className="form-group mb-0">
                                        <label className="form-label">Main Categories*</label>
                                       <MainCategoryList onSelectCategory={this.handleChangeCategoryList} />
                                    </div>
                                    <button className="save-btn hover-btn" type="submit" onClick={this.handleSubmit}>Add New</button>
                                </div>
                            </div>
                        </div>
        )
    }
}
export default connect()(AddSubCategories);
