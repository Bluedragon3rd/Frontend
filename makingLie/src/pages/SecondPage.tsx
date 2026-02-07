import { useMemo, useState } from "react";

type Condition = "피곤" | "아픔" | "멘탈";
type Target = "FM 상사" | "공감형" | "눈치100단";

export default function DetailMock() {
  const [slider, setSlider] = useState(45);
  const [condition, setCondition] = useState<Condition>("아픔");
  const [target, setTarget] = useState<Target>("공감형");

  // ✅ 예상 결과(임시 규칙): 나중에 너 로직으로 바꿔도 됨
  const result = useMemo(() => {
    const lieLevel = slider < 33 ? "1-2" : slider < 66 ? "3-5" : "6-8";
    const memory = slider < 50 ? "보통" : "높음";
    const risk = target === "눈치100단" ? "높음" : target === "FM 상사" ? "보통" : "낮음";
    return { lieLevel, memory, risk };
  }, [slider, target]);

  return (
    <div style={styles.page}>
      {/* 상단바 */}
      <div style={styles.topbar}>
        <button style={styles.iconBtn}>←</button>
        <div style={styles.topTitle}>상황 구체화</div>
        <div style={{ width: 40 }} />
      </div>

      {/* 본문(2열 카드) */}
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* 지각 이유 성격 */}
          <Card>
            <div style={styles.cardTitle}>지각 이유 성격</div>

            <input
              type="range"
              min={0}
              max={100}
              value={slider}
              onChange={(e) => setSlider(Number(e.target.value))}
              style={styles.range}
            />

            <div style={styles.rangeLabels}>
              <span style={{ color: "#3b82f6", fontWeight: 700 }}>우발적</span>
              <span style={{ color: "#ef4444", fontWeight: 700 }}>반복적</span>
            </div>
          </Card>

          {/* 즉시 영향 */}
          <Card style={{ border: "2px solid #facc15", background: "#fff7d6" }}>
            <div style={{ ...styles.cardTitle, color: "#7c2d12" }}>↗ 즉시 영향</div>

            <div style={styles.impactBtn}>기억 소모 ↑</div>
          </Card>

          {/* 컨디션 */}
          <Card>
            <div style={styles.cardTitle}>컨디션</div>

            <div style={styles.chipWrap}>
              <Chip active={condition === "피곤"} onClick={() => setCondition("피곤")}>
                🥴 피곤
              </Chip>
              <Chip active={condition === "아픔"} onClick={() => setCondition("아픔")}>
                🤒 아픔
              </Chip>
              <Chip active={condition === "멘탈"} onClick={() => setCondition("멘탈")}>
                😶 멘탈
              </Chip>
            </div>
          </Card>

          {/* 예상 결과 */}
          <Card>
            <div style={styles.cardTitle}>예상 결과</div>

            <ResultRow label="거짓말 레벨" value={result.lieLevel} valueColor="#7c3aed" />
            <ResultRow label="기억 소모" value={result.memory} valueColor="#f97316" />
            <ResultRow label="추궁 위험" value={result.risk} valueColor="#ef4444" />
          </Card>

          {/* 대상 유형 */}
          <Card>
            <div style={styles.cardTitle}>대상 유형</div>

            <div style={styles.chipWrap}>
              <Chip active={target === "FM 상사"} onClick={() => setTarget("FM 상사")}>
                👔 FM 상사
              </Chip>
              <Chip active={target === "공감형"} onClick={() => setTarget("공감형")}>
                🫶 공감형
              </Chip>
              <Chip active={target === "눈치100단"} onClick={() => setTarget("눈치100단")}>
                👀 눈치100단
              </Chip>
            </div>
          </Card>

          {/* 결과 보기 버튼 */}
          <div style={{ display: "flex", alignItems: "stretch" }}>
            <button style={styles.submitBtn} onClick={() => alert("결과 보기!")}>
              결과 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 공용 카드 */
function Card({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return <div style={{ ...styles.card, ...style }}>{children}</div>;
}

/** 칩 버튼 */
function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.chip,
        borderColor: active ? "#a855f7" : "#e5e7eb",
        boxShadow: active ? "0 10px 18px rgba(168,85,247,0.18)" : "none",
        color: active ? "#7c3aed" : "#111827",
      }}
    >
      {children}
    </button>
  );
}

/** 결과 한 줄 */
function ResultRow({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor: string;
}) {
  return (
    <div style={styles.resultRow}>
      <span style={{ color: "#6b7280", fontWeight: 700 }}>{label}</span>
      <span style={{ color: valueColor, fontWeight: 900 }}>{value}</span>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f6f7fb, #f4f0ff)",
    padding: "18px 18px 40px",
    boxSizing: "border-box",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial',
  },
  topbar: {
    height: 52,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1040,
    margin: "0 auto 16px",
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    background: "white",
    cursor: "pointer",
    fontSize: 18,
  },
  topTitle: {
    fontSize: 22,
    fontWeight: 900,
    color: "#111827",
  },
  container: {
    maxWidth: 1040,
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
  },
  card: {
    background: "white",
    borderRadius: 18,
    padding: 20,
    boxShadow: "0 14px 28px rgba(0,0,0,0.06)",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 900,
    marginBottom: 14,
  },
  range: {
    width: "100%",
  },
  rangeLabels: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
  },
  chipWrap: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
  chip: {
    borderRadius: 999,
    padding: "12px 16px",
    border: "2px solid #e5e7eb",
    background: "white",
    cursor: "pointer",
    fontWeight: 800,
    minWidth: 120,
    textAlign: "center",
  },
  impactBtn: {
    marginTop: 14,
    borderRadius: 16,
    padding: "18px 16px",
    background: "#f97316",
    color: "white",
    fontWeight: 900,
    textAlign: "center",
    boxShadow: "0 14px 20px rgba(249,115,22,0.22)",
  },
  resultRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 16px",
    borderRadius: 14,
    background: "#f6f7fb",
    marginTop: 10,
  },
  submitBtn: {
    width: "100%",
    border: "none",
    borderRadius: 18,
    padding: "20px 16px",
    fontSize: 18,
    fontWeight: 900,
    color: "white",
    background: "linear-gradient(90deg, #7c3aed, #ec4899)",
    cursor: "pointer",
    boxShadow: "0 16px 26px rgba(124,58,237,0.25)",
  },
};
