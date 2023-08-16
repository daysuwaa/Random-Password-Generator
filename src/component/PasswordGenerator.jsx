import React, { useState } from 'react';
import {AiOutlineCopy} from 'react-icons/ai';


const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+{}|:<>?-=[]\\;\',./';

    let allowedChars = lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSpecialChars) allowedChars += specialChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      newPassword += allowedChars.charAt(randomIndex);
    }
    setPassword(newPassword);
  };
  const copyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  
  return (
    <div className="pt-[6rem]">
      <div className="bg-blue-950 justify-center items-center mx-auto h-[30rem] p-8 text-white max-w-full">
        <h2 className="font-bold text-center text-2xl py-7">Instantly Generates random passwords</h2>
        <div className="">
          <p className="bg-gray-100 h-12 pt-3 text-center sm:w-[27rem] relative mx-auto w-[20rem] text-black font-bold">
            {password}
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl">
              <AiOutlineCopy onClick={copyToClipboard} className="cursor-pointer text-black" />
            </span>
          </p>
          <div className="flex justify-center mt-4">
          <button onClick={generatePassword} className="bg-white text-blue-700 h-14 w-[10rem] font-semibold">
           Generate Password
          </button>
        </div>

        </div>

        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 font-light text-md lg:ml-[18rem] pt-4 md:ml-[7rem]">
  <div>
    <label className=''>Password Length:</label>
    <input
      type="number"
      value={length}
      onChange={(e) => setLength(parseInt(e.target.value))}
      className='w-12 text-black'
    />
  </div>
  <div>
    <label>Include Uppercase:</label>
    <input
      type="checkbox"
      checked={includeUppercase}
      onChange={() => setIncludeUppercase(!includeUppercase)}
    />
  </div>
  <div>
    <label>Include Numbers:</label>
    <input
      type="checkbox"
      checked={includeNumbers}
      onChange={() => setIncludeNumbers(!includeNumbers)}
    />
  </div>
  <div>
    <label>Include Special Characters:</label>
    <input
      type="checkbox"
      checked={includeSpecialChars}
      onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
    />
  </div>
</div>
</div>
</div>
  );
};

export default PasswordGenerator;






   
