import { useAppContext } from "../../hooks";
import {ListaTarefaItem} from "./Listatarefasitem";

import style from './listadetarefas.module.css';

const ListaTarefas = () => {

   
    const { tarefas } = useAppContext();


    return (
        <ul className={style.ListaDeTarefas}>
            {!tarefas.length && (
                <p>Não há tarefas cadastradas...</p>
            )}
            {tarefas.map(item => (
                <ListaTarefaItem 
                key={item.id} 
                id={item.id} 
                nome={item.nome} 
                />
))}
        </ul>
    );
};

export {  ListaTarefas  }