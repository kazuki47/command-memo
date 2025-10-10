'use client';

import React from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';

interface OthersProps {
    onAddText: (symbol: string) => void;
}

const Others = ({ onAddText }: OthersProps) => {
  return (
    <div>
        <Stack spacing={2}>
            <button 
                className="hover:scale-110 transition-transform duration-200"
                onClick={() => onAddText('+')}
            >
                <Image src="/plus-clear.png" alt="Description" width={60} height={60} />
            </button>
            <button 
                className="hover:scale-110 transition-transform duration-200"
                onClick={() => onAddText('→')}
            >
                <Image src="/右矢印-clear.png" alt="Description" width={60} height={60} />
            </button>
        </Stack>
    </div>
  );
};

export default Others;
