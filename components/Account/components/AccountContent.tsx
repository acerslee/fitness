import React, { FC } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { H2 } from "../../../ui/Text/Heading";

const AccountContent: FC = () => {
  const user = useUser()
  console.log(user)
  return (
    <main>
      <H2>Welcome </H2>
    </main>
  )
}

export default AccountContent