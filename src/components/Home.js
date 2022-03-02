import { Link } from "react-router-dom";
import '../css/Home.css'
import _headMenu from "./_headMenu";
import imgHome from "../img/Home_img.png";

function Home() {
  return (
    <>
      <div className="container">
        <_headMenu/>
        <main>
          <div className="main_container">
            <div className="img_container">
              <img src={imgHome} alt="" />
            </div>
            <div className="main_text_container">
              <span>당신의 유니콘은 어디쯤입니까?</span>
              <span>
                내 사업이 잘 되고 있는지 확인하고 싶다면, 유니콘 판별기를
                사용해보세요.
              </span>
            </div>
            <span className="btn">
              <a>유니콘 판별기 사용하기</a>
            </span>
            <div className="sub_info">
              <div className="sub_1">
                <span>53 +million</span>
                <br />
                <span>Company</span>
              </div>
              <div className="sub_2">
                <span>53 +million</span>
                <br />
                <span>Company</span>
              </div>
              <div className="sub_3">
                <span>53 +million</span>
                <br />
                <span>Company</span>
              </div>
            </div>
            <img src="" alt="" />
          </div>
        </main>
        <nav className="menu">
          <ul>
            <li>
              <a href="/">WHY</a>
            </li>
            <li>
              <a href="/">WHO</a>
            </li>
            <li>
              <a href="/">HOW</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Home;
