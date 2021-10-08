import React from 'react'
import Loading from '../componit/Loading'
import { useParams, Link } from 'react-router-dom'
import '../index.css'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


const SingleCocktail = () => {
 /*  const {id}=useParams();
  const [singelData,setSingelData]=React.useState([]);
  const [loading,setLoading]=React.useState(false)
  const singelDrenk = async ()=>{
        setLoading(true);
    try {
      const respons = await fetch(`${url}${id}`)
      const data = respons.json();
      
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = data.drinks
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
      }
      setSingelData(newCocktail)
      console.log(singelData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }
  
  React.useEffect(()=>{
    singelDrenk()
  },[]) */
  /* if(loading){
    return <Loading/>
} */

//const {name,image,info,category,glass,instructions,ingredients,}=singelData;
//console.log(name);
const {id}= useParams()
  const [loading,setLoading]=React.useState(false)
  const [cocktail,setCocktail]=React.useState([])

React.useEffect(()=>{
  setLoading(true)
async function getCocktail(){
  try{
      const response = await fetch (`${url}${id}`)
      const data = await response.json()
     // console.log(data)

     if(data.drinks){
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = data.drinks[0]
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ]
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      }
      setCocktail(newCocktail)
     }else {
      setCocktail([])
    }
  }catch (error){
    console.log(error);
    setLoading(false)
  }
  setLoading(false)
}
getCocktail()
},[id])

if(loading){
  return <Loading/>
}
if(!cocktail){
  return <h2 className='section-title'>no cocktail to display</h2>
}
  const {name,image,info,category,glass,instructions,ingredients,}=cocktail
  console.log(cocktail);
  return(
    <section className="singel-drinkss">
      <h1>singel drink : {id}</h1>
      
      
    </section>
  )
  
}

export default SingleCocktail

/* 
 if(data.drinks){
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0]
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        }
        setSingelData(newCocktail)
      }
      
      else {
        setSingelData([])
      }
        
*/