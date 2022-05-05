import './Footer.scss';

const FOOTER_BULLET_DATA = [
  {
    id: 1,
    name: 'footerBulletStyle',
    icon: 'fa-solid fa-check',
    text: "Shop the world's largest wine marketplace",
    span: 'footerBulletInfo',
  },
  {
    id: 2,
    name: 'footerBulletStyle',
    icon: 'fa-brands fa-whatsapp',
    text: 'Our support team is always here to help',
    span: 'footerBulletInfo',
  },
  {
    id: 3,
    name: 'footerBulletStyle',
    icon: 'fa-solid fa-truck',
    text: 'Careful delivery right to your doorstep',
    span: 'footerBulletInfo',
  },
  {
    id: 4,
    name: 'footerBulletStyle',
    icon: 'fa-regular fa-handshake',
    text: 'Check honest reviews of any wine before purchase',
    span: 'footerBulletInfo',
  },
];

const FOOTER_MAP_DATA = [
  {
    id: 1,
    name: 'APP',
  },
  {
    id: 2,
    name: 'About',
  },
  {
    id: 3,
    name: 'Contact',
  },
  {
    id: 4,
    name: 'Drink News',
  },
  {
    id: 5,
    name: 'Drink Style Awards',
  },
  {
    id: 6,
    name: 'Merchants',
  },
  {
    id: 7,
    name: 'Sponsorships',
  },
  {
    id: 8,
    name: 'Become an Affiliate',
  },
  {
    id: 9,
    name: 'careers',
  },
  {
    id: 10,
    name: 'Terms of Use',
  },
  {
    id: 11,
    name: 'Content of Policy',
  },
  {
    id: 12,
    name: 'Sitemap',
  },
];
const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerTopContainer">
        <div className="footerTop">
          <div className="footerTopMaxWidth">
            <h1 className="footerHeader">
              Trusted by millions to discover and buy the right drink every
              time.
            </h1>
            <div className="footerBullet">
              {FOOTER_BULLET_DATA.map(({ id, name, icon, text, span }) => {
                return (
                  <div className={name} key={id}>
                    <div>
                      <i className={icon} />
                    </div>
                    <span className={span}>{text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <section className="footerBottom">
        <div className="footerBottomMaxWidth">
          <div className="downloadContainer">
            <div className="downloadAppBox">
              <div className="downloadApp">
                <i className="fa-solid fa-apple-whole" />
              </div>
              <div className="downloadInfo">
                <span>Download on the</span>
                <span className="appleStore">Apple Store</span>
              </div>
            </div>
            <div className="downloadAppBox">
              <div className="downloadApp">
                <i className="fa-brands fa-android" />
              </div>
              <div className="downloadInfo">
                <span>Download on the</span>
                <span className="appleStore">Galaxy Store</span>
              </div>
            </div>

            <div className="footerSocialCopyright">
              <div className="footerSns">
                <i class="fa-brands fa-github" />
                <i className="fa-brands fa-instagram" />
                <i className="fa-brands fa-facebook" />
                <i className="fa-brands fa-twitter" />
              </div>
              <span className="footerCopyright">@Chuihano 2022</span>
            </div>
          </div>

          <div className="footerMapSocial">
            <div className="footerMap">
              {FOOTER_MAP_DATA.map(({ id, name }) => {
                return (
                  <a link="#" key={id}>
                    {name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
