import { useState } from 'react'
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import API from '../services/Api'
import { Link } from 'react-router-dom'

const Content = () => {
    const [city, setCity] = useState<string>('')
    const [sort, setSort] = useState<string>('name')
    const [resultApi, setResultApi] = useState<any>([])

    const handleSort = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSort(event.target.value as string)
    }

    const handleCity = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCity(event.target.value as string)
    }

    const search = async () => {
        const url : string = `/v1/geo/cities?limit=10&offset=0&sort=${sort}${city ? `&namePrefix=${city}` : ''}`
        const results = await API.get(url).then(res => { return res.data } ).catch(() => [])
        setResultApi(results)
    }

    const searchByLink = async (url: string) => {
        const results = await API.get(url).then(res => { return res.data } ).catch(() => [])
        setResultApi(results)
    }

	return (
		<div className="content">
            <form>
                <TextField label="City Name" variant="outlined" value={city} onChange={handleCity} />

                <FormControl variant="outlined">
                    <InputLabel>Sort By</InputLabel>
                    <Select value={sort} onChange={handleSort} label="Sort By">
                        <MenuItem value="name">A-Z</MenuItem>
                        <MenuItem value="-name">Z-A</MenuItem>
                    </Select>
                </FormControl>

                <Button onClick={search}>
                    <SearchIcon />
                </Button>
            </form>

            <div className="table-content">
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Country</td>
                            <td>Region</td>
                            <td>Latitude</td>
                            <td>Longitude</td>
                        </tr>
                    </thead>
                    <tbody>
                        {resultApi.data?.map((result: any) => {
                            return (
                                <tr key={result.id}>
                                    <td><Link to={`/${result.id}`}>{result.name}</Link></td>
                                    <td>{result.country} - {result.countryCode}</td>
                                    <td>{result.region} - {result.regionCode}</td>
                                    <td className="coords">{result.latitude?.toFixed(5)}</td>
                                    <td className="coords">{result.longitude?.toFixed(5)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
                <div className="table-buttons">
                    {resultApi.links?.map((result: any) => {
                        return (
                            <button 
                                key={result.rel}
                                onClick={() => searchByLink(result.href)}
                            >
                                {result.rel}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
	);
}

export default Content;
