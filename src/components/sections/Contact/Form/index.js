"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../../ui/send-email";
import styles from "./style.module.scss";
import Button from "../../../ui/Button";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [status, setStatus] = useState("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(data) {
    setStatus("loading");
    setErrorMessage("");

    try {
      await sendEmail(data);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Error al enviar el mensaje.");
    }
  }

  const inputs = [
    {
      type: "text",
      placeholder: "Nombre y Apellido",
      register: "nombreyapellido",
    },
    { type: "email", placeholder: "E-mail", register: "email" },
    { type: "tel", placeholder: "Número de teléfono", register: "telefono" },
  ];

  return (
    <div className={styles.formcontainer}>
      {status === "success" ? (
        <h3 className="form-message">
          El mensaje se envió correctamente.
          <br />
          Pronto me estaré comunicando con vos.
        </h3>
      ) : status === "error" ? (
        <h6>
          Error al enviar el mensaje.
          <br />
          <span> Por favor intentelo más tarde.</span>
        </h6>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            {inputs.map((item, i) => {
              return (
                <div key={i} className={styles.inputcontainer}>
                  <input
                    type={item.type}
                    placeholder={item.placeholder}
                    className={styles.input}
                    {...register(item.register, { required: true })}
                  />
                </div>
              );
            })}

            <div className={styles.inputcontainertextarea}>
              <textarea
                placeholder="Mensaje"
                className={`${styles.input} ${styles.textarea}`}
                {...register("mensaje", { required: true })}
              ></textarea>
            </div>
            <div className={styles.buttoncontainer}>
              <Button type="submit" disabled={status === "loading"}>
                Enviar
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
