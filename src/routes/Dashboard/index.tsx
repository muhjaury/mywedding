"use client";

import { kissingSeason } from "@/assets/font";
import { Content, Section } from "@/components";
import CoreLayout from "@/layout/CoreLayout";
import WEDDING_PICTURE from "./../../assets/img/muslim-wedding.png";
import {
  A,
  ArabicPrimary,
  ContentRight1,
  ContentWrapper,
  DescriptionPrimary,
  IFrame,
  Img,
  MapsWrapper,
} from "./_dashboard";

function Dashboard() {
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
            <div>
              <DescriptionPrimary>Bismillahirrahmanirrahim</DescriptionPrimary>
              <DescriptionPrimary>
                Assalamu'alaikum Warahmatullahi Wabarakatuh
              </DescriptionPrimary>
              <p>Maha Suci Allah Subhanahu Wa Ta'ala,</p>
              <p>yang telah menciptakan makhluk-Nya berpasang-pasangan,</p>
              <p>Ya Allah perkenankanlah kami merangkaikan cinta kasih</p>
              <p>yang Engkau ciptakan kepada kami :</p>
              <p>Muhammad Jaury, S.Tr.T.</p>
              <p>Ary</p>
              <p>Dengan</p>
              <p>Kiki Astrina, S.Pd.</p>
              <p>Kiki</p>
              <p>
                Untuk melaksanakan syariat agama-Mu dan mengikuti sunnah
                Rasul-Mu dalam membentuk ikatan keluarga yang Sakinah, Mawaddah,
                Warahmah dengan harapan memperoleh keturunan yang sholeh,
                sholehah dan bertaqwa kepada-Mu
              </p>
            </div>
            <Img src={WEDDING_PICTURE} />
          </ContentWrapper>
        </Section>
        <Section>
          <MapsWrapper>
            <IFrame
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3979.9215985273427!2d119.636662!3d-4.036422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sid!4v1738825465463!5m2!1sen!2sid"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <A
              href="https://maps.app.goo.gl/rc2UTiXtQUFf5fTY6"
              className={kissingSeason.className}
              target="_blank"
            >
              Buka Maps
            </A>
          </MapsWrapper>
        </Section>
      </Content>
    </CoreLayout>
  );
}

export default Dashboard;
