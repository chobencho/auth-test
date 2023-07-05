import { Header } from "./Header";
import { Footer } from "./Footer";

export const Test = ({ currentUser }) => {

  return (
    <>
      <Header currentUser={ currentUser }/>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <p>TEST</p>

      <Footer currentUser={ currentUser }/>
  </>
  )
}
