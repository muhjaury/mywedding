"use client";

import { helloValentina } from "@/assets/font";
import { Button, Content, Countdown, Section } from "@/components";
import CoreLayout from "@/layout/CoreLayout";
import WEDDING_DECORATION from "./../../assets/img/decor.png";
import WEDDING_PRAY from "./../../assets/img/muslim-pray.png";
import WEDDING_PICTURE from "./../../assets/img/muslim-wedding.png";
import {
  ArabicPrimary,
  ButtonWrapper,
  ContenRight4DateWrapper,
  ContentLeft2,
  ContentLeft2Description,
  ContentLeft2Title,
  ContentRight1,
  ContentRight4,
  ContentRight4Date,
  ContentRight4Description,
  ContentRight4Time,
  ContentWrapper,
  ContentWrapper4,
  DescriptionPrimary,
  GapName,
  IFrame,
  Img,
  MapsWrapper1,
  MapsWrapper2,
  NameBig1,
  NameBig2,
  NameSmall1,
  NameSmall2,
  Title3,
} from "./_dashboard";

function Dashboard() {
  const handleClickMapsButton = () => {
    window.open("https://maps.app.goo.gl/CH3hGGusgKdhrTwt8");
  };

  return (
    <CoreLayout>
      <Content>
        <Section>
          <ContentWrapper>
            <Img src={WEDDING_PICTURE} data-aos="fade-up" />
            <ContentRight1>
              <ArabicPrimary data-aos="fade-up">
                وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ
                أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم
                مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ
                يَتَفَكَّرُونَ
              </ArabicPrimary>
              <DescriptionPrimary data-aos="fade-up">
                "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
                benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum
                yang berpikir."
              </DescriptionPrimary>
              <DescriptionPrimary
                style={{ fontWeight: "bold" }}
                data-aos="fade-up"
              >
                ~ QS Ar Rum Ayat 21 ~
              </DescriptionPrimary>
            </ContentRight1>
          </ContentWrapper>
        </Section>
        <Section type="secondary">
          <ContentWrapper>
            <ContentLeft2>
              <ContentLeft2Title data-aos="fade-up">
                Bismillahirrahmanirrahim
                <br />
                Assalamu'alaikum Warahmatullahi Wabarakatuh
              </ContentLeft2Title>
              <ContentLeft2Description data-aos="fade-up">
                Maha Suci Allah Subhanahu Wa Ta'ala, yang telah menciptakan
                makhluk-Nya berpasang-pasangan, Ya Allah perkenankanlah kami
                merangkaikan cinta kasih yang Engkau ciptakan kepada kami :
              </ContentLeft2Description>
              <div>
                <NameBig1
                  className={helloValentina.className}
                  data-aos="fade-up"
                >
                  Muhammad Jaury, S.Tr.T.
                </NameBig1>
                <NameSmall1
                  className={helloValentina.className}
                  data-aos="fade-up"
                >
                  Ary
                </NameSmall1>
              </div>
              <GapName className={helloValentina.className} data-aos="fade-up">
                &
              </GapName>
              <div>
                <NameBig2
                  className={helloValentina.className}
                  data-aos="fade-up"
                >
                  Kiki Astrina, S.Pd.
                </NameBig2>
                <NameSmall2
                  className={helloValentina.className}
                  data-aos="fade-up"
                >
                  Kiki
                </NameSmall2>
              </div>
              <ContentLeft2Description data-aos="fade-up">
                Untuk melaksanakan syariat agama-Mu dan mengikuti sunnah
                Rasul-Mu dalam membentuk ikatan keluarga yang Sakinah, Mawaddah,
                Warahmah dengan harapan memperoleh keturunan yang sholeh,
                sholehah dan bertaqwa kepada-Mu
              </ContentLeft2Description>
            </ContentLeft2>
            <Img src={WEDDING_PRAY} data-aos="fade-up" behindtext="Y" />
          </ContentWrapper>
        </Section>
        <Section>
          <Title3 className={helloValentina.className} data-aos="fade-up">
            Our Wedding Countdown
          </Title3>
          <ContentWrapper>
            <Img src={WEDDING_DECORATION} data-aos="fade-up" />
          </ContentWrapper>
          <Countdown data-aos="fade-up" />
        </Section>
        <Section type="secondary">
          <ContentWrapper4>
            <MapsWrapper1 data-aos="fade-up">
              <IFrame
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3979.9214220660087!2d119.636721!3d-4.0364580000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDInMTEuMyJTIDExOcKwMzgnMTIuMiJF!5e0!3m2!1sen!2sid!4v1743554446782!5m2!1sen!2sid"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapsWrapper1>
            <ContentRight4>
              <ContentRight4Description data-aos="fade-up">
                Dengan memohon Ridho dan Rahmat Allah Subhanahu Wa Ta'ala, kami
                bermaksud menyelenggarakan Akad Nikah dan Resepsi kami, yang
                Insya Allah akan dilaksanakan pada :
              </ContentRight4Description>
              <ContenRight4DateWrapper>
                <ContentRight4Date
                  className={helloValentina.className}
                  data-aos="fade-up"
                >
                  Hari Sabtu, 19 April 2025
                </ContentRight4Date>
                <ContentRight4Time
                  className={helloValentina.className}
                  data-aos="fade-up"
                >
                  Pukul 10.00 WITA - Selesai
                </ContentRight4Time>
              </ContenRight4DateWrapper>
              <ContentRight4Description data-aos="fade-up">
                Jl. Samsul Alam Bulu, Kota Parepare, Sulawesi Selatan
              </ContentRight4Description>
              <MapsWrapper2 data-aos="fade-up">
                <IFrame
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3979.9214220660087!2d119.636721!3d-4.0364580000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDInMTEuMyJTIDExOcKwMzgnMTIuMiJF!5e0!3m2!1sen!2sid!4v1743554446782!5m2!1sen!2sid"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </MapsWrapper2>
              <ButtonWrapper data-aos="fade-up">
                <Button onClick={handleClickMapsButton}>Buka Maps</Button>
              </ButtonWrapper>
            </ContentRight4>
          </ContentWrapper4>
        </Section>
      </Content>
    </CoreLayout>
  );
}

export default Dashboard;
