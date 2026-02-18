"use client"

import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";

import { useTheme } from "next-themes";

export default function ThemeChanger() {
    

    const { theme , setTheme } = useTheme();

    const changeTheme = async() => {
        await setTheme(theme == "dark" ? "light" : "dark")
        // window.location.reload()
    }

    return (
        <div onClick={() => {
            changeTheme()
        }} className="flex fixed bottom-5 right-5 align-middle justify-center border-black border-2 rounded-[14px] bg-transparent w-10 h-10 cursor-pointer z-10">
            {(theme == "dark" ? true : false) ? <MdOutlineWbSunny className="w-5 text-black" /> : <MdOutlineNightlight className="w-5 text-white" />}
        </div>
    )
    
}