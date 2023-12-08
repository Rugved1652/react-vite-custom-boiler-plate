import React from 'react';

interface IconProps {
    width?: number;
    height?: number;
    color?: string;
}

const ExitIcon: React.FC<IconProps> = ({ width = 8, height = 14 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 8 14" fill="none">
            <path d="M7 13L1 7L7 1" stroke="#1F3161" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export default ExitIcon;