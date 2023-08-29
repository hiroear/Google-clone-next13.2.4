// <HomeSearch/> <SearchBox/> <SearchHeaderOptions/> から届いたキーワードの検索結果一覧を表示するページ /search/web?searchTerm='キーワード'
import type { GoogleSearchTypes } from '../../googleSearch.types'
import Link from 'next/link'
import WebSearchResults from '../../components/WebSearchResults'


export default async function WebSearchPage({ searchParams }: { searchParams: { searchTerm?: string }}) {  // クライアントコンポーネントでは useSearchParams(Hooks) でクエリパラメーター(?以降)を取得するが、サーバーコンポーネントでは searchParams で取得する
  const searchTerm = searchParams.searchTerm // クエリパラメーターの searchTermを取得。 ?searchTerm=○○○○" が届いたら "○○○○"部分を searchTerm に格納
  // const startIndex = searchParams.start || "1";
  // console.log(startIndex);
  
  await new Promise((resolve) => setTimeout(resolve, 2000)); // APIの制限に引っかからないようにするため、スタイルが適用されてからデータを取得するまでの時間を2秒にする

  // google search api を使って検索結果を取得
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm})`)

  if (!response.ok) {
    console.log(response);
    throw new Error("Something went wrong");
  }

  const data: GoogleSearchTypes = await response.json() // response を読み取って、その中に入っている情報を JSON形式で解釈 → promiseを返す
  const results = data.items         // JSONデータの配列から items を取得 ( items: [{}, {}, {}] )
  // console.log(data);

  // 検索結果がない場合
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    )
  }

  // 検索結果がある場合
  return (
    <>
      {results && <WebSearchResults data={data} />}
      {/* ページ数と時間に関する情報も必要のため、results ではなく data を渡す */}
    </>
  )
}
