import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerTopContainer">
          <div className="footerTop">
            <div className="a">
              <h1 className="footerHeader">
                Trusted by millions to discover and buy the right drink every
                time.
              </h1>
              <div className="footerBullet">
                <div className="footerBulletOne">
                  <div>
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <span className="footerBulletInfo">
                    Shop the world's largest wine marketplace
                  </span>
                </div>
                <div className="footerBulletTwo">
                  <div>
                    <i class="fa-brands fa-whatsapp"></i>
                  </div>
                  <span className="footerBulletInfo">
                    Our support team is always here to help
                  </span>
                </div>
                <div className="footerBulletThree">
                  <div>
                    <i class="fa-solid fa-truck"></i>
                  </div>
                  <span className="footerBulletInfo">
                    Careful delivery right to your doorstep
                  </span>
                </div>
                <div className="footerBulletFour">
                  <div>
                    <i class="fa-regular fa-handshake"></i>
                  </div>
                  <span className="footerBulletInfo">
                    Check honest reviews of any wine before purchase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="b">
          <div className="footerBottom">
            <div className="downloadContainer">
              <div className="downloadAppBox">
                <div className="downloadApp">
                  <i class="fa-solid fa-apple-whole"></i>
                </div>
                <div className="downloadInfo">
                  <span>Download on the</span>
                  <span className="appleStore">Apple Store</span>
                </div>
              </div>
              <div className="downloadAppBox">
                <div className="downloadApp">
                  <i class="fa-brands fa-android"></i>
                </div>
                <div className="downloadInfo">
                  <span>Download on the</span>
                  <span className="appleStore">Galaxy Store</span>
                </div>
              </div>

              <div className="footerSocialCopyright">
                <div className="footerSns">
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <span className="footerCopyright">@Chuihano 2022</span>
              </div>
            </div>

            <div className="footerMapSocial">
              <div className="footerMap">
                <a link="#">App</a>
                <a link="#">About</a>
                <a link="#">Contact</a>
                <a link="#">Press</a>
                <a link="#">Wine News</a>
                <a link="#">Wine Style Awards</a>
                <a link="#">Merchants</a>
                <a link="#">Sponsorships</a>
                <a link="#">Become an Affiliate</a>
                <a link="#">careers</a>
                <a link="#">Terms of Use</a>
                <a link="#">Content Policy</a>
                <a link="#">Sitemap</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
