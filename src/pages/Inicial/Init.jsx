import { Formnovatarefa, ListaTarefas } from "../../components";

import style from './inicial.module.css';


const Inicial = () => {

    return (
      <div className={style.Inicial}>
        <Formnovatarefa/>
        <ListaTarefas/>
      </div>
    );
};

export { Inicial }