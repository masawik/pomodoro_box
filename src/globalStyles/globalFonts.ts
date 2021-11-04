import { createGlobalStyle } from 'styled-components'
import SFUIDisplayRegularWoff from './../assets/fonts/SFUI/SFUIDisplay-Regular.woff'
import SFUIDisplayRegularWoff2 from './../assets/fonts/SFUI/SFUIDisplay-Regular.woff2'
import SFUIDisplayBoldWoff from './../assets/fonts/SFUI/SFUIDisplay-Bold.woff'
import SFUIDisplayBoldWoff2 from './../assets/fonts/SFUI/SFUIDisplay-Bold.woff2'
import SFUIDisplayLightWoff from '../assets/fonts/SFUI/SFUIDisplay-Light.woff'
import SFUIDisplayLightWoff2 from '../assets/fonts/SFUI/SFUIDisplay-Light.woff2'
import SFUIDisplayThinWoff from '../assets/fonts/SFUI/SFUIDisplay-Thin.woff'
import SFUIDisplayThinWoff2 from '../assets/fonts/SFUI/SFUIDisplay-Thin.woff2'


const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'SF UI Display';
    src: local('SF UI Display'), local('SF UI Display'),
    url(${SFUIDisplayRegularWoff2}) format('woff2'),
    url(${SFUIDisplayRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'SF UI Display';
    src: local('SF UI Display'), local('SF UI Display'),
    url(${SFUIDisplayBoldWoff2}) format('woff2'),
    url(${SFUIDisplayBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'SF UI Display';
    src: local('SF UI Display'), local('SF UI Display'),
    url(${SFUIDisplayLightWoff2}) format('woff2'),
    url(${SFUIDisplayLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF UI Display';
    src: local('SF UI Display'), local('SF UI Display'),
    url(${SFUIDisplayThinWoff2}) format('woff2'),
    url(${SFUIDisplayThinWoff}) format('woff');
    font-weight: 200;
    font-style: normal;
  }
`

export default GlobalFonts