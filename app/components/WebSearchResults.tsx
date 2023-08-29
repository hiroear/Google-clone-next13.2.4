// app/search/web/page で検索結果を一覧表示するコンポーネント
import type { GoogleSearchTypes } from '../googleSearch.types'
import Parse from 'html-react-parser' // htmlをパースしてくれる (htmlをJSXに変換してくれる)
import Link from 'next/link'


export default function WebSearchResults({ data }: { data: GoogleSearchTypes }) {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52"> {/* sm:pl-[5%]: smサイズ以上の時はpadding-left 5% | md:pl-[14%]: mdサイズ以上の時はpadding-left 14% | lg:pl-52: lgサイズ以上の時はpadding-left 52rem */}
      <p className="text-gray-600 text-sm mb-5 mt-3">
        約 {data.searchInformation?.formattedTotalResults} 件 （{data.searchInformation?.formattedSearchTime}）秒
      </p>
      {data.items?.map((item) => (
        <div className="mb-8 max-w-xl" key={item.link}>           {/* max-w-xl: max-width 640px */}
          <div className="group flex flex-col">                   {/* group: 子要素にgroup-hoverを使えるようにする */}
            <Link href={item.link} className="text-sm truncate">  {/* truncate: 要素の幅を超えた文字列を省略 */}
              {item.formattedUrl}
            </Link>
            <Link href={item.link} className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"> {/* group-hover:underline: group-hover時に下線を付ける */}
              {item.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parse(item.htmlSnippet)}</p>
        </div>
      ))}

    </div>
  )
}
