"use client"
import FollowerUser from '@/components/Users/FollowerUser';
import { useGetFollowerQuery } from '@/redux/features/follow/followApi';
import React from 'react';

const Follower = () => {
    const {data, isLoading} = useGetFollowerQuery();

    return (
        <div>
            {
                data?.data?.map(user => <FollowerUser key={user._id} user={user}></FollowerUser>)
            }
        </div>
    );
};

export default Follower;