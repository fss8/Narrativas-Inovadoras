import h from "hyperscript";
import helpers from "hyperscript-helpers";
import './grafico.scss'
import Imagem from '../../assets/imagem-central2.png'
import Imagem2 from '../../assets/imagem-central.png'
import CelularGrande from '../../assets/celulargrande.png'
import CelularMedio from '../../assets/celularintermediario.png'
import CelularPequeno from '../../assets/celularpequeno.png'
import CelularMenor from '../../assets/celularmenor.png'
import Anitta from '../../assets/artista_anitta3.jpg'

const { section, div, img, h1, h4, hr, p, ul, li, h2, span, button } = helpers(h);

const funcaoTeste = () => {

    console.log("TESTEEEEEEEASDSAD");

    const grab = div(img({src: CelularGrande, className: 'celular-img1'}))
    
    document.getElementById("imagemGrafico4").innerHTML = grab.innerHTML
}


const ff = () => {
    console.log("imagem3");

    const grab2 = div(img({src: CelularGrande, className: 'celular-img1', style:'height:50%'}))

    document.getElementById("imagemGrafico4").innerHTML = grab2.innerHTML
    // imgList = []
    // location.reload()
}

const getListaArtistas = () => {
    const actual = ArtistTotalList.filter((item) => (!(actualList.includes(item))))
    console.log(ArtistTotalList)
    var list = []
    for (var i = 0; i < actual.length; i++){
        list.push(li(span(actual[i])))
    }
    return list
}

const selectArtista = (number = 1) => {
    console.log("Artista selecionado?")
    const testehtml = div(div({className: 'optionsartist list'}, [
        h2('Selecione um artista'),
        ul({className: 'nome-lista', id: 'lista'}, getListaArtistas())
    ]))
    document.getElementById('hideselector').innerHTML = testehtml.innerHTML
    document.getElementById('hideselector').hidden = false
    const lis = document.getElementsByTagName('li')
    console.log(lis)
    for(var i = 0; i< lis.length; i++){
        console.log(lis[i].onclick);
        lis[i].onclick = function(e) {
            // Prevent auto-redraw
            const name = e.target.innerHTML
            console.log(name)
            confirmArtist(name, number)
        };
    }   
}
const confirmArtist = (name, number) => {
    console.log("Artista 1 SELECTT")
    // funcaoTeste()
    actualList[number-1] = name
    const idArtist = 'artist' + number.toString()
    setTimeout(function(){ 
        document.getElementById(idArtist).innerHTML = name
        document.getElementById('hideselector').hidden = true
    }, 600);

    updateGrafico(name, number)
}

const seletorArtistas = () => {
    return div({className: 'selea'},[
        div({className: 'seletorart'}, [
            div({className: 'blocoseletor', onclick: () => {selectArtista(1)}}, [div({className: 'art1 art'}, [h4({id: 'artist1'},actualList[0]) , div({className: 'setinha'},'Trocar >')])]),
            div({className: 'blocoseletor', onclick: () => {selectArtista(2)}}, [div({className: 'art2 art'}, [h4({id: 'artist2'},actualList[1]) , div({className: 'setinha'},'Trocar >')])]),
            div({className: 'blocoseletor', onclick: () => {selectArtista(3)}}, [div({className: 'art1 art'}, [h4({id: 'artist3'},actualList[2]) , div({className: 'setinha'},'Trocar >')])]),
            div({className: 'blocoseletor', onclick: () => {selectArtista(4)}}, [div({className: 'art2 art'}, [h4({id: 'artist4'},actualList[3]) , div({className: 'setinha'},'Trocar >')])]),
        ])
        ,
        div({className: 'hideseletor', id:'hideselector', hidden: true}, [
            div({className: 'optionsartist list'}, [
                h2('Selecione um artista'),
                ul({className: 'nome-lista'},[
                    
                    li(span('Ludmilla')),
                ])
            ])
            ,
        ])
    ])
}

const criaBloco = () => {
    const textinhoteste = div(blocoArtista())
    document.getElementById("expansaocard").innerHTML = textinhoteste.innerHTML
}
const destroiBloco = () => {
    document.getElementById("expansaocard").innerHTML = ''
}

const blocoArtista = () => {
    return div({className: 'artista'}, [
        div({className: 'gridartista'},[
            div({className: 'descartista'}, [
                div({className: 'artistname'}, [
                    h4('Nome: Annita eaeawe'),
                    h4('Participações: em 2022, 2021'),
                    h4('Instagram: @anitta ', 'ICONE')
                ])
            ]), 
            div({className: 'fotoartista'}, [
                div({className: 'imageartista'}, [
                    img({src: Anitta})
                ])
            ]),
            div({className: 'curiosidadeartista'}, [
                div({className: 'artistcuriosidade'}, [
                    h4('CURIOSIDADES: ELA é uma artista popular')
                ])
            ])
        ])
    ])
}

var tabelaARTISTAS = {
    "Nações de Maracatu de Baque Virado": 0,
    "DJ Pepe Jordão": 3602,
    "Orquestra Popular do Recife -Maestro Ademir Araújo, Marron Brasileiro e André Rio": 146,
    "Louise": 17600,
    "Isadora Melo": 19200,
    "Ylana": 8874,
    "Karina Buhr": 79500,
    "Jorge Du Peixe": 96000,
    "Marciel Salu": 24400,
    "Toca ogan": 1002,
    "Nailson Vieira": 4967,
    "Raphaela Santos": 2100000,
    "Maestro Forró e orquestra da Bomba do Hemetério": 52200,

    "Almério": 92400,
    "Uana": 23200,
    "OTTO": 189000,
    "MARTINS": 130000,
    "LENINE": 715000,
    "PRISCILA SENNA": 1900000,
    "Nena Queiroga":30300,
    "Almir Rouche": 488000,
    "Romero Ferro": 127000,
    //"Recife Capital do Brega": vários artistas de brega)

    "Karynna Spinelli": 35200,
    "Gerlane Lopes": 20800,
    "Nação Zumbi": 162000,
    "DJ 440": 15700,
    "Lia de Itamaracá": 195000,
    "SPOK": 35200,
    "Alceu Valença": 1200000,
    "Orquestrão": 0
}
const updateGrafico = (name, number) => {
    console.log('Update grafico' + number);

    const actualHeight = calculaHeight(name, number)

    var image = CelularGrande
    if( actualHeight > 70){
        console.log('é maior')
        image = CelularGrande
    } 
    else if ( actualHeight > 50){
        image = CelularMedio
    }
    else if ( actualHeight > 30){
        image = CelularPequeno
    } 
    else{
        image = CelularMenor
    }

    //OBS SE ELE FOR MAIOR, CALCULAR NOVOS HEIGHTS DE TODOS OS ELEMENTOS

    const grab2 = div(img({src: image, className: 'celular-img1', style:'height:'+actualHeight.toFixed(2).toString()+'%'}))
    const id = 'imagemGrafico' + number.toString()
    const texto = 'txt' + number.toString()
    document.getElementById(id).innerHTML = grab2.innerHTML
    document.getElementById(texto).innerHTML = name
}

const calculaHeight = (name, number) => {
    const numeroabsoluto = tabelaARTISTAS[name]
    console.log(numeroabsoluto)
    var maiornumero = 0
    for(var i = 0; i < actualList.length; i++){
        if (maiornumero < tabelaARTISTAS[actualList[i]]) {
            maiornumero = tabelaARTISTAS[actualList[i]]
        }
    }

    //if numeroabsoluto == maiornumero
    if (maiornumero == 0){
        return 0
    }else{
        const porcentagem = (numeroabsoluto*100)/maiornumero
        console.log('PORCENTAGEM: '+porcentagem)
        return porcentagem
    }
    
}
var ArtistTotalList = Object.keys(tabelaARTISTAS)
var actualList = ['LENINE', 'Alceu Valença', 'PRISCILA SENNA', 'Nação Zumbi']

//var doc = document

// var imgList = imgList

const imagesFunction = (img1 = CelularGrande) => {
    return [
            div({className: 'interactive-grafico'}, [
                h1('Popularidade digital de artistas no carnaval'),
                h1('2024 - Polo recife antigo'),
                
            ])
            ,
            div({className: 'grafico2'}, [
                div({className: 'valores'}, [
                    div({className: 'desc1 desc'}, div({className: 'textodesc'}, '30,4 mi')), 
                    div({className: 'desc2 desc'}, div({className: 'textodesc'}, '10,2 mi')),
                    div({className: 'desc3 desc'}, div({className: 'textodesc'}, 'testee')),
    
                ])
                ,
                div({className: 'TBODY2'}, [
                    div({className: 'barralateral'}),
                    div({className: 'teste1'}, [div({className: 'bloco1'}, [div({id: 'imagemGrafico1', className: 'celular-img', onclick: criaBloco}, img({src: CelularGrande}))])], div({className: 'textinho', id: 'txt1'},actualList[0])),
                    div({className: 'teste1'}, [div({className: 'bloco1'}, [div({id: 'imagemGrafico2', className: 'celular-img', onclick: destroiBloco}, img({src: CelularPequeno}))])], div({className: 'textinho', id: 'txt2'},actualList[1])),
                    div({className: 'teste1'}, [div({className: 'bloco1'}, [div({id: 'imagemGrafico3', className: 'celular-img', onclick: ff},img({src: CelularMedio}))])], div({className: 'textinho', id: 'txt3'},actualList[2])),
                    div({className: 'teste1'}, [div({className: 'bloco1'}, [div({id: 'imagemGrafico4', className: 'celular-img', onclick: funcaoTeste},img({src: img1}))])], div({className: 'textinho', id: 'txt4'},actualList[3]))
                ])
            ]),
            div({id: 'expansaocard'})
    ]
}

const gra = section(
    {className: 'aquieaqui', id: 'graficoID'}, [h2('Seleção de Artistas:'), seletorArtistas(),imagesFunction()]);
    

export default gra;