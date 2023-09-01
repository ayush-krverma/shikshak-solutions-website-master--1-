import React, { Component } from 'react';
import {connect} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {commonUpdateFunction,actionToGetCategoriesApiCall} from "../../store/action";
class EditCategories extends Component {

  constructor(props) {
        super(props);
        const { name,slug,id } = this.props.updateProductFormData;
        this.state = {
            name: name, slug: slug,id:id
        }
    }
    componentDidUpdate() {
        if(this.props.updateProductFormData.id !== this.state.id)
        this.setState({name: this.props.updateProductFormData.name, slug: this.props.updateProductFormData.slug,id:this.props.updateProductFormData.id});
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit() {
        const setData = `name = ?,slug = ?`;
        const whereCondition = `id = '${this.state.id}'`;
        const value = [this.state.name,this.state.slug];
        const dataToSend = {column: setData, value, whereCondition, tableName: 'categories'};
        await this.props.dispatch(commonUpdateFunction(dataToSend));
        this.props.dispatch(actionToGetCategoriesApiCall());
        this.props.navigate('/shikshak-admin/product/category');
    }
    render() {
        return (
            <div>
                <h4>Update Category</h4>
                <div className="row">
                    <div className="form-group">
                        <label className="form-label">Name*</label>
                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Slug*</label>
                        <input type="text" className="form-control" name="slug" value={this.state.slug} onChange={(e) => this.handleChange(e)} />
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

function EditCategory(props) {
    let navigate = useNavigate();
    return <EditCategories {...props} navigate={navigate} />
}

export default connect(mapStateToProps)(EditCategory);