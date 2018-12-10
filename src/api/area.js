import React, {Component} from 'react'
import axios from 'axios'
const host = 'http://localhost:8090/'

const getAreaList = () => {
	return axios.get(host+'city')
		.then( (response)=> response.data)
		.catch( function(error) {
		 console.log(error);
		})
}
export {getAreaList};