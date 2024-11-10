console.log("Advanced KOJ By Giwon");

const link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://cdn.jsdelivr.net/gh/whitedev7773/NanumSquareNeo/NanumSquareNeo.css";
document.head.appendChild(link);

// 점수가 100이면 초록색으로
setInterval(() => {
  const targetElement = document.querySelector(
    "body > div._container_hjlba_1 > div > div._problem-meta_ssc3t_21 > div._top-right_ssc3t_70 > div._table-col_ssc3t_75 > div:nth-child(2)"
  );

  if (targetElement) {
    const isScore0 = targetElement.textContent.trim().startsWith("0");
    targetElement.style.color = isScore0 ? "var(--primary-text-color)" : "";

    const isScore100 = targetElement.textContent.trim().startsWith("100");
    targetElement.style.color = isScore100 ? "var(--success-color)" : "";
  }
}, 2000);
