import React from "react";
import {useDispatch, useSelector} from "react-redux";
import GetDataTable from "../../hooks/GetDataTable";
import swal from "sweetalert";
import {actionToGetBrandsApiCall, actionToSetUpdateFromData, callDeleteDataFunction} from "../../store/action";
import {Link} from "react-router-dom";

export default function GetBrands() {
    const dispatch = useDispatch();
    const listOfCategories = useSelector((state) => state.product?.brandData)
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
            className: '',
            name: 'Slug',
            selector: 'slug',
            sortable: true,
            sortField: 'slug',
        },
         {
             name: 'Action',
             selector: row => row.action,
             cell: d =><><Link to={`/shikshak-admin/product/brand/${d.id}`} onClick={()=>actionToSetFromData(d)}>
                             <button className="edit-btn"><i className="fas fa-edit" /></button>
                         </Link>
                 <button type="button" onClick={()=>deleteBrand(d)}> <i className="fas fa-trash" /></button></>,
             ignoreRowClick: true,
             allowOverflow: true,
             button: true,
         },
    ];

    const actionToSetFromData = (data) =>{
        dispatch(actionToSetUpdateFromData(data));
    }
    const deleteBrand = (row) => {
        swal({
            title: "Are you sure?",
            text: "You want to delete this Product "+row?.name,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (success) => {
                if (success) {
                    let payload  = {condition:` id= ${row.id} `,tableName:'brand'};
                    dispatch(callDeleteDataFunction(payload)).then(() => {
                        dispatch(actionToGetBrandsApiCall())
                    })
                }
            });
    }

    return (
        <div className="col-md-12 text-center fw-bold white-background">
            <GetDataTable
                columns={columns}
                data={listOfCategories}
                fixedHeader={true}
                fixedHeaderScrollHeight={"100px"}
            />

        </div>


    );
}
