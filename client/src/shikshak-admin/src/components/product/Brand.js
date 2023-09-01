import React from 'react'
import GetBrands from "./GetBrands";
import AddBrands from "./AddBrands";
import {useDispatch} from "react-redux";
import {useEffectOnce} from "../../hooks/useEffectOnce";
import {
    actionToGetBrandsOfIdApiCall,
    actionToSetUpdateFromData
} from "../../store/action";
import {useNavigate, useParams} from "react-router-dom";
import EditBrand from "./EditBrand";

const Brand = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffectOnce(()=>{
        if(id){
            if(isNaN(id)){
                navigate('/shikshak-admin/404')
            }else{
                dispatch(actionToGetBrandsOfIdApiCall({id:id})).then(data=>{
                    if(data.length>0)
                        dispatch(actionToSetUpdateFromData(data[0]));
                    else{
                        navigate('/shikshak-admin/404')
                    }
                });
            }
        }
    })
    return (
        <div className={"row"}>
            <div className={"col-md-6"}>
                <GetBrands />
            </div> <div className={"col-md-6"}>
            {id ?
                <EditBrand /> :
                <AddBrands />}
            </div>
        </div>
    )
}

export default Brand
