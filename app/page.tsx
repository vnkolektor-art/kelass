"use client";
import { useState } from "react";

export default function Home() {
  const [yesSize, setYesSize] = useState({
    width: 120,
    height: 50,
    fontSize: 18,
  });

  const noMessages = [
    "Maafin aku ya",
    "Engga",
    "Yakin?",
    "Benar-benar yakin?",
    "Are you sure?",
    "Please pikirkan lagi",
    "Coba dipikirkan baik-baik",
    "Kalau kamu bilang tidak, aku sedih",
    "Aku benar-benar akan kecewa",
  ];

  const [msgIndex, setMsgIndex] = useState(0);
  const [isYesClicked, setIsYesClicked] = useState(false);

  const handleNoClick = () => {
    setMsgIndex((prev) => (prev + 1) % noMessages.length);

    setYesSize((prev) => ({
      width: prev.width + 25,
      height: prev.height + 12,
      fontSize: prev.fontSize + 3,
    }));
  };

  const handleYesClick = () => {
    setIsYesClicked(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200 animate-pulse">
      <div className="bg-white/70 backdrop-blur-md px-10 py-8 rounded-2xl shadow-xl flex flex-col items-center gap-6">
        {!isYesClicked ? (
          <p className="text-2xl font-semibold text-center text-gray-800">
            {noMessages[msgIndex]}
          </p>
        ) : (
          <p className="text-3xl font-bold text-center text-pink-600">
            Terima kasih
            <br />
            I love you ❤️
          </p>
        )}

        {!isYesClicked && (
          <div className="flex gap-6 mt-2">
            <button
              onClick={handleYesClick}
              style={{
                width: yesSize.width,
                height: yesSize.height,
                fontSize: yesSize.fontSize,
              }}
              className="bg-green-500 text-white rounded-xl transition-all duration-200 hover:scale-105"
            >
              Yes
            </button>

            <button
              onClick={handleNoClick}
              className="bg-red-500 text-white px-6 py-3 rounded-xl text-lg transition-all duration-200 hover:scale-105"
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
}




