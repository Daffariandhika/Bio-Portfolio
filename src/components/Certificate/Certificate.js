import {
  CertWrapper,
  Card,
  Title,
  Image,
  CardBody,
  Footer,
  Issuer,
  PopUp,
  BtnContainer,
} from './CertificateElements';
import { CertificateList } from "../../data/ProjectData";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const MotionCard = motion(Card);

function Certificate() {
  return (
    <CertWrapper id='certificate'>
      <div className="Container">
        <div className="SectionTitle">Certification</div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            640: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 2
            }
          }}
        >
          {CertificateList.map((cert, index) => (
            <SwiperSlide key={index}>
              <MotionCard
                key={index}
                variants={PopUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <Image src={cert.image} alt={cert.title} />
                <Title>{cert.title}</Title>
                <CardBody>{cert.description}</CardBody>
                <BtnContainer>
                  <a
                    className="PrimaryBtn"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </BtnContainer>
                <Footer>
                  <Issuer>{cert.issuer}</Issuer>
                  <span>{cert.date}</span>
                </Footer>
              </MotionCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </CertWrapper>
  );
};

export default Certificate;
