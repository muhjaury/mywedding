import { Img, ImgWrapper, Wrapper } from "./_galleryContent";
import { Images } from "./images";

function GalleryContent() {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={Images.IMG1} alt="img1" />
        <Img src={Images.IMG2} alt="img2" />
        <Img src={Images.IMG3} alt="img3" />
        <Img src={Images.IMG4} alt="img4" />
        <Img src={Images.IMG5} alt="img5" />
      </ImgWrapper>
      <ImgWrapper>
        <Img src={Images.IMG6} alt="img6" />
        <Img src={Images.IMG7} alt="img7" />
        <Img src={Images.IMG8} alt="img8" />
        <Img src={Images.IMG9} alt="img9" />
        <Img src={Images.IMG10} alt="img10" />
      </ImgWrapper>
    </Wrapper>
  );
}

export default GalleryContent;
