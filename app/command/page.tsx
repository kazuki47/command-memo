'use client';

import { useState, useRef, useEffect } from 'react';
import Direction from '../components/Direction';
import Buttons from '../components/Buttons';
import Others from '../components/Others';

export default function CommandPage() {
    const [text, setText] = useState<string>("");
    const [copyStatus, setCopyStatus] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // textareaの高さを自動調整する関数
    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    // textが変更されるたびに高さを調整
    useEffect(() => {
        adjustTextareaHeight();
    }, [text]);

    const handleAddCommand = (symbol: string) => {
        setText(text + symbol);
    };

    const handleCopy = async() => {
        try {
            await navigator.clipboard.writeText(text);
            setCopyStatus("コピーしました");
            setTimeout(() => setCopyStatus(''), 2000);
        } catch (err) {
            setCopyStatus("コピーに失敗しました");
            setTimeout(() => setCopyStatus(''), 2000);
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center">
                <Direction onDirectionClick={handleAddCommand} />
                <Others onAddText={handleAddCommand} />
                <Buttons onAddPunch={handleAddCommand} />
            </div>
            <div className="flex justify-center items-center">
                <textarea 
                    ref={textareaRef}
                    className="w-200 min-h-7 pl-3 pr-3 rounded border border-gray-400 resize-none overflow-hidden" 
                    value={text} 
                    onChange={(e) => {
                        setText(e.target.value);
                        adjustTextareaHeight();
                    }}
                    rows={1}
                />
                <button onClick={handleCopy} className="ml-2 px-4 h-7 rounded border border-gray-400">
                    Copy
                </button>
            </div>
            {copyStatus && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
                    <p className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
                        {copyStatus}
                    </p>
                </div>
            )}
        </div>
        
    );
}