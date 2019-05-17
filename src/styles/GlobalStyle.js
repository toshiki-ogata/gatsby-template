import { createGlobalStyle } from 'styled-components'
import styles from './variables';

const GlobalStyle = createGlobalStyle`
  @import url(//fonts.googleapis.com/earlyaccess/notosansjp.css);
  @font-face {
    font-family: 'Noto Sans CJK JP';
    font-style: normal;
    font-weight: 400;
    src: local("Noto Sans CJK JP Regular"),
        url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.otf) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans CJK JP';
    font-style: normal;
    font-weight: 500;
    src: local("Noto Sans CJK JP Medium"),
        url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Medium.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Medium.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Medium.otf) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans CJK JP';
    font-style: normal;
    font-weight: 700;
    src: local("Noto Sans CJK JP Bold"),
        url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Bold.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Bold.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Bold.otf) format('opentype');
  }
  html {
    box-sizing: border-box;
    overflow-y: scroll;
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: "Noto Sans", "Noto Sans CJK JP", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
    color: ${styles.baseColor};
    line-height: ${styles.lineHeight_sm};
    font-size: 1.4rem;
  }

  *,
  ::before,
  ::after {
    background-repeat: no-repeat;
    box-sizing: inherit;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  * {
    padding: 0;
    margin: 0;
  }

 
  audio:not([controls]) {
    display: none;
    height: 0;
  }

  hr {
    overflow: visible;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  summary {
    display: list-item;
  }

  small {
    font-size: 80%;
  }

  [hidden],
  template {
    display: none;
  }

  abbr[title] {
    border-bottom: 1px dotted;
    text-decoration: none;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
  }

  b,
  strong {
    font-weight: bolder;
  }

  dfn {
    font-style: italic;
  }

 
  mark {
    background-color: #ff0;
    color: #000;
  }

 
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  input {
    border-radius: 0;
  }

 
  button,
  [type="button"],
  [type="reset"],
  [type="submit"],
  [role="button"] {
    cursor: pointer;
  }

 
  [disabled] {
    cursor: default;
  }

  [type="number"] {
    width: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
  }

  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
  }

  optgroup {
    font-weight: bold;
  }

  button {
    overflow: visible;
  }

 
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: 0;
    padding: 0;
  }

 
  button:-moz-focusring,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    outline: 1px dotted ButtonText;
  }

  button,
  html [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button,
  select {
    text-transform: none;
  }

 
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border-style: none;
    color: inherit;
  }

 
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  select::-ms-value {
    color: currentColor;
  }

  legend {
    border: 0;
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  img {
    border-style: none;
  }

 
  progress {
    vertical-align: baseline;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

 
  @media screen {
    [hidden~="screen"] {
      display: inherit;
    }
    [hidden~="screen"]:not(:active):not(:focus):not(:target) {
      position: absolute !important;
      clip: rect(0 0 0 0) !important;
    }
  }

 
  [aria-busy="true"] {
    cursor: progress;
  }

 
  [aria-controls] {
    cursor: pointer;
  }

 
  [aria-disabled] {
    cursor: default;
  }

 

  ::-moz-selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
  }

  ::selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
  }
`

export default GlobalStyle