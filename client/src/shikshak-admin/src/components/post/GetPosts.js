import React from "react";
import {useDispatch} from "react-redux";
import {  useState } from "react";
import UseGetDataTable from "../../hooks/GetDataTable";

import {actionToGetPostApiCall} from "../../store/action";
import {useEffectOnce} from "../../hooks/useEffectOnce";
function GetPosts() {
    const dispatch = useDispatch();
    const [listOfPosts, setListOfPosts] = useState([]);
    const [searchedListOfPosts, setSearchedListOfPosts] = useState([]);
    const [title, setTitle] = useState("");
    const columns = [
        {
            className: '',
            name: (
                <div>
                    Title
                    <div className={"individual-column-search"}>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => onChange(e)}
                        />
                    </div>

                </div>
            ),
            selector: 'title',
            sortable: true,
            sortField: 'title',
            export:false
           /* cellExport: d => (
                {
                    Title: d.post,
                    Runtime: d.runtime,
                    Actors: d.post,
                }
            ),*/
        },
        {
            name: 'post',
            selector: 'postText',
            sortable: true,
            sortField: 'postText',
        }, {
            name: 'user',
            selector:'username',
            sortable: true,
            sortField: 'username',
        },
    ];
    const onChange = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setTitle(e.target.value);
        var searchData = listOfPosts.filter((item) => {
            if (
                item.title
                    .toString()
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            ) {
                return item;
            }
        });
        setSearchedListOfPosts(searchData);
    };

    useEffectOnce(() => {
        dispatch(actionToGetPostApiCall()).then((response) => {
            setListOfPosts(response);
            setSearchedListOfPosts(response);
        });
    }, []);

    return (
        <div className="col-md-12 text-center fw-bold">
            <UseGetDataTable
                title={"Post"}
                columns={columns}
                data={searchedListOfPosts}
                filterPlaceholder={"Search Post"}
                pagination
                fixedHeader={true}
                fixedHeaderScrollHeight={"100px"}
            />
            
        </div>
        
        
    );
}

export default GetPosts;
