// app/search/image/page で画像検索結果を一覧表示するコンポーネント
import type { GoogleSearchTypes } from '../googleSearch.types'
import Link from 'next/link'
import PaginationButtons from './PaginationButtons'

export default function ImageSearchResults({ data }: { data: GoogleSearchTypes }) {
  return (
    <div className="sm:pb-24 pb-40 mt-4">                {/* sm:pb-24: smサイズ以上の時はpadding-bottom 24rem */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4"> {/* grid-cols-1: 子要素を1列にする | sm:grid-cols-2: smサイズ以上の時は子要素を2列にする | lg:grid-cols-3: lgサイズ以上の時は子要素を3列にする | xl:grid-cols-4: xlサイズ以上の時は子要素を4列にする | space-x-4: 子要素の間のスペースを4にする */}
        {data.items?.map((item) => (
          <div key={item.link} className="mb-8 max-w-xl"> {/* max-w-xl: max-width 640px */}
            <div className="group flex flex-col">         {/* group: 子要素にgroup-hoverを使えるようにする */}
              <Link href={item.image.contextLink}>
                <img
                  src={item.link}
                  alt={item.title}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow" // group-hover:shadow-xl: group-hover時に影を付ける | object-contain: 画像の縦横比を維持して、画像が表示されるようにする | transition-shadow: 影の変化を滑らかにする
                />
              </Link>

              <Link href={item.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl"> {/* group-hover:underline: group-hover時に下線を付ける | truncate: 要素の幅を超えた文字列を省略 */}
                  {item.title}
                </h2>
              </Link>

              <Link href={item.image.contextLink}>
                <p className="group-hover:underline text-gray-600">
                {item.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  )
}
