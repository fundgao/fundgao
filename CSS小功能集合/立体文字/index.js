// 文字跳动
document.querySelectorAll(".font-dance-title").forEach((item) => {
  item.innerHTML = item.textContent
    .split("")
    .map((c) => `<span class="letter">${c.trim() ? c : "&nbsp;"}</span>`)
    .join("");
});

document.querySelectorAll(".letter").forEach((item, index) => {
  item.style.setProperty("--delay", `${index * 0.1}s`)
})