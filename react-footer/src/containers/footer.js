import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/footer";
export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Marketing</Footer.Link>
            <Footer.Link href="#">Consulting</Footer.Link>
            <Footer.Link href="#">Development</Footer.Link>
            <Footer.Link href="#">Design</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">United State</Footer.Link>
            <Footer.Link href="#">United Kingdom</Footer.Link>
            <Footer.Link href="#">Austrilia</Footer.Link>
            <Footer.Link href="#">Support</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> Youtube
            </Footer.Link>
            <Footer.Link href="#">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
