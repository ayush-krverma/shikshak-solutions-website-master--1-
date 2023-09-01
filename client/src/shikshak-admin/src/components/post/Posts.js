import React from 'react'
import CreatePost from "./CreatePost";
import GetPosts from "./GetPosts";

const Posts = () => {

    return (
        <div className={"row"}>
            <div className={"col-md-8"}>
                <GetPosts />
            </div>
            <div className={"col-md-4"}>
                <CreatePost />
            </div>
        </div>
    )
}

export default Posts
