import Logo from "../../assets/images/logo.svg";
import styles from "./TopNav.module.css";
import shareIcon from "../../assets/images/ic_share.svg";

const TopNav = () => {
  const APP_DOWNLOAD_LINK =
    "https://open.shinhansec.com/phone/goM.jsp?p=OTUxMCYmJiZTJiY*&amp;v=2";

  const onClickShareButton = () => {
    // TODO: [미션] 현재 사이트 링크 클립보드 복사하고 "복사되었습니다" 알럿 띄우기
    const currentUrl = window.document.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("주소가 복사되었습니다.");
      })
      .catch((err) => alert("실패했습니다."));
  };

  return (
    <div className={styles.container}>
      {/* 로고 */}
      <img src={Logo} alt="logo" />
      {/* --------- 오른쪽 섹션 ------ */}
      <div className={styles.rightButtonContainer}>
        {/*앱 다운로드 버튼 */}
        <a href={APP_DOWNLOAD_LINK} target="_blank">
          <div className={styles.roundButton}>앱 다운로드</div>
        </a>

        {/* 공유 버튼 */}
        <div className={styles.circleButton} onClick={onClickShareButton}>
          <img src={shareIcon} alt="share" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
