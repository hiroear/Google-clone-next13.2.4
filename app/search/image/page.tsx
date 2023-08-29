// <SearchHeaderOptions/> から届いたキーワードの画像検索結果一覧を表示するページ /search/image?searchTerm="キーワード"
import type { GoogleSearchTypes } from '../../googleSearch.types'
import Link from 'next/link'
import ImageSearchResults from '../../components/ImageSearchResults'


export default async function ImageSearchPage({ searchParams }: { searchParams: { searchTerm?: string }}) {  // クライアントコンポーネントでは useSearchParams(Hooks) でクエリパラメーター(?以降)を取得するが、サーバーコンポーネントでは searchParams で取得する
  const searchTerm = searchParams.searchTerm
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // google search api を使って検索結果を取得
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&searchType=image`)

  if (!response.ok) {
    console.log(response);
    throw new Error("Something went wrong");
  }

  const data: GoogleSearchTypes = await response.json()
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
      {results && <ImageSearchResults data={data} />}
      {/* ページ数と時間に関する情報も必要のため、results ではなく data を渡す */}
    </>
  )
}