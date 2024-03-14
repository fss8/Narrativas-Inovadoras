import h from "hyperscript";
import helpers from "hyperscript-helpers";
import './menu.scss'
import '../../styles/theme.scss'
import Imagem from '../../assets/imagemtopo.png'

const { div, h1, hr, img } = helpers(h);

const Menu = div({className: 'ni-header'}, 
    [
        div({className: 'ni-menu' }, [
            hr(),
            div({className: 'ni-logo'}, [
                h1({className: 'ni-logo-font1'}, 'CONTRA'),
                h1({className: 'ni-logo-font2'}, 'CULTURA')
            ])
    ]), 
        div({className: 'ni-onda'}, img({src: Imagem}))
    ]);

export default Menu;