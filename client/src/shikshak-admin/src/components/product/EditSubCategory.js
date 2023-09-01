import React, { Component } from 'react';
import {connect} from "react-redux";
import { useNavigate } from 'react-router-dom';
import MainCategoryList from "./MainCategoryList";
import {commonUpdateFunction,actionToGetSubCategoriesApiCall} from "../../store/action";
class EditSubCategories extends Component {

    constructor(props) {
        super(props);
        const { sub_name,categoryId,id } = this.props.updateProductFormData;
        this.state = {
            sub_name: sub_name, selectedCategory:categoryId,id:id
        }
    }
    componentDidUpdate() {
        if(this.props.updateProductFormData.id !== this.state.id)
            this.setState({sub_name: this.props.updateProductFormData.sub_name, selectedCategory: this.props.updateProductFormData.categoryId,id:this.props.updateProductFormData.id});
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit() {
        const setData = `sub_name = ?,categoryId = ?`;
        const whereCondition = `id = '${this.state.id}'`;
        const value = [this.state.sub_name,this.state.selectedCategory];
        const dataToSend = {column: setData, value, whereCondition, tableName: 'subcategories'};
        await this.props.dispatch(commonUpdateFunction(dataToSend));
        this.props.dispatch(actionToGetSubCategoriesApiCall());
        this.props.navigate('/shikshak-admin/product/sub-category');
    }

    handleCategory = async (value) => {
        this.setState({ selectedCategory: value });
    }
    render() {
        return (
            <div>
                <h4>Update Sub Category</h4>
                <div className="row">
                    <div className="form-group">
                        <label className="form-label">Name*</label>
                        <input type="text" className="form-control" name="sub_name" value={this.state.sub_name} onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Category*</label>
                        <MainCategoryList onSelectCategory={this.handleCategory} selectedCategory={this.state.selectedCategory} />
                    </div>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-primary" onClick={() => this.handleSubmit()}>Update</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(state) {
    return {
        updateProductFormData: state.product?.updateProductFormData
    }
}

function EditSubCategory(props) {
    let navigate = useNavigate();
    return <EditSubCategories {...props} navigate={navigate} />
}

export default connect(mapStateToProps)(EditSubCategory);