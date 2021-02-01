import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';


const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            setCountries(await fetchCountries());
        };
        fetch();
    }, [setCountries]);
    // console.log(countries);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(event) => handleCountryChange(event.target.value)}>
                <option value=''>Global</option>
                {
                    countries.map((country, index) => <option key={index} value={country}>{country}</option>)
                }
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;