// ============================================================================
// assets/js/daily-quote.js — 每日治愈短句切换逻辑
// 作用：
//   1. 内置预设短句数组。
//   2. 用「今天是当年第几天」对数组长度取模，每天固定一句，刷新不变。
//   3. 把短句写入 .quote-text，把中文日期写入 .quote-date
//      （格式：2026年8月25日 星期二）。
// 原生 JS 实现，不依赖 jQuery。
// ============================================================================

(function () {
  "use strict";

  // 预设治愈短句（可按需扩充，索引自动循环）
  var quotes = [
    "今天也是值得记录的一天 ✨",
    "慢慢来，比较快",
    "代码写累了，喝口水吧 💧",
    "每一个 bug 都是藏在礼物盒里的老师",
    "你已经比昨天的自己强了"
  ];

  // 中文星期：getDay() 返回 0=周日 … 6=周六
  var week = ["日", "一", "二", "三", "四", "五", "六"];

  // 按日期取一句：用今年第几天对数组取模，保证当天固定
  function pickQuote() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var dayOfYear = Math.floor((now - start) / 86400000);
    return quotes[dayOfYear % quotes.length];
  }

  // 格式化中文日期
  function formatDate() {
    var now = new Date();
    return (
      now.getFullYear() + "年" +
      (now.getMonth() + 1) + "月" +
      now.getDate() + "日 星期" + week[now.getDay()]
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    var q = document.querySelector(".quote-text");
    var d = document.querySelector(".quote-date");
    if (q) q.textContent = pickQuote();
    if (d) d.textContent = formatDate();
  });
})();
