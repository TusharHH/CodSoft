export default function heckersText() {

    // Theme setter 
    const modeBtn = document.querySelector(".darkMode");

    modeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
        document.documentElement.setAttribute(["data-theme"], newTheme);
    })

    // Hackers Text
    const hackersText = document.querySelector('.hText');

    const posts = [
        "Front-end Developer",
        "Back-end Developer",
        "MERN Developer",
        "REACT Developer",
    ];

    let postIndex = 0;
    let wait = 0;
    let charIndex = 0;
    let isDeleting = false;

    setInterval(() => {
        if (wait) {
            wait--;
            return;
        }

        if (!isDeleting) {
            hackersText.innerText += posts[postIndex][charIndex];
            charIndex++;
        } else {
            hackersText.innerText = hackersText.innerText.slice(0, -1);
            charIndex--;
        }

        if (!isDeleting && charIndex === posts[postIndex].length) {
            wait = 8;
            isDeleting = true;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            postIndex = (postIndex + 1) % posts.length;
            wait = 12;
        }
    }, 100);
};


