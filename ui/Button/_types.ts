export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonStyle = 'primary' | 'secondary'

export type ButtonProps = {
  label: string
  size: ButtonSize
  buttonStyle: ButtonStyle
  type: 'submit' | 'button'
  disabled: boolean
  onClick?(): void
}
