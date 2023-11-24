import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import axios from "axios";

export default function Trips({user,setCurrentScreen,currentScreen}) {
    const [showInputFields, setShowInputFields] = useState(false);


    const handleAddButtonClick = () => {
        setShowInputFields(true);
    };

    const handlesecond = () => {
    setShowInputFields(false);
    setFormData(() => ({
        name: '',
        email: '',
        title: '',
        department: '',
        status: '',
        position: '',
        picture: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
        canDelete: false
    }));}

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        department: '',
        status: '',
        position: '',
        picture: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
        canDelete: false
    });

    const handleSaveButtonClick = async () => {


    };








    const handleDeleteButtonClick = (id) => {

    };



    return (
        <>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Position</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

            <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleAddButtonClick}
            >
                Add
            </button>

            {showInputFields && (
                <div className="mt-3">
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Email"
                        name="email"
                        value={formData.Email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Title"
                        name="title"
                        value={formData.Title}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Department"
                        name="department"
                        value={formData.Department}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Status"
                        name="status"
                        value={formData.Status}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Position"
                        name="position"
                        value={formData.Position}
                        onChange={handleInputChange}
                    />
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                            handleSaveButtonClick();
                            handlesecond();
                        }}
                    >
                        Save
                    </button>
                </div>
            )}
            <br/><br/><br/><br/><br/>
            <button
                type="button"
                className="btn btn-primary mt-3"
                onClick=''
            >
                Log Out
            </button>
        </>
    );
}
