import React, { Component } from 'react';
import AutoSelect from "../layout/autoselect";

const Arrays = (data, fieldName, fieldValue) => {
    let arrayItem = [];
    if (data && Array.isArray(data)) {
        data.map((item) => {
            arrayItem.push({ label: item[fieldName], value: item[fieldValue] });
            return null;
        });
    }
    return arrayItem;
};

export default class SubCategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supplierList: this.props.state, selectedType: ''
        }
        if(this.props.selectedSubCategory){
            this.props.state?.map(res=>{
                if(res.id === this.props.selectedSubCategory){
                    this.state = {
                        supplierList: this.props.state,selectedType: {label: res.sub_name, value: this.props.selectedSubCategory}
                    }
                }
            })
        }
    }

    componentDidUpdate() {
        if(this.props.selectedCategory !== this.state.selectedSubCategory?.value){
            this.state.state?.map(res=>{
                if(res.id === this.props.selectedSubCategory)
                    this.setState({supplierList: this.props.state,selectedType: {label: res.sub_name, value: this.props.selectedSubCategory}});
            })
        }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.props.state?.map(res=>{
                if(res.id === this.props.selectedSubCategory){
                    this.setState({supplierList: this.props.state,selectedType: {label: res.sub_name, value: this.props.selectedSubCategory}});
                }
            })
        },1500)
    }
    handleSelectChange = (name, selected) => {
        if (name === "supplier_id") {
            this.setState({
                supplierlist: {
                    ...this.state.supplierlist,
                    [name]: selected.value,
                },
                selectedType: selected,
            });
            this.props.onSelectSubCategory(selected.value)

            this.setState({ changed: true });
        }
    };

    render() {
        const { selectedType } = this.state;
        return (
            <div>
                <AutoSelect
                    className="basic-single"
                    value={selectedType}
                    onChange={this.handleSelectChange}
                    isSearchable={true}
                    name="supplier_id"
                    options={Arrays(this.props.state, "sub_name", "id")}
                />
            </div>

        )
    }
}
