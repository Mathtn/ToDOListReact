import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const {children} = props;

    const [criador, setCriador] = useState('Mathtn');

    const [tarefas, setTarefas] = useState([
        {id: 1, nome: 'Item 1'},
        {id: 2, nome: 'Item 2'},
        {id: 3, nome: 'Item 3'},
    ]);

    const adicionarTarefa = (nomeTarefa) => {
        setTarefas(estadoAtual => {

            const tarefas = {
                id: estadoAtual.length + 1,
                nome: nomeTarefa,
            };

            return [
                ...estadoAtual,
                tarefas,
            ] 
        });
    };

    const removerTarefa = (idTarefas) => {
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefas => tarefas.id != idTarefas);

            return [
                ...tarefasAtualizadas
            ];
        });
    };

    const editarTarefas = (idTarefas, nomeTarefas) => {
        setTarefas(estadoAtual => {
           const tarefasAtualizadas = estadoAtual.map(tarefas => {
                return tarefas.id == idTarefas ? {
                    ...tarefas,
                    nome: nomeTarefas,
                } : tarefas;
            });

            return {
                ...tarefasAtualizadas,
            };
        });
    };

    return (
        <AppContext.Provider value={{
            criador,
            tarefas,
            adicionarTarefa,
            removerTarefa,
            editarTarefas,
        }}>
            {children}
        </AppContext.Provider>
    );
};

