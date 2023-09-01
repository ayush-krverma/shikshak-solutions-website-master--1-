import React from "react";
import {useDispatch, useSelector} from "react-redux";
import GetDataTable from "../../hooks/GetDataTable";
import swal from "sweetalert";
import {
    actionToGetSubCategoriesApiCall, actionToSetUpdateFromData,
    callDeleteDataFunction
} from "../../store/action";
import {Link} from "react-router-dom";
export default function GetSubCategories() {
    const dispatch = useDispatch();
    const listOfSubCategories = useSelector((state) => state.product?.subCategoryData);
    const columns = [
        {
            className: '',
            name: 'Id',
            selector: 'id',
            sortable: true,
            sortField: 'id',
        },
        {
            name: 'Name',
            selector: 'sub_name',
            sortable: true,
            sortField: 'sub_name',
        },
        {
            name: 'Category',
            selector: 'category',
            sortable: true,
            sortField: 'category',
        },
        {
            name: 'Action',
            selector: row => row.action,
            cell: d =><><Link to={`/shikshak-admin/product/sub-category/${d.id}`} onClick={()=>actionToSetFromData(d)}>
                            <button className="edit-btn"><i className="fas fa-edit" /></button>
                        </Link>
                <button type="button" onClick={()=>deleteSubCategories(d)}> <i className="fas fa-trash" /></button></>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const actionToSetFromData = (data) =>{
        dispatch(actionToSetUpdateFromData(data));
    }
    const deleteSubCategories = (row) => {
        swal({
            title: "Are you sure?",
            text: "You want to delete this Sub Category "+row?.name,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (success) => {
                if (success) {
                    let payload  = {condition:` id= ${row.id} `,tableName:'subcategories'};
                    dispatch(callDeleteDataFunction(payload)).then(() => {
                        dispatch(actionToGetSubCategoriesApiCall())
                    })
                }
            });
    }

    return (
        <div className="col-md-12 text-center fw-bold white-background">
            <GetDataTable
                columns={columns}
                data={listOfSubCategories}
                fixedHeader={true}
                fixedHeaderScrollHeight={"100px"}
            />

        </div>


    );
}
