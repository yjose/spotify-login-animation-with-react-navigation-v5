 import {Easing} from 'react-native';

import {
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

 const AnimationSpec = {
   animation: 'timing',
   config: {
     duration: 2000,
    easing: Easing.ease,
  },
};
export const SpotifyTransition = {
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({current, next}) => {
    return {
      cardStyle: {
        opacity: next
          ? next.progress.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [1, 1, 0],
            })
          : current.progress.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0, 0, 1],
            }),
        transform: [
          {
            rotateY: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '180deg'],
                })
              : current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['180deg', '0deg'],
                }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    };
  },
};
