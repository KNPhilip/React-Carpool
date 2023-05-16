import React, { useState } from 'react';
import MemberButton from "../MemberButton/MemberButton";
import { Typography } from '@mui/material';
import Data from '../../carpools.json';
import './css/App.css';

const App = () => {

    const carpoolMembers = [ { initials: 'MR' }, { initials: 'JL' }, { initials: 'AC' }, { initials: 'CJ' } ];
    const [ results, setResults ] = useState([]);

    const setResultsToName = (nameOnButton) => {
        const newStuff = [];

        Data.CarPoolEvents.map((Member) => {
            Member.Driver == nameOnButton ? newStuff.push(Member) : console.log('negative');
        })

        setResults(newStuff);
        console.log(results);
    }

    return (
        <main>
            { carpoolMembers === 0 ? (
                <Typography variant='h4'>This carpool doesn't exist.</Typography>
            ) : (
                <>
                    <Typography variant='h2' sx={{ fontWeight: 600 }}>Carpool Overview</Typography>
                    <Typography variant='h4'>Welcome to the carpool overview app!<br />Please select a member to view the history:</Typography>
                    {
                        carpoolMembers.map((member) => (
                            <>
                                <MemberButton variant='outlined' Text={member.initials} setResultsToName={setResultsToName}/>
                            </>
                        ))
                    }
                    { results?.length > 0 ? (
                        <>
                            <Typography variant='h4'>Results:</Typography>
                            { results.map((result) => {
                                <>
                                    <p>tt</p>
                                </>
                            } )
                            }
                        </>
                    ) : (
                        <></>
                    )}
                </>
            )}
        </main>
    );
}

export default App;