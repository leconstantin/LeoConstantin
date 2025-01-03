"use client";
import { useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";

export default function LikeProject() {
  const [like, setLike] = useState(false);
  return (
    <div className="items-end pr-4">
      <AiTwotoneLike
        className={`size-6 cursor-pointer hover:text-teal-300 ${
          like && "text-teal-400"
        }`}
        onClick={() => setLike(!like)}
      />
    </div>
  );
}
