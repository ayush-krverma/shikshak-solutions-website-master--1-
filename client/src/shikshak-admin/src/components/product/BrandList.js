import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoSelect from "../layout/autoselect";

const Arrays = (data, fieldName, fieldValue) => {
    let arrayItem = [];
    if (data && Array.isArray(data)) {
        data.map((item, key) => {
            arrayItem.push({ label: item[fieldName], value: item[fieldValue] });
            return null;
        });
    }
    return arrayItem;
};
class BrandList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectBrand: ''
        }
    }
    handleSelectChange = (name, selected) => {
        if (name === "brand_id") {
            this.setState({
                list: {
                    ...this.state.list,
                    [name]: selected.value,
                },
                selectBrand: selected,
            });
            this.props.onSelectBrand(selected.value)
            this.setState({ changed: true });
        }
    };
    render() {
        const {  selectBrand } = this.state;
        const { getList } = this.props;

        return (
            <div>
                <AutoSelect
                    className="basic-single"
                    value={selectBrand}
                    onChange={this.handleSelectChange}
                    isSearchable={true}
                    name="brand_id"
                    options={Arrays(getList, "name", "id")}
                />
            </div>


        )
    }
}

// Define a function to map the Redux store state to the component's props
const mapStateToProps = (state) => ({
    getList: state.product?.brandData, // Replace with the actual path to your desired store variable
});

// Use the connect function to connect the component to the Redux store
// The first argument is mapStateToProps, and the second argument is mapDispatchToProps (if needed)
export default connect(mapStateToProps)(BrandList);
