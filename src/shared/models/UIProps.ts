export interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary';
  onClick: () => void;
}

export interface StyledButtonProps {
  types: 'primary' | 'secondary';
}
