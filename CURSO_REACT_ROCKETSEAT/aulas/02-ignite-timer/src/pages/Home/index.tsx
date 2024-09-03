/* eslint-disable @typescript-eslint/no-explicit-any */
import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form'
 
import { CountdownContainer, 
    FormContainer, 
    HomeContainer, 
    MinutesAmountImput, 
    Separator, 
    StartCountdownButton, 
    TaskInput} from "./styles";


export function Home() {
    const { register, handleSubmit, watch } = useForm()

    function handleCreatNewCycle(data: any) {
        console.log(data)
    }

    const task = watch('task')
    const isSubmitDisabled = !task;


    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreatNewCycle)} action="">
                <FormContainer>
                <label htmlFor="">Vou trabalhar em</label>
                <TaskInput 
                    id="task" 
                    list="task-suggestions"
                    placeholder="Dê um nome para o seu projeto"
                    {...register('task')}
                />

                <datalist id="task-suggestions">
                    <option value="Projeto 1"/>
                    <option value="Projeto 2"/>
                    <option value="Projeto 3"/>
                    <option value="Projeto 4"/>
                </datalist>

                <label htmlFor="minutesAmount">durante</label>
                <MinutesAmountImput 
                    type="number" 
                    id="minutesAmount" 
                    placeholder="00"
                    step={5}
                    min={5}
                    max={60}
                    {...register('MinutesAmount', { valueAsNumber: true })}
                />

                <span>minutos.</span>
                </FormContainer>
            
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                    <Play size={24} />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}