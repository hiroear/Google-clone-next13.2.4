import { FC } from "react"
import CountryLookUp from "./CountryLookUp"

const Footer: FC = () => {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full"> {/* absolute: 絶対位置に配置する | bottom-0: 下端に配置する */}
      <div className="border-b px-8 py-3"> {/* border-b: border-bottom */}
        <CountryLookUp /> {/* ipアドレスで国を取得 */}
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        {/* flex-col: 子要素を縦並びにする | sm:flex-row: smサイズ以上の時は子要素を横並びにする | space-y-7: 子要素の上下のスペースを7にする | sm:space-y-0: smサイズ以上の時は子要素の上下のスペースを0にする */}
        <ul className="flex items-center space-x-6">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search works</li>
        </ul>

        <ul className="flex items-center space-x-6"> {/* items-center: 子要素を中央寄せにする | space-x-6: 子要素の間のスペースを6にする */}
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;