import React, { Fragment, useEffect, useState } from "react";

const MediasBoletim = () => {

    const [mediasBoletim, setQtde] = useState([])
    
    const getMedias = async()  => {
        try {
            const response = await fetch("http://localhost:5000/stats/medias-boletim");
            const jsonData = await response.json();
            console.log(jsonData);
            setQtde(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getMedias();
    },[]);

    return(
        <Fragment>
            <h4 className="m-3">Media dos boletins por aluno</h4>
            <table className="table m-5 text-center">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Nota</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {mediasBoletim.map(row => (
                        <tr key={row.id}>
                            <td>{row.nome}</td> 
                            <td>{row.avg}</td>
                                       
                        </tr>
                    ))}
                </tbody>
            </table>

            
            
        </Fragment>
    )
}

export default MediasBoletim;