import React, { FC } from "react";
import { useSelector } from "react-redux";

import { H2 } from "../../../ui/Text/Heading";
import { RootState } from "../../../store/store";

const AccountContent: FC = () => {
  const { username } = useSelector((state: RootState) => state.user)
  return (
    <main>
      <H2>{`Welcome ${username}!`}</H2>
    </main>
  )
}

export default AccountContent