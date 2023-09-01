import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    actionToGetSubjectAllChapterDataById, actionToGetSubjectDataBySubjectId
} from "../../actions/CommonAction";
import {useParams} from "react-router";
import {SubjectAllChaptersDesktopComponent} from "../../components/StudentComponent/SubjectAllChaptersDesktopComponent";
import {SubjectAllChaptersMobileComponent} from "../../components/StudentComponent/SubjectAllChaptersMobileComponent";

export default function SubjectAllChaptersPage(){
    const dispatch = useDispatch();
    const {id} = useParams();
    const windowResizeCount = useSelector((state) => state.windowResizeCount);
    useEffect(() => {
        dispatch(actionToGetSubjectDataBySubjectId(id));
        dispatch(actionToGetSubjectAllChapterDataById(id));
    }, [id]);
    return (
        <>
            {(windowResizeCount >= 800) ?
                <SubjectAllChaptersDesktopComponent/>
                :
                <SubjectAllChaptersMobileComponent/>
            }
        </>
    )
}
