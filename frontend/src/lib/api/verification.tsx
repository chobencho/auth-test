import clientImage from "lib/api/clientImage";
import { AxiosPromise } from "axios";

// 証明書登録
export const sendCertificateImage = (
  id: string,
  email: string,
  data: FormData
): AxiosPromise => {
  return clientImage.post(`/verifications`, data, { params: { id, email } });
};
