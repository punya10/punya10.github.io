
function fixAnsChoices() {
  [...document.querySelectorAll('strong')]
    .filter(c => c.textContent.startsWith('(Choice '))
    .forEach(c => {
      c.textContent = c.textContent.replace(')', `: ${[...document.querySelectorAll('[id^="answerhighlight"]')][c.textContent.charCodeAt(8)-65].textContent})`)
  });
}

