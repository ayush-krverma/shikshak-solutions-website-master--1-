import React from "react";
import {useDispatch, useSelector} from "react-redux";
import GetDataTable from "../../hooks/GetDataTable";
import swal from "sweetalert";
import {
    actionToGetSubChildCategoriesApiCall, actionToSetUpdateFromData,
    callDeleteDataFunction
} from "../../store/action";
import {Link} from "react-router-dom";
export default function GetSubChildCategories() {
    const dispatch = useDispatch();
    const listOfSubChildCategories = useSelector((state) => state.product?.subChildCategoryData)
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
            selector: 'name',
            sortable: true,
            sortField: 'name',
        },
        {
            name: 'Category',
            selector: 'category',
            sortable: true,
            sortField: 'category',
        },
        {
            name: 'Sub Category',
            selector: 'subcategory',
            sortable: true,
            sortField: 'subcategory',
        },
        {
            name: 'Action',
            selector: row => row.action,
            cell: d =><><Link to={`/shikshak-admin/product/sub-child-category/${d.id}`} onClick={()=>actionToSetFromData(d)}>
                <button className="edit-btn"><i className="fas fa-edit" /></button>
            </Link>
                <button type="button" onClick={()=>deleteSubChildCategories(d)}> <i className="fas fa-trash" /></button></>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const actionToSetFromData = (data) =>{
        dispatch(actionToSetUpdateFromData(data));
    }
    const deleteSubChildCategories = (row) => {
        swal({
            title: "Are you sure?",
            text: "You want to delete this Sub Category "+row?.name,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (success) => {
                if (success) {
                    let payload  = {condition:` id= ${row.id} `,tableName:'subchildcategories'};
                    dispatch(callDeleteDataFunction(payload)).then(() => {
                        dispatch(actionToGetSubChildCategoriesApiCall())
                    })
                }
            });
    }

    return (
        <div className="col-md-12 text-center fw-bold white-background">
            <GetDataTable
                columns={columns}
                data={listOfSubChildCategories}
                fixedHeader={true}
                fixedHeaderScrollHeight={"100px"}
            />

        </div>


    );
}
