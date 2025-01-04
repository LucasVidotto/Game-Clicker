import { useEffect, useState } from "react";

//Conexão externa para ver quantas pessoas acessaram o sistema
export default function VisitorCounter() {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        // Recupera o contador do localStorage
        const storedCount = localStorage.getItem("visitCount");
        const newCount = storedCount ? parseInt(storedCount) + 1 : 1;

        // Atualiza o contador no estado e no localStorage
        setVisitCount(newCount);
        localStorage.setItem("visitCount", newCount.toString());
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h1>Contador de Visitas</h1>
            <p>Esta página foi carregada {visitCount} vezes neste navegador.</p>
        </div>
    );
}
