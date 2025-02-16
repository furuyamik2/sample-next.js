export default function Home() {
  return (
    <div className="bg-black">
      <div className="bg-white max-w-[1440px] mx-auto">
        <header className="h-[96px] flex items-center" >
          <ul className="flex space-x-[110px] text-[12px] font-bold ml-[817px]">
            <li>CONCEPT</li>
            <li>MENU</li>
            <li>SHOP</li>
            <li>ACCESS</li>
          </ul>
        </header>
        <div>
          <img src="/fuji.jpg" className="w-full h-[806px]" />
        </div>
        <div className=" flex justify-center h-[501px]">
          <div className="absolute top-[993px] text-center text-[26px] font-serif">
            <p className="mb-[5]">「想像力はあなたをどこにでも連れて行ってくれる」</p>
            <p className="mb-[5]">注文を待つ間に広げた、一冊の本の中に見つけた言葉。</p>
            <p className="mb-[5]">ゆったり流れる時間の中で、想像をふくらませる楽しさを思い出す。</p>
            <p className="mb-[5]">そんな時間を過ごす時、美味しいコーヒーがあると嬉しい。</p>
          </div>
          <div className="absolute top-[1250px] text-[26px] bg-[#FEAABF] h-[62px] w-[228px] rounded-full flex items-center justify-center">
            <p>CONCEPT</p>
          </div>
        </div>
        {/* レコメンド */}
        <div className="h-[778px] w-full bg-[#72D2FE] bg-opacity-[.17] flex justify-center" >
          <div className="absolute top-[1462px] text-[26px] font-bold">
            <p>RECOMMEDNDED</p>
          </div>

          <div className="absolute top-[1588px]">
            <ul className="flex space-x-[61px] justify-center">
              <li className="w-[245px]">
                <div className="h-[245px] bg-[#D9D9D9]"></div>
                <div>
                  <p className="text-[26px] font-bold">カフェラテ</p>
                  <p className="text-[16px]">エスプレッソとミルク、この組み合わせに勝るものはなかなか見つかりません。ホッとしたい時、やっぱりラテが欲しくなる。</p>
                  <p className="text-[20px] font-bold">￥460</p>
                </div>
              </li>
              <li>
                <div className="h-[245px] w-[245px] bg-[#D9D9D9]"></div>
              </li>
              <li>
                <div className="h-[245px] w-[245px] bg-[#D9D9D9]"></div>
              </li>
              <li>
                <div className="h-[245px] w-[245px] bg-[#D9D9D9]"></div>
              </li>
            </ul>
          </div>

          <div className="absolute top-[2056px] text-[26px] bg-[#FEAABF] h-[62px] w-[228px] rounded-full flex items-center justify-center">
            <p>MENU</p>
          </div>
        </div>

        <div className="bg-black h-[629px] flex justify-center  text-white" >
          <div className="absolute top-[2202px]">
            <ul className="flex space-x-[110px] text-[12px] font-bold">
              <li>CONCEPT</li>
              <li>MENU</li>
              <li>SHOP</li>
              <li>ACCESS</li>
            </ul>
          </div>

          <div className="absolute top-[2372px] bg-[#D9D9D9] h-[124px] w-[532px]"></div>

          <div className="absolute top-[2530px] text-center">
            <p className="text-[19px] font-bold">TEL 01-2345-6789</p>
            <p className="text-[10px]">OPEN Fri-Sun 11:00~16:00</p>
          </div>

          <div className="absolute top-[2776px]">
            <p className="text-[13px]">@Kissa</p>
          </div>

        </div>


      </div>
    </div>

  );
}