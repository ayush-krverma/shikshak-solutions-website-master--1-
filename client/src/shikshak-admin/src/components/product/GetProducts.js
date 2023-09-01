import React from "react";
import {useDispatch, useSelector} from "react-redux";
import GetDataTable from "../../hooks/GetDataTable";
import {
    actionToDeleteAwsObject, actionToGetProductImagesApiCall,
    actionToGetProductsApiCall, actionToSetUpdateFromData,
    callDeleteDataFunction
} from "../../store/action";
import swal from "sweetalert";
import {Link} from "react-router-dom";
export default function GetProducts() {
    const dispatch = useDispatch();
    const listOfProducts = useSelector((state) => state.product?.productData)
    const columns = [
        {
            className: '',
            name: 'Id',

            selector: 'id',
            sortable: true,
            sortField: 'id',
        },
        {
            className: '',
            name: 'Name',
            selector: 'name',
            sortable: true,
            sortField: 'name',
        },
         {
             name: 'Image',
             selector: 'photo',
             sortable: true,
             cell: d => <img src={d.photo} alt="ImageTitle" width="50"/>,
        },
        {
             name: 'Category',
             selector:'category',
             sortable: true,
             sortField: 'category',
         },{
             name: 'Unit SIze',
             selector:'unitSize',
             sortable: true,
             sortField: 'unitSize',
         },{
             name: 'Price',
             selector:'price',
             sortable: true,
             sortField: 'price',
         },{
             name: 'Qty',
             selector:'qty',
             sortable: true,
             sortField: 'qty',
         },{
             name: 'Discount %',
             selector:'discountPer',
             sortable: true,
         },{
             name: 'Discount',
             selector:'discount',
             sortable: true,
         },{
             name: 'Total',
             selector:'total',
             sortable: true,
             sortField: 'total',
         },{
             name: 'Net Price',
             selector:'total',
             sortable: true,
             sortField: 'netPrice',
         },
         {
             name: 'Action',
             selector: row => row.action,
             cell: d =><><Link to={`/shikshak-admin/product/edit/${d.id}`} onClick={()=>actionToSetFromData(d)}>
                             <button className="edit-btn"><i className="fas fa-edit" /></button>
                         </Link>
                        <Link to={`/shikshak-admin/product/images/${d.id}`} onClick={()=>actionToGetProductImageData(d)}>
                             <button className="image-btn"><i className="fas fa-image" /></button>
                         </Link>
                        <button type="button" onClick={()=>deleteProduct(d)}> <i className="fas fa-trash" /></button></>,
             ignoreRowClick: true,
             allowOverflow: true,
             button: true,
         },
    ];

    const actionToSetFromData = (data) =>{
        dispatch(actionToSetUpdateFromData(data));
    }
    const actionToGetProductImageData = (data) =>{
        dispatch(actionToGetProductImagesApiCall({productId:data.id}));
    }
    const deleteProduct = (row) => {
        swal({
            title: "Are you sure?",
            text: "You want to delete this Product "+row?.name,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (success) => {
                if (success) {
                    let payload  = {condition:` id= ${row.id} `,tableName:'products'};
                    let path = row?.photo;
                    if(path != null){
                        path= path.replace("https://shikshak-solutions.s3-eu-north-1.amazonaws.com/","");
                        path = path.replace("https://shikshak-solutions.s3.eu-north-1.amazonaws.com/","");
                        path= path.replace("https%3A//shikshak-solutions.s3-eu-north-1.amazonaws.com/","");
                        path =path.replace("https%3A//shikshak-solutions.s3.eu-north-1.amazonaws.com/","");
                        dispatch(actionToDeleteAwsObject({key:path}));
                    }
                    dispatch(callDeleteDataFunction(payload)).then(() => {
                        dispatch(actionToGetProductsApiCall())
                    })
                }
            });

    };

    return (
        <div className="col-md-12 text-center fw-bold white-background">
            <GetDataTable
                columns={columns}
                data={listOfProducts}
                fixedHeader={true}
                fixedHeaderScrollHeight={"100px"}
            />

        </div>


    );
}
