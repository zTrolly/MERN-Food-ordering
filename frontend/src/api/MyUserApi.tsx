import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};




export const useCreateUser = () => {


  const {getAccessTokenSilently} = useAuth0();


  const CreateMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      console.error(response);
      throw new Error("Falha ao criar usuário");
    }
  }

 

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,} = useMutation(CreateMyUserRequest);

    return { createUser, isLoading, isError, isSuccess };
};


type UpdateUserRequest = {
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  zipCode: string;
};

export const useUpdateMyUser = () => {
   const {getAccessTokenSilently} = useAuth0();

  const UpdateMyUserRequest = async (user: UpdateUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      console.error(response);
      throw new Error("Falha ao atualizar usuário");
    }

    return response.json();
  
  }

  const {
    mutateAsync: updateUser,
    isLoading,
    isError,
    isSuccess,
    reset,
  } = useMutation(UpdateMyUserRequest);

  return { updateUser, isLoading};
}

