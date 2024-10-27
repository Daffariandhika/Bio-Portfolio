import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/DaffaRiandhika.png"
            alt="Daffa Riandhika"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Halo! saya <strong>Muhammad Daffa Riandhika</strong>, Saya berasal dari Indonesia. Selama tiga tahun terakhir, Selain antusias dalam bidang teknologi, saya juga tertarik dalam dunia seni, khususnya musik dan menggambar. Gabungan antara teknologi dan seni selalu memberi saya perspektif yang segar dan inovatif dalam menghadapi tantangan di dunia digital.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Rasa ingin tahu saya tetang teknologi membawa saya untuk memilih Sistem Informasi sebagai bidang studi di Universitas Gunadarma. Salah satu momen paling membanggakan saya adalah meraih juara 1 dalam kompetisi artikel ilmiah USB di tahun pertama saya.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Saya tertarik dalam pengembangan web, terutama ketika mempelajari HTML, Javascript dan CSS, Sampai saat ini saya terus mengasah kemampuan ini. Selain itu, sesekali saya ikut dalam kontribusi pada proyek open-source agar dapat meningkatkan kemampuan coding dan mengajarkan nilai kolaborasi dalam komunitas developer dalam diri saya.
              <div className="tagline2">
                Soft Skill:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
