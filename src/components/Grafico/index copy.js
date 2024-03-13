import h from "hyperscript";
import helpers from "hyperscript-helpers";
import './grafico.scss'
import Imagem from '../../assets/imagem-central2.png'
import Imagem2 from '../../assets/imagem-central.png'

const { section, div, img } = helpers(h);

const gra = div({className: 'base_grafico'}, [
    div({className: 'nome'}, 'Cachorro'),
    div({className: 'valor'}, [
        div({className: 'barra'}, [img({src: Imagem})])
    ]),
    div({className: 'nome'}, 'Gato'),
    div({className: 'valor'}, [
        div({className: 'barra'}, [img({src: Imagem2})])
    ]),
])

export default gra;