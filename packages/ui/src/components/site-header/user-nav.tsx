import { signIn, signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@ui/components/ui/avatar";
import { Button } from "@ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui/components/ui/dropdown-menu";

function getFallback(name: string | null | undefined, email: string) {
  // first check if name exists
  // if it exists:
  //  - if both first and last name exist, use first letter of each
  //  - if only first or last name exists, use first 2 letters
  if (name) {
    const [first, last] = name.split(" ");
    if (first && last) {
      return `${first[0]}${last[0]}`;
    } else if (first) {
      return first.slice(0, 2);
    } else if (last) {
      return last.slice(0, 2);
    }
  }

  // if name doesn't exist, use first two letters of email
  return email.slice(0, 2);
}

export function UserNav() {
  const { data: session, status } = useSession();

  if (status === "loading" || !session) {
    return (
      <Button
        className="h-8"
        onClick={() => {
          signIn("google");
        }}
      >
        Sign in
      </Button>
    );
  }

  const fallbackImage = getFallback(
    session.user!.name,
    session.user!.email as string,
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={session.user!.image || ""} />
            <AvatarFallback>{fallbackImage}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session.user!.name}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
