const getAns = (a)=>`${a}: '${[...document.querySelectorAll('[id^="answerhighlight"]')][`${a}`.charCodeAt(0) - 65].textContent}'`;
[...document.querySelectorAll('strong')].filter(c=>c.textContent.startsWith('(Choice')).forEach(c=>{
    console.log(c.textContent);
    var str = c.textContent;
    str.match(/ ([A-Z])/g).forEach(a => {str = str.replace(a, "" + a + ": '" + [...document.querySelectorAll('[id^="answerhighlight"]')][a.charCodeAt(1)-65].textContent + "'")})
    c.textContent = str;    
}
);
