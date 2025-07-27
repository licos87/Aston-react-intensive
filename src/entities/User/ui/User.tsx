import cls from './User.module.css'

interface UserProps {
  userAvatar: string;
  userName: string;
}

export const User = ({userAvatar, userName}: UserProps) => {

  return (
    <div className={cls.userDescription}>
      <img
        className={cls.userAvatar}
        src={userAvatar}
        alt="Автор"
        width={30}
        height={30}
      />
      <p>{userName}</p>
    </div>
  );
};
