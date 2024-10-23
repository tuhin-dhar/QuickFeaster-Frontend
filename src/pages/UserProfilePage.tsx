import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import { Progress } from "@/components/ui/progress";
import UserProfileForm from "@/forms/userProfileForm/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return (
      <div className="flex justify-content items-center">
        <Progress className="w-[200px] " value={72} />
      </div>
    );
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
