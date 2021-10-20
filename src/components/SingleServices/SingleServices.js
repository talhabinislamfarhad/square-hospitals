import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleServices = () => {

    const [singleService, setSingleService] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/talhabinislamfarhad/imgs/main/Services.json')
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [])
    const { id, title } = useParams();
    console.log(id);
    const allSingle = singleService.filter(single => single.id === id);
    console.log(allSingle);
    return (
        <div>
            {allSingle[1]?.title}
            <h1>{id}</h1>
            <h1>{title}</h1>
        </div>
    );
};

export default SingleServices;