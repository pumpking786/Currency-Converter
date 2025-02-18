// import { useCallback, useEffect, useRef, useState } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");
//   const [copied, setCopied] = useState(false);
//   const passwordRef = useRef(null);

//   const passwordgenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed, setPassword]);

//   const copyPasswordtoClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     // passwordRef.current?.setSelectionRange(0, 5);
//     window.navigator.clipboard.writeText(password).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   }, [password]);

//   useEffect(() => {
//     passwordgenerator();
//   }, [length, numberAllowed, charAllowed, passwordgenerator]);
//   return (
//     <>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
//         <h1 className="text-white text-center mb-2 text-lg">
//           Password generator
//         </h1>
//         {copied && (
//           <div className="text-green-500 text-center mb-2 font-bold">
//             Copied!
//           </div>
//         )}
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none w-full text-black bg-white py-1 px-3"
//             placeholder="Password"
//             readOnly
//             ref={passwordRef}
//           />
//           <button
//             onClick={copyPasswordtoClipboard}
//             className="outline-none bg-blue-500 px-2 py-2 text-white cursor-pointer"
//           >
//             copy
//           </button>
//         </div>
//         <div className="flex text-sm gap-x-2">
//           <div className="flex items-center gap-x-1">
//             <input
//               type="range"
//               min={8}
//               max={16}
//               value={length}
//               onChange={(e) => {
//                 setLength(e.target.value);
//               }}
//               className="cursor-pointer"
//             />
//             <label>Length: {length}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={numberAllowed}
//               id="numberInput"
//               onChange={() => {
//                 setNumberAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="numberInput">Numbers</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="characterInput"
//               onChange={() => {
//                 setCharAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="characterInput">Character</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
