import clientImage from "lib/api/clientImage";
import { AxiosPromise } from "axios";

// 証明書登録
export const sendCertificateImage = (data: FormData): AxiosPromise => {
  return clientImage.post(`/verification/sendCertificateImage`, data);
};
