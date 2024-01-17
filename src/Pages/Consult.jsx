import React, { useState } from 'react'

import Logo from '/img/logo_white.png';

function Consult() {

    const email = (localStorage.getItem('email') || false);

    if(!email){
        if(localStorage.getItem('email')){
            localStorage.removeItem('email');
        }
        window.location.href = '/';
    }


    const [age, setAge] = useState(null);
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [desiredWeight, setDesiredWeight] = useState(null);
    const [genre, setGenre] = useState('male');

    const [ageError, setAgeError] = useState(false);
    const [heightError, setHeightError] = useState(false);
    const [weightError, setWeightError] = useState(false);

    const handleAgeChange = (e) => {
        const numericValue = e.target.value.replace(/[^0-9]/g, '');
        setAge(numericValue);

        const messagesErrors = {
            ['min_req']: 'A idade minima deve ser maior ou igual a 18',
            ['max_req']: 'A altura deve ser menor ou igual a 100'
        }

        if (numericValue < 18) {
            setAgeError({msg: messagesErrors['min_req']});
        } else if (numericValue > 100) {
            setAgeError({msg: messagesErrors['max_req']});
        } else {
            setAgeError(false);
        }
    }

    const handleHeightChange = (e) => {
        const numericValue = e.target.value.replace(/[^0-9.]/g, '');
        setHeight(numericValue);

        const messagesErrors = {
            ['min_req']: 'A altura minima deve ser maior ou igual a 140',
            ['max_req']: 'A altura deve ser menor ou igual a 210'
        }

        if(numericValue < 140){
            setHeightError({msg: messagesErrors['min_req']});
        } else if (numericValue > 210) {
            setHeightError({msg: messagesErrors['max_req']});
        } else {
            setHeightError(false);
        }
    }

    const handleWeightChange = (e) => {
        const numericValue = e.target.value.replace(/[^0-9.]/g, '');
        setWeight(numericValue);

        const messagesErrors = {
            ['min_req']: 'O peso deve ser maior ou igual a 40',
            ['max_req']: 'O peso deve ser menor ou igual a 150'
        }

        if(numericValue < 40){
            setWeightError({msg: messagesErrors['min_req']});
        } else if (numericValue > 150){
            setWeightError({msg: messagesErrors['max_req']});
        } else {
            setWeightError(false);
        }

        
    }


    const handleDesiredWeightChange = (e) => {
        const numericValue = e.target.value.replace(/[^0-9.]/g, '');
        setDesiredWeight(numericValue);
    }

    const handleOnSubmit = () => {

        if(ageError === false && heightError === false && weightError === false){
            localStorage.setItem('data', JSON.stringify({
                'age': parseInt(age),
                'height': parseFloat(height),
                'weight': parseFloat(weight),
                'desiredWeight': parseFloat(desiredWeight),
                'genre': genre
            }))
            window.location.href = '/consult/result'
        }
    }


    return (
        <>
            <div className='row '>
                <div className="col-sm-12 col-md-12 text-center mb-3">
                    <img className='text-center' src={Logo} width='95%' alt="" />
                </div>
                <div className='col-md-12 col-sm-12'>
                    <div className="card rounded-17">
                        <div className="card-header text-center">
                            <h3 className=' mb-2 ml-1 text-center'><b>Complete os dados abaixo para gerar sua receita.</b></h3>
                        </div>
                        <div className="card-body">
                            { ageError ? (<span className='d-flex align-items-left mb-0 ml-1 text-danger'>{ageError.msg} </span>) : '' }
                            <input type="text" className="form-control form-control-lg rounded-14 mb-2 h1" value={age} onChange={handleAgeChange} placeholder="Idade" />
                            { heightError ? (<span className='d-flex align-items-left mb-0 ml-1 text-danger'>{heightError.msg} </span>) : '' }
                            <input type="text" className="form-control form-control-lg rounded-14 mb-2" value={height} onChange={handleHeightChange} placeholder="Altura (em cm)" />
                            { weightError ? (<span className='d-flex align-items-left mb-0 ml-1 text-danger'>{weightError.msg} </span>) : '' }
                            <input type="text" className="form-control form-control-lg rounded-14 mb-2" value={weight} onChange={handleWeightChange} placeholder="Peso (em kg)" />
                            <input type="text" className="form-control form-control-lg rounded-14 mb-2" value={desiredWeight} onChange={handleDesiredWeightChange} placeholder="Peso desejado (em kg)" />
                            <h3 className='mb-1'>Qual é seu sexo?</h3>
                            <div className="selectgrou selectgroup-secondary w-100">
                                <label className="selectgroup-item" onClick={() => { setGenre('male') }}>
                                    <input type="radio" name="transportation" value="2" className="selectgroup-input" checked={genre === 'male'} />
                                    <span className="selectgroup-button selectgroup-button-icon "><i className="icon-symbol-male"></i> Masculino</span>
                                </label>
                                <label className="selectgroup-item" onClick={() => { setGenre('female') }}>
                                    <input type="radio" name="transportation" value="1" className="selectgroup-input" checked={genre === 'female'} />
                                    <span className="selectgroup-button selectgroup-button-icon"><i className="icon-symbol-female"> Feminino</i></span>
                                </label>
                            </div>
                            <h3 className='mb-1 mt-2'>Qual é seu nível de atividade diária? </h3>
                            <select className="form-control form-control-lg text-center">
                                <option value="0" selected="">Nenhuma atividade</option>
                                <option value="1">Atividade mínima</option>
                                <option value="2">Atividade moderada</option>
                                <option value="3">Muito ativo</option>
                                <option value="4">Extremamente ativo</option>
                            </select>
                            <hr />
                            <button className='btn btn-secondary w-100 rounded-15 ' onClick={() => { handleOnSubmit() }}><h2 className='mb-0'><b>Calcular</b></h2></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Consult
