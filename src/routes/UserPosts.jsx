import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getPostsByUser, getUserById, getUsersAll} from "../api/getApi";

export default function UserPosts() {
    const {userId} = useParams();
    const [userInfo, setUserInfo] = useState({})
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (loading && userId) {
            Promise.all([
                getUserById(userId),
                getPostsByUser(userId)
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
            <h1 className="users-title">Posts</h1>
            <div id="user-posts">Posts from userID: {userId}</div>
        </section>
    );
}
