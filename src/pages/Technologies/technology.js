import React from 'react';
import Tech from './tech/tech';
import Tech1 from './tech1/tech1'


const technologies = () => {
    return (
        <div className="tech">
           <Tech1 />
           <Tech />
           
        </div>
    );
};

export default technologies;