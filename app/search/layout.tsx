// searchページ配下専用のレイアウトコンポーネント
import type { Metadata } from 'next'
import SearchHeader from '../components/SearchHeader';

export const metadata: Metadata = {
  title: 'google search page',
  description: 'Generated by create next app',
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  )
}
