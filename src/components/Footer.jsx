import React from "react";

const currentYear = new Date().getFullYear();  // returns the current year

function Footer() {
    return (
        <footer>
            <p>Copyright ⓒ {currentYear}, <a href="https://ysnhasan1.github.io/A-Simple-Resume/">Hasan Yasen</a></p>
        </footer>
    )
};

export default Footer;