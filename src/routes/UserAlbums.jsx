import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getAlbumsByUser, getPostsByUser, getUserById} from "../api/getApi";

export default function UserAlbums() {
    const {userId} = useParams();

    const [userInfo, setUserInfo] = useState({})
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (loading && userId) {
            Promise.all([
                getUserById(userId),
                getAlbumsByUser(userId)
            ]).then(response => {
                setData(response[0])
                setUserInfo(response[1])
            })
                .catch(error => console.error('Error fetching data:', error))
                .finally(() => setLoading(false))
        }
    }, [loading, setLoading]);

    return (
        <section className="wrapper container">
            <h1 className="users-title">Albums</h1>
            <div id="user-posts">albums from userID: {userId}</div>
        </section>
    );
}
