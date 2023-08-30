'use client'
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// searchページの検索結果一覧のページネーションボタン (<WebSearchResults/>に配置)
import Link from "next/link";

export default function PaginationButtons() {
  const pathname = usePathname();                    // 現在のURLのパスを取得 (/search/web | /search/image)
  const searchParams = useSearchParams();            // クエリパラメーター(?以降)を取得
  const searchTerm = searchParams.get('searchTerm'); // クエリパラメーターの searchTerm を取得 (検索された値)
  const startIndex = Number(searchParams.get('start')) || 1; // クエリパラメーターの start を取得 (検索結果の開始位置) startがなければ 1 を代入 (1ページ目から表示)し、あればその値を代入

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0"> {/* justify-between: 子要素を両端に寄せる | sm:justify-start: smサイズ以上の時は子要素を左寄せにする */}
      {startIndex >= 10 && (   // startIndex が 10以上であれば
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}> {/*10件前の検索結果を表示する (10件前の検索結果の開始位置をクエリパラメーターにセット) */}
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {startIndex <= 90 && (   // startIndex が 90以下であれば
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}> {/*10件後の検索結果を表示する (10件後の検索結果の開始位置をクエリパラメーターにセット) */}
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  )
}
