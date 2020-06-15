import React from "react"




const { default: Business } = require("../components/Business/Business");

const apiKey = '';

const Yelp = {};

class Yelp extends React.Component{

 Search = ( term , location , sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
                 {headers: {Authorization: `Bearer ${apiKey}`}}   
                 ).then(response => {
                    return response.json();
                 }).then(jsonResponse =>{
                     if(jsonResponse.businesses){

                        return jsonResponse.businesses.map(business =>{

                            return {
                                id: business.id , 
                                imageSrc: business.image_url ,
                                name: business.name , 
                                adress: business.adress , 
                                city: business.city ,
                                state: business.state , 
                                zipCode: business.zipCode , 
                                category: business.category ,
                                rating: business.category , 
                                reviewCount: business.reviewCount

                            }
                        })
                     }

                 });
} 

}
export default Yelp;
