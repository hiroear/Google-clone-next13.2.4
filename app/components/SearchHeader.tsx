// searchページ配下専用のヘッダー / ロゴ、検索ボックス、アイコン、サインインボタンを配置
import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import SearchBox from "./SearchBox"
import DarkModeSwitch from "./DarkModeSwitch"
import SearchHeaderOptions from "./SearchHeaderOptions"
import { RiSettings3Line } from "react-icons/ri" //歯車アイコン
import { TbGridDots } from "react-icons/tb" //グリッドアイコン

const SearchHeader: FC = () => {
  return (
    <header className="sticky top-0 bg-gray-400"> {/* sticky: スクロールしても常に上部に表示する | top-0: 上端に配置する */}
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            width={120}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
            alt='Google Logo'
          />
        </Link>
        <div className="flex-1"> {/* flex-1: 残りのスペースを埋める */}
          <SearchBox />          {/* 検索窓 */}
        </div>
        <div className="hidden md:inline-flex space-x-2"> {/* 基本は隠しておいて → md:inline-flex: mdサイズ以上の時は子要素を横並びにする | space-x-2: 子要素の間のスペースを2にする */}
          <DarkModeSwitch />
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">
          {/* font-medium: フォントを太くする | hover:brightness-105: hover時に明るさを105%にする | transition-all: 全ての変化をtransitionで滑らかにする */}
          Sign In
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  )
}

export default SearchHeader;