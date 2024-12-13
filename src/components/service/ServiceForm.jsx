import React from 'react'

import styles from '../projects/project.module.css'
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import { useState } from 'react'

function ServiceForm({ handleSubmit, btnText, projectData }) {

  const [service, setService ] = useState({})
  
  function submit(e) {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }
  
  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value})
  }
    
  return (
    <form onSubmit={submit} className={styles.form} action="" >
        <Input 
        type="text"
        text="Nome do Serviço"
        name="name"
        placeholder="Insira o nome do Serviço"
        handleOnchange={handleChange}
        />
        <Input 
        type="number"
        text="Custo do Serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnchange={handleChange}
        />
        <Input 
        type="text"
        text="Descrição do Serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnchange={handleChange}
        />
        <SubmitButton text={btnText} />
    </form>
  )
}

export default ServiceForm