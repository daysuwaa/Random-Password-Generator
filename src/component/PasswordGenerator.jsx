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
    <div className="pt-[8rem]">
      <div className="bg-purple-400 justify-center items-center max-w-[1000px] mx-auto h-[30rem] p-8">
        <h2 className="font-bold text-center text-2xl py-7">Instantly Generates random passwords</h2>
        <div className="">
          <p className="bg-gray-100 h-12 pt-3 text-center w-[27rem] relative mx-auto">
            {password}
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl">
              <AiOutlineCopy onClick={copyToClipboard} className="cursor-pointer" />
            </span>
          </p>
          <div className='py-2 ml-[9rem] sm:ml-[13rem] mt-4 lg:ml-[25rem] md:ml-[22rem]' >
          <button onClick={generatePassword} className="bg-purple-500 h-14 w-[10rem] ">
            Generate Password
          </button> </div>
        </div>

        <div className="flex items-center justify-center space-x-4 py-6">
  <div>
    <label>Password Length:</label>
    <input
      type="number"
      value={length}
      onChange={(e) => setLength(parseInt(e.target.value))}
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






   
