import React, { FC } from 'react';

interface CardProps {
    title: string;
    author: string;
    duration: string;
    description: string;
}

const Card: FC<CardProps> = ({ title, author , duration, description}) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <div>{description}</div>
        </>
    );
};

export default Card;