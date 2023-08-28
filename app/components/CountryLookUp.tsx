// ipアドレスで国を取得するコンポーネント
'use client' // クライアントの ipアドレスを取得してその国を取得するため、クライアント側で実行する(必須)。サーバー側で実行してしまうとユーザーは常にサーバーのipアドレスを取得してしまう
import { FC, useEffect, useState } from 'react';

const CountryLookUp: FC = () => {
  const [country, setCountry] = useState<string>('Japan')

  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`) // ipアドレスを取得するAPI
    .then((res) => res.json())        // response を読み取って、その中に入っている情報を JSON形式で解釈 → promiseを返す
    .then((data) => setCountry(data.country)) // Promise が解決された際に JSONデータを取得 (data: {businessName: '', businessWebsite: '', city: 'Kitakyushu', continent: 'Asia', country: 'Japan', …}
  }, [])

  return (
    <div>{country}</div>
  )
}

export default CountryLookUp;