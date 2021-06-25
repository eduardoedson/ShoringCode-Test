import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import API from '../services/Api'

interface ParamTypes {
	id: string
}

const Detail = () => {
	const { id }  = useParams<ParamTypes>()
	const [city, setCity] = useState<any>(null)

	const getCityData = async () => {
		if(id) {
			const url : string = `http://geodb-free-service.wirefreethought.com/v1/geo/cities/${id}`
        	await API.get(url).then(res => setCity(res.data.data)).catch(() => setCity(null))
		}
	}

	useEffect(() => {
		getCityData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []) 

	return (
		<div className="App">
			<Header />

			<div className="content">
				{city && Object.keys(city).length > 0 ? 
					<table className="table-detail">
						<tr>
							<th>ID</th>
							<td>{city.id}</td>
						</tr>
						<tr>
							<th>City</th>
							<td>{city.name}</td>
						</tr>
						<tr>
							<th>Country</th>
							<td>{city.country} - {city.countryCode}</td>
						</tr>
						<tr>
							<th>Region</th>
							<td>{city.region}</td>
						</tr>
						<tr>
							<th>Region Code</th>
							<td>{city.regionCode}</td>
						</tr>
						<tr>
							<th>Timezone</th>
							<td>{city.timezone}</td>
						</tr>
						<tr>
							<th>Population</th>
							<td>{city.population}</td>
						</tr>
						<tr>
							<th>Latitude</th>
							<td>{city.latitude}</td>
						</tr>
						<tr>
							<th>Longitude</th>
							<td>{city.longitude}</td>
						</tr>
					</table>
				: null}
			</div>

			<Footer />
		</div>
	);
}

export default Detail;
