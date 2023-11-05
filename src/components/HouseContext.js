import React,{useEffect,useState,createContext} from 'react';
import {housesData} from "../data.js"

export const HouseContext=createContext();

const HouseContextProvider = ({children}) => {
  const [houses,setHouses]=useState(housesData)
  const [country,setCountry]=useState("Location (any)")
  const [Property,setProperty]=useState('Property type (any)')
  const [Properties,setProperties]=useState([])
  const [countries,setCountries]=useState([])
  const [Price,setprice]=useState("Price range (any)")
  const [loading,setloading]=useState(false)

  useEffect(()=>{
     const allCountries=houses.map((house)=>{
          return house.country;
     })
     //console.log(allCountries);
     const uniqueCountries=['Location (any)',...new Set(allCountries)]
     //console.log(uniqueCountries);
     setCountries(uniqueCountries)
  },[])

  useEffect(()=>{
    const allProperties=houses.map((house)=>{
         return house.type;
    })
    //console.log(allCountries);
    const uniqueProperties=['Location (any)',...new Set(allProperties)]
    //console.log(uniqueCountries);
    setProperties(uniqueProperties)
 },[])

 const handleClick =()=>{
     setloading(true)
    const isDefault =(str)=>{
         return str.split('').includes('(any')
    }
    const minPrice=parseInt(Price.split(' ')[0])
    const maxPrice=parseInt(Price.split(' ')[2])

    const newHouses=housesData.filter((house)=>{
         const housePrice=parseInt(house.price)

         if(house.country===country && house.type===Property && housePrice>=minPrice && housePrice<=maxPrice){
                return house;
         }
         if(isDefault(country) && isDefault(Property) && isDefault(Price)){
          return house;
         }
         if(!isDefault(country) && isDefault(Property) && isDefault(Price)){
          return house.country===country;
         }
         if(isDefault(country) && !isDefault(Property) && isDefault(Price)){
          return house.type===Property;
         }
         if(isDefault(country) && !isDefault(Property) && !isDefault(Price)){
              if(housePrice >= minPrice && housePrice<=maxPrice){
                    return house;
              }
         }
         if(!isDefault(country) && !isDefault(Property) && isDefault(Price)){
          return house.country===country && house.type===Property
         }
         if(!isDefault(country) && isDefault(Property) && !isDefault(Price)){
             if(housePrice >= minPrice && housePrice<=maxPrice){
                    return house.country===country;
             }
         }
         if(!isDefault(country) && !isDefault(Property) && !isDefault(Price)){
          if(housePrice >= minPrice && housePrice<=maxPrice){
                 return house.type===Property;
          }
      }
    })
      setTimeout(()=>{
        return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses);
        setloading(false)
      })
 }

  return <HouseContext.Provider value={{loading,handleClick,countries,setCountries,country,setCountry,Property,setProperty,Properties,setProperties,Price,setprice,loading,setloading,houses,setHouses

  }}>{children}</HouseContext.Provider>;
};

export default HouseContextProvider;
