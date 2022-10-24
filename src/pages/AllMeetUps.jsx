import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

export const AllMeetUps = () => {

    const [isLoading, setIsLoading] = useState( true );
    const [loadedMeetups, setLoadedMeetups] = useState( [] );

    useEffect( () => {
            setIsLoading( true );
            fetch( `https://react-refresher-next-course-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json` )
                .then( r => {
                    return r.json();
                } ).then( data => {
                    const meetups = [];
                    for (const key in data) {
                        const meetup = {
                            id: key,
                            ...data[key]
                        };
                        meetups.push( meetup );
                    }

                    setIsLoading( false );
                    setLoadedMeetups( meetups );

                }
            );

        }
        , [] );


    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <>
            <h1>All meet ups</h1>
            <MeetupList meetups={ loadedMeetups }/>
        </>
    );
};