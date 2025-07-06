import {
  CertWrapper,
  Card,
  Title,
  Image,
  CardBody,
  Footer,
  Issuer,
  BtnContainer,
} from './CertificateElements';
import { CertificateList } from "../../data/ProjectData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

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
              <Card key={index}>
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
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </CertWrapper>
  );
};

export default Certificate;
