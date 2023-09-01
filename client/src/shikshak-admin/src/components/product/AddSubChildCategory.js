import React, { Component } from 'react'
import MainCategoryList from "./MainCategoryList";
import SubCategoryList from "./SubCategoryList";
import swal from 'sweetalert';
import { connect } from 'react-redux';
import {
    actionToCreateSubChildCategories,
    actionToGetSubCategoriesOfIdApiCall
} from "../../store/action";

class AddSubChildCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', selectCategory: '', selectedSubCategory: '',getList:[]
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleChangeCategoryList = async (value) => {
        this.setState({ selectCategory: value });
        let categoryId = value;
        let list = await this.props.dispatch(actionToGetSubCategoriesOfIdApiCall({categoryId:categoryId}));
        this.setState({ getList: list })
    }
    handleSubCategory = (value) => {
        this.setState({ selectedSubCategory: value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { name, selectCategory,selectedSubCategory } = this.state;
        let data = { name: name, categoryId: selectCategory, subcategoryId: selectedSubCategory }
        swal({
            title: "Are you sure?",
            text: "You want to Add New Sub Child Category",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (success) => {
                if (success) {
                    this.props.dispatch(actionToCreateSubChildCategories(data));
                }
            });
    }
    render() {
        const { getList } = this.state;
        console.log(getList,'getList')
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
                        <div className="form-group">
                            <label className="form-label">Sub Category*</label>
                            <SubCategoryList state={getList} onSelectSubCategory={this.handleSubCategory} />
                        </div>
                        <button className="save-btn hover-btn" type="submit" onClick={this.handleSubmit}>Add New</button>
                    </div>
                </div>
            </div>
        )
    }
}
/*// Define a function to map the Redux store state to the component's props
const mapStateToProps = (state) => ({
    getList: state.product?.categoryData, // Replace with the actual path to your desired store variable
});*/
export default connect()(AddSubChildCategories);
