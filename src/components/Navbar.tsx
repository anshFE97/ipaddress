import {MdArrowForwardIos} from 'react-icons/md'
import { useState } from 'react'

interface NavbarProps {
    setIpAddress: React.Dispatch<React.SetStateAction<string>>
}

const Navbar: React.FC<NavbarProps> = ({setIpAddress}) => {
    const [iValue, setIValue] = useState("")
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIValue(event.target.value);
      }
      const handleSubmit = () => {
        if(iValue === "") return
        setIpAddress(iValue)
      }
  return (
    <div className='flex flex-col mt-12 md:mt-0 md:justify-center gap-6 h-full items-center z-40'>
        <div className='text-xl md:text-4xl font-[700] text-white'>IP Address Tracker</div>
        <div className='flex justify-center items-center rounded-lg bg-black gap-2'>
            <input value={iValue} onChange={handleInputChange} type="text" placeholder="Search for an IP address" 
                className='w-[250px] md:w-[350px] h-[40px] md:h-[30px] placeholder:text-center rounded-l-lg  outline-none px-2'
            />
            <MdArrowForwardIos onClick={handleSubmit} className='cursor-pointer text-white rounded-r-lg mx-2 mr-4' size={14} />
        </div>
    </div>
  )
}

export default Navbar