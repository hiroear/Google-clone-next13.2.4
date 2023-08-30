// TOPページの中央の検索窓 / [Google Search]ボタン / [I am feeling lucky]ボタン
'use client'
import { useState, FormEvent, FC } from 'react'
import { useRouter } from 'next/navigation'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

const HomeSearch: FC = () => {
  const [input, setInput] = useState<string>('')
  const [randomSearchLoading, setRandomSearchLoading] = useState<boolean>(false)
  const router = useRouter()

  // 検索窓に入力し、エンターを押した時の処理
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return; // inputが空白の時は何もしない。 trim():文字列の前後の空白を削除する 例: '  a  ' => 'a' | '  ' => ''
    router.push(`/search/web?searchTerm=${input}`);
  }

  // [Google Search]ボタンを押した時の処理 (<button/>には (e: FormEvent<HTMLFormElement>) の型が使えない)
  const handleButtonClick = () => {
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  // [I am feeling lucky]ボタンを押した時の処理
  const randomSearch = async () => {
    setRandomSearchLoading(true); // ボタンを押した時にボタン内にローディングを表示
    const response: string = await fetch('https://random-word-api.herokuapp.com/word') // ランダムな文字列を取得するAPI
    .then((res) => res.json())    // response を読み取って、その中に入っている情報を JSON形式で解釈 → promiseを返す
    .then((data) => data[0])      // Promise が解決された際に JSONデータの配列から0番目の要素（文字列）を取得 (一つのランダムな単語を選択)
    if(!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl" >
        {/* max-w-[90%]: max-width 90% | rounded-full: border-radius 50% | hover:shadow-md: hover時にshadowを付ける | focus-within:shadow-md: focus中にshadowをずっと付ける | transition-shadow: shadowの変化をtransitionで滑らかにする | sm:max-w-xl: smサイズ以上の時はmax-width 640px | lg:max-w-2xl: lgサイズ以上の時はmax-width 1024px */}
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input type='text' className="flex-grow focus:outline-none" value={input} onChange={e => setInput(e.target.value)}
          // flex-grow: 残りのスペースを埋める | focus:outline-none: focus時にoutlineを消す
        />
        <BsFillMicFill className="text-lg" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 ">
        {/* space-y-2: 子要素の上下のスペースを2にする | sm:space-y-0: smサイズ以上の時は子要素の上下のスペースを0にする | sm:space-x-4: smサイズ以上の時は子要素の左右のスペースを4にする | justify-center: 子要素を中央寄せにする | sm:flex-row: smサイズ以上の時は子要素を横並びにする | mt-8: margin-top 2rem */}
        <button onClick={handleButtonClick} className="btn">
          Google Search
        </button>
        <button onClick={randomSearch} disabled={randomSearchLoading} className="btn flex items-center justify-center disabled:opacity-80"> {/* disabled:opacity-80: disabled時にopacityを80%にする */}
          {randomSearchLoading ? (
            <img src="spinner.svg" alt="loading..." className="h-6 text-center" />
          ) : (
            "I am feeling lucky"
          )}
        </button>
      </div>
    </>
  )
}

export default HomeSearch