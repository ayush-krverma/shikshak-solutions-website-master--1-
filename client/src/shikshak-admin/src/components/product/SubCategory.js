import React from 'react'
import GetSubCategories from "./GetSubCategories";
import AddSubCategories from "./AddSubCategories";
import EditSubCategory from "./EditSubCategory";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffectOnce} from "../../hooks/useEffectOnce";
import {actionToGetSubCategoriesOfIdApiCall, actionToSetUpdateFromData} from "../../store/action";

const SubCategory = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffectOnce(()=>{
        if(id){
            if(!isNaN(id) && id){
                dispatch(actionToGetSubCategoriesOfIdApiCall({id:id})).then(data=>{
                    if(data.length>0)
                        dispatch(actionToSetUpdateFromData(data[0]));
                    else{
                        navigate('/shikshak-admin/404')
                    }
                });
            }else{
                navigate('/shikshak-admin/404')
            }
        }
    })
    return (
        <div className={"row"}>
            <div className={"col-md-6"}>
                <GetSubCategories />
            </div> <div className={"col-md-6"}>
            {id ?
                <EditSubCategory /> :
            <AddSubCategories />}
        </div>
        </div>
    )
}

export default SubCategory
