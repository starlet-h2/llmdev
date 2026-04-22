window.onload = function() {
  // チャットボックスを取得
  const chatBox = document.getElementById('chat-box');
  const loading = document.getElementById('loading');
  const submitButton = document.getElementById('submit-button');
  
  // チャットボックスのスクロールを一番下に設定
  chatBox.scrollTop = chatBox.scrollHeight;

  // Ctrl + Enterでフォームを送信
  const form = document.getElementById('chat-form');
  const textarea = document.getElementById('user-input');

  // フォーム送信時の処理
  form.addEventListener('submit', function() {
    // ローディング表示を開始
    loading.style.display = 'flex';
    // 送信ボタンを無効化
    if (submitButton) {
      submitButton.disabled = true;
    }
    // テキストエリアを読み取り専用に（disabledではなくreadonlyを使用してフォーム送信を可能に）
    textarea.readOnly = true;
  });

  textarea.addEventListener('keydown', function(event) {
      // Ctrl + Enterが押された場合
      if (event.ctrlKey && event.key === 'Enter') {
          event.preventDefault();  // デフォルトの動作（改行など）を防止
          // ローディング表示を開始
          loading.style.display = 'flex';
          // 送信ボタンを無効化
          if (submitButton) {
            submitButton.disabled = true;
          }
          // テキストエリアを読み取り専用に
          textarea.readOnly = true;
          form.submit();  // フォームを送信
      }
  });

  // ページロード完了時にローディングを非表示
  window.addEventListener('load', function() {
    loading.style.display = 'none';
    if (submitButton) {
      submitButton.disabled = false;
    }
    textarea.readOnly = false;
  }, { once: true });
}