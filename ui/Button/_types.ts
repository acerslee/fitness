export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonStyle = 'primary' | 'secondary' | 'error'

export type ButtonProps = {
  label: string
  size: ButtonSize
  buttonStyle: ButtonStyle
  disabled?: boolean
  type?: 'submit' | 'button'
  onClick: () => void
}
