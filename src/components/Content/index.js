import h from "hyperscript";
import helpers from "hyperscript-helpers";
import Grafico from "../Grafico";
import './content.scss'
import Imagem from '../../assets/imageminterativa.png'
import Mapa from '../../assets/mapagroup.png'

const { div, h1, h2, h3, h4, hr, img, section } = helpers(h);

const Content = div({className: 'ni-text-area'}, [
                    div({className: 'ni-presentation'}, [
                        hr(),
                        h1("PEMANENTEMENTE NOS PALCOS..."),
                        h2('Os artistas que não saem dos palcos recifenses.'),
                        h4('Por Contra Cultura. Grupo de Narrativas Inovadoras: Alice, Milena, Raiane, Raquel, Talita, João, Tiago e Filipe. 08 de Mar 2024')
                    ]),
                    h3(`Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou
                     para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. 
                    Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.`
                    ),
                    Grafico,
                    div({className: 'interactive-grafico'}, [
                        h1('Popularidade digital de artistas no carnaval'),
                        h1('2024 - Polo recife antigo'),
                        div({className: 'grafico'}, img({src: Imagem}))
                    ]),
                    h3(`Porque nós o usamos?
                    É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal
                     de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet 
                    agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por 
                    acidente, e às vezes de propósito (injetando humor, e coisas do gênero).`),

                    div({className: 'mapainterativo'}, img({src: Mapa})),
                    h3(`De onde ele vem? 
                    Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock,
                     um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, 
                    e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" 
                    (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.`)
]);

export default Content;