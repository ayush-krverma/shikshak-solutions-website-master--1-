import React from 'react'
import GetSubChildCategories from "./GetSubChildCategories";
import AddSubChildCategories from "./AddSubChildCategory";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffectOnce} from "../../hooks/useEffectOnce";
import {actionToGetSubChildCategoriesOfIdApiCall, actionToSetUpdateFromData} from "../../store/action";
import EditSubChildCategory from "./EditSubChildCategory";

const SubChildCategory = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffectOnce(()=>{
        if(id){
            if(isNaN(id)){
                navigate('/shikshak-admin/404')
            }else{
                dispatch(actionToGetSubChildCategoriesOfIdApiCall({id:id})).then(data=>{
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
                <GetSubChildCategories />
            </div>
            <div className={"col-md-6"}>
                {id ?
                    <EditSubChildCategory /> :
                    <AddSubChildCategories />}

            </div>
        </div>
    )
}

export default SubChildCategory
