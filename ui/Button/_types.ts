export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps = {
  label: string
  size: ButtonSize
  type: 'submit' | 'button'
  disabled: boolean
  onClick?(): void
}
