import React, { Component } from 'react';
import MainCategoryList from "./MainCategoryList";
import SubCategoryList from "./SubCategoryList";
import ChildCategoryList from "./ChildCategoryList";
import RichTextEditor from "../layout/RichTextEditor";
import { NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import {
    actionToCreateProducts,
    actionToGetSubCategoriesOfIdApiCall,
    actionToGetSubChildCategoriesOfIdApiCall
} from "../../store/action";
import BrandList from "./BrandList";
class AddProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getList: [], getSubList: [], selectedCategory: '', selectedSubCategory: '', selectedChildCategory: '',
            blockHide: false,toggle: false, isLoaded: false, selectedBrand:'',
            name: '', slug: '',  status: 1, unit: '', image: '', content: ``,sortDesc:'', buyerPrice:0,
            price: 0, qty: 1, discount: 0, discountPer: 0, total: 0, grand_total: 0
        }
    }
    handleBack() {
        this.props.history.goBack();
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onFileChange = event => {
        this.setState({ image: event.target.files[0] });
    };
    handleContentChange = contentHtml => {
        this.setState({
            content: contentHtml
        });
    };
    handleCategory = async (value) => {
        this.setState({ selectedCategory: value });
        let list = await this.props.dispatch(actionToGetSubCategoriesOfIdApiCall({categoryId:value}));
        this.setState({ getList: list })
    }
    handleSubCategory = async (value) => {
        this.setState({ selectedSubCategory: value });
        let list = await this.props.dispatch(actionToGetSubChildCategoriesOfIdApiCall({id:value}));
        this.setState({ getSubList: list, blockHide: true })
    }
    handleChildCategory = async (value) => {
        this.setState({ selectedChildCategory: value });
    }
    handleBrand = async (value) => {
        this.setState({ selectedBrand: value });
    }
    caculationTable = () => {
        let price = this.state.price;
        let qty = this.state.qty;
        let discountPer = this.state.discountPer;
        if (price > 0 && qty > 0 && discountPer >= 0) {
            let discount = (Math.round(((price * qty) * discountPer) / 100));
            let total = (Math.round(price * qty));
            let grand_total = (Math.round((price * qty) - discount));

            this.setState({ total: total, grand_total: grand_total, discount: discount })
        } else {
            NotificationManager.error("Negative value & Zero Price not allowed", "Input Field");
        }
    }
    handleCheckPrice() {
        this.caculationTable();
        this.setState({ toggle: !this.state.toggle })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ isLoaded: true })
        const { selectedCategory, selectedSubCategory, selectedChildCategory, image, name, slug, selectedBrand, status, unit, content, sortDesc, buyerPrice, price, qty, discount, discountPer, total, grand_total } = this.state;
        let data = {categoryId:selectedCategory,subCategoryId:selectedSubCategory,childCategoryId:selectedChildCategory,name:name,
            slug:slug,brand:selectedBrand,status:status,unitSize:unit,desc:content,sortDesc:sortDesc,photo:image,buyerPrice:buyerPrice,
            price:price,qty:qty,discountPer:discountPer,discount:discount,total:total,netPrice:grand_total};

        swal({
            title: "Are you sure?",
            text: "You want to Add New Product",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (success) => {
                if (success) {
                    let list = await this.props.dispatch(actionToCreateProducts(data));
                    if (list) {
                        this.setState({ isLoaded: false })
                    } else {
                        NotificationManager.error("Please! Check input field", "Input Field");
                    }
                }
            });

    }
    render() {
        const { getList, getSubList, isLoaded } = this.state;
        return (
            <>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="card card-static-2 mb-30">
                        <div className="card-body-table">
                            <div className="news-content-right pd-20">
                                <div className="form-group">
                                    <label className="form-label">Category*</label>
                                    <MainCategoryList onSelectCategory={this.handleCategory} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="card card-static-2 mb-30">
                        <div className="card-body-table">
                            <div className="news-content-right pd-20">
                                <div className="form-group">
                                    <label className="form-label">Sub Category*</label>
                                    <SubCategoryList state={getList} onSelectSubCategory={this.handleSubCategory} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="row" style={this.state.blockHide ? { display: 'block' } : { display: 'none' }}>
                    {
                        isLoaded ? 'Loading ...' : ''
                    }
                    <div className="col-lg-12 col-md-12">
                        <div className="card card-static-2 mb-30">
                            <div className="card-title-2">
                                <h4>Add New Product</h4>
                            </div>
                            <div className="card-body-table">
                                <div className="news-content-right pd-20">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2">
                                            <div className="form-group">
                                                <label className="form-label">Product Name*</label>
                                                <input type="text" className="form-control" placeholder="Product Name" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="form-group">
                                                <label className="form-label">Category*</label>
                                                <ChildCategoryList state={getSubList} onSelectchildCategory={this.handleChildCategory} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="form-group">
                                                <label className="form-label">Slug*</label>
                                                <input type="text" className="form-control" required placeholder="Product Name" name="slug" value={this.state.slug} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="form-group">
                                                <label className="form-label">Brand*</label>
                                                <BrandList onSelectBrand={this.handleBrand} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="form-group">
                                                <label className="form-label">Unit Size*</label>
                                                <input type="text" required className="form-control" placeholder="size" name="unit" value={this.state.unit} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="form-group">
                                                <label className="form-label">Category Image*</label>
                                                <input type="file" required className="form-control" name="image" onChange={this.onFileChange} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row" style={{ paddingTop: '2rem' }}>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="form-group">
                                                <label className="form-label">Status*</label>
                                                <select id="status" name="status" className="form-control" value={this.state.status} onChange={(e) => this.handleChange(e)}>
                                                    <option value={1}>Active</option>
                                                    <option value={0}>Inactive</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="form-group">
                                                <label className="form-label">Buyer Price*</label>
                                                <input type="number" required className="form-control" name="buyerPrice" value={this.state.buyerPrice} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="form-group">
                                                <label className="form-label">Seller Price*</label>
                                                <input type="number" required className="form-control" name="price" value={this.state.price} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-md-1">
                                            <div className="form-group">
                                                <label className="form-label">Quantity*</label>
                                                <input type="number" required className="form-control" name="qty" value={this.state.qty} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-md-1">
                                            <div className="form-group">
                                                <label className="form-label">Discount(%)*</label>
                                                <input type="number" required className="form-control" name="discountPer" value={this.state.discountPer} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-md-1">
                                            <div className="form-group">
                                                <label className="form-label">Discount Price*</label>
                                                <input type="number" required className="form-control" disabled name="discount" value={this.state.discount} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-md-1">
                                            <div className="form-group">
                                                <label className="form-label">Total *</label>
                                                <input type="number" className="form-control" disabled name="total" value={this.state.total} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <div className="form-group">
                                                <label className="form-label">Grand Total *</label>
                                                <input type="number" className="form-control" disabled name="grand_total" value={this.state.grand_total} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row" style={{ paddingTop: '2rem' }}>
                                        <div className="form-group">
                                            <label className="form-label">Sort Description*</label>
                                            <textarea rows="4" cols="100" required className="form-control" name="sortDesc" value={this.state.sortDesc} onChange={(e) => this.handleChange(e)} />
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Description*</label>
                                                <RichTextEditor required
                                                    content={this.state.content}
                                                    handleContentChange={this.handleContentChange}
                                                    placeholder="insert text here..."
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="button_price">
                                        <div className="form-group">
                                            <button className="checkprice"  onClick={() => this.handleCheckPrice()} >Check Price</button>
                                        </div>
                                        <div className="form-group" style={this.state.toggle ? { display: 'block' } : { display: 'none' }}>
                                            <button className="save-btn hover-btn" type="submit" onClick={this.handleSubmit}>Add New Product</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default connect()(AddProducts);
