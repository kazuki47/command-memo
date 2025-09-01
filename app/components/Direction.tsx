'use client';

import React from 'react';
import Image from 'next/image';

interface DirectionProps {
  onDirectionClick: (direction: string) => void;
}

const Direction = ({ onDirectionClick }: DirectionProps) => {
  // 八方向の角度（0度は右、時計回り）と対応する矢印記号
  const directions = [
    { name: '右', angle: 0, symbol: '6' },     // 右
    { name: '右下', angle: 45, symbol: '3' },   // 右下
    { name: '下', angle: 90, symbol: '2' },     // 下
    { name: '左下', angle: 135, symbol: '1' },  // 左下
    { name: '左', angle: 180, symbol: '4' },    // 左
    { name: '左上', angle: 225, symbol: '7' },  // 左上
    { name: '上', angle: 270, symbol: '8' },    // 上
    { name: '右上', angle: 315, symbol: '9' },  // 右上
  ];

  // 円の半径
  const radius = 80;
  
  return (
    <div className="flex">
      <div className="relative w-80 h-80">
        
        {/* 八方向の矢印 */}
        {directions.map((direction, index) => {
          // 円周上の位置を計算（中心からの相対位置）
          const radian = (direction.angle * Math.PI) / 180;
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;
          
          return (
            <div
              key={direction.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-200"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
              title={direction.name}
              onClick={() => onDirectionClick(direction.symbol)}
            >
              <div
                className="w-12 h-12 flex items-center justify-center"
                style={{
                  transform: `rotate(${direction.angle}deg)`,
                }}
              >
                <Image
                  src="/矢印.png"
                  alt={`${direction.name}方向の矢印`}
                  width={48}
                  height={48}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Direction;
