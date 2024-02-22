"use client";
import { Heart } from "phosphor-react";
import { Avatar, Card } from "keep-react";

const RightSidebar = () => {
  return (
    <div>
      <Card
        imgSrc="https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format"
        imgSize="md"
        className="max-w-xs border-none rounded-none "
      >
        <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center bg-metal-200 rounded-none">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar
              size="2xl"
              shape="circle"
              img="/images/avatar/avatar-4.png"
            />
          </Card.Container>
          <Card.Container className="mb-3 mt-10 text-center">
            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
              Khairul Islam
            </Card.Title>
            <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">
              UI/UX Designer
            </Card.Title>
          </Card.Container>
          <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
            <Card.Container className="text-center">
              <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                Post
              </Card.Title>
              <Card.Title className="!text-body-1 !font-semibold text-metal-800">
                254
              </Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                Followers
              </Card.Title>
              <Card.Title className="!text-body-1 !font-semibold text-metal-800">
                1245M
              </Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                Following
              </Card.Title>
              <Card.Title className="!text-body-1 !font-semibold text-metal-800">
                58
              </Card.Title>
            </Card.Container>
          </Card.Container>
        </Card.Container>
      </Card>
    </div>
  );
};

export default RightSidebar;
