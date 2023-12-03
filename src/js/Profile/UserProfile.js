import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem, MDBInput
} from 'mdb-react-ui-kit';
import styled from "styled-components";
import {useAuth0} from "@auth0/auth0-react";
import axios from "axios";
import {DecryptPassword, EncryptPassword, ValidEmail, ValidPassword} from "../Utilities";

export const UserProfile = ({user,setUser}) => {


    const [isHoveredViewTrip, setIsHoveredViewTrip] = useState(false);
    const [isHoveredEditProfile, setIsHoveredEditProfile] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    let [newEmail, setNewEmail] = useState('');
    let [newPassword, setNewPassword] = useState('');
    let [newUsername, setNewUsername] = useState('');
    const [newFullname, setNewFullname] = useState('');


    let [validPass, setValidPass] = useState(false);
    let [validEmail, setValidEmail] = useState(false);


    const { isAuthenticated } = useAuth0();


    const HandleProfileSave = async () => {

        if(newEmail.length === 0){
            newEmail = user.email;
            validEmail = true;
        }
        if(newPassword.length === 0){
            newPassword = DecryptPassword(user.password);
            validPass = true;
        }
        if(newUsername.length === 0){
            newUsername = user.username;
        }

        if (validPass && validEmail) {

            const encryptedPass = await EncryptPassword(newPassword);
            setNewPassword(encryptedPass);
            console.log('Entered !!!')
            console.log(newPassword)
            console.log(newEmail)

            const data = {user, newEmail, encryptedPass, newUsername};

            try {
                await axios.post('http://localhost:4000/updateUserInfo', data);

                setUser((prevUser) => ({
                    ...prevUser,
                    email: newEmail,
                    password: newPassword,
                    username: newUsername
                }));

            } catch (error) {
                console.log(error);
            }
        }
        else{
            console.log('Not valid credentials')
        }




    }

    //Function to load selected image in choose file
    async function LoadImage(e) {
        const file = e.target.files[0];

        console.log(e.target.value)

        if (file) {
            const reader = new FileReader();

            reader.onloadend = async () => {
                setUser((prevUser) => ({
                    ...prevUser,
                    image: reader.result,
                }));


                const data = { user };

                await axios.post(
                    'http://localhost:4000/updateUserPic',
                    data
                );
            };

            reader.readAsDataURL(file);
        }
    }



    const choose_file_style = {
        width: '89px',
        margin: '10px auto',
        backgroundColor: '#106cfc',
        border: '1px solid #106cfc',
        borderRadius: '5px'
    }

    const view_trips_style = {
        borderRadius: '5px',
        backgroundColor: isHoveredViewTrip ? '#106cfc' : 'white',
        color: isHoveredViewTrip ? 'white' : '#106cfc',
        border: '1px solid #106cfc',
        padding: '5px 10px'
    }

    const edit_profile_style = {
        borderRadius: '5px',
        backgroundColor: isHoveredEditProfile ? 'white' : '#106cfc',
        color: isHoveredEditProfile ? '#106cfc' : 'white',
        border: '1px solid #106cfc',
        padding: '5px 10px'
    }






    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBCol style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src={user.image}
                                    alt="Profile Pic"
                                    className="rounded-circle"
                                    style={{ width: '150px', border: '2px solid black' }}
                                    fluid />

                                <Form.Group style={choose_file_style} controlId="formFileSm" className="mb-3">
                                    <Form.Control type="file" size="sm" onChange={e => {LoadImage(e)}}/>
                                </Form.Group>

                                <p className="text-muted mb-1">{user.username}</p>

                                <div className="d-flex justify-content-center mb-2">
                                    <input type={"button"} style={view_trips_style} value={'View Trips'} onMouseEnter={() => setIsHoveredViewTrip(true)} onMouseLeave={() => setIsHoveredViewTrip(false)}/>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        {isEditing && !isAuthenticated? <MDBInput style={{border: '1px solid #106cfc'}} id='typeText' type='text' placeholder={user.username} /> : <MDBCardText className="text-muted">{user.username}</MDBCardText>}
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        {isEditing && !isAuthenticated? <MDBInput style={{border: ValidEmail(newEmail)? '1px solid #106cfc' : '1px solid red'}} id='typeEmail' type='email' placeholder={user.email} onChange={e => {
                                            setNewEmail(e.target.value)
                                            setValidEmail(ValidEmail(e.target.value))
                                        }}/> : <MDBCardText className="text-muted">{user.email}</MDBCardText>}

                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Username</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        {isEditing && !isAuthenticated? <MDBInput style={{border: '1px solid #106cfc'}} id='typeText' type='text' placeholder={user.username} onChange={e => setNewUsername(e.target.value)}/> : <MDBCardText className="text-muted">{user.username}</MDBCardText>}

                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Password</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        {isEditing && !isAuthenticated? <MDBInput style={{border: ValidPassword(newPassword)? '1px solid #106cfc' : '1px solid red'}} id='typePassword' type='password' onChange={e => {
                                            setNewPassword(e.target.value)
                                            setValidPass(ValidPassword(e.target.value));
                                        }} /> : <MDBCardText className="text-muted">Password here</MDBCardText>}
                                    </MDBCol>

                                </MDBRow>
                                <hr />
                                <MDBRow>

                                    {(!isAuthenticated && isEditing) ? (
                                        <input
                                            type={"button"}
                                            style={edit_profile_style}
                                            value={'Save'}
                                            onClick={() => {
                                                setIsEditing(false);
                                                HandleProfileSave();
                                            }}
                                            onMouseEnter={() => setIsHoveredEditProfile(true)}
                                            onMouseLeave={() => setIsHoveredEditProfile(false)}
                                        />
                                    ) : (
                                        (!isAuthenticated &&
                                            <input
                                                type={"button"}
                                                style={edit_profile_style}
                                                value={'Edit Profile Info'}
                                                onClick={() => setIsEditing(true)}
                                                onMouseEnter={() => setIsHoveredEditProfile(true)}
                                                onMouseLeave={() => setIsHoveredEditProfile(false)}
                                            />
                                        )
                                    )}


                                </MDBRow>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBCol>
            </MDBContainer>
        </section>
    );
}