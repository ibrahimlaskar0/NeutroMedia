"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "middle" | "back";
  id: number;
  author: string;
}

export function TestimonialCard({ handleShuffle, testimonial, position, id, author }: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={id === 1 ? "/src/assets/pranay.jpeg" : id === 2 ? "/src/assets/yash.jpeg" : id === 3 ? "/src/assets/air asia mh.jpeg" : `https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-slate-400">"{testimonial}"</span>
      <span className="text-center text-sm font-medium text-indigo-400">{author}</span>
    </motion.div>
  );
}

const testimonials = [
  {
    id: 1,
    testimonial: "Working with this guys transformed my digital presence completely. Their attention to detail and creative vision exceeded our expectations.",
    author: "Pranay Prajapati - Instructor @ 100x Engineer"
  },
  {
    id: 2,
    testimonial: "The team delivered exceptional results on time .Their expertise in short form content is unmatched.",
    author: "Yashwardhan Burad - CEO @ Acciojob"
  },
  {
    id: 3,
    testimonial: "Exceptional editing quality, fast delivery, and a creative touch that elevates every project.",
    author: "Andrea Chuang - Marketing Head @ AirAsia MOVE"
  }
];

export function ShuffleCards() {
  const [positions, setPositions] = React.useState<("front" | "middle" | "back")[]>(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    const lastItem = newPositions.pop();
    if (lastItem) {
      newPositions.unshift(lastItem);
    }
    setPositions(newPositions);
  };

  return (
    <div className="grid place-content-center overflow-hidden bg-black px-8 py-24 text-slate-50 min-h-screen h-full w-full">
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffle}
            position={positions[index]}
          />
        ))}
      </div>
    </div>
  );
}