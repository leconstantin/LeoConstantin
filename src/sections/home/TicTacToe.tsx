"use client";
import React, { useEffect } from "react";
import { useState } from "react";
// 0 1 2
// 3 4 5
// 6 7 8
function Square({ value, onClick }: { value: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`ring-1 ring-zinc-300 bg-zinc-200 rounded-md p-10 h-20 w-20 text-3xl  font-semibold flex items-center justify-center dark:bg-zinc-900 dark:ring-zinc-600 ${
        value == "X" ? "text-teal-400" : "text-black dark:text-zinc-200"
      }`}
    >
      {value}
    </button>
  );
}
export default function TicTacToe() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState<boolean>(true);
  const [status, setStatus] = useState("");
  const [colrWinner, setcolrWinner] = useState(false);

  function getWinner(squares: string[]) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      } else {
      }
    }

    return null;
  }

  function handleClick(getCurrentSquare: number) {
    const cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;

    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }
  function handleRestart() {
    setSquares(Array(9).fill(""));
    setStatus("");
    setIsXTurn(true);
    setcolrWinner(false);
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw ! please restart");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}`);
      setcolrWinner(true);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);
  //   console.log(squares);
  return (
    <div className="flex flex-col gap-7 items-center justify-center">
      <div>
        <p className="text-xl font-roboto text-teal-500 font-medium tracking-tight">
          Interactive Tic-Tac-Toe
        </p>
      </div>
      <div className="w-96">
        <h1
          className={`ring-1 ring-zinc-200 text-center py-1  font-roboto font-medium  rounded-sm shadow-md ${
            colrWinner ? "text-teal-400" : "text-zinc-400"
          }`}
        >
          {status}
        </h1>
      </div>
      <div
        className={`flex flex-col gap-3 items-center  p-6 rounded-lg ring-teal-400 dark:ring-teal-900 ${
          colrWinner ? "ring-1" : ""
        }`}
      >
        <div className="row flex gap-3">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row flex gap-3">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row flex gap-3">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <div>
        <button
          onClick={handleRestart}
          className="py-2 px-4 rounded-lg bg-teal-200 hover:bg-red-600 text-white font-bold"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
