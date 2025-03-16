import React, { ComponentPropsWithoutRef } from "react";

import twColors from "@/shared/utils/twColors";

export default function ContactEmailTemplate(props: { from: string; message: string; name: string; phone: string } & ComponentPropsWithoutRef<"div">) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div
          style={{
            width: "100%",
            maxWidth: "464px",
            borderRadius: "0.5rem",
            border: "1px solid #d1d5db",
            backgroundColor: twColors.nandor[950],
            paddingBottom: "4rem",
            color: twColors.gray[200],
          }}>
          <center style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", backgroundColor: twColors.nandor[700], padding: "0.75rem" }}>
            <img src={`/images/logo.png`} alt="Logo" title="Logo" width={56} height={56} />
          </center>
          <div style={{ marginTop: "2rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", ...props.style }}>
            <p style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Olá, Alice</p>
            <p style={{ marginBottom: "1rem" }}>Um usuário do seu Portfolio entrou em contato.</p>
            <p>
              Nome: <strong>{props.name}</strong>{" "}
            </p>
            <p>
              Email: <strong>{props.from}</strong>{" "}
            </p>
            <p>
              Telefone: <strong>{props.phone}</strong>{" "}
            </p>
            <p>
              Mensagem: <strong>{props.message}</strong>{" "}
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
