// TOPページのヘッダー部分
import Link from "next/link"
import { TbGridDots } from "react-icons/tb"
import { ReactElement } from "react"          // これはなくてもいい なくても動く
import DarkModeSwitch from "./DarkModeSwitch" // ダークモード / ライトモード切り替えボタン

const HomeHeader = (): ReactElement => {
  return (
    <header className="flex justify-end p-5 text-sm">
      <DarkModeSwitch />
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2"/>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign In</button>
      </div>
    </header>
  )
}

export default HomeHeader;