import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, CampoTexto, TIPO_BOTAO } from '../../../components';


import style from './tarefaitem.module.css';

const ListaTarefaItem = (props) => {

    const {id, nome} = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const {editarTarefas ,removerTarefa} = useAppContext();

    return(
        <li className={style.ListaTarefasItem}>
            {estaEditando && (
                <CampoTexto 
                defaultValue={nome}
                onChange={event => editarTarefas(id, event.currentTarget.value)}
                onBlur={() => setEstaEditando(false)}
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