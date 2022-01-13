export interface ButtonProps {
  text?: string;
  type: 'primary' | 'secondary';
  onClick: () => void;
}

export interface StyledButtonProps {
  types: 'primary' | 'secondary';
}

export interface InputProps {
  type: string;
  width: string;
  icon: 'local' | 'date';
}

export interface StyledInputProps {
  icon: 'local' | 'date';
}
