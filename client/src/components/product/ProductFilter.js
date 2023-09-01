import React, {Component} from 'react';

class ProductFilter extends Component {
    render() {
    var {listOfCategory,filterCategoryTypes,setFilterCategoryTypes,filterPriceRange,setFilterPriceRange} = this.props;
        const handleOnChangeCategoryFilter = (data) => {
            const isChecked = filterCategoryTypes.some(checkedCheckbox => checkedCheckbox === data?.id)
            if (isChecked) {
                setFilterCategoryTypes(
                    filterCategoryTypes.filter(
                        (checkedCheckbox) => checkedCheckbox !== data?.id
                    )
                );
            } else {
                setFilterCategoryTypes(filterCategoryTypes.concat(data?.id));
            }

        };
        const handleOnChangePricingFilter = (data) => {
            const isChecked = filterPriceRange.some(checkedCheckbox => checkedCheckbox === data)
            if (isChecked) {
                setFilterPriceRange(
                    filterPriceRange.filter(
                        (checkedCheckbox) => checkedCheckbox !== data
                    )
                );
            } else {
                setFilterPriceRange(filterPriceRange.concat(data));
            }

        };

        return (
            <>
                <div className="col-md-12">
                    {/*/////// CATEGORY FILTER SECTION////*/}
                    <section className="product-slider-panel">
                        <header className="panel-heading"> Category</header>
                        <ul className="filter_checkbox_list pl-25 pr-25 ">
                            {
                                listOfCategory.map((categoryContent, index) => (

                                            <li key={index+'_'+categoryContent?.name} className="filter_checkbox_tab">
                                                <label className="animcheck" htmlFor={index+'_'+categoryContent?.name}>
                                                    <input className="animinput ckbtype"
                                                           type="checkbox"
                                                           id={index+'_'+categoryContent?.name}
                                                           checked={filterCategoryTypes.some(checkedCheckbox => checkedCheckbox === categoryContent?.id)}
                                                           onChange={(e)=>handleOnChangeCategoryFilter(categoryContent)}
                                                           name="btype"
                                                           value={categoryContent?.id} />
                                                    <div className="animlabel"><span className="animicon"></span><span
                                                        className="animtext">{categoryContent?.name}</span></div>
                                                </label>
                                            </li>
                                ))
                            }

                        </ul>
                    </section>
                    {/*/////// CATEGORY FILTER SECTION////*/}
                </div>
                <div className="col-md-12">
                    <section className="product-slider-panel">
                        <header className="panel-heading">Pricing</header>
                        <ul className="filter_checkbox_list pl-25 pr-25 ">
                            <li className="filter_checkbox_tab">
                                <label className="animcheck" htmlFor="price0">
                                    <input className="animinput ckbtype" type="checkbox" id="price0"
                                           checked={filterPriceRange.some(checkedCheckbox => checkedCheckbox === '0-499')}
                                           onChange={(e)=>handleOnChangePricingFilter('0-499')}
                                           name="btype" value="0-499"  />
                                    <div className="animlabel"><span className="animicon"></span><span
                                        className="animtext">Under ₹ 500</span></div>
                                </label>
                            </li>
                            <li className="filter_checkbox_tab">
                                <label className="animcheck" htmlFor="price1">
                                    <input className="animinput ckbtype" type="checkbox" id="price1"
                                           checked={filterPriceRange.some(checkedCheckbox => checkedCheckbox === '500-1000')}
                                           onChange={(e)=>handleOnChangePricingFilter('500-1000')}
                                           name="btype" value="500-1000" />
                                    <div className="animlabel"><span className="animicon"></span><span
                                        className="animtext font14 color414 ">₹ 500 - ₹ 1,000</span>
                                    </div>
                                </label>
                            </li>
                            <li className="filter_checkbox_tab">
                                <label className="animcheck" htmlFor="price2">
                                    <input className="animinput ckbtype" type="checkbox" id="price2"
                                           checked={filterPriceRange.some(checkedCheckbox => checkedCheckbox === '1000-2000')}
                                           onChange={(e)=>handleOnChangePricingFilter('1000-2000')}
                                           name="btype" value="1000-2000" />
                                    <div className="animlabel"><span className="animicon"></span><span
                                        className="animtext font14 color414 ">₹ 1,000 - ₹ 2,000</span>
                                    </div>
                                </label>
                            </li>
                            <li className="filter_checkbox_tab">
                                <label className="animcheck" htmlFor="price3">
                                    <input className="animinput ckbtype" type="checkbox" id="price3"
                                           checked={filterPriceRange.some(checkedCheckbox => checkedCheckbox === '2000-3000')}
                                           onChange={(e)=>handleOnChangePricingFilter('2000-3000')}
                                           name="btype" value="2000-3000" />
                                    <div className="animlabel"><span className="animicon"></span><span
                                        className="animtext font14 color414 ">₹ 2,000 - ₹ 3,000</span>
                                    </div>
                                </label>
                            </li>
                            <li className="filter_checkbox_tab">
                                <label className="animcheck" htmlFor="price4">
                                    <input className="animinput ckbtype" type="checkbox" id="price4"
                                           checked={filterPriceRange.some(checkedCheckbox => checkedCheckbox === '3001-99999999')}
                                           onChange={(e)=>handleOnChangePricingFilter('3001-99999999')}
                                           name="btype" value="3000-99999999" />
                                    <div className="animlabel"><span className="animicon"></span><span
                                        className="animtext font14 color414 ">Over ₹ 3,000</span></div>
                                </label>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="col-md-12">
                    <section className="product-slider-panel">
                        <header className="panel-heading">Class wise</header>
                        <ul className="filter_checkbox_list pl-25 pr-25 ">
                            <li className="filter_checkbox_tab">
                                <label className="animcheck" htmlFor="btype3">
                                    <input className="animinput ckbtype" type="checkbox" id="btype3"
                                           name="btype" value="sellertype|Exporters" />
                                    <div className="animlabel"><span className="animicon"></span><span
                                        className="animtext font14 color414 ">Exporters</span></div>
                                </label>
                            </li>
                            <li className="filter_checkbox_tab">
                                <label className="animcheck" htmlFor="btype4">
                                    <input className="animinput ckbtype" type="checkbox" id="btype4"
                                           name="btype" value="sellertype|Wholesalers" />
                                    <div className="animlabel"><span className="animicon"></span><span
                                        className="animtext font14 color414 ">Wholesalers</span></div>
                                </label>
                            </li>
                            <li className="filter_checkbox_tab">
                                <label className="animcheck" htmlFor="btype5">
                                    <input className="animinput ckbtype" type="checkbox" id="btype5"
                                           name="btype" value="sellertype|Dealers" />
                                    <div className="animlabel"><span className="animicon"></span><span
                                        className="animtext font14 color414 ">Dealers</span></div>
                                </label>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="col-md-12">
                    <section className="product-slider-panel">
                        <header className="panel-heading">Availability</header>
                        <ul className="filter_checkbox_list pl-25 pr-25 ">
                            <li className="filter_checkbox_tab">
                                <label className="animcheck" htmlFor="avalibilty">
                                    <input className="animinput ckbtype" type="checkbox" id="avalibilty"
                                           name="btype" value="sellertype|All" />
                                    <div className="animlabel"><span className="animicon"></span><span
                                        className="animtext">Include Out of Stock</span></div>
                                </label>
                            </li>
                        </ul>
                    </section>
                </div>
            </>
        )
    }
}

export default ProductFilter;
