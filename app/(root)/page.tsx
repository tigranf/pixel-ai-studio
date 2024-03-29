import { SignOutButton, UserButton } from "@clerk/nextjs";
import { BluetoothConnected, LogOut, LogOutIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      HOME <br />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
