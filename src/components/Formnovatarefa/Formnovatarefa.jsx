import { useState } from "react";
import { CampoTexto, Botao, } from "../../components";
import style from './Formnovatarefa.module.css';
import { useAppContext } from "../../hooks";


const Formnovatarefa = () => {

    const { adicionarTarefa } = useAppContext();

    const [nomeTarefa, setNomeTarefa] = useState('');

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value)
    };

    const submeterFormulario = (event) => {
        event.preventDefault();

        if(!nomeTarefa) {
            return;
        }

        adicionarTarefa(nomeTarefa);

        setNomeTarefa('');

    };

    return (
        <form className={style.Formnovatarefa} onSubmit={submeterFormulario}>
            <CampoTexto 
            value={nomeTarefa}
            onChange={onChangeNomeTarefa}
            />
            <Botao texto=" + "/>
        </form>
    )
}

export { Formnovatarefa }