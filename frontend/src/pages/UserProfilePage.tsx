import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import { LoadingComponent } from "@/components/LoadingComponent";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";


const UserProfilePage = () => {
  const {updateUser, isLoading: isUpdateMyUserLoading} = useUpdateMyUser()
  const {currentUser, isLoading: isGetMyUserLoading } = useGetMyUser()

  if (isGetMyUserLoading) {
    return <LoadingComponent />
  }

  if (!currentUser) {
    return <span>Usuário não encontrado</span>
  }

  return (
    <UserProfileForm onSave={updateUser} isLoading={isUpdateMyUserLoading} userData={currentUser}/>
  )
}
export default UserProfilePage;