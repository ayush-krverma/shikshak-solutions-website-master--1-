import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const GetDataTable=(tableData)=> {
    const columns = tableData?.columns;
    const data = tableData?.data;
    const title = tableData?.title;
    const defaultSortField = tableData?.defaultSortField ? tableData?.defaultSortField : 'id';
    const defaultSortAsc = tableData?.defaultSortAsc ? tableData?.defaultSortAsc : false ;

    return (
        <div className="main">
                <div className="text-center col-md-12 fw-bold">
                    <DataTableExtensions columns={columns}
                                         data={data} exportHeaders={true}>
                <DataTable
                className={"text-center"}
                    title={title}
                    // fixedHeader={true}
                    fixedHeaderScrollHeight={"100px"}
                    defaultSortField={defaultSortField}
                    defaultSortAsc={defaultSortAsc}
                    pagination
                   // paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                    //subHeader
                   // subHeaderComponent={subHeaderComponentMemo}
                    //selectableRows
                    persistTableHead
                />
                    </DataTableExtensions>
                </div>

        </div>
    );
}
export default GetDataTable;
