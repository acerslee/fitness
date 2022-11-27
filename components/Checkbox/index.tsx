import { FC, SyntheticEvent } from 'react'
import styled from 'styled-components'

interface CheckboxProps {
  checked: boolean
  onChange: (e: SyntheticEvent) => void
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <>
      <CheckboxContainer
        aria-checked={checked}
        type="checkbox"
        name="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <CheckboxLabel htmlFor="checkbox">
        I agree to the terms and conditions.
      </CheckboxLabel>
    </>
  )
}

const CheckboxContainer = styled('input')``

const CheckboxLabel = styled('label')`
  font-size: 1rem;
  font-family: Arial;
`

export default Checkbox
