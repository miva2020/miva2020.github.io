// ============================================================================
// assets/js/theme-switcher.js — 主题切换逻辑
// 作用：
//   1. 读取 document.documentElement 上由 _layouts/default.html 头部内联脚本
//      预先设置好的 data-theme（warm / ocean）作为当前主题。
//   2. 绑定 .theme-toggle 按钮点击事件，在 warm ↔ ocean 之间切换。
//   3. 用 localStorage（key: blog-theme）持久化用户选择。
//   4. 同步按钮图标：☀️ 表示当前是暖阳，🌊 表示当前是海盐。
//   5. 监听 storage 事件，多标签页同步主题。
// 原生 JS 实现，不依赖 jQuery。
// ============================================================================

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.documentElement;
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;

    // 当前主题：优先读 data-theme，缺省回退 warm
    function current() {
      return root.getAttribute("data-theme") || "warm";
    }

    // 同步按钮图标 + 无障碍标签
    function syncIcon() {
      var isWarm = current() === "warm";
      btn.textContent = isWarm ? "☀️" : "🌊";
      btn.setAttribute(
        "aria-label",
        isWarm ? "切换到海盐天空主题" : "切换到奶油暖阳主题"
      );
      btn.setAttribute("title", isWarm ? "当前：奶油暖阳，点击切换" : "当前：海盐天空，点击切换");
    }

    syncIcon();

    // 点击切换主题并持久化
    btn.addEventListener("click", function () {
      var next = current() === "warm" ? "ocean" : "warm";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("blog-theme", next);
      } catch (e) {
        // 隐私模式 / 禁用 localStorage 时静默忽略
      }
      syncIcon();
    });

    // 多标签页同步：其他标签修改 blog-theme 时同步本页
    window.addEventListener("storage", function (e) {
      if (e.key === "blog-theme" && e.newValue) {
        root.setAttribute("data-theme", e.newValue);
        syncIcon();
      }
    });
  });
})();
