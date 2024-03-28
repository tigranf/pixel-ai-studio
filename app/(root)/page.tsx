import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      HOME <br />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
