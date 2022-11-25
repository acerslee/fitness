export type InputSize = "small" | "medium" | "large" | "full"

export type TextInputProps = {
  size: InputSize
  label?: string
  initialValue?: string
  error?: boolean
}
