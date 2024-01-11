import { useState } from "react";

const btnColors = [
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "purple",
  "pink",
  "olive",
];

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          {btnColors.map((btnColor) => (
            <button
              key={btnColor}
              onClick={() => setColor(btnColor)}
              className='outline-none px-4 py-1 rounded-full  shadow-lg'
              style={{ backgroundColor: btnColor }}
            >
              {btnColor}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
