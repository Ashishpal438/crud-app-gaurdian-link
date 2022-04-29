import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, findPost } from '../redux/posts/actions'
import Loading from '../assets/1_e_Loq49BI4WmN7o9ItTADg.gif'
import SinglePost from './SinglePost'
import './post.css'

const Home = () => {

    const [search, setSearch] = useState('')

    const { loading, screenPosts } = useSelector(state => ({
        loading: state.loading,
        screenPosts: state.screenPosts
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])


    const handleSearch = (search) => {
        dispatch(findPost(search))
    }

    return (
        <>
            <div className='search-container'>
                <input type="text" value={search} placeholder='Search Post' onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => handleSearch(search)}>Find</button>
            </div>

            {
                loading ? <img src={Loading} alt="...loading" width="100vw" height="100vh" /> : (
                    <div className='container'>
                        {
                            screenPosts ? screenPosts.map((item) => {
                                return <SinglePost key={item.id} post={item} />
                            }) : ""
                        }
                    </div>
                )
            }
        </>
    )
}

export default Home