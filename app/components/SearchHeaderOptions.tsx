// searchページのヘッダーすぐ下の [All] と [Images] のタブ
'use client'
import { FC } from 'react';
import { usePathname, useRouter, useSearchParams } from "next/navigation"; // 現在のURLのパスを取得する
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";


const SearchHeaderOptions: FC = () => {
  const router = useRouter();
  const pathname = usePathname(); // usePathname を初期化 (pathname: /search/web | /search/image)
  const searchParams = useSearchParams(); // useSearchParams: クエリパラメーター(URLの ?以降)を取得する
  const searchTerm = searchParams.get('searchTerm'); // クエリパラメーターの searchTerm を取得 (検索された値)

  // [All] or [Images] をクリックした時の処理
  const selectTab = (tab: string) => () => {
    router.push(`/search/${tab === 'Images' ? 'image' : 'web'}?searchTerm=${searchTerm}`);
    /* [All]をクリックしたら → /search/web?searchTerm=${searchTerm} に遷移
      [Images]をクリックしたら → /search/image?searchTerm=${searchTerm} に遷移 */
  }

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm"> {/* select-none: テキストを選択できないようにする */}
      <div onClick={selectTab('All')} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && "!text-blue-600 !border-blue-600"}`} >
        {/* space-x-1: 子要素の間のスペースを1にする | border-transparent: borderの色を透明にする | active:text-blue-500: active時に文字色を青にする | !text-blue-600: !importantでtext-blue-600を上書き | !border-blue-600: !importantでborder-blue-600を上書き */}
        <AiOutlineSearch className="text-md"/>
        <p>All</p>
      </div>

      <div onClick={selectTab('Images')} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/image" && "!text-blue-600 !border-blue-600"}`}>
        <AiOutlineCamera className="text-md"/>
        <p>Images</p>
      </div>
    </div>
  )
}

export default SearchHeaderOptions;