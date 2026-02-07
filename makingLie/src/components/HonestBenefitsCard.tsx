const HonestBenefitsCard = () => {
  // 이미지에 있는 데이터 정의
  const benefits = [
    {
      title: "기억 부담",
      value: "0%",
      desc: "복잡한 설정을 기억할 필요가 없습니다",
    },
    {
      title: "모순 위험",
      value: "0%",
      desc: "후속 질문 걱정이 사라집니다",
    },
    {
      title: "신뢰도",
      value: "↑",
      desc: "장기적으로 더 건강한 관계",
    },
  ];

  return (
    <section
      className="
        w-[806px]
        rounded-[32px]
        bg-white
        p-10
        shadow-[0_4px_20px_rgba(0,0,0,0.05)]
        border border-gray-100
      "
    >
      {/* 헤더 */}
      <h2 className="mb-10 text-center text-[28px] font-bold text-slate-900">
        솔직한 대화의 장점
      </h2>

      {/* 3개 카드 가로 배치 영역 (핵심!) */}
      <div className="grid grid-cols-3 gap-6">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="
              flex flex-col items-center
              rounded-[24px]
              border-2 border-[#E8FAF0] /* 연한 초록 테두리 */
              bg-[#F5FBF7]             /* 아주 연한 초록 배경 */
              py-8 px-4
              text-center
            "
          >
            {/* 체크 아이콘 원 */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1F2DE]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-8 h-8 text-[#22C55E]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            {/* 제목 */}
            <div className="mb-2 text-[20px] font-bold text-slate-900">
              {item.title}
            </div>

            {/* 값 (0%, ↑) */}
            <div className="mb-4 text-[42px] font-extrabold text-[#22C55E] leading-none">
              {item.value}
            </div>

            {/* 설명 */}
            <div className="text-[15px] text-slate-500 leading-snug break-keep px-2">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HonestBenefitsCard;
