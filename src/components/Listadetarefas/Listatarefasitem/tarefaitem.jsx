import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, CampoTexto, TIPO_BOTAO } from '../../../components';


import style from './tarefaitem.module.css';

const ListaTarefaItem = (props) => {

    const {id, nome} = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const {editarTarefas ,removerTarefa} = useAppContext();

    const onBlurTarefa =(event) => {
        const nomeTarefa = event.currentTarget.value;

        editarTarefas(id, nomeTarefa);

        setEstaEditando(false);
    }

    return(
        <li className={style.ListaTarefasItem}>
            {estaEditando && (
                <CampoTexto 
                defaultValue={nome}
                onBlur={onBlurTarefa}
                autoFocus
                />
            )}
            {!estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
            )}            
            <Botao 
            texto="-"
            tipo={TIPO_BOTAO.SECUNDARIO}
            onClick={() => removerTarefa(id)}
            />
         </li>
    );
};

export {ListaTarefaItem}