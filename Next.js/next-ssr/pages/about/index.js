import React from 'react';
import Router from 'next/router';
import MainLayout from '../../components/MainLayout';

export default function About() {
    const linkClickHandler = () => {
        Router.push('/')
    }
    return ( 
        <MainLayout title="About page">
            <h1>Express.js is sucked</h1>
            <button onClick={linkClickHandler}>Go home</button>
            <button onClick={() => {
                Router.push('/posts')
            }}>Go posts</button>
        </MainLayout>
    )
}