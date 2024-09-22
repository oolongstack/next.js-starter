"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import {
  Avatar,
  Button,
  CircularProgress,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IconBrandGithub } from "@tabler/icons-react";

function AuthButton({ minimal = true }: { minimal?: boolean }) {
  const { data, status } = useSession();

  if (status === "loading") {
    return <CircularProgress aria-label='Loading' />;
  }
  if (status === "authenticated") {
    if (minimal) {
      return (
        <Button
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
          color='danger'
          variant='ghost'>
          <IconBrandGithub />
          Sign Out
        </Button>
      );
    }
    return (
      <Dropdown placement='bottom-end'>
        <DropdownTrigger>
          <Avatar
            isBordered
            as='button'
            className='transition-transform'
            showFallback={!data?.user?.image}
            src={data?.user?.image || ""}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label='Profile Actions' variant='flat'>
          <DropdownItem key='profile' className='h-14 gap-2'>
            <p className='font-semibold'>Signed in as</p>
            <p className='font-semibold'>{data?.user?.email}</p>
          </DropdownItem>
          <DropdownItem
            key='sign out'
            color='danger'
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }>
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
  return (
    <Button
      onClick={() =>
        signIn("github", {
          callbackUrl: "/",
        })
      }
      color='danger'
      variant='ghost'>
      <IconBrandGithub />
      Sign in
    </Button>
  );
}
export default AuthButton;
