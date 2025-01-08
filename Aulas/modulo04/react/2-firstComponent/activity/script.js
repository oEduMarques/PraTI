function showOption(option) {
    let content = document.getElementById('content');
    
    if (option === 'option1') {
        content.innerHTML = "<ul class='result-option'><li>React is extremely popular</li><li>It makes building complex, interactiv UIs a breeze</li><li>It's powerful & flexible</li><li>It has a very actie and versatile ecosystem</li></ul>";
    } else if (option === 'option2') {
        content.innerHTML = "<ul class='result-option'><li>Components, JSX & Props</li><li>State</li><li>Hooks (e.g., useEffect())</li><li>Dynamic rendering</li></ul>";
    } else if (option === 'option3') {
        content.innerHTML = "<ul class='result-option'><li>Official web page (react.dev)</li><li>Next.js (Fullstack framework)</li><li>React Native (building native mobile apps with React)</li></ul>";
    }
}