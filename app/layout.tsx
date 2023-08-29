// ルートレイアウト: 全ページに共通するコンポーネントを定義
import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'
import Favicon from '/public/favicon.svg'; //publicフォルダから favicon.svg を読み込む
import Providers from './Providers'

export const metadata: Metadata = {
  title: 'google clone Next13',
  description: 'Generated by create next app',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='relative min-h-screen'> {/* relative: footerの absoluteに対して | min-h-screen: 最低でも画面の高さいっぱいまで表示する */}
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
