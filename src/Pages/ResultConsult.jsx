import React, { useEffect, useRef, useState } from 'react'

import Logo from '/img/logo_white.png';
import ProteinsCards from '../Components/ProteinsCards.jsx';

function ResultConsult() {

    const userData = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : false;

    if(!userData){
        if(localStorage.getItem('data')){
            localStorage.removeItem('data');
        }
        window.location.href = '/';

    }

    const user_height = parseFloat(userData.height / 100);
    const user_weight = parseFloat(userData.weight);
    const user_age = parseFloat(userData.age);
    const user_desiredWeight = parseFloat(userData.desiredWeight);
    const user_frequency = parseFloat(userData.frequency);

    const activityLevels = {
        0: 1.2,     // Nenhuma atividade
        1: 1.375,       // Atividade mínima
        2: 1.55,     // Moderada
        3: 1.725,      // Muito ativo
        4: 1.9    // Extremamente ativo
      };

    // Cálculo do IMC
    const imc_result = parseFloat(user_weight) / (parseFloat(user_height) * parseFloat(user_height));

    // Cálculo das calorias diárias
    const dailyCalories = userData.genre === 'male' ? (10 * user_desiredWeight + 6.25 * user_height * 100 - 5 * user_age + 5) * activityLevels[user_frequency] : (10 * user_desiredWeight + 6.25 * user_height * 100 - 5 * user_age - 161) * activityLevels[user_frequency];

    // Cálculo da quantidade de água
    const dailyWater = user_weight * 0.035;


    // Cálculo das proteínas, gorduras e carboidratos
    const dailyProteins_CAL = 0.15 * dailyCalories; // Em calorias

    const dailyFats_CAL = 0.25 * dailyCalories;

    const dailyCarbs_CAL = 0.6 * dailyCalories;


    // Convertendo calorias para gramas (1g de proteína/carboidrato = 4 calorias, 1g de gordura = 9 calorias)
    const dailyProteins_G = dailyProteins_CAL / 4; // Em gramas

    const dailyFats_G = dailyFats_CAL / 9;

    const dailyCarbs_G = dailyCarbs_CAL / 4;

    function toInt(v) {
        return v.toFixed(1);
    }

    const [progressBarValue, setProgressBarValue] = useState(0);

    const loadingCard = useRef();
    const downloadNow = useRef();

    useEffect(() => {
        downloadNow.current.style.display = 'none';
        setTimeout(() => {
            setProgressBarValue(11)
        }, 1000);

        setTimeout(() => {
            setProgressBarValue(22)
        }, 3000);

        setTimeout(() => {
            setProgressBarValue(33)
        }, 6000);

        setTimeout(() => {
            setProgressBarValue(44)
        }, 7000);

        setTimeout(() => {
            setProgressBarValue(55)
        }, 8000);

        setTimeout(() => {
            setProgressBarValue(75)
        }, 15000);

        setTimeout(() => {
            setProgressBarValue(85)
        }, 18000);

        setTimeout(() => {
            setProgressBarValue(100)
            loadingCard.current.style.display = 'none';
            downloadNow.current.style.display = 'block';
        }, 20000);
    }, [])


    const onButtonClick = () => {
        const pdfUrl = " /pdfs/purifica_app.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "/pdfs/purifica_app.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <>
            <div className='row '>
                <div className="col-sm-12 col-md-12 text-center mb-3">
                    <img className='text-center' src={Logo} width='95%' alt="" />
                </div>
                <div className='col-md-12 col-sm-12'>
                    <div className="card rounded-17">
                        <div className="card-header text-center">
                            <h2 className='mb-0'>Aqui está o resumo com algumas informações importantes que utilizamos para <b className='text-success'>gerar a receita</b>!</h2>
                        </div>
                        <div className="card-body">
                            <div class="row">
                                <ProteinsCards title='Calorias diárias' description={toInt(dailyCalories) + ' Calorias'} />
                                <ProteinsCards title='Goduras diárias' description={toInt(dailyFats_G) + 'g Godura'} />
                                <ProteinsCards title='Proteínas diárias' description={toInt(dailyProteins_G) + 'g Proteínas'} />
                                <ProteinsCards title='Carboidratos diários' description={toInt(dailyCarbs_G) + 'g Carboidratos'} />
                                <ProteinsCards title='Comsumo diário de água' description={toInt(dailyWater) + 'L'} />
                                <ProteinsCards title='Seu IMC' description={(imc_result.toFixed(2))} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 col-sm-12'>
                    <div className="card rounded-17" ref={loadingCard}>
                        <div className="card-header text-center">
                            <h2 className='mb-0'>Gerando Receita</h2>
                        </div>
                        <div className="card-body">
                            <h2>Aguarde um momento...</h2>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-info" style={{ width: `${progressBarValue}%` }} role="progressbar" aria-valuenow='0' aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card rounded-20" ref={downloadNow}>
                        <div className="card-body">
                            <h3><b>Receita gerada com sucesso!</b></h3>
                            <h3 className='mt-3'>Clique em <b className='text-success'>Baixar Agora</b> para acessar no seu celular.</h3>
                            <button className='btn btn-success rounded-15 p-4 w-100' onClick={() => {onButtonClick()}}><h1 className='mb-0'><i className='icon-cloud-download'></i> <b> Baixar Agora</b></h1></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultConsult
