import React from "react";

export const ReadEnglish = () => {
  const text = document.querySelector("#text");
  const speakBtn = document.querySelector("#speak-btn");

  speakBtn!.addEventListener("click", function () {
    // 発言を作成
    const uttr = new SpeechSynthesisUtterance("hello");
    // 発言を再生 (発言キューに発言を追加)
    speechSynthesis.speak(uttr);
  });
  return (
    <>
      <textarea id="text">再生する内容</textarea>
      <button id="speak-btn">再生</button>
    </>
  );
};

{
  /* <textarea id="text">再生する内容</textarea>
<button id="speak-btn">再生</button>

<script>
  const text     = document.querySelector('#text')
  const speakBtn = document.querySelector('#speak-btn')

  speakBtn.addEventListener('click', function() {
    // 発言を作成
    const uttr = new SpeechSynthesisUtterance(text.value)
    // 発言を再生 (発言キューに発言を追加)
    speechSynthesis.speak(uttr)
  })
</script> */
}
