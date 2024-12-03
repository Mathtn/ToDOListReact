import style from './rodape.module.css'

const Rodape = (props) => {

    const { criador } = props;

    const anoAtual = (new Date()).getFullYear();

    return (
        <div className={style.Rodape}>
            ToDo List - {anoAtual} - {criador}
        </div>
    );
};

export {Rodape};