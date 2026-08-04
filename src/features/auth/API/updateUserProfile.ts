import React from 'react'
import { UpdateUserProfileData } from '../../../store/types'
import { apiClient } from '../../../lib/api-client';


export const updateUserProfile = async (id:number, data:UpdateUserProfileData) => {
  
    const response = await apiClient.put<UpdateUserProfileData>(`/users/${id}`, data);
    return response.data;   
     
};
