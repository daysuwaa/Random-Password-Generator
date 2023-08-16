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
    <div>
    <div className="pt-[8rem]">
         
      <div className=" bg-purple-500 lex justify-between items-center max-w-[1000px] mx-auto h-[30rem]">
       
        <div>
          {/* <label>Include Uppercase:</label> */}
          {/* ... (other input fields) */}
        </div>
        <h2 className='font-bold text-center text-2xl pt-5'>Instantly Generates random passwords</h2>
        <div className='pl-[10rem]'>
        {/* <p className='bg-gray-100 h-12 pt-3 text-center w-[30rem]'>{password}< AiOutlineCopy onClick={copyToClipboard} className =''>Copy Password </AiOutlineCopy> </p>
        
          */}
          <p className="bg-gray-100 h-12 pt-3 text-center w-[30rem] relative">
            {password}
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <AiOutlineCopy onClick={copyToClipboard} className="cursor-pointer" />
            </span>
          </p>
          <button onClick={generatePassword} className='bg-purple-400 h-14 w-[10rem] '>Generate Password</button>


        </div>
      </div>
      <div className="md:w-1/2 p-4 flex justify-center items-center">
        {/* <img src={Password} alt='img' className='w-full' /> */}
      </div>
    </div>
    </div>

  );
};

export default PasswordGenerator;
