'use client'
import Image from "next/image"
import HeaderIcon from "@/assets/HeaderIcon.png"
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid"
import Avatar from "react-avatar"
import { useBoardStore } from "@/store/BoardStore"
const Header = () => {
  const [searchString,setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ])
  return (
    <header>
        <div className="flex flex-col md:flex-row
        items-center p-5 bg-blue-500/10
        rounded-b-2xl">
            <div className="flex">
{/*Div to implement Gradiant color effect*/}
    <div className="absolute top-0 left-0 w-full h-96
    bg-gradient-to-br
    from-[#0C356A]
    to-[#FF8080]
    rounded-md
    filter
    blur-3xl
    opacity-50
    -z-50
    "/>           

  <Image
  src={HeaderIcon}
  alt="Kanban Logo"
  width={75}
  height={25}
  className="w-15 md:w-14 md:pb-0 object-contain"
  />
  <h2 className="font-bold font-serif pt-8 pl-3 text-xl lg:pt-4 lg:pl-1">Kanban Board.</h2>
  </div>

  <div className="flex items-center space-x-5 flex-1
  justify-end w-full">
    {/*Search Box*/}
    <form className="flex items-center space-x-5
    bg-white rounded-md p-2 shadow-md flex-1
    md:flex-initial">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"/>
        <input type="text"
         placeholder="Search.."
         value={searchString}
         onChange={(e) => setSearchString(e.target.value)}
       className="flex-1 outline-none p-2"/>
        <button type="submit" 
        hidden>Search</button>
    </form>
    {/*Avatar*/}
    <Avatar name="Aviral Singh" size="50" round color="#87C4FF"/>
  </div>
  </div>
    </header>
  )
}

export default Header
