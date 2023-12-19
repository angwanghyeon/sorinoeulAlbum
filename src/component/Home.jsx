import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="container">
      {/* <nav className="nav-bar">
        <img src="image/logo.png" alt="소리노을-로고" className="logo" />
      </nav> */}
      <div className="album-cover-box">
        <img
          src="image/png/main-cover.png"
          alt="앨범 커버"
          className="album-cover"
        />
      </div>
      <div className="box1">
        <div className="lee-box">
          <img src="image/png/lee.png" alt="이영훈 목사님" className="lee" />
          <img src="image/png/lee-sign.png" alt="싸인" className="lee-sign" />
        </div>
        <div className="speech-box">
          할렐루야! <br />
          소리노을의 찬양을 통해 많은 사람들이 위로받고 주님께 돌아오는 일들이
          있기를 예수님의 이름으로 축복합니다. 교회학교 소리노을 찬양팀을
          사랑하고 축복합니다. <br></br>
          이영훈 목사 <br></br>
          (여의도순복음교회 담임)
        </div>
      </div>
      <div className="sorinoeul-introduction">
        소리노을은 1984년부터 지금까지 여의도순복음교회 교회학교 고등부 예배를
        섬기고 있는 찬양팀입니다. <br />
        첫 앨범 '내 안에 새겨진'에는 다음 세대인 청소년들이 찬양을 통해 하나님을
        더 깊이 만나고 더 기쁘게 예배하기를 소망하는 마음을 담았습니다. <br />
        앨범의 찬양들이 어떠한 예배의 자리에서도 우리 안에 새겨진 주님의 사랑을
        다시 기억하게 하고 우리 모두가 하나님께서 찾으시는 예배자로 결단하는
        은혜로 이어지기를 간절히 소망합니다.
      </div>
      <div className="track-list-container">
        <h1 className="Track-h1">Track-List</h1>
        <div className="track-list">
          <div className="track-number">01.</div>
          <div>
            <div>
              <b>내 안에 새겨진</b> 여건희
            </div>
            <div>작사.작곡 여건희 / 편곡 최현경 신연태</div>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1-CVojoo-4WkXBWRh-XjhK5a0kg5vdqcR/view?usp=sharing">
              <img src="image/png/mp3.png" alt="mp3" className="mp3" />
            </a>
          </div>
          <div>
            <img src="image/png/document.png" alt="악보" className="document" />
          </div>
        </div>
        <div className="track-content">
          <b>코러스</b> 김예은 도현희 도소희 김현종 여환희 남명준 김주영 유이레
          황주영 <br />
          <b>베이스</b> 이정훈 <br />
          <b>드럼</b> 신연태 <br />
          <b>일렉기타</b> 이삭 <br />
          <b>어쿠스틱기타</b> 정이레 <br />
          <b>피아노</b> 최현경 <br />
          <b>키보드</b> 최현경 <br />
        </div>
        <div className="track-list">
          <div className="track-number">02.</div>
          <div>
            <div>
              <b>사랑의 주님</b> 고동환
            </div>
            <div>작사.작곡 고동환 / 편곡 이지혜</div>
          </div>
          <div>
            <img src="image/png/mp3.png" alt="mp3" className="mp3" />
          </div>
          <div>
            <img src="image/png/document.png" alt="악보" className="document" />
          </div>
        </div>
        <div className="track-content">
          <b>코러스</b> 양희경 김예은 여건희
          <br />
          <b>베이스</b> 안광현 <br />
          <b>드럼</b> 신연태 <br />
          <b>일렉기타</b> 최현규 <br />
          <b>어쿠스틱기타</b> 정이레 <br />
          <b>피아노</b> 이지혜 <br />
          <b>키보드</b> 안예원 <br />
        </div>
        <div className="track-list">
          <div className="track-number">03.</div>
          <div>
            <div>
              <b>아 하나님의 은혜로</b> 김예은
            </div>
            <div>찬송가 310장 / 편곡 최현경 신연태</div>
          </div>
          <div>
            <img src="image/png/mp3.png" alt="mp3" className="mp3" />
          </div>
          <div>
            <img src="image/png/document.png" alt="악보" className="document" />
          </div>
        </div>
        <div className="track-content">
          <b>베이스</b> 이정훈 <br />
          <b>드럼</b> 신연태 <br />
          <b>일렉기타</b> 이삭 <br />
          <b>피아노</b> 최현경 <br />
          <b>키보드</b> 최현경 <br />
        </div>
        <div className="track-list">
          <div className="track-number">04.</div>
          <div>
            <div>
              <b>예수님 때문에</b> 도현희
            </div>
            <div>작사.작곡 김도훈 / 편곡 최현경 최현규 신연태</div>
          </div>
          <div>
            <img src="image/png/mp3.png" alt="mp3" className="mp3" />
          </div>
          <div>
            <img src="image/png/document.png" alt="악보" className="document" />
          </div>
        </div>
        <div className="track-content">
          <b>코러스</b> 양희경 김예은 여건희 도소희 김소린 남명준 여환희 유이레
          황주영
          <br />
          <b>키즈 코러스</b> 박성민 박소율 장하준 장하임 <br />
          <b>베이스</b> 황지성 <br />
          <b>드럼</b> 신연태 <br />
          <b>일렉기타</b> 최현규 <br />
          <b>피아노</b> 최현경 <br />
          <b>키보드</b> 최현경 <br />
        </div>
        <div className="track-list">
          <div className="track-number">05.</div>
          <div>
            <div>
              <b>생명나무 (부제-한나의 기도)</b> 윤소정
            </div>
            <div>작사.작곡 서정완 / 편곡 김소린</div>
          </div>
          <div>
            <img src="image/png/mp3.png" alt="mp3" className="mp3" />
          </div>
          <div>
            <img src="image/png/document.png" alt="악보" className="document" />
          </div>
        </div>
        <div className="track-content">
          <b>코러스</b> 양희경 김예은
          <br />
          <b>베이스</b> 황지성 <br />
          <b>드럼</b> 김승연 <br />
          <b>일렉기타</b> 최현규 <br />
          <b>피아노</b> 김소린 <br />
          <b>키보드</b> 김소린 <br />
        </div>
        <div className="track-list">
          <div className="track-number">06.</div>
          <div>
            <div>
              <b>주를 향한 그리움</b> 양희경
            </div>
            <div>작사.작곡 김도훈 / 편곡 이지혜</div>
          </div>
          <div>
            <img src="image/png/mp3.png" alt="mp3" className="mp3" />
          </div>
          <div>
            <img src="image/png/document.png" alt="악보" className="document" />
          </div>
        </div>
        <div className="track-content">
          <b>코러스</b> 고동환 김예은 여건희 도현희 도소희 김현종 남명준 김주영
          여환희 유이레 황주영
          <br />
          <b>베이스</b> 안광현 <br />
          <b>드럼</b> 신연태 <br />
          <b>일렉기타</b> 최현규 <br />
          <b>피아노</b> 이지혜 <br />
          <b>키보드</b> 안예원 <br />
        </div>
        <div className="track-list" style={{ paddingTop: "20px" }}>
          <div className="track-number">07.</div>
          <div>
            <div>
              <b>내 안에 새겨진(Inst.)</b>
            </div>
          </div>
          <div>
            <img src="image/png/mp3.png" alt="mp3" className="mp3" />
          </div>
        </div>
        <div className="track-list">
          <div className="track-number">08.</div>
          <div>
            <div>
              <b>사랑의 주님(Inst.)</b>
            </div>
          </div>
          <div>
            <img src="image/png/mp3.png" alt="mp3" className="mp3" />
          </div>
        </div>
        <div className="track-list">
          <div className="track-number">09.</div>
          <div>
            <div>
              <b>아 하나님의 은혜로(Inst.)</b>
            </div>
          </div>
          <div>
            <img src="image/png/mp3.png" alt="mp3" className="mp3" />
          </div>
        </div>
        <div className="track-list">
          <div className="track-number">10.</div>
          <div>
            <div>
              <b>예수님 때문에(Inst.)</b>
            </div>
          </div>
          <div>
            <img src="image/png/mp3.png" alt="mp3" className="mp3" />
          </div>
        </div>
        <div className="track-list">
          <div className="track-number">11.</div>
          <div>
            <div>
              <b>생명나무(Inst.)</b>
            </div>
          </div>
          <div>
            <img src="image/png/mp3.png" alt="mp3" className="mp3" />
          </div>
        </div>
        <div className="track-list">
          <div className="track-number">12.</div>
          <div>
            <div>
              <b>주를 향한 그리움(Inst.)</b>
            </div>
          </div>
          <div>
            <img src="image/png/mp3.png" alt="mp3" className="mp3" />
          </div>
        </div>
        <p style={{ fontSize: "smaller", textAlign: "center", margin: "20px" }}>
          이 음반에 수록된 찬송가는 (재)한국찬송가공회의 허락을 받은 것입니다.{" "}
          <br />
          승인번호 : NO.41-067
        </p>
      </div>
      <div className="album-credit">
        <h1>ALBUM CREDIT</h1>
        <div className="credit-p">
          <b>Executive Producer</b>박진구
        </div>
        <div className="credit-p">
          <b>Producer </b>양희경
        </div>
        <div className="credit-p">
          <b>Music Director </b>이지혜 최현경 김소린
        </div>
        <div className="credit-p" id="credit-s">
          <b>Vocal Director & Chorus Arrangement </b>이지혜 최현경 김소린 양희경
        </div>
        <div className="credit-p">
          <b>Music Director </b>이지혜 최현경 김소린
        </div>
        <div className="credit-p">
          <b>E.Guitar </b>이삭 최현규
        </div>
        <div className="credit-p">
          <b>A.Guitar </b>정이레
        </div>
        <div className="credit-p">
          <b>E.Bass </b>이정훈 안광현 황지성
        </div>
        <div className="credit-p">
          <b>Drums </b>신연태 김승연
        </div>
        <div className="credit-p">
          <b>Piano </b>이지혜 최현경 김소린
        </div>
        <div className="credit-p">
          <b>Keyboard </b>이지혜 최현경 김소린 안예원
        </div>
        <div className="credit-p">
          <b>Vocals </b>양희경 윤소정 고동환 김예은 여건희 도현희
        </div>
        <div className="credit-p">
          <b>Chorus </b>양희경 고동환 여건희 도현희 도소희 김현종 여환희 김소린
          남명준 김주영 유이레 황주영
        </div>
        <div className="credit-p">
          <b>Kids Chorus </b>박성민 박소율 장하준 장하임
        </div>
        <div className="credit-p">
          <b>String & Brass programing by Room10 </b>해빈 준경
        </div>
        <div className="credit-p">
          <b>Recording Director </b>오경환 @Sorinoeul Studio
        </div>
        <div className="credit-p">
          <b>Recorded Engineer </b>김택진 @Sorinoeul Studio
        </div>
        <div className="credit-p">
          <b>Mixed by </b>장영환 @Sorinoeul Studio
        </div>
        <div className="credit-p">
          <b>Mastered by </b>박정언 @Honey Butter Studio
        </div>
        <div className="credit-p">
          <b>Art Work & Design </b>김소린
        </div>
      </div>
      <div className="application">
        <h1 className="application-title">소리노을 지원하기</h1>
        <div className="sono-char-box">
          <img
            src="image/png/sono-char.png"
            alt="소노 이미지"
            className="sono-char"
          />
        </div>
        <div className="application-content">
          소리노을에서는 다음과 같은 봉사를 합니다.
          <p>
            예배찬양 인도 <br />- 매주 9시, 11시 두번 드리는 예배를 여는 찬양을
            인도합니다.
          </p>
          <p>
            🎵헌금송, 워십 <br />- 캠프, 절기 예배 때마다 찬양과 워십댄스를
            합니다.
          </p>
          <p>
            🎹악기 연주 <br />- 베이스 기타, 드럼, 일렉기타, 키보드와 같은
            악기로 찬양을 연주하고 연습합니다.
          </p>
          <p>
            🎤노래 <br />- 인도자 선생님과 함께 찬양을 합니다. 테너, 알토,
            멜로디같이 파트를 나눠 특화된 연습을 합니다.
          </p>
          <p>
            🙆워십, 율동 <br />- 예배 때 드려지는 찬양의 율동과 헌금송으로
            드려지는 워십댄스를 연습하고 예배를 준비합니다. 노래와 악기 연주,
            춤으로 찬양하며 예배에 헌신하고 봉사할 친구들의 많은 지원을
            바랍니다.
          </p>
          <p>
            문의 : sorinoeul@gmail.com <button>소리노을 원서 다운로드</button>
          </p>
        </div>
      </div>
      <div className="high-school-box">
        <h1>고등부 예배 안내</h1>
        <div className="high-school-image-box">
          <img src="image/png/highschool12.png" alt="고등12부" className="high-school-image" />
          <div>
            <ul>
                <li>대상 : 고등학교 1,2학년</li>
                <li>예배장소 : 제 2교육관 6층 야고보 성전</li>
                <li>예배시간 : 1부 8시 30분, 2부 10시 30분</li>
                <li>YOUTUBE : </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
