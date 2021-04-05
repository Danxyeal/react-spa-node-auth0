import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.get('/owasp', (req, res) => {
    let owasp = [
        {
            "id": 1,
            "title": "Cross-Site Request Forgery Prevention",
            "link": "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html",
            "description": "Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user's web browser to perform an unwanted action on a trusted site when the user is authenticated."
        },
        {
            "id": 2,
            "title": "Cross Site Scripting Prevention",
            "link": "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
            "description": "This article provides a simple positive model for preventing XSS using output encoding properly."
        },
        {
            "id": 2,
            "title": "Docker Security",
            "link": "https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html",
            "description": "The aim of this cheat sheet is to provide an easy to use list of common security mistakes and good practices that will help you secure your Docker containers."
        },
    ];
    res.json(owasp);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});