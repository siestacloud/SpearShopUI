import { Banner } from "../common/banner/banner";
import { Contact } from "../common/contact/contact";
import { Gallery } from "../common/gallery/gallery";
import { Stickers } from "../common/stickers/stickers";
import { Subscribe } from "../common/subscribe/subscibe";

function Main() {

  return (
    <main className='main'>
      <Banner></Banner>
      <Gallery></Gallery>
      {/* <Gallery></Gallery> */}
      <Contact></Contact>
    </main>
  );
}

export default Main;
