import React from "react";
import Carousel from 'react-elastic-carousel'

import Angkor from '../assets/Angkor-wat-temple.jpg';
import Arco from '../assets/Arco-do-triunfo.jpg';
import Cataratas from '../assets/Cataratas-niagara.jpg';
import Catedral from '../assets/Catedral-milao.jpg';
import Cidade from '../assets/Cidade-proibida.jpg';
import Louvre from '../assets/Louvre.jpg';
import Mesquita from '../assets/Mesquita.jpg';
import Partenon from '../assets/Partenon.jpg';
import Plaza from '../assets/Plaza-espana.jpg';

export default function Carrossel(){
    return(
        <Carousel className='carrossel'>
            <div>
                <img src={Angkor} alt="Angkor Wat" />
            </div>
            <div>
                <img src={Arco} alt="Angkor Wat" />
            </div>
            <div>
                <img src={Cataratas} alt="Angkor Wat" />
            </div>
            <div>
                <img src={Catedral} alt="Angkor Wat" />
            </div>
            <div>
                <img src={Cidade} alt="Angkor Wat" />
            </div>
            <div>
                <img src={Louvre} alt="Angkor Wat" />
            </div>
            <div>
                <img src={Mesquita} alt="Angkor Wat" />
            </div>
            <div>
                <img src={Partenon} alt="Angkor Wat" />
            </div>
            <div>
                <img src={Plaza} alt="Angkor Wat" />
            </div>
        </Carousel>
    )
}