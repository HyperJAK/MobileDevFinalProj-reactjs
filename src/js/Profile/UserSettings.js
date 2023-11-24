import React, {useState} from 'react'
import style from './css/UserSettings.css'
import hotelimg from '../../assets/auth.png'

export const UserSettings = (user,setUser) => {
    const [img, setImg] = useState(hotelimg)

    return (
        <div className={style.main_container}>
            <div className={style.imgContainer}>
                <img src={img} alt='prfl photo' className={style.profile_img}/>
                <div><p style={{
                    color: 'blue',
                    marginTop: '-20px',
                    marginLeft: '80px',
                    fontSize: '1.2em',
                    cursor: 'pointer'
                }}
                        onClick={() => {
                            console.log('change photo')
                        }}>click to edit</p></div>
            </div>
            <table>
                <tr>
                    <td><p>Username: {user.username} <span style={{color: 'blue', fontSize: '1.2em', cursor: 'pointer'}}
                                                      onClick={() => {
                                                          console.log('change username')
                                                      }}
                    > edit</span></p>
                    </td>
                </tr>
                <tr>
                    <td><p>Email: {user.email} <span style={{color: 'blue', fontSize: '1.2em', cursor: 'pointer'}}
                                                onClick={() => {
                                                    console.log('change email')
                                                }}
                    > edit</span></p>
                    </td>
                </tr>
                <tr>
                    <td><p>Password: {user.password} <span style={{color: 'blue', fontSize: '1.2em', cursor: 'pointer'}}
                                                      onClick={() => {
                                                          console.log('change pass')
                                                      }}
                    > edit</span></p>
                    </td>
                </tr>
            </table>
        </div>
    )
};
