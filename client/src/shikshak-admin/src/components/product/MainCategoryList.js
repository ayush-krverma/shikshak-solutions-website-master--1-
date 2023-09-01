import React, { Component } from 'react';
import { connect } from 'react-redux';
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
class MainCategoryList extends Component {
    constructor(props) {
        super(props);
        if(this.props.selectedCategory){
            this.props?.getList.map(res=>{
                if(res.id === this.props.selectedCategory){
                    this.state = {
                        selectCategory: {label: res.name, value: this.props.selectedCategory}
                    }
                }
            })
        }else{
            this.state = {
                selectCategory: ''
            }
        }
    }

    componentDidUpdate() {
        if(this.props.selectedCategory !== this.state.selectCategory?.value){
            this.props?.getList.map(res=>{
                if(res.id === this.props.selectedCategory)
                this.setState({selectCategory: {label: res.name, value: this.props.selectedCategory}});
            })
        }
    }
    handleSelectChange = (name, selected) => {
        if (name === "category_id") {
            this.setState({
                list: {
                    ...this.state.list,
                    [name]: selected.value,
                },
                selectCategory: selected,
            });
            this.props.onSelectCategory(selected.value)
            this.setState({ changed: true });
        }
    };
    render() {
        const { selectCategory } = this.state;
        const { getList } = this.props;
        return (
            <div>
                <AutoSelect
                    className="basic-single"
                    value={selectCategory}
                    onChange={this.handleSelectChange}
                    isSearchable={true}
                    name="category_id"
                    options={Arrays(getList, "name", "id")}
                />
            </div>


        )
    }
}

// Define a function to map the Redux store state to the component's props
const mapStateToProps = (state) => ({
    getList: state.product?.categoryData, // Replace with the actual path to your desired store variable
});

// Use the connect function to connect the component to the Redux store
// The first argument is mapStateToProps, and the second argument is mapDispatchToProps (if needed)
export default connect(mapStateToProps)(MainCategoryList);
