"use client"

import FollowingUser from '@/components/Users/FollowingUser';
import { useGetFollowingQuery } from '@/redux/features/follow/followApi';
import React from 'react';

const Following = () => {

    const {data} = useGetFollowingQuery();
    console.log(data);

    return (
        <div>
                        {
                data?.data?.map(user => <FollowingUser key={user._id} user={user}></FollowingUser>)
            }
        </div>
    );
};

export default Following;