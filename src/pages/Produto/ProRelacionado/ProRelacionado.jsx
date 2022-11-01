import React from 'react'
import { Produtos } from '../../../components/Produtos/Produtos'
import './proRelacionado.css'



const ProRelacionado = ({ filter }) => {
    console.log("filter")
    console.log(filter)
    return (
        <div className='container-pro' >
            {
            filter !== undefined && (
                <>
                    {filter.map((produto) => (
                        <Produtos key={produto.product_id} produto={produto} />
                    ))}
                </>
            )}
        </div>
    )
}

export default ProRelacionado
