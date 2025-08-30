import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Protected = (props) => {

    const navigate = useNavigate();
    // console.log(props)
    let Component = props.component;
    useEffect(() => {
        axios.get('http://localhost:5000/api/loged-in-author',
            {
                headers: {
                    "Authorization": `Bearer ` + localStorage.getItem('token_data')
                }
            }).then((res) => {
                console.log(res.data.authorData);

            })
        let res = localStorage.getItem('token_data');
        if (res == null) {
            //   navigate('/')  
        }
    })
    return (
        <div>
            <Component />
        </div>
    )
}
