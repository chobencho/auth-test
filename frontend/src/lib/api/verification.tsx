import client from "lib/api/client";
import clientImage from "lib/api/clientImage";
import { AxiosPromise } from "axios";

// 証明書登録
export const sendCertificateImage = (
  stringMyId: string,
  data: FormData
): AxiosPromise => {
  return clientImage.post(
    `/verification/${stringMyId}/sendCertificateImage`,
    data
  );
};

// 管理者にメール送信
export const sendMail = (
  stringMyId: string,
  email: string,
  image: File | undefined
) => {
  return clientImage.post(`/verification/sendMail`, {
    stringMyId,
    email,
    image,
  });
};
