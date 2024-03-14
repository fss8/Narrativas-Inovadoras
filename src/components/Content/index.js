import h from "hyperscript";
import helpers from "hyperscript-helpers";
import Grafico from "../Grafico";
import './content.scss'
import Imagem from '../../assets/imageminterativa.png'
import Mapa from '../../assets/mapa/mapaGroup51.png'
import nordeste from '../../assets/mapa/mapanordeste.png'
import sudeste from '../../assets/mapa/mapasudeste.png'
import sul from '../../assets/mapa/mapasul.png'
import norte from '../../assets/mapa/mapanorte.png'
import centrooeste from '../../assets/mapa/mapacentrooeste.png'

import infnd from '../../assets/mapa/infosnordeste.png'
import infsudeste from '../../assets/mapa/infossudeste.png'
import infsul from '../../assets/mapa/infossul.png'
import infnorte from '../../assets/mapa/infosnorte.png'
import infcentro from '../../assets/mapa/infoscentro.png'

import descnd from '../../assets/mapa/descnordeste.png'
import descsudeste from '../../assets/mapa/descsudeste.png'
import descsul from '../../assets/mapa/descsul.png'
import descnorte from '../../assets/mapa/descnorte.png'
import desccentro from '../../assets/mapa/desccentro.png'

const { div, h1, h2, h3, h4, hr, img, section, area } = helpers(h);

const Content = div({className: 'ni-text-area'}, [
                    div({className: 'ni-presentation'}, [
                        hr(),
                        h1("Os desafios enfrentados pelos artistas locais no carnaval do Recife"),
                        h2('Músicos sem palco, artistas sem galerias e atores sem peça. A precarização e falta de apoio que se reserva à cultura Recifense.'),
                        h4('Texto por Alice Girão, Milena, Raquel e Raiane.'),
                        h4('Design por Tiago Finizola e João.'),
                        h4('Programação por Filipe Samuel')
                    ]),
                    h3(`Durante o carnaval, aqueles que visitam a cidade do Recife devem estar cientes de que para os moradores essa festividade representa muito mais do que apenas uma data de celebração. 
                    É nesse período que se desenrola uma das mais significativas expressões culturais que impulsiona a economia local. De acordo com dados divulgados pela Prefeitura do Recife, a cidade recebeu cerca de 3,4 milhões de foliões 
                    em 2024, gerando uma movimentação econômica de mais de R$ 2,4 bilhões e a criação de 57 mil postos de trabalho temporários. No ano de 2024, 
                    Recife também contou com uma forte presença de atrações locais nos palcos da festa, foram mais de 3 mil artistas espalhados por 49 polos, sendo 98% artistas pernambucanos.`),
                    Grafico,
                    h3(`Analisando apenas a line dos shows realizados nos palcos do Marco Zero, em polos centralizados, durante os dias: 08, 09, 10, 11, 12 e 13 de carnaval, estiveram presentes 43 artistas locais e 20 artistas de outros estados.  De fato houve uma participação maior de atrações locais, no gráfico abaixo é possível conferir a localidade de cada artista. Entretanto,  existem disparidades em relação ao tratamento dado aos artistas locais em comparação com seus colegas de outros estados. 
                    `),
                    div({className: 'interactive-grafico'}, [
                        h1('Popularidade digital de artistas no carnaval'),
                        h1('2024 - Polo recife antigo'),
                        div({className: 'grafico'}, img({src: Imagem}))
                    ]),
                    h3(`Enquanto atrações de outros estados eram recebidos com estruturas adequadas e suporte logístico, muitos pernambucanos enfrentavam dificuldades durante suas apresentações. Um dos exemplos marcantes foi o caso do grupo Coco de Umbigada, uma das atrações do domingo de carnaval, que tiveram que se apresentar na rua devido à "falta de estrutura", mesmo tendo palcos montados no local. 
                    `),
                    div({className: 'mapainterativo'}, 
                        div({className: 'imagesmapa'},[
                            img({src: Mapa}),
                            img({src: nordeste, className: 'imggeral nordeste',
                            onmouseover: () => {
                                console.log('teste')
                                document.getElementById('nordesteinf').hidden = false
                                document.getElementById('nordesteinf2').hidden = false
                            }, onmouseout: () => {
                                console.log("saiuu")
                                document.getElementById('nordesteinf').hidden = true
                                document.getElementById('nordesteinf2').hidden = true
                            }}),
                            img({src: sudeste, className: 'imggeral sudeste', onmouseover: () => {
                                console.log('teste')
                                document.getElementById('sudesteinf').hidden = false
                                document.getElementById('sudesteinf2').hidden = false
                            }, onmouseout: () => {
                                console.log("saiuu")
                                document.getElementById('sudesteinf').hidden = true
                                document.getElementById('sudesteinf2').hidden = true
                            }}),
                            img({src: sul, className: 'imggeral sul', onmouseover: () => {
                                console.log('teste')
                                document.getElementById('sulinf').hidden = false
                                document.getElementById('sulinf2').hidden = false
                            }, onmouseout: () => {
                                console.log("saiuu")
                                document.getElementById('sulinf').hidden = true
                                document.getElementById('sulinf2').hidden = true
                            }}),
                            img({src: norte, className: 'imggeral norte', onmouseover: () => {
                                console.log('teste')
                                document.getElementById('norteinf').hidden = false
                                document.getElementById('norteinf2').hidden = false
                            }, onmouseout: () => {
                                console.log("saiuu")
                                document.getElementById('norteinf').hidden = true
                                document.getElementById('norteinf2').hidden = true
                            }}),
                            img({src: centrooeste, className: 'imggeral centrooeste', onmouseover: () => {
                                console.log('teste')
                                document.getElementById('centroinf').hidden = false
                                document.getElementById('centroinf2').hidden = false
                            }, onmouseout: () => {
                                console.log("saiuu")
                                document.getElementById('centroinf').hidden = true
                                document.getElementById('centroinf2').hidden = true
                            }}),
                            img({src: infnd, id: 'nordesteinf', className: 'imggeral infos', hidden: true}),
                            img({src: descnd, id: 'nordesteinf2', className: 'imggeral descricao', hidden: true}),

                            img({src: infsudeste, id: 'sudesteinf', className: 'imggeral  infos', hidden: true}),
                            img({src: descsudeste, id: 'sudesteinf2', className: 'imggeral  descricao', hidden: true}),

                            img({src: infcentro, id: 'centroinf', className: 'imggeral  infos', hidden: true}),
                            img({src: desccentro, id: 'centroinf2', className: 'imggeral  descricao', hidden: true}),

                            img({src: infsul, id: 'sulinf', className: 'imggeral  infos', hidden: true}),
                            img({src: descsul, id: 'sulinf2', className: 'imggeral  descricao', hidden: true}),

                            img({src: infnorte, id: 'norteinf', className: 'imggeral  infos', hidden: true}),
                            img({src: descnorte, id: 'norteinf2', className: 'imggeral  descricao', hidden: true}),
                        ])
                    ),
                    h3(`De onde ele vem? 
                    Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock,
                     um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, 
                    e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" 
                    (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.`)
]);

// const element = document.getElementById("nordeste");

// element.addEventListener("mouseover", event => {
//   console.log("Mouse in (over)");
// });

// element.addEventListener("mouseout", event => {
//   console.log("Mouse out");
// });

export default Content;