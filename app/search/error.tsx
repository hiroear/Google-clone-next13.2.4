// search/配下でで発生したエラーを表示するコンポーネント
'use client'
import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  // エラーが発生する度にコンソールにエラーを表示
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1　className="text-3xl mb-4">Something went wrong</h1>
      <button onClick={() => reset()} className="text-blue-500">Try Again</button>
    </div>
  )
}
