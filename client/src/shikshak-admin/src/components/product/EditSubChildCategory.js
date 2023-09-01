import React, { Component } from 'react';
import {connect} from "react-redux";
import { useNavigate } from 'react-router-dom';
import MainCategoryList from "./MainCategoryList";
import {
    commonUpdateFunction,
    actionToGetSubChildCategoriesApiCall,
    actionToGetSubCategoriesOfIdApiCall
} from "../../store/action";
import SubCategoryList from "./SubCategoryList";
class EditSubChildCategories extends Component {

    constructor(props) {
        super(props);
           const { name,subcategoryId,categoryId,id } = this.props.updateProductFormData;
            this.state = {
                name: name, selectedCategory:categoryId,selectedSubCategory:subcategoryId,id:id,getList:[]
            }
           if(this.props.updateProductFormData.categoryId){
               this.props.dispatch(actionToGetSubCategoriesOfIdApiCall({categoryId:this.props.updateProductFormData.categoryId})).then(list=>{
                   this.state = {
                       name: name, selectedCategory:categoryId,selectedSubCategory:subcategoryId,id:id,getList:list.length > 0 ? list[0] :[]
                   }
               })
           }
    }
    async componentDidUpdate() {
        if(this.props.updateProductFormData?.id !== this.state?.id){
            let list = await this.props.dispatch(actionToGetSubCategoriesOfIdApiCall({categoryId:this.props.updateProductFormData.categoryId}));
            this.setState({name: this.props.updateProductFormData.name, selectedCategory: this.props.updateProductFormData.categoryId,
                selectedSubCategory: this.props.updateProductFormData.subcategoryId,id:this.props.updateProductFormData.id,getList:list});
        }

    }
    async componentDidMount() {
        setTimeout(async()=>{
            let list = await this.props.dispatch(actionToGetSubCategoriesOfIdApiCall({categoryId:this.props.updateProductFormData.categoryId}));
            this.setState({name: this.props.updateProductFormData.name, selectedCategory: this.props.updateProductFormData.categoryId,
                selectedSubCategory: this.props.updateProductFormData.subcategoryId,id:this.props.updateProductFormData.id,getList:list});
        },1000)

    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit() {
        const setData = `name = ?,subcategoryId = ?`;
        const whereCondition = `id = '${this.state.id}'`;
        const value = [this.state.name,this.state.selectedSubCategory];
        const dataToSend = {column: setData, value, whereCondition, tableName: 'subchildcategories'};
        await this.props.dispatch(commonUpdateFunction(dataToSend));
        this.props.dispatch(actionToGetSubChildCategoriesApiCall());
        this.props.navigate('/shikshak-admin/product/sub-child-category');
    }

    handleCategory = async (value) => {
        this.setState({ selectedCategory: value });
        let list = await this.props.dispatch(actionToGetSubCategoriesOfIdApiCall({categoryId:value}));
        this.setState({ getList: list })
    }
    handleSubCategory = async (value) => {
        this.setState({ selectedSubCategory: value });
    }
    render() {
        return (
            <div>
                <h4>Update Sub Child Category</h4>
                <div className="row">
                    <div className="form-group">
                        <label className="form-label">Name*</label>
                        <input type="text" className="form-control" name="name" value={this.state?.name} onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Category*</label>
                        <MainCategoryList onSelectCategory={this.handleCategory} selectedCategory={this.state?.selectedCategory} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Sub Category*</label>
                        <SubCategoryList state={this.state.getList} onSelectSubCategory={this.handleSubCategory} selectedSubCategory={this.state.selectedSubCategory}/>
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

function EditSubChildCategory(props) {
    let navigate = useNavigate();
    return <EditSubChildCategories {...props} navigate={navigate} />
}

export default connect(mapStateToProps)(EditSubChildCategory);