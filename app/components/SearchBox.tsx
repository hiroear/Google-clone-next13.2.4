// searchページのヘッダー内の検索窓
'use client'
import { FC, useState, FormEvent } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { RxCross2 } from 'react-icons/rx'
import { BsFillMicFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBox: FC = () => {
  const searchParams = useSearchParams();                  // URLのクエリパラメータを取得する
  const searchTerm = searchParams.get('searchTerm') || ''; // URLのクエリパラメータのsearchTermを取得する。なければ空白を返す
  const [term, setTerm] = useState<string>(searchTerm || ""); // 検索窓に検索されて届いた値が初期値でセットされる
  const router = useRouter();

  // 検索窓に入力し、エンターを押した時の処理
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!term.trim()) return;                      // inputが空白の時は何もしない。 trim():文字列の前後の空白を削除
    router.push(`/search/web?searchTerm=${term}`); // 検索窓に入力した値をクエリパラメータにして app/search/web/page に遷移する
  }

  // [🔍]アイコンを押した時の処理 (<button/>には (e: FormEvent<HTMLFormElement>) の型が使えない)
  const handleButtonClick = () => {
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"> {/* rounded-full: border-radius 50% | flex-grow: 残りのスペースを埋める | max-w-3xl: max-width 48rem */}
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}
        className="w-full focus:outline-none bg-gray-400"
      />
      <RxCross2 onClick={() => setTerm('')} className="text-2xl text-gray-500 cursor-pointer sm:mr-2"/>
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" /> {/* hidden sm:inline-flex: smサイズ以上の時は表示する | border-l-2: border-left 2px(検索窓の縦棒) */}
      <AiOutlineSearch onClick={handleButtonClick} className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" />
    </form>
  )
}

export default SearchBox;