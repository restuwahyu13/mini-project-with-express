class ForgotTemplate {
    constructor(username, email, date_at, token) {

        this.username = username;
        this.email = email;
        this.date_at = date_at;
        this.token = token;
    }

    // forgot password template
    forgotTemplate() {

        const { username, email, date_at, token } = this;

        return `
       <!DOCTYPE html>
       <html lang="en">

       <head>
       <title>Tech Soft</title>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <style type="text/css">
       
             html,
             body {
                font-family: "Roboto Thin";
                clear: both;
                margin: auto;
                padding: auto;
             }

             .container {
                position: relative !important;
                margin: auto !important;
                text-align: center;
                width: 650px;
                height: 650px;
                border-radius: 10px;
             }

             .container .card {
                justify-content: center;
                align-content: center;
                position: relative;
                top: 30px;
             }

             .container .logo {
                background: #07cd10;
                width: 360px;
                height: 40px;
                border-radius: 10px;
                position: relative;
                margin: auto;
                text-align: center;
                font-weight: bold;
             }

             .logo h4 a {
                font-size: 22px;
                text-align: center;
                line-height: 40px;
                color: #f5f5f5;
                opacity: 1;
             }

             .card-title {
                font-size: 19px;
                line-height: 30px;
             }

             .card-subtitle {
                font-size: 17px;
             }

             .list-accout {
                font-size: 16px;
                position: relative;
                top: 20px;
             }

             .button-spotify {
                position: relative;
                justify-content: center;
             }

             a {
                display: inline-block;
                position: relative;
                margin: auto;
                text-decoration: none;
                color: white;
                font-weight: bold;
                outline: none;
                box-shadow: none;
                font-size: 15px;
             }

             button {
                width: 150px;
                height: 50px;
                border-radius: 10px;
                background: #07cd10;
                position: relative;
                top: 40px;
                font-weight: bold;
                font-size: 18px;
                color: #f5f5f5;
                opacity: 1;
             }

             .text-content {
                font-size: 16px;
                word-wrap: break-word;
                position: relative;
                top: 55px;
             }

             .footer-logo {
                background: #07cd10;
                color: #f5f5f5;
                width: 360px;
                height: 40px;
                border-radius: 15px;
                position: relative;
                margin: auto;
                text-align: center;
                top: 10vh;
                font-weight: bold;
             }

             .footer {
                font-size: 17px;
                line-height: 40px;
                text-align: center;
                opacity: 1;
             }

           </style>
              </head>
                 <body>
                    <div class="container">
                       <div class="card">
                          <div class="logo">
                             <h4><a href="/">Tech Generation</a></h4>
                          </div>
                          <div class="card-body">
                             <p class="card-title"><strong>Hello Dear ${username}</strong></p>
                             <p class="card-subtitle"><strong>Kepada member YTH </strong>
                                berikut adalah account anda:</p>
                          <div class="list-accout">
                             <p>Username: ${username}</p>
                             <p>Email: ${email}</p>
                             <p>Date: ${date_at}</p>
                             <p>Token: ${token}</p>
                             </div>
                             <div class="text-content">
                                <div class="footer-logo">
                                <span class="footer">&copy; 2019 Tech Generation, Inc All Right Reserved</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </body>
              </html> `
    }
}

module.exports = { ForgotTemplate };