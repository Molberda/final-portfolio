import { ArrowCircleRightOutlined } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsListEsp = ({ item }) => {

    const navTo = useNavigate()
    return (
        <div className='projectList' onClick={() => navTo('/es')}>
            <h1>{item.nameEsp}</h1>
            <ArrowCircleRightOutlined/>
        </div>
    );
}

export default ProjectsListEsp;
