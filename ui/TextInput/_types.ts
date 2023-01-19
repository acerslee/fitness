export type InputSize = 'small' | 'medium' | 'large' | 'full'

export type TextInputProps = {
  size: InputSize
  onChange?: (value: string) => void
  label?: string
  initialValue?: string
  error?: boolean
  password?: boolean
  required?: boolean
}
