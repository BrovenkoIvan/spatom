import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../styles';

interface SvgScheduleProps {
  fill?: string;
}

export const SvgSchedule = memo<SvgScheduleProps>(({ fill = Colors.GRAY }) => (
  <Svg height="100%" viewBox="0 0 24 24" width="100%" fill={fill}>
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M20 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H7V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 18H5c-.55 0-1-.45-1-1V8h16v12c0 .55-.45 1-1 1z" />
  </Svg>
));
