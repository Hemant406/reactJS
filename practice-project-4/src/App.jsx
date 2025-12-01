import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState(null)


  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "123456789"
    if(charAllowed) str += '`~!@#$%^&*(){}[]'

    for (let i = 0; i < length; i++) {

      let char = Math.floor(Math.random() * str.length + 1 )
      
      pass += str.charAt(char)
    }

    setPassword(pass)


  },[length,numAllowed,charAllowed,setPassword])

  const copyToClip = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    generatePassword()
  },[length,numAllowed,charAllowed,generatePassword])

  return (
    <div className="bg-zinc-800 h-screen w-full text-zinc-300">
      <div className="h-[40%] w-full flex justify-center items-center">
        <div className="bg-zinc-600 rounded-2xl h-full w-fit flex flex-col justify-center items-center mt-20 px-10">
          <h4 className="text-2xl font-semibold">Password Generator</h4>
          <div className="mt-5 flex items-center w-full">
            <input
              type="text"
              value={password}
              ref={passwordRef}
              readOnly
              placeholder="password"
              className="border w-full border-orange-400 outline-none py-2 px-6 placeholder:text-orange-500 rounded-tl-2xl rounded-bl-2xl"
            />
            <button onClick={copyToClip} className="border border-blue-600 font-medium bg-blue-500 cursor-pointer text-white py-2 px-6 rounded-tr-2xl rounded-br-2xl text-center">
              copy
            </button>
          </div>
          <div className="flex items-center justify-between gap-5 mt-5">
            <div className="flex items-center gap-2">
              <input type="range"
               onChange={(e) => {
                setLength(e.target.value)
               }}
               min={8}
               max={50}
               className="cursor-pointer"
                />
              <label>Limit({length})</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" onChange={() => {
                setNumAllowed(prev => !prev)
              }} className="cursor-pointer" />
              <label>Numbers</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox"
              onChange={() => {
                setCharAllowed(prev => !prev)
              }}
              className="cursor-pointer" />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
