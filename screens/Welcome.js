import React, {useState} from 'react';


import { InnerContainer, PageLogo, WelcomeImage} from './../components/styles';

import {View} from 'react-native';

const Welcome = () => {
          const [hidePassword, setHidePassword ] = useState(true);

          return (
                    <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/images/logo.png')} />
                    </InnerContainer>
          );
}


export default Welcome;
