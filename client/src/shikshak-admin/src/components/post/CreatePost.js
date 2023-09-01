import React from "react";

import {useDispatch} from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {actionToCreatePost} from "../../store/action";

function CreatePost() {
    const dispatch = useDispatch();
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a Title!"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required(),
    });

    const onSubmit = (data) => {
        console.log(data,'data');
        dispatch(actionToCreatePost(data));
    };
    return (
        <div className="row">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form>
                    <div className="row text-center mt-5 fw-bold">
                        <div className={"col-md-3"}>
                            <label className={"form-label"}>Title: </label>
                        </div>
                        <div className={"col-md-9"}>
                        <Field
                            className={"form-control"}
                            autoComplete="off"
                            id="inputCreatePost"
                            name="title"
                            placeholder="(Ex. Title...)"
                        />
                            <ErrorMessage name="title" component="span" className={"form-text"}/>
                        </div>
                    </div>


                    <div className="row text-center mt-3 fw-bold">
                        <div className={"col-md-3"}>
                            <label className={"form-label"}>Post: </label>
                        </div>
                        <div className={"col-md-9"}>
                            <Field
                                className={"form-control"}
                                autoComplete="off"
                                id="inputCreatePost"
                                name="postText"
                                placeholder="(Ex. Post...)"
                            />
                            <ErrorMessage name="postText" component="span" className={"form-text"}/>
                        </div>
                    </div>
                    <div className="row text-center mt-3 fw-bold">
                        <div className={"col-md-3"}>
                            <label className={"form-label"}>Username: </label>
                        </div>
                        <div className={"col-md-9"}>

                            <Field
                            autoComplete="off"
                            id="inputCreatePost"
                            name="username"
                            placeholder="(Ex. John123...)"
                            className={"form-control"}
                        />
                        <ErrorMessage name="username" component="span" className={"form-text"}/>
                        </div>
                    </div>
                    <div className="row text-center mt-5 fw-bold">
                        <div className={"col-md-12"}>
                            <button type="submit" className={"btn btn-primary"}> Create Post</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;
