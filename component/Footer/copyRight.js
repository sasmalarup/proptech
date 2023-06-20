import React from "react";
import Image from "next/image";
import Link from "next/link";
import facebook from '../../public/images/facebook.png'
import twitter from '../../public/images/twitter-icon.png'
import instagram from '../../public/images/Instagram-Logo.png'
import linkedin from '../../public/images/linkedin-icon.png'
import youtube from '../../public/images/youtube-icon.png'
import "./styles.scss";

function CopyRight() {

  return (
    <div className="copyright width-100">
      <div className="copyrightContent">
        <p> © 2022. All Rights Reserved. <br/><span>Powered by I-MAP WEB SOLUTIONS</span></p>
      </div>
      <div className="footerSocial">
          <ul>
              <li>
                  <Link href={'hello'} style={{marginLeft: '8px'}}>
                      <Image
                          src={facebook}
                          width={24}
                          height={24}
                          alt="logo"
                      />
                  </Link>
                  <Link href={'hello'} style={{marginLeft: '8px'}}>
                      <Image
                          src={twitter}
                          width={24}
                          height={24}
                          alt="logo"
                      />
                  </Link>
                  <Link href={'hello'} style={{marginLeft: '8px'}}>
                      <Image
                          src={instagram}
                          width={24}
                          height={24}
                          alt="logo"
                      />
                  </Link>
                  <Link href={'hello'} style={{marginLeft: '8px'}}>
                      <Image
                          src={linkedin}
                          width={24}
                          height={24}
                          alt="logo"
                      />
                  </Link>
                  <Link href={'hello'} style={{marginLeft: '8px'}}>
                      <Image
                          src={youtube}
                          width={24}
                          height={24}
                          alt="logo"
                      />
                  </Link>
              </li>
          </ul>
      </div>
    </div>
  );
}

export default CopyRight;

