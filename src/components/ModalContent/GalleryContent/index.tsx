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
      <ImgWrapper>
        <Img src={Images.IMG11} alt="img11" />
        <Img src={Images.IMG12} alt="img12" />
        <Img src={Images.IMG13} alt="img13" />
        <Img src={Images.IMG14} alt="img14" />
        <Img src={Images.IMG15} alt="img15" />
      </ImgWrapper>
      <ImgWrapper>
        <Img src={Images.IMG16} alt="img16" />
        <Img src={Images.IMG17} alt="img17" />
        <Img src={Images.IMG18} alt="img18" />
        <Img src={Images.IMG19} alt="img19" />
        <Img src={Images.IMG20} alt="img20" />
      </ImgWrapper>
    </Wrapper>
  );
}

export default GalleryContent;
