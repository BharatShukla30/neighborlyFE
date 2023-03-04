import { Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { getNearestDonors } from '../DashBoard/actions';
import Copyright from '../UIUtils/Copyright';

const signInSelector = (state) => state.signInReducer;
const userSelector = (state) => state.userReducer;

function IndividualDashboard(props) {
    const signInReducerState = useSelector(signInSelector);
    const userReducerState = useSelector(userSelector);

    const { latitude, longitude, blood_group } = props;
    const [distance, setDistance] = useState(5);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setDistance(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getNearestDonors(signInReducerState?.token, distance))
    }

    console.log("User Reducer => ", userReducerState)
    let values = [];

    if(userReducerState && userReducerState.nearest && userReducerState.nearest.payload) {
        values = [...userReducerState.nearest.payload]
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <InputLabel id="distance-label">Distance</InputLabel>
                    <Select
                        labelId="distance-label"
                        id="distance"
                        value={distance}
                        label="Distance"
                        onChange={handleChange}
                    >
                        <MenuItem value={5}>Five</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Check Donors Near Me
                </Button>
            </form>
            <br />
            <MapContainer center={[latitude, longitude]} zoom={13}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <Marker title={`Your location (${blood_group})`} position={[latitude, longitude]}>
                    <Popup>
                        {latitude}, {longitude}
                    </Popup>
                </Marker>
                {values.map((element) => {
                    return (
                        <Marker key={element?.id} title={`${element?.distance} km away`} position={[element?.latitude, element?.longitude]}>
                            <Popup>
                                {element?.latitude}, {element?.longitude}
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
            <Copyright sx={{ pt: 4 }} />
        </Container>
    )
}

export default IndividualDashboard