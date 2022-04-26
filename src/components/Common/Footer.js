import './Footer.scss';

const Footer = () => {
  const footerBullet = [
    {
      id: 1,
      name: 'footerBulletOne',
      icon: 'fa-solid fa-check',
      text: "Shop the world's largest wine marketplace",
      span: 'footerBulletInfo',
    },
    {
      id: 2,
      name: 'footerBulletTwo',
      icon: 'fa-brands fa-whatsapp',
      text: 'Our support team is always here to help',
      span: 'footerBulletInfo',
    },
    {
      id: 3,
      name: 'footerBulletThree',
      icon: 'fa-solid fa-truck',
      text: 'Careful delivery right to your doorstep',
      span: 'footerBulletInfo',
    },
    {
      id: 4,
      name: 'footerBulletFour',
      icon: 'fa-regular fa-handshake',
      text: 'Check honest reviews of any wine before purchase',
      span: 'footerBulletInfo',
    },
  ];
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
                {footerBullet.map(({ id, name, icon, text, span }) => {
                  return (
                    <div className={name} key={id}>
                      <div>
                        <i className={icon}></i>
                      </div>
                      <span className={span}>{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <section className="b">
          <div className="footerBottom">
            <div className="downloadContainer">
              <div className="downloadAppBox">
                <div className="downloadApp">
                  <i className="fa-solid fa-apple-whole"></i>
                </div>
                <div className="downloadInfo">
                  <span>Download on the</span>
                  <span className="appleStore">Apple Store</span>
                </div>
              </div>
              <div className="downloadAppBox">
                <div className="downloadApp">
                  <i className="fa-brands fa-android"></i>
                </div>
                <div className="downloadInfo">
                  <span>Download on the</span>
                  <span className="appleStore">Galaxy Store</span>
                </div>
              </div>

              <div className="footerSocialCopyright">
                <div className="footerSns">
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
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
