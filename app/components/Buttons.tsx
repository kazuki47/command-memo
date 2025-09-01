'use client';

import React from 'react';
import Image from 'next/image';

interface PunchButtonsProps {
    onAddPunch: (symbol: string) => void;
}

const Buttons = ({ onAddPunch }: PunchButtonsProps) => {
    return (
        <div className="flex flex-col items-center space-y-4">
            {/* 上段：P（パンチ）小中大 */}
            <div className="flex space-x-4">
                <button 
                    onClick={() => onAddPunch('小P')}
                    className="hover:scale-110 transition-transform duration-200"
                    title="小パンチ"
                >
                    <Image
                        src="/小P-clear.png"
                        alt="小パンチ"
                        width={60}
                        height={60}
                        className="drop-shadow-lg"
                    />
                </button>
                <button 
                    onClick={() => onAddPunch('中P')}
                    className="hover:scale-110 transition-transform duration-200"
                    title="中パンチ"
                >
                    <Image
                        src="/中P-clear.png"
                        alt="中パンチ"
                        width={60}
                        height={60}
                        className="drop-shadow-lg"
                    />
                </button>
                <button 
                    onClick={() => onAddPunch('大P')}
                    className="hover:scale-110 transition-transform duration-200"
                    title="大パンチ"
                >
                    <Image
                        src="/大P-clear.png"
                        alt="大パンチ"
                        width={60}
                        height={60}
                        className="drop-shadow-lg"
                    />
                </button>
            </div>
            
            {/* 下段：K（キック）小中大 */}
            <div className="flex space-x-4">
                <button 
                    onClick={() => onAddPunch('小K')}
                    className="hover:scale-110 transition-transform duration-200"
                    title="小キック"
                >
                    <Image
                        src="/小K-clear.png"
                        alt="小キック"
                        width={60}
                        height={60}
                        className="drop-shadow-lg"
                    />
                </button>
                <button 
                    onClick={() => onAddPunch('中K')}
                    className="hover:scale-110 transition-transform duration-200"
                    title="中キック"
                >
                    <Image
                        src="/中K-clear.png"
                        alt="中キック"
                        width={60}
                        height={60}
                        className="drop-shadow-lg"
                    />
                </button>
                <button 
                    onClick={() => onAddPunch('大K')}
                    className="hover:scale-110 transition-transform duration-200"
                    title="大キック"
                >
                    <Image
                        src="/大K-clear.png"
                        alt="大キック"
                        width={60}
                        height={60}
                        className="drop-shadow-lg"
                    />
                </button>
            </div>
            <div className="flex space-x-4">
                <button 
                    onClick={() => onAddPunch('投げ')}
                    className="hover:scale-110 transition-transform duration-200"
                    title="投げ"
                >
                    <Image
                        src="/投げ-clear.png"
                        alt="投げ"
                        width={60}
                        height={60}
                        className="drop-shadow-lg"
                    />
                </button>
                <button 
                    onClick={() => onAddPunch('パリィ')}
                    className="hover:scale-110 transition-transform duration-200"
                    title="パリィ"
                >
                    <Image
                        src="/パリィ-clear.png"
                        alt="パリィ"
                        width={60}
                        height={60}
                        className="drop-shadow-lg"
                    />
                </button>
                <button 
                    onClick={() => onAddPunch('インパクト')}
                    className="hover:scale-110 transition-transform duration-200"
                    title="インパクト"
                >
                    <Image
                        src="/インパクト-clear.png"
                        alt="インパクト"
                        width={60}
                        height={60}
                        className="drop-shadow-lg"
                    />
                </button>
            </div>
        </div>
    );
};

export default Buttons;
