(function () {
  const key = document.body.dataset.exam;
  const data = window.examData && window.examData[key];
  if (!data) return;

  document.title = data.title + " | Year 11 Physics MCQ Guidance";
  document.body.classList.add("exam-accent-" + key);

  const title = document.getElementById("exam-title");
  const subtitle = document.getElementById("exam-subtitle");
  const list = document.getElementById("question-list");
  title.textContent = data.title;
  subtitle.textContent = data.subtitle;

  const optionHTML = q => q.options.map(o =>
    '<div class="option"><strong>' + o[0] + '</strong>' + o[1] + '</div>'
  ).join("");

  const wrongHTML = q => Object.entries(q.wrong).map(([letter, reason]) =>
    '<div class="wrong-item"><div class="wrong-letter">' + letter + '</div><p>' + reason + '</p></div>'
  ).join("");

  list.innerHTML = data.questions.map(q => `
    <article class="question-card" id="q${q.n}">
      <div class="question-top">
        <div class="question-number">Q${q.n}</div>
        <p class="question-stem">${q.stem}</p>
        ${q.diagram ? '<p class="diagram-note">Diagram question: use the diagram in your mock paper alongside this explanation.</p>' : ''}
        <div class="options">${optionHTML(q)}</div>
      </div>
      <details class="guide">
        <summary>Reveal guidance</summary>
        <div class="guide-body">
          <div class="answer-banner">
            <span class="answer-letter">${q.correct}</span>
            <span>Correct answer: ${q.correct}</span>
          </div>
          <div class="guide-grid">
            <div class="explain-box correct">
              <h3>Why this is correct</h3>
              <p>${q.why}</p>
            </div>
            <div class="explain-box working">
              <h3>${q.workingTitle || 'Working / key reasoning'}</h3>
              <p>${q.working}</p>
            </div>
          </div>
          <div class="wrong-wrap">
            <h3>Why the other answers are wrong</h3>
            <div class="wrong-list">${wrongHTML(q)}</div>
          </div>
          <div class="takeaway"><strong>Remember:</strong> ${q.takeaway}</div>
        </div>
      </details>
    </article>
  `).join("");

  document.getElementById("show-all").addEventListener("click", () => {
    document.querySelectorAll(".guide").forEach(d => d.open = true);
  });
  document.getElementById("hide-all").addEventListener("click", () => {
    document.querySelectorAll(".guide").forEach(d => d.open = false);
  });
})();