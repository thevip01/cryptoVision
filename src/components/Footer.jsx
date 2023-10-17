import React from "react"
import "../styles/Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footer-div">
                <p className="copyright">© {new Date().getFullYear()} V. All rights reserved.</p>
            </div>
        </footer>
    )
}
