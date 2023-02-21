import React, { FC } from "react";
import { BiError } from "react-icons/bi";
interface AlertProps {
  error: any;
  sent: boolean;
}
const Alert: FC<AlertProps> = ({ sent, error }) => {
  //   return sent || error ? (
  return (
    <>
      {error && (
        <div className="alertContainer alertContColor">
          <div className="alertBox">
            <BiError className="alertIcon alertIconColor" />
            <p className="alertText">Error: Something Went Wrong</p>
            <p className="alertText">
              Please ping me on <a>LinkedIn</a> or{" "}
              <a href="mailto:ah2k.dev@gmail.com">Email</a>
            </p>
          </div>
        </div>
      )}
      {sent && (
        <div className="alertContainer successAlert">
          <div className="alertBox">
            <BiError className="alertIcon successAlertIcon" />
            <p className="alertText">Success</p>
            <p className="alertText">
              Your message has been sent. I will get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      )}
    </>
    //   ) : (
    // <></>
  );
};

export default Alert;
