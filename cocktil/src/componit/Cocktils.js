import React from 'react'
import '../index.css'
import Loading from './Loading';
import { useGlobalContext } from '../pags/context';
import Drink from './Drink';
import'../index.css';

const Cocktils = () => {
    const{loading,cocktil} = useGlobalContext();
    if(loading){
        return <Loading/>
    }
    return (
        <section className="drink-section">
            <h2 className='main-title'>cocktails</h2>
            <div className='main-cart'>
                {cocktil.map((drink)=>{
                    return <Drink key={drink.id} {...drink}/>
                })}
            </div>
            
        </section>
    )
}

export default Cocktils
