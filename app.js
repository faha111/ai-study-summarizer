function summarizeNotes() {
  const input = document.getElementById('inputText').value.trim();
  const outputContainer = document.getElementById('outputContainer');
  const summaryList = document.getElementById('summaryList');
  const btn = document.getElementById('summarizeBtn');

  if (!input) {
    alert("Please paste some text first!");
    return;
  }

  btn.innerText = "Processing...";
  btn.disabled = true;

  setTimeout(() => {
    summaryList.innerHTML = "";
    
    // Split text into key points or extract sentences
    const sentences = input.split(/(?<=[.?!])\s+/).filter(s => s.length > 10);
    const summaryItems = sentences.slice(0, 4);

    if (summaryItems.length === 0) {
      summaryItems.push(input);
    }

    summaryItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      summaryList.appendChild(li);
    });

    outputContainer.classList.remove('hidden');
    btn.innerText = "Generate Summary";
    btn.disabled = false;
  }, 1000);
}