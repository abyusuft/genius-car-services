import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price : {price}</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn-primary border-0 p-2 rounded'>Book {name}</button>
        </div>
    );
};

export default Service;