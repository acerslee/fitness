import { FC, SyntheticEvent } from "react";
import styled from 'styled-components'

interface CheckboxProps {
  checked: boolean
  onChange: (e: SyntheticEvent) => void
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <>
      <CheckboxContainer type="checkbox" name="checkbox" onChange={onChange} checked={checked} />
      <label htmlFor="checkbox">I agree to the terms and conditions.</label>
    </>
  )
}

const CheckboxContainer = styled.input``


export default Checkbox