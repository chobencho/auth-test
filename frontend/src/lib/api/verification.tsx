<<<<<<< HEAD
=======
import client from "lib/api/client";
>>>>>>> b21bfa0 (add actionMailer, passwoedReset)
import clientImage from "lib/api/clientImage";
import { AxiosPromise } from "axios";

// 証明書登録
<<<<<<< HEAD
export const sendCertificateImage = (data: FormData): AxiosPromise => {
  return clientImage.post(`/verification/sendCertificateImage`, data);
=======
export const sendCertificateImage = (
  stringMyId: string,
  data: FormData
): AxiosPromise => {
  return clientImage.post(
    `/verification/${stringMyId}/sendCertificateImage`,
    data
  );
};

export const sendMail = (
  stringMyId: string,
  name: string,
  email: string,
  message: string,
  image: File | undefined
) => {
  return clientImage.post(`/verification/sendMail`, {
    stringMyId,
    name,
    email,
    message,
    image,
  });
>>>>>>> b21bfa0 (add actionMailer, passwoedReset)
};
