"use client"

import  { useTextStats }  from "@/app/(frontend)/tools/text/useTextStats";
// 列表內頁
const textCounter = () => {
  console.clear()
  // 可再擴充 即時統計功能
  const { text, setText, charCount, lineCount, wordCount, punctuationCount, avgLineLength, longestLine } = useTextStats();

  return (
    <div>
    <h2>文字統計小工具</h2>
      <textarea 
        id="inputText" 
        placeholder="輸入文字..." 
        value={text} onChange={(e) => setText(e.target.value)}>
        </textarea>

      <h3>統計結果：</h3>
      <p >字數（中文字符）：{charCount}</p>
      <p id="lineCount">行數：{lineCount}</p>
      <p id="wordCount">英文單詞數：{wordCount}</p>
      <p id="punctuationCount">標點符號數：{punctuationCount}</p>
      <p id="avgLineLength">平均行長： {avgLineLength}</p>
      <p id="longestLine">最多字的行：{longestLine}</p>
  </div>
  );
};

export default textCounter;
