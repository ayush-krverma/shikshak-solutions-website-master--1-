import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import GetDataTable from "../../hooks/GetDataTable";
import swal from "sweetalert";
import {
    actionToDeleteAwsObject,
    actionToGetProductImagesApiCall,
    actionToUploadDataToS3BucketStore,
    callDeleteDataFunction,
    callInsertDataFunction
} from "../../store/action";
import {Link, useParams,useNavigate} from "react-router-dom";
import {useEffectOnce} from "../../hooks/useEffectOnce";

export default function GetProductImages() {
    const {product_id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const listOfProductImage = useSelector((state) => { return state.product?.productImageData})
    const [loading,setLoading] = useState(false);
    const [files,setFiles] = useState({});
    const columns = [
        {
            className: '',
            name: 'Id',
            selector: 'id',
            sortable: true,
            sortField: 'id',
        },
        {
            name: 'Image',
            selector: 'photo',
            sortable: true,
            cell: d => <img src={d.imgUrl} alt="ImageTitle" width="50"/>,
        },
        {
            name: 'Action',
            selector: row => row.action,
            cell: d =><>
                <button type="button" onClick={()=>deletePhotos(d)}> <i className="fas fa-trash" /></button></>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];
    const deletePhotos = (row) => {
        swal({
            title: "Are you sure?",
            text: "You want to delete this Product Image",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (success) => {
                if (success) {
                    let payload  = {condition:` id= ${row.id} `,tableName:'product_photos'};
                    let path = row?.imgUrl;
                    if(path != null){
                        path= path.replace("https://shikshak-solutions.s3-eu-north-1.amazonaws.com/","");
                        path = path.replace("https://shikshak-solutions.s3.eu-north-1.amazonaws.com/","");
                        path= path.replace("https%3A//shikshak-solutions.s3-eu-north-1.amazonaws.com/","");
                        path =path.replace("https%3A//shikshak-solutions.s3.eu-north-1.amazonaws.com/","");
                        dispatch(actionToDeleteAwsObject({key:path}));
                    }
                    dispatch(callDeleteDataFunction(payload)).then(() => {
                        dispatch(actionToGetProductImagesApiCall({productId:row.productId}));
                    })
                }
            });
    }
    const fileSelectedHandler = (e) => {
        if(e.target.files.length > 0)
        setFiles( e.target.files[0]);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        swal({
            title: "Are you sure?",
            text: "You want to add Images",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (success) => {
                if (success) {
                    let filename = `products/ss-kit-${new Date().getTime()}.png`;
                    let imagePayload = {
                        blobData:files,
                        key:filename,
                        type:'img/png',
                    }
                    let image = await dispatch(actionToUploadDataToS3BucketStore(imagePayload));
                    const aliasArray = ['?','?'];
                    const columnArray = ['productId','imgUrl'];
                    const valuesArray = [product_id,image];
                    const insertData = {alias:aliasArray,column:columnArray,values:valuesArray,tableName:'product_photos'};
                    await dispatch(callInsertDataFunction(insertData)).then(()=>{
                        dispatch(actionToGetProductImagesApiCall({productId:product_id}))
                    });

                }
            });

    }
    useEffectOnce(()=>{
        if(product_id){
            if(isNaN(product_id)){
                navigate('/shikshak-admin/404')
            }else{
                dispatch(actionToGetProductImagesApiCall({productId:product_id}));
            }
        }
    })
    return (
        <>
            <div className="col-md-12 text-center fw-bold white-background">
                <Link to={'/shikshak-admin/product'}> Back </Link>
            </div>
            <div className="col-md-12 text-center fw-bold white-background">
                <div className="col-lg-4 col-md-4">
                    <div className="form-group">
                        <label className="form-label">Slider Image*</label>
                        <input className="form-control" type="file" multiple name="files" onChange={fileSelectedHandler} />
                    </div>
                </div>
                <div className="col-lg-2 col-md-2">
                    <div className="form-group">
                        <button className="save-btn hover-btn" type="submit" onClick={(e)=>handleSubmit(e)} disabled={loading}>
                            {loading && <i className="fa fa-refresh fa-spin" />}
                            {loading && <span>Upload</span>}
                            {!loading && <span>Upload</span>}
                        </button>
                       {/* <ToastContainer autoClose={1500} />*/}
                    </div>
                </div>
            </div>
            <div className="col-md-12 text-center fw-bold white-background">
                <GetDataTable
                    columns={columns}
                    data={listOfProductImage}
                    fixedHeader={true}
                    fixedHeaderScrollHeight={"100px"}
                />

            </div>
        </>
    );
}
