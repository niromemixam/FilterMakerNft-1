import '../styles/main.scss';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';

if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

const repo = "/filtermaker-nft-1/"

const favIcon = document.getElementById('favIcon')
const css = document.getElementById('css')
const js = document.getElementById('js')

// if(process.env.NODE_ENV === "production"){
//   favIcon?.setAttribute('href', `${repo}/build/images/fav.png`)
//   css?.setAttribute('href', `${repo}/build/main.css`)
//   js?.setAttribute('src', `${repo}/build/main.js`)
// }else{
//   favIcon?.setAttribute('href', '/build/images/fav.png')
//   css?.setAttribute('href', '/build/main.css')
//   js?.setAttribute('src', '/build/main.js')
// }
  


document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<Dapp />, document.getElementById('minting-dapp'));
});
