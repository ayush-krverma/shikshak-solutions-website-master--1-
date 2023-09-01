import React from 'react'
import GetCategories from "./GetCategories";
import AddCategories from "./AddCategories";
import {useNavigate, useParams} from "react-router-dom";
import EditCategory from "./EditCategory";
import {useEffectOnce} from "../../hooks/useEffectOnce";
import {actionToGetCategoriesOfIdApiCall, actionToSetUpdateFromData} from "../../store/action";
import {useDispatch} from "react-redux";

const Categories = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffectOnce(()=>{
        if(id){
           if(isNaN(id)){
               navigate('/shikshak-admin/404')
           }else{
               dispatch(actionToGetCategoriesOfIdApiCall({id:id})).then(data=>{
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
                <GetCategories />
            </div> <div className={"col-md-6"}>
                {id ?
                    <EditCategory /> :
                    <AddCategories />}

            </div>
        </div>
    )
}

export default Categories
