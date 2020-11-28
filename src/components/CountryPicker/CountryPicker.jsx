import React,{useState,useEffect} from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchCountries } from '../../api';

export default function CountryPicker({handleChangeCountry}) {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchApi();
    },[setFetchedCountries])

    return (
        <div className="d-flex justify-content-center p-4">
            <FormControl className="bg-light text-dark">
                <NativeSelect defaultValue="" onChange={(e) => handleChangeCountry(e.target.value)}>
                <option value="Global">Select The Country</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </div>
    )
}
