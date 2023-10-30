import { ArrowCircleRightOutlined } from '@mui/icons-material';
import React from 'react';

const ProjectsList = ({ item }) => {
    return (
        <div className='projectList'>
            <h1>{item.name}</h1>
            <ArrowCircleRightOutlined/>
        </div>
    );
}

export default ProjectsList;
