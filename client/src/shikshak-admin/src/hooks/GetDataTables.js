import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const GetDataTables=(tableData)=> {
    const columns = tableData?.columns;
    const data = tableData?.data;
    const title = tableData?.title;
    const defaultSortField = tableData?.defaultSortField ? tableData?.defaultSortField : 'id';
    const defaultSortAsc = tableData?.defaultSortAsc ? tableData?.defaultSortAsc : false ;

    return (
        <div className="main">
            <DataTableExtensions columns={columns}
                                 data={data} >
                <div className="text-center col-md-12 fw-bold">

                    <DataTable
                        className={"text-center"}
                        title={title}
                        fixedHeaderScrollHeight={"100px"}
                        defaultSortField={defaultSortField}
                        defaultSortAsc={defaultSortAsc}
                        pagination
                    />

                </div>
            </DataTableExtensions>
        </div>
    );
}
export default GetDataTables;
