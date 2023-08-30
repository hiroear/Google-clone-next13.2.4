// search/image/配下専用の loading アニメーションコンポーネント

export default function loading() {
  return (
    <div className="pt-10 mx-2 lg:pl-52 max-w-6xl flex sm:space-x-4 flex-col sm:flex-row pb-42"> {/* pt-10: padding-top 40px | mx-2: margin-left right 8px | lg:pl-52: lgサイズ以上の時はpadding-left 52rem | max-w-6xl: max-width 72rem | sm:space-x-4: smサイズ以上の時は子要素の間のスペースを4にする | flex-col: 子要素を縦に並べる | sm:flex-row: smサイズ以上の時は子要素を横に並べる | pb-42: padding-bottom 168px */}
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div> {/* h-48: height 192px | w-48: width 192px | mb-4: margin-bottom 16px | rounded-md: border-radius 0.375rem */}
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div> {/* h-2: height 8px | mb-2.5: margin-bottom 10px */}
        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div> {/* w-44: width 176px */}
      </div>
      <div className="hidden sm:inline-flex sm:space-x-4"> {/* hidden: 基本は非表示 | sm:inline-flex: sm以上の時は子要素を横に並べる | sm:space-x-4: smサイズ以上の時は子要素の間のスペースを4にする */}
        <div className="animate-pulse">
          <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  )
}
