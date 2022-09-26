import React,{ useState } from 'react';
import StyledSelect from '../layouts/styledSelect';
import InputWrapper from '../layouts/inputWrapper';
import '../assets/styles/form-sync.scss'

const FormSync = () => {
const [budgetValue, setbValue] = useState([])
const [addValue, setAddvalue] = useState({label: 'R$ 0.00', value: ''})
const [choiseOp, setChoiseOp] = useState({
    corp:    {label: '', value: ''},
    veicle:  {label: '', value: ''},
    driver:  {label: '', value: ''},
    destiny: {label: '', value: ''},
    IC:      {label: '', value:''}
    })

    return(
        <section className='req-wrapper' style={{width: '53%', height: '33%', top: '-13rem'}}>
            <form className='req-input' id='req-form' onSubmit={(e) => {submitingForm(e)}}>
            <div className='left-wrapper'>
              <InputWrapper inputId='Requisicao' name='numRequest' htmlFor='Requisicao' handlingEvent={(e) => {
                e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')}
                } inputName='Nº Requisição' />
            </div>

          
            </form>
        </section>
    )
}

export default FormSync;