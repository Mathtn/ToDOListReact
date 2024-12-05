import { createContext, useEffect, useState } from "react";

import { api } from "../services";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const {children} = props;

    const [criador, setCriador] = useState('Mathtn');

    const [tarefas, setTarefas] = useState([]);

    const carregarTarefas = async () => {

        const { data = [] } = await api.get('/tarefas');

        setTarefas([
            ...data
        ]);

    };

    const adicionarTarefa = async (nomeTarefa) => {

        const {data: tarefas} = await api.post('/tarefas', {
            nome: nomeTarefa,
        });

        setTarefas(estadoAtual => {

            return [
                ...estadoAtual,
                tarefas,
            ] 
        });
    };

    const removerTarefa = async (idTarefas) => {

        await api.delete(`tarefas/${idTarefas}`);


        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefas => tarefas.id != idTarefas);

            return [
                ...tarefasAtualizadas
            ];
        });
    };

    const editarTarefas = async (idTarefas, nomeTarefas) => {

        const {data: tarefasMod} = await api.put(`tarefas/${idTarefas}`, {
            nome: nomeTarefas,
        })

        setTarefas(estadoAtual => {
           const tarefasAtualizadas = estadoAtual.map(tarefas => {
                return tarefas.id == idTarefas ? {
                    ...tarefas,
                    nome: tarefasMod.nome,
                } : tarefas;
            });

            return [
                ...tarefasAtualizadas,
            ];
        });
    };

    useEffect (() => {
        carregarTarefas()
    }, []);

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

