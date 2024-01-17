import React, { useRef, useState } from 'react'

import Logo from '/img/logo_white.png';


function Home({ onPageChange }) {

    const [email, setEmail] = useState('');

    const [isValidEmail, setIsValidEmail] = useState(true);

    const inputEmail = useRef();

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
    
        // Expressão regular para verificar o formato de email
       
    };

    const onSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        
        // Atualiza o estado isValidEmail
        setIsValidEmail(isValid);
        if(isValid){
            nextPage();
        }
    }

    const nextPage = () => {

        if (isValidEmail) {
            localStorage.setItem('email', email);
            window.location.href = '/consult';
        }
    }

    return (
        <>
            <div className='row '>
                <div className="col-sm-12 col-md-12 text-center mb-3">
                    <img className='text-center' src={Logo} width={'95%'} alt="" />
                </div>
                <div className='col-md-12 col-sm-12'>
                    <div className="card rounded-17">
                        <div className="card-header text-center">
                            <p className='mb-0 h3'>Seja bem vindo!</p>
                        </div>
                        <div className="card-body">
                            <form id='myForm'></form>
                            <div className='d-flex align-items-left mb-2 ml-1 h3'>Insira seu e-mail de compra para ter acesso ao nosso aplicativo</div>
                            {!isValidEmail ? <code className='d-flex align-items-left mb-2 ml-1'>O email inserido é inválido</code> : ''}
                            <input type="text" className="form-control form-control-lg rounded-14 mb-2" id="email" placeholder="Digite aqui seu e-mail de compra" onChange={handleEmailChange} />
                            <hr />
                            <button className='btn btn-secondary w-100 rounded-15 ' onClick={() => { onSubmit() }}><h2 className='mb-0'><b>Entrar</b></h2></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
