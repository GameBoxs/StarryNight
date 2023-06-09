import React from 'react';
import { Fade } from 'react-awesome-reveal';
import * as MainStyle from '../../Page/Main_Style';
import * as PolluStyle from './MainLightPollution_Style';

function MainLightPollution() {
  return (
    <MainStyle.Container>
      <PolluStyle.MainLightPollution>
        <PolluStyle.LPLeftBox>
          <Fade direction="left" duration={1500}>
            <PolluStyle.LPImgBox1>
              <PolluStyle.LPImg src="assets/pollution/lightpollution3.jpg" />
            </PolluStyle.LPImgBox1>
          </Fade>
        </PolluStyle.LPLeftBox>
        <PolluStyle.LPRightBox>
          <Fade direction="right" duration={1500}>
            <PolluStyle.LPText1>
              광공해가 제한하는 <MainStyle.Highlight>도시의 별</MainStyle.Highlight>
            </PolluStyle.LPText1>
          </Fade>
          <Fade direction="right" duration={1500}>
            <PolluStyle.LPText2>인간에 의해 발생된, 과잉 또는 필요 이상의 빛에 의한 공해</PolluStyle.LPText2>
          </Fade>
          {/* </MainStyle.LPText1> */}
        </PolluStyle.LPRightBox>
        {/* </MainStyle.LPBox1> */}
      </PolluStyle.MainLightPollution>
    </MainStyle.Container>
  );
}

export default MainLightPollution;
