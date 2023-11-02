import { ArrowCircleRightOutlined } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsList = ({ item }) => {

    const navTo = useNavigate()
    return (
        <div className='projectList' onClick={() => navTo(`/projects/${item.id}`)}>
            <h1>{item.name}</h1>
            <ArrowCircleRightOutlined/>
        </div>
    );
}

export default ProjectsList;
