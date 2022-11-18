import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "us-east.connect.psdb.cloud",
    user: "w0bsjgt0fp4crabi9347",
    password: "pscale_pw_byt8n3medBjmT0yEBq3Bs8InLGgcIss1L90HOT48F8n",
    database: "learningdb",
    ssl:{"rejectUnauthorized":true}
  },
});

export { pool };
