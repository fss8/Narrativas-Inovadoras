import h from "hyperscript";
import helpers from "hyperscript-helpers";
import './media.scss'
import Imagem from '../../assets/imagem-central3.png'

const { div, img } = helpers(h);

const Media = div({className: 'ni-media'}, img({src: Imagem}))

export default Media;