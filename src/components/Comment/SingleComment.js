const SingleComment = ({ comment }) => {
  console.log(comment);
  const { userId, text } = comment;
  const profile = userId?.profileImageUrl;
  console.log(profile);
  const firstName = userId?.firstName;
  const lastName = userId?.lastName;

  const profileImage = {
    backgroundImage: `URL(${profile})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <div
          className=" w-[50px] h-[50px] rounded-full shadow-md"
          style={profileImage}
        ></div>
        <div>
          <p className=" font-semibold">{firstName + " " + lastName}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
