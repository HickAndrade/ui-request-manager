import React,{ useEffect, useState } from 'react'
import Select from 'react-select'

const StyledSelect = ({
    width, onChange, labelFor, labelName, 
    idBar, barContent, divClass, transition, op, getOptionLabel, getOptionValue, selectId, name }) => {
    const [options, setOptions] = useState([])
   
    useEffect(() =>{
      const fetchingOptions = async () => {
        let bearer = `bearer ${sessionStorage.getItem('token')}`
        try {
          let fetching = await fetch(`http://localhost:4917/fleet/${op}`,{ 
            method: "GET",
            headers: {
              'Authorization': bearer
            }
           })
          let res = await fetching.json();

          if(fetching.status == 200) {
            setOptions(res.select)
          }else{
            console.log({statusCode: fetching.status})
          }
          
        } catch (error) {
          console.log({
            Message: error.message,
            error: error
          })
        }   
      }
        
        fetchingOptions()
        }, [])

    const styledSelect = {   
      menu: (provided, state) => ({
          ...provided,
          width: width,
          overflow: 'hidden scroll',
          height: '5rem',
          borderBottom: '1px dotted pink',
          textAlign: 'left',
        }),
      option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted gray',
        color: state.isSelected ? 'black' : 'black',
        height: 'auto',
        paddingTop: '0',
        fontSize: '12px',
        width: '100%',
      }),
      control: () => ({
        fontSize: '13px',
        backgroundColor:'White',
        top: '8px',
        border: 'thin solid black',
        boxShadow: '0 5px 25px rgba(0, 0, 0, 0.05)',
        position: 'relative',
        display: 'flex',
        width: width,
        height: '32px',
        marginBottom: '6.5px',
        borderRadius: '5px 5px 0 0',
        textAlign: 'left'
      })
  }
  
        return(
          <div className={divClass}>
            <label htmlFor={labelFor}>{labelName}</label>
            <Select id={selectId} getOptionLabel={getOptionLabel} name={name} getOptionValue={getOptionValue}
            options={options} styles={styledSelect} onChange={onChange} />
            <div id={idBar} className='select-bottom-bar' style={{width: width, transition: transition}}>
              <p>{barContent}</p>
            </div>
          </div>
        )
      }
    


export default StyledSelect