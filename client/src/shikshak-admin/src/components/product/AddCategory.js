import React,{useState} from 'react'
import {
    CModalHeader,
    CModalTitle,
    CModalBody,
    CInputGroup,
    CInputGroupText,
    CFormInput,
    CRow,
    CCol, CButton, CForm
} from '@coreui/react'
import {actionToCreateCategories} from "../../store/action";
import {useDispatch} from "react-redux";
 const AddCategory = ()=>{
     const [name, setName] = useState('');
     const [slug, setSlug] = useState('');
     const dispatch =useDispatch();
     const handleSubmit = async event => {
         event.preventDefault();
         let data = { name: name, slug: slug };
         dispatch(actionToCreateCategories(data));
     }
    return (
        <>
            <CModalHeader>
                <CModalTitle>Add Category</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CForm onSubmit={handleSubmit}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                            Name
                        </CInputGroupText>
                        <CFormInput  value={name} required
                                    onChange={(e) => setName(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                        <CInputGroupText>
                            Slug
                        </CInputGroupText>
                        <CFormInput
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                        />
                    </CInputGroup>
                    <CRow>
                        <CCol xs={6}>
                            <CButton type={"submit"} color="primary" className="px-4">
                                Add
                            </CButton>
                        </CCol>
                    </CRow>
                </CForm>
            </CModalBody>
        </>

    )
}
export default AddCategory;