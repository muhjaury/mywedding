"use client";

import { helloValentina, kissingSeason } from "@/assets/font";
import { Button, Content, Countdown, Section } from "@/components";
import CoreLayout from "@/layout/CoreLayout";
import WEDDING_DECORATION from "./../../assets/img/decor.png";
import WEDDING_PRAY from "./../../assets/img/muslim-pray.png";
import WEDDING_PICTURE from "./../../assets/img/muslim-wedding.png";
import {
  A,
  ArabicPrimary,
  ButtonWrapper,
  ContentLeft2,
  ContentLeft2Description,
  ContentLeft2Title,
  ContentRight1,
  ContentRight4,
  ContentRight4Date,
  ContentRight4Description,
  ContentWrapper,
  DescriptionPrimary,
  GapName,
  IFrame,
  Img,
  MapsWrapper,
  NameBig1,
  NameBig2,
  NameSmall1,
  NameSmall2,
  Title3,
} from "./_dashboard";

function Dashboard() {
  const handleClickMapsButton = () => {
    window.open("https://maps.app.goo.gl/rc2UTiXtQUFf5fTY6");
  };

  return (
    <CoreLayout>
      <Content>
        <Section>
          <ContentWrapper>
            <Img src={WEDDING_PICTURE} />
            <ContentRight1>
              <ArabicPrimary>
                وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ
                أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم
                مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ
                يَتَفَكَّرُونَ
              </ArabicPrimary>
              <DescriptionPrimary className={kissingSeason.className}>
                "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
                benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum
                yang berpikir."
              </DescriptionPrimary>
              <DescriptionPrimary style={{ fontWeight: "bold" }}>
                ~ QS Ar Rum Ayat 21 ~
              </DescriptionPrimary>
            </ContentRight1>
          </ContentWrapper>
        </Section>
        <Section type="secondary">
          <ContentWrapper>
            <ContentLeft2>
              <ContentLeft2Title className={kissingSeason.className}>
                Bismillahirrahmanirrahim
                <br />
                Assalamu'alaikum Warahmatullahi Wabarakatuh
              </ContentLeft2Title>
              <ContentLeft2Description className={kissingSeason.className}>
                Maha Suci Allah Subhanahu Wa Ta'ala, yang telah menciptakan
                makhluk-Nya berpasang-pasangan, Ya Allah perkenankanlah kami
                merangkaikan cinta kasih yang Engkau ciptakan kepada kami :
              </ContentLeft2Description>
              <div>
                <NameBig1 className={helloValentina.className}>
                  Muhammad Jaury, S.Tr.T.
                </NameBig1>
                <NameSmall1 className={helloValentina.className}>
                  Ary
                </NameSmall1>
              </div>
              <GapName className={helloValentina.className}>&</GapName>
              <div>
                <NameBig2 className={helloValentina.className}>
                  Kiki Astrina, S.Pd.
                </NameBig2>
                <NameSmall2 className={helloValentina.className}>
                  Kiki
                </NameSmall2>
              </div>
              <ContentLeft2Description className={kissingSeason.className}>
                Untuk melaksanakan syariat agama-Mu dan mengikuti sunnah
                Rasul-Mu dalam membentuk ikatan keluarga yang Sakinah, Mawaddah,
                Warahmah dengan harapan memperoleh keturunan yang sholeh,
                sholehah dan bertaqwa kepada-Mu
              </ContentLeft2Description>
            </ContentLeft2>
            <Img src={WEDDING_PRAY} />
          </ContentWrapper>
        </Section>
        <Section>
          <Title3 className={helloValentina.className}>
            Our Wedding Countdown
          </Title3>
          <ContentWrapper>
            <Img src={WEDDING_DECORATION} />
          </ContentWrapper>
          <Countdown />
        </Section>
        <Section type="secondary">
          <ContentWrapper>
            <MapsWrapper>
              <IFrame
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3979.9215985273427!2d119.636662!3d-4.036422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sid!4v1738825465463!5m2!1sen!2sid"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapsWrapper>
            <ContentRight4>
              <ContentRight4Description className={kissingSeason.className}>
                Dengan memohon Ridho dan Rahmat Allah Subhanahu Wa Ta'ala, kami
                bermaksud menyelenggarakan Akad Nikah dan Resepsi kami, yang
                Insya Allah akan dilaksanakan pada :
              </ContentRight4Description>
              <ContentRight4Date className={helloValentina.className}>
                Hari Sabtu, 19 April 2025
              </ContentRight4Date>
              <ContentRight4Description className={kissingSeason.className}>
                Jl. Samsul Alam Bulu, Kota Parepare, Sulawesi Selatan
              </ContentRight4Description>
              <ButtonWrapper>
                <Button
                  onClick={handleClickMapsButton}
                  className={kissingSeason.className}
                >
                  Buka Maps
                </Button>
              </ButtonWrapper>
            </ContentRight4>
          </ContentWrapper>
        </Section>
      </Content>
    </CoreLayout>
  );
}

export default Dashboard;
