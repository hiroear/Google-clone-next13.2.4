// search/web/配下専用の loading アニメーションコンポーネント

export default function loading() {
  return (
    <>
      <div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse"> {/* pt-10: padding-top 40px | max-w-6xl: max-width 72rem | lg:pl-52: lgサイズ以上の時はpadding-left 52rem | animate-pulse: アニメーションを付ける */}
        <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div> {/* h-2.5: height 10px | w-48: width 12rem | rounded-full: border-radius 50% */}
        <div className="h-3.5 max-w-[360px] bg-gray-200 rounded-full mb-2.5"></div> {/* max-w-[360px]: max-width 360px | h-3.5: height 14px */}
        <div className="h-2 max-w-[560px] bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 max-w-[530px] bg-gray-200 rounded-full mb-2.5"></div>
      </div>

      <div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
        <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-3.5 max-w-[360px] bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 max-w-[560px] bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 max-w-[530px] bg-gray-200 rounded-full mb-2.5"></div>
      </div>

      <div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
        <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-3.5 max-w-[360px] bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 max-w-[560px] bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 max-w-[530px] bg-gray-200 rounded-full mb-2.5"></div>
      </div>
    </>
  )
}
