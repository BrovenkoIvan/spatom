import React, { memo } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { Colors } from '../../styles';

interface SvgBackupProps {
  fill?: string;
}

export const SvgBackup = memo<SvgBackupProps>(({ fill = Colors.BLACK }) => (
  <Svg enable-background="new 0 0 24 24" height="100%" viewBox="0 0 24 24" width="100%">
    <G>
      <Path d="M0,0h24v24H0V0z" fill="none" />
    </G>
    <G>
      <Path
        d="M19,11c0-3.87-3.13-7-7-7C8.78,4,6.07,6.18,5.26,9.15C2.82,9.71,1,11.89,1,14.5C1,17.54,3.46,20,6.5,20 c1.76,0,10.25,0,12,0l0,0c2.49-0.01,4.5-2.03,4.5-4.52C23,13.15,21.25,11.26,19,11z M13,13v2c0,0.55-0.45,1-1,1h0 c-0.55,0-1-0.45-1-1v-2H9.21c-0.45,0-0.67-0.54-0.35-0.85l2.79-2.79c0.2-0.2,0.51-0.2,0.71,0l2.79,2.79 c0.31,0.31,0.09,0.85-0.35,0.85H13z"
        fill={fill}
      />
    </G>
  </Svg>
));
